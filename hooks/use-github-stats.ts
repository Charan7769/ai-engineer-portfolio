"use client";

import { useEffect, useState } from "react";

export interface GitHubStats {
    followers: number | null;
    publicRepos: number | null;
    totalStars: number | null;
    loading: boolean;
    error: string | null;
}

const UNAVAILABLE_MESSAGE = "GitHub stats are currently unavailable.";

const INITIAL_STATS: GitHubStats = {
    followers: null,
    publicRepos: null,
    totalStars: null,
    loading: true,
    error: null,
};

function isRecord(value: unknown): value is Record<string, unknown> {
    return typeof value === "object" && value !== null && !Array.isArray(value);
}

// Accepts a genuine zero; anything missing or malformed becomes null.
function readCount(value: unknown): number | null {
    return typeof value === "number" && Number.isInteger(value) && value >= 0 ? value : null;
}

export function useGitHubStats() {
    const [stats, setStats] = useState<GitHubStats>(INITIAL_STATS);

    useEffect(() => {
        let cancelled = false;

        async function fetchStats() {
            try {
                const response = await fetch("/api/github");
                const payload: unknown = await response.json().catch(() => null);

                if (!response.ok) {
                    const message =
                        isRecord(payload) && typeof payload.error === "string"
                            ? payload.error
                            : UNAVAILABLE_MESSAGE;
                    throw new Error(message);
                }

                if (!isRecord(payload)) throw new Error(UNAVAILABLE_MESSAGE);

                const followers = readCount(payload.followers);
                const publicRepos = readCount(payload.publicRepos);
                const totalStars = readCount(payload.stars);

                // A partial payload is treated as unavailable, never as zero.
                if (followers === null || publicRepos === null || totalStars === null) {
                    throw new Error(UNAVAILABLE_MESSAGE);
                }

                if (cancelled) return;

                setStats({ followers, publicRepos, totalStars, loading: false, error: null });
            } catch (error: unknown) {
                if (cancelled) return;

                setStats({
                    followers: null,
                    publicRepos: null,
                    totalStars: null,
                    loading: false,
                    error: error instanceof Error ? error.message : UNAVAILABLE_MESSAGE,
                });
            }
        }

        fetchStats();

        return () => {
            cancelled = true;
        };
    }, []);

    return stats;
}

export default useGitHubStats;
