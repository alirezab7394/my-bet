import { sleep } from "../../lib/sleep";
import { getArticlesForMatch } from "../../mocks/articles";
import { MATCHES, PAST_GAMES_BY_TEAM } from "../../mocks/matches";
import { ODDS_BY_MATCH, ODDS_PLATFORMS } from "../../mocks/odds";
import { SIGNALS_BY_MATCH } from "../../mocks/signals";
import { TEAMS, findTeamById } from "../../mocks/teams";
import {
    Article,
    Identifier,
    Match,
    OddsPlatform,
    OddsRow,
    PastGame,
    Team,
} from "../../types/domain";

const DEFAULT_DELAY_MS = 200;

export async function listTeams(): Promise<Team[]> {
    await sleep(DEFAULT_DELAY_MS);
    return TEAMS;
}

export async function getTeam(id: Identifier): Promise<Team | undefined> {
    await sleep(DEFAULT_DELAY_MS);
    return findTeamById(id);
}

export async function getMatchBySlug(slug: string): Promise<Match | undefined> {
    await sleep(DEFAULT_DELAY_MS);
    return MATCHES.find((m) => m.slug === slug);
}

export async function listMatches(): Promise<Match[]> {
    await sleep(DEFAULT_DELAY_MS);
    return MATCHES;
}

export async function getPastGames(teamId: Identifier): Promise<PastGame[]> {
    await sleep(DEFAULT_DELAY_MS);
    return PAST_GAMES_BY_TEAM[teamId] ?? [];
}

export async function getOdds(matchId: Identifier): Promise<{
    platforms: OddsPlatform[];
    rows: OddsRow[];
}> {
    await sleep(DEFAULT_DELAY_MS);
    return { platforms: ODDS_PLATFORMS, rows: ODDS_BY_MATCH[matchId] ?? [] };
}

export async function getArticles(matchId: Identifier): Promise<Article[]> {
    await sleep(DEFAULT_DELAY_MS);
    return getArticlesForMatch(matchId);
}

export async function getSignals(matchId: Identifier) {
    await sleep(DEFAULT_DELAY_MS);
    return SIGNALS_BY_MATCH[matchId] ?? [];
}

export interface MatchupAggregate {
    match: Match;
    homeTeam: Team;
    awayTeam: Team;
}

export async function getMatchupAggregate(
    slug: string
): Promise<MatchupAggregate | undefined> {
    const match = await getMatchBySlug(slug);
    if (!match) return undefined;
    const homeTeam = (await getTeam(match.homeTeamId))!;
    const awayTeam = (await getTeam(match.awayTeamId))!;
    return { match, homeTeam, awayTeam };
}


