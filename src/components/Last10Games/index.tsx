import { Last10GamesProps } from "./type";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { getPastGames } from "@/features/matchup/api";

function ResultBadge({ result }: { result: "W" | "L" | "D" }) {
  const className =
    result === "W"
      ? "bg-green-600 text-white"
      : result === "D"
        ? "bg-muted text-foreground"
        : "bg-red-600 text-white";
  return <Badge className={className}>{result}</Badge>;
}

export default async function Last10Games({
  team,
  opponentName,
  className,
}: Last10GamesProps) {
  const games = await getPastGames(team.id);
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>Last 10 Games — {team.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Opponent</TableHead>
              <TableHead>Result</TableHead>
              <TableHead className="text-right">Score</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {games.map((g) => (
              <TableRow key={g.id}>
                <TableCell>
                  {new Date(g.dateIso).toLocaleDateString()}
                </TableCell>
                <TableCell>{opponentName ?? "Opponent"}</TableCell>
                <TableCell>
                  <ResultBadge result={g.result} />
                </TableCell>
                <TableCell className="text-right">
                  {g.score.team} - {g.score.opponent}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
