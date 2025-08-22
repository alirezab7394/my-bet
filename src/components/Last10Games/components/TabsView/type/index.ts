import { PastGame, Team } from "@/types/domain";

export interface TabsViewProps {
    teamA: { team: Team; games: PastGame[] };
    teamB?: { team: Team; games: PastGame[] };
    className?: string;
}


