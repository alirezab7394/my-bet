import { Team, Match } from "@/types/domain";

export interface MatchHeaderProps {
    match: Match;
    homeTeam: Team;
    awayTeam: Team;
    className?: string;
    overUnder?: number;
}


