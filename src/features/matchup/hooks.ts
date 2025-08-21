"use client";
import { useEffect, useState } from "react";
import {
    getArticles,
    getMatchBySlug,
    getMatchupAggregate,
    getOdds,
    getPastGames,
    getSignals,
    getTeam,
    listTeams,
} from "./api";
import {
    Article,
    Match,
    OddsPlatform,
    OddsRow,
    PastGame,
    Signal,
    Team,
} from "../../types/domain";

function useAsync<T>(fn: () => Promise<T>, deps: unknown[] = []) {
    const [data, setData] = useState<T | undefined>(undefined);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<unknown>(undefined);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        let cancelled = false;
        setLoading(true);
        setError(undefined);
        fn()
            .then((value) => {
                if (!cancelled) setData(value);
            })
            .catch((e) => !cancelled && setError(e))
            .finally(() => !cancelled && setLoading(false));
        return () => {
            cancelled = true;
        };
    }, deps);
    return { data, loading, error } as const;
}

export function useMatch(slug: string) {
    return useAsync<Match | undefined>(() => getMatchBySlug(slug), [slug]);
}

export function useMatchupAggregate(slug: string) {
    return useAsync(() => getMatchupAggregate(slug), [slug]);
}

export function usePastGames(teamId?: string) {
    return useAsync<PastGame[]>(() => getPastGames(teamId!), [teamId]);
}

export function useOdds(matchId?: string) {
    return useAsync<{ platforms: OddsPlatform[]; rows: OddsRow[] }>(
        () => getOdds(matchId!),
        [matchId]
    );
}

export function useArticles(matchId?: string) {
    return useAsync<Article[]>(() => getArticles(matchId!), [matchId]);
}

export function useSignals(matchId?: string) {
    return useAsync<Signal[]>(() => getSignals(matchId!), [matchId]);
}

export function useTeam(teamId?: string) {
    return useAsync<Team | undefined>(() => getTeam(teamId!), [teamId]);
}

export function useTeams() {
    return useAsync<Team[]>(() => listTeams(), []);
}


