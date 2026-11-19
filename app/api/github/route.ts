import { NextResponse } from "next/server";

/**
 * GitHub statistics proxy.
 *
 * Every value returned here is read from the GitHub REST API. There are no
 * baseline, placeholder or "visually appealing" fallbacks: when a value cannot
 * be retrieved the route fails with 502 and an error payload instead.
 */

type GitHubStats = {
    followers: number;
    publicRepos: number;
    stars: number;
};

type CacheEntry = {
    data: GitHubStats;
    timestamp: number;
};

const CACHE_TTL_MS = 60 * 60 * 1000; // 1 hour
const UPSTREAM_TIMEOUT_MS = 5_000;
const REPOS_PER_PAGE = 100;
// Pagination guard: beyond this many pages the aggregation fails loudly instead
// of returning a silently truncated star count.
const MAX_REPO_PAGES = 10;

const statsCache = new Map<string, CacheEntry>();

class GitHubUpstreamError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "GitHubUpstreamError";
    }
}

function isRecord(value: unknown): value is Record<string, unknown> {
    return typeof value === "object" && value !== null && !Array.isArray(value);
}

function readCount(source: Record<string, unknown>, key: string): number {
    const value = source[key];

    if (typeof value !== "number" || !Number.isInteger(value) || value < 0) {
        throw new GitHubUpstreamError(`GitHub response is missing a valid "${key}".`);
    }

    return value;
}

async function fetchGitHubJson(url: string, token: string | undefined): Promise<unknown> {
    const headers: Record<string, string> = { Accept: "application/vnd.github+json" };

    if (token) {
        // Server-side only; the token is never echoed in the response.
        headers.Authorization = `Bearer ${token}`;
    }

    let response: Response;

    try {
        response = await fetch(url, {
            headers,
            cache: "no-store",
            signal: AbortSignal.timeout(UPSTREAM_TIMEOUT_MS),
        });
    } catch {
        throw new GitHubUpstreamError("GitHub request failed or timed out.");
    }

    if (!response.ok) {
        throw new GitHubUpstreamError(`GitHub responded with status ${response.status}.`);
    }

    try {
        return (await response.json()) as unknown;
    } catch {
        throw new GitHubUpstreamError("GitHub returned a response that was not valid JSON.");
    }
}

export async function GET() {
    const username = process.env.GITHUB_USERNAME?.trim() || "charan7769";
    const token = process.env.GITHUB_TOKEN;
    const cacheKey = username.toLowerCase();
    const now = Date.now();

    const cached = statsCache.get(cacheKey);

    // Only successfully validated data is ever cached.
    if (cached && now - cached.timestamp < CACHE_TTL_MS) {
        return NextResponse.json(cached.data, { status: 200 });
    }

    try {
        const encodedUsername = encodeURIComponent(username);

        const profile = await fetchGitHubJson(
            `https://api.github.com/users/${encodedUsername}`,
            token
        );

        if (!isRecord(profile)) {
            throw new GitHubUpstreamError("GitHub returned an unexpected profile payload.");
        }

        // `readCount` keeps a genuine zero; there are no numeric defaults.
        const followers = readCount(profile, "followers");
        const publicRepos = readCount(profile, "public_repos");

        // Stars come from the account's own public repositories, summed across
        // every page so accounts with more than 100 repos are counted fully.
        let stars = 0;
        let page = 1;

        while (true) {
            const repositories = await fetchGitHubJson(
                `https://api.github.com/users/${encodedUsername}/repos?type=owner&per_page=${REPOS_PER_PAGE}&page=${page}`,
                token
            );

            if (!Array.isArray(repositories)) {
                throw new GitHubUpstreamError("GitHub returned an unexpected repository payload.");
            }

            for (const repository of repositories) {
                if (!isRecord(repository)) {
                    throw new GitHubUpstreamError("GitHub returned an unexpected repository entry.");
                }

                stars += readCount(repository, "stargazers_count");
            }

            if (repositories.length < REPOS_PER_PAGE) break;

            if (page >= MAX_REPO_PAGES) {
                throw new GitHubUpstreamError("Repository list exceeds the supported page limit.");
            }

            page += 1;
        }

        const stats: GitHubStats = { followers, publicRepos, stars };

        statsCache.set(cacheKey, { data: stats, timestamp: now });

        return NextResponse.json(stats, { status: 200 });
    } catch (error: unknown) {
        // Safe diagnostics only: HTTP status or a fixed reason, never headers,
        // tokens or visitor data, and no statistics in the response.
        console.warn(
            "GitHub stats unavailable:",
            error instanceof GitHubUpstreamError ? error.message : "unexpected error"
        );

        return NextResponse.json(
            { error: "GitHub stats are currently unavailable." },
            { status: 502 }
        );
    }
}

export default GET;
