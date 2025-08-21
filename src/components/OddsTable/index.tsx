import { OddsTableProps } from "./type";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getOdds } from "@/features/matchup/api";

export default async function OddsTable({
  matchId,
  className,
}: OddsTableProps) {
  const odds = await getOdds(matchId);
  const platformMap = new Map(odds.platforms.map((p) => [p.id, p.name]));
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>Odds</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Platform</TableHead>
              <TableHead className="text-right">Home</TableHead>
              <TableHead className="text-right">Draw</TableHead>
              <TableHead className="text-right">Away</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {odds.rows.map((r) => (
              <TableRow key={`${r.platformId}-${r.matchId}`}>
                <TableCell>
                  {platformMap.get(r.platformId) ?? r.platformId}
                </TableCell>
                <TableCell className="text-right">
                  {r.homeWin.toFixed(2)}
                </TableCell>
                <TableCell className="text-right">
                  {r.draw.toFixed(2)}
                </TableCell>
                <TableCell className="text-right">
                  {r.awayWin.toFixed(2)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
