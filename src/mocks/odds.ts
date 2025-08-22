import { OddsAggregateMarket, OddsPlatform, OddsRow, OddsScope } from "../types/domain";

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

export const ODDS_AGGREGATE_BY_MATCH_SCOPE: Record<string, Partial<Record<OddsScope, OddsAggregateMarket>>> = {
    match_001: {
        full_game: {
            total: { line: 3.5, overPrice: -102, underPrice: -109 },
            moneyline: { home: -380, away: 950 },
        },
        first_half: {
            total: { line: 1.5, overPrice: -110, underPrice: -105 },
            moneyline: { home: -180, away: 400 },
        },
        second_half: {
            total: { line: 1.5, overPrice: -108, underPrice: -103 },
            moneyline: { home: -150, away: 350 },
        },
    },
};


