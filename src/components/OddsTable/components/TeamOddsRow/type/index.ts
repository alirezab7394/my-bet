import { Team } from "@/types/domain";

export interface TeamOddsRowProps {
    team: Team;
    totalLine: number;
    totalPrice: number;
    moneylinePrice: number;
    className?: string;
}
