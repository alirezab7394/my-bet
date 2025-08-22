import { Team } from "@/types/domain";

export interface Last10GamesProps {
    team: Team;
    opponentTeam?: Team;
    opponentName?: string;
    className?: string;
}


