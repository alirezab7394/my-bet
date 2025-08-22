import { Last10GamesProps } from "./type";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getPastGames } from "@/features/matchup/api";
import TabsView from "./components/TabsView";

// ResultBadge removed in the new design

export default async function Last10Games({
  team,
  opponentTeam,
  className,
}: Last10GamesProps) {
  const [aGames, bGames] = await Promise.all([
    getPastGames(team.id),
    opponentTeam ? getPastGames(opponentTeam.id) : Promise.resolve([]),
  ]);
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>Last 10 Games</CardTitle>
      </CardHeader>
      <CardContent>
        <TabsView
          teamA={{ team, games: aGames }}
          teamB={
            opponentTeam ? { team: opponentTeam, games: bGames } : undefined
          }
        />
      </CardContent>
    </Card>
  );
}
