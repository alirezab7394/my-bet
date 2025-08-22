import { Team } from "@/types/domain";

export type TeamItemMode = "header" | "row";

export interface TeamItemProps {
    team: Team;
    align?: "start" | "end";
    mode?: TeamItemMode;
    className?: string;
}


