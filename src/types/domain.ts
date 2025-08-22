export type Identifier = string;

export type MatchStatus = "scheduled" | "in_progress" | "final";

export interface Team {
    id: Identifier;
    name: string;
    shortName: string;
    logoUrl: string;
}

export interface Score {
    home: number;
    away: number;
}

export interface Match {
    id: Identifier;
    slug: string; // e.g., girona-fc-vs-real-betis-sevilla
    homeTeamId: Identifier;
    awayTeamId: Identifier;
    startTimeIso: string; // ISO 8601
    status: MatchStatus;
    finalScore?: Score;
}

export type PastGameResult = "W" | "L" | "D";

export interface PastGame {
    id: Identifier;
    teamId: Identifier;
    opponentId: Identifier;
    opponentName: string;
    dateIso: string;
    result: PastGameResult;
    score: {
        team: number;
        opponent: number;
    };
    betting?: {
        totalType: "O" | "U" | "P";
        totalLine: number;
        moneyline: { result: "W" | "L"; price: number };
    };
}

export interface OddsPlatform {
    id: Identifier;
    name: string;
    logoUrl?: string;
}

export interface OddsRow {
    platformId: Identifier;
    matchId: Identifier;
    homeWin: number; // decimal odds
    draw: number;
    awayWin: number;
    lastUpdatedIso: string;
}

export type OddsScope = "full_game" | "first_half" | "second_half";

export interface OddsAggregateMarket {
    total: {
        line: number; // e.g., 3.5
        overPrice: number; // American e.g., -102
        underPrice: number; // American e.g., -109
    };
    moneyline: {
        home: number; // American e.g., -380
        away: number; // American e.g., +950
    };
}

export interface Article {
    id: Identifier;
    title: string;
    url: string;
    publishedAtIso: string;
    source: string;
    matchId?: Identifier;
    teamIds?: Identifier[];
}

export interface Post {
    id: Identifier;
    title: string;
    body: string;
    author: string;
    createdAtIso: string;
    updatedAtIso: string;
}

export interface Comment {
    id: Identifier;
    postId: Identifier;
    author: string;
    body: string;
    createdAtIso: string;
}

export interface Signal {
    id: Identifier;
    matchId: Identifier;
    title: string;
    body: string;
    confidencePct: number; // 0..100
}


