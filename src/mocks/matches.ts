import { Match, PastGame } from "../types/domain";

export const MATCHES: Match[] = [
    {
        id: "match_001",
        slug: "girona-fc-vs-real-betis-sevilla",
        homeTeamId: "team_girona",
        awayTeamId: "team_betis",
        // choose a time ~2 days from now for countdown behavior
        startTimeIso: new Date(Date.now() + 1000 * 60 * 60 * 24 * 2).toISOString(),
        status: "scheduled",
    },
];

export const PAST_GAMES_BY_TEAM: Record<string, PastGame[]> = {
    team_girona: Array.from({ length: 10 }).map((_, idx) => {
        const date = new Date();
        date.setDate(date.getDate() - (idx + 1) * 3);
        const isWin = idx % 3 === 0;
        const isDraw = idx % 3 === 1;
        const result = isWin ? "W" : isDraw ? "D" : "L";
        return {
            id: `pg_girona_${idx}`,
            teamId: "team_girona",
            opponentId: "team_betis",
            dateIso: date.toISOString(),
            result,
            score: {
                team: isWin ? 2 : isDraw ? 1 : 0,
                opponent: isWin ? 1 : isDraw ? 1 : 2,
            },
        };
    }),
    team_betis: Array.from({ length: 10 }).map((_, idx) => {
        const date = new Date();
        date.setDate(date.getDate() - (idx + 1) * 4);
        const isWin = idx % 2 === 0;
        const isDraw = idx % 5 === 0;
        const result = isDraw ? "D" : isWin ? "W" : "L";
        return {
            id: `pg_betis_${idx}`,
            teamId: "team_betis",
            opponentId: "team_girona",
            dateIso: date.toISOString(),
            result,
            score: {
                team: isDraw ? 1 : isWin ? 3 : 0,
                opponent: isDraw ? 1 : isWin ? 1 : 2,
            },
        };
    }),
};


