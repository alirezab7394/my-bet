import { Match, PastGame } from "../types/domain";
import { faker } from "@faker-js/faker";

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

const TEAMS: { id: string, name: string }[] = [
    { id: "team_real", name: "Real Madrid" },
    { id: "team_valencia", name: "Valencia" },
    { id: "team_sevilla", name: "Sevilla" },
    { id: "team_malaga", name: "Malaga" },
    { id: "team_atletico_madrid", name: "Atletico Madrid" },
    { id: "team_real_madrid", name: "Real Madrid" },
    { id: "team_atletico", name: "Atletico Madrid" },
    { id: "team_barcelona", name: "Barcelona" },
    { id: "team_girona", name: "Girona FC" },
    { id: "team_betis", name: "Real Betis" },

];
export const PAST_GAMES_BY_TEAM: Record<string, PastGame[]> = {
    team_girona: Array.from({ length: 10 }).map((_, idx) => {
        const date = new Date();
        date.setDate(date.getDate() - (idx + 1) * 3);
        const isWin = idx % 3 === 0;
        const isDraw = idx % 3 === 1;
        const result = isWin ? "W" : isDraw ? "D" : "L";
        const opponent = faker.helpers.arrayElement(TEAMS);
        return {
            id: `pg_girona_${idx}`,
            teamId: "team_girona",
            opponentId: opponent.id,
            opponentName: opponent.name,
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
        const opponent = faker.helpers.arrayElement(TEAMS);
        return {
            id: `pg_betis_${idx}`,
            teamId: "team_betis",
            opponentId: opponent.id,
            opponentName: opponent.name,
            dateIso: date.toISOString(),
            result,
            score: {
                team: isDraw ? 1 : isWin ? 3 : 0,
                opponent: isDraw ? 1 : isWin ? 1 : 2,
            },
        };
    }),
};


