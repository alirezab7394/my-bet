import { OddsPlatform, OddsRow } from "../types/domain";

export const ODDS_PLATFORMS: OddsPlatform[] = [
    { id: "bet365", name: "Bet365" },
    { id: "draftkings", name: "DraftKings" },
    { id: "fanduel", name: "FanDuel" },
    { id: "williamhill", name: "William Hill" },
];

export const ODDS_BY_MATCH: Record<string, OddsRow[]> = {
    match_001: [
        {
            platformId: "bet365",
            matchId: "match_001",
            homeWin: 1.95,
            draw: 3.3,
            awayWin: 3.9,
            lastUpdatedIso: new Date().toISOString(),
        },
        {
            platformId: "draftkings",
            matchId: "match_001",
            homeWin: 2.0,
            draw: 3.4,
            awayWin: 3.85,
            lastUpdatedIso: new Date().toISOString(),
        },
        {
            platformId: "fanduel",
            matchId: "match_001",
            homeWin: 1.98,
            draw: 3.25,
            awayWin: 3.95,
            lastUpdatedIso: new Date().toISOString(),
        },
    ],
};


