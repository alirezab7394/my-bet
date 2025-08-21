import { Team } from "../types/domain";

export const TEAMS: Team[] = [
    {
        id: "team_girona",
        name: "Girona FC",
        shortName: "GIR",
        logoUrl: "/globe.svg",
    },
    {
        id: "team_betis",
        name: "Real Betis Sevilla",
        shortName: "BET",
        logoUrl: "/window.svg",
    },
];

export function findTeamById(id: string): Team | undefined {
    return TEAMS.find((t) => t.id === id);
}


