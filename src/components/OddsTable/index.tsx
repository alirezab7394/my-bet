import { OddsTableProps } from "./type";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getAggregateOdds } from "@/features/matchup/api";
import { getTeam } from "@/features/matchup/api";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import TeamOddsRow from "./components/TeamOddsRow";

export default async function OddsTable({
  matchId,
  className,
}: OddsTableProps) {
  const agg = await getAggregateOdds(matchId, "full_game");

  // Get teams for this match - using hardcoded IDs for now
  const homeTeam = await getTeam("team_girona");
  const awayTeam = await getTeam("team_betis");

  if (!agg || !homeTeam || !awayTeam) {
    return <div className="text-muted-foreground p-4">No odds available</div>;
  }

  return (
    <Card className={className}>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="flex items-center gap-2">Game Odds</CardTitle>
        <div className="flex items-center gap-2 text-sm">
          <Select defaultValue="full_game">
            <SelectTrigger className="w-32">
              <SelectValue placeholder="Scope" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="full_game">Full Game</SelectItem>
              <SelectItem value="first_half">1st Half</SelectItem>
              <SelectItem value="second_half">2nd Half</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardHeader>
      <CardContent className="space-y-0">
        <div className="text-muted-foreground mb-4 grid grid-cols-2 gap-4 text-xs font-medium">
          <div></div>
          <div className="flex justify-end gap-12">
            <span>Total</span>
            <span>Moneyline</span>
          </div>
        </div>

        <div className="space-y-1">
          <TeamOddsRow
            team={homeTeam}
            totalLine={agg.total.line}
            totalPrice={agg.total.overPrice}
            moneylinePrice={agg.moneyline.home}
          />
          <TeamOddsRow
            team={awayTeam}
            totalLine={agg.total.line}
            totalPrice={agg.total.underPrice}
            moneylinePrice={agg.moneyline.away}
          />
        </div>

        <div className="pt-4 text-center">
          <button className="text-primary text-sm hover:underline">
            View More Odds
          </button>
        </div>
      </CardContent>
    </Card>
  );
}
