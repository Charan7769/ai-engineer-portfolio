import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { siteConfig } from "@/config/site";
import { env } from "@/lib/env";
import { contactFormSchema } from "@/utils/validation/schemas";

/**
 * Contact form endpoint.
 *
 * Delivery goes through Resend. The route never reports success unless the
 * provider accepted the message, and returns a configuration error when the
 * API key, destination inbox or verified sender address is missing.
 */

// Application-level guard: bodies above this size are rejected before parsing.
// Next.js has already buffered the request stream at this point.
const MAX_BODY_BYTES = 20_000;

// Best-effort, per-instance throttling. This is NOT a distributed rate limiter:
// a serverless deployment runs several instances, each keeping its own counter
// in memory, and every cold start resets them. A shared store (for example
// Upstash Redis) would be required for reliable protection.
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;

const rateLimitBuckets = new Map<string, { count: number; resetAt: number }>();

function getClientKey(req: NextRequest): string {
    const forwarded = req.headers.get("x-forwarded-for");

    if (forwarded) {
        const [first] = forwarded.split(",");
        if (first?.trim()) return first.trim();
    }

    return req.headers.get("x-real-ip") ?? "unknown";
}

function consumeRateLimit(key: string): { allowed: boolean; retryAfterSeconds: number } {
    const now = Date.now();

    for (const [bucketKey, bucket] of rateLimitBuckets) {
        if (bucket.resetAt <= now) rateLimitBuckets.delete(bucketKey);
    }

    const bucket = rateLimitBuckets.get(key);

    if (!bucket || bucket.resetAt <= now) {
        rateLimitBuckets.set(key, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
        return { allowed: true, retryAfterSeconds: 0 };
    }

    bucket.count += 1;

    if (bucket.count > RATE_LIMIT_MAX_REQUESTS) {
        return {
            allowed: false,
            retryAfterSeconds: Math.max(1, Math.ceil((bucket.resetAt - now) / 1000)),
        };
    }

    return { allowed: true, retryAfterSeconds: 0 };
}

function isSameOriginRequest(req: NextRequest): boolean {
    const origin = req.headers.get("origin");

    // Browsers always send Origin on a cross-origin POST. Requests without it
    // (curl, server-to-server) carry no session this endpoint relies on.
    if (!origin) return true;

    const host = req.headers.get("host");
    if (!host) return false;

    try {
        return new URL(origin).host === host;
    } catch {
        return false;
    }
}

type BodyReadResult =
    | { ok: true; value: unknown }
    | { ok: false; status: number; message: string };

async function readJsonBody(req: NextRequest): Promise<BodyReadResult> {
    const declaredLength = Number(req.headers.get("content-length") ?? "");

    if (Number.isFinite(declaredLength) && declaredLength > MAX_BODY_BYTES) {
        return { ok: false, status: 413, message: "The submitted message is too large." };
    }

    let raw: string;

    try {
        raw = await req.text();
    } catch {
        return { ok: false, status: 400, message: "The request body could not be read." };
    }

    if (raw.length > MAX_BODY_BYTES) {
        return { ok: false, status: 413, message: "The submitted message is too large." };
    }

    try {
        return { ok: true, value: JSON.parse(raw) as unknown };
    } catch {
        return { ok: false, status: 400, message: "The request body must be valid JSON." };
    }
}

// Removes CR/LF and control characters so a subject cannot inject headers.
function sanitizeSubject(subject: string): string {
    return subject.replace(/[\u0000-\u001F\u007F]+/g, " ").trim();
}

function collectFieldErrors(issues: { path: PropertyKey[]; message: string }[]) {
    const fieldErrors: Record<string, string[]> = {};

    for (const issue of issues) {
        const field = String(issue.path[0] ?? "form");
        (fieldErrors[field] ??= []).push(issue.message);
    }

    return fieldErrors;
}

export async function POST(req: NextRequest) {
    if (!isSameOriginRequest(req)) {
        return NextResponse.json({ message: "Request rejected." }, { status: 403 });
    }

    const rateLimit = consumeRateLimit(getClientKey(req));

    if (!rateLimit.allowed) {
        return NextResponse.json(
            { message: "Too many messages sent recently. Please try again in a few minutes." },
            { status: 429, headers: { "Retry-After": String(rateLimit.retryAfterSeconds) } }
        );
    }

    const body = await readJsonBody(req);

    if (!body.ok) {
        return NextResponse.json({ message: body.message }, { status: body.status });
    }

    const validation = contactFormSchema.safeParse(body.value);

    if (!validation.success) {
        return NextResponse.json(
            {
                message: "Please check the highlighted fields.",
                errors: collectFieldErrors(validation.error.issues),
            },
            { status: 400 }
        );
    }

    const apiKey = env.RESEND_API_KEY;
    const destination = env.CONTACT_EMAIL;
    const sender = env.RESEND_FROM_EMAIL;

    if (!apiKey || !destination || !sender) {
        return NextResponse.json(
            {
                message: `The contact form is not available right now. Please email ${siteConfig.email} directly.`,
            },
            { status: 503 }
        );
    }

    const { name, email, subject, message } = validation.data;

    try {
        const resend = new Resend(apiKey);

        const { error } = await resend.emails.send({
            from: sender,
            to: destination,
            replyTo: email,
            subject: `Portfolio contact: ${sanitizeSubject(subject)}`,
            text: [
                "New message from the portfolio contact form.",
                "",
                `Name: ${name}`,
                `Email: ${email}`,
                `Subject: ${subject}`,
                "",
                message,
            ].join("\n"),
        });

        if (error) {
            // Provider errors describe configuration (for example an unverified
            // sender domain); visitor content is never logged.
            console.error("Contact form delivery failed:", error.name);

            return NextResponse.json(
                { message: "The email service could not accept your message. Please try again later." },
                { status: 502 }
            );
        }

        return NextResponse.json(
            { message: "Your message was accepted by the email service." },
            { status: 200 }
        );
    } catch (error: unknown) {
        console.error(
            "Contact form request failed:",
            error instanceof Error ? error.name : "UnknownError"
        );

        return NextResponse.json(
            { message: "Something went wrong while sending your message. Please try again later." },
            { status: 500 }
        );
    }
}

export default POST;
