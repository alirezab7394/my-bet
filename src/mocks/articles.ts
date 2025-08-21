import { Article } from "../types/domain";

export const ARTICLES: Article[] = [
    {
        id: "art_001",
        title: "Girona's attacking form ahead of Betis clash",
        url: "https://example.com/articles/girona-preview",
        publishedAtIso: new Date(Date.now() - 1000 * 60 * 60 * 6).toISOString(),
        source: "Example Sports",
        matchId: "match_001",
        teamIds: ["team_girona"],
    },
    {
        id: "art_002",
        title: "Real Betis defensive concerns analyzed",
        url: "https://example.com/articles/betis-defense",
        publishedAtIso: new Date(Date.now() - 1000 * 60 * 60 * 12).toISOString(),
        source: "Football Lab",
        matchId: "match_001",
        teamIds: ["team_betis"],
    },
    {
        id: "art_003",
        title: "Odds movement: Girona vs Betis",
        url: "https://example.com/articles/odds-movement",
        publishedAtIso: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString(),
        source: "Betting Insights",
        matchId: "match_001",
        teamIds: ["team_girona", "team_betis"],
    },
];

export function getArticlesForMatch(matchId: string): Article[] {
    return ARTICLES.filter((a) => a.matchId === matchId);
}


