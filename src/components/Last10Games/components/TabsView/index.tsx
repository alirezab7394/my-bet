import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Row from "../Row";
import { TabsViewProps } from "./type";

export default function TabsView({ teamA, teamB, className }: TabsViewProps) {
  return (
    <div className={className}>
      <div className="flex w-full">
        <Tabs defaultValue={teamA.team.shortName} className="w-full">
          <TabsList className="ml-auto flex justify-end">
            <TabsTrigger className="w-fit" value={teamA.team.shortName}>
              {teamA.team.shortName}
            </TabsTrigger>
            {teamB && (
              <TabsTrigger className="w-fit" value={teamB.team.shortName}>
                {teamB.team.shortName}
              </TabsTrigger>
            )}
          </TabsList>
          <TabsContent value={teamA.team.shortName}>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>Opponent</TableHead>
                  <TableHead>Score</TableHead>
                  <TableHead>Total</TableHead>
                  <TableHead>Moneyline</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {teamA.games.map((g) => (
                  <Row key={g.id} game={g} />
                ))}
              </TableBody>
            </Table>
          </TabsContent>

          {teamB && (
            <TabsContent value={teamB.team.shortName}>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead>Opponent</TableHead>
                    <TableHead>Score</TableHead>
                    <TableHead>Total</TableHead>
                    <TableHead>Moneyline</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {teamB.games.map((g) => (
                    <Row key={g.id} game={g} />
                  ))}
                </TableBody>
              </Table>
            </TabsContent>
          )}
        </Tabs>
      </div>
    </div>
  );
}
