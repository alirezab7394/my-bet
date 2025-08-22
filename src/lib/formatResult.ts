import { Last10RowProps } from "@/components/Last10Games/components/Row/type";

export function formatScore(game: Last10RowProps["game"]) {
    const team = game.score.team;
    const opp = game.score.opponent;
    const result = team > opp ? "W" : team < opp ? "L" : "P";
    return `${result} ${team}–${opp}`;
}