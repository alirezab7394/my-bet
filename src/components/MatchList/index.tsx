import Link from "next/link";
import Image from "next/image";
import { listMatches, getTeam } from "@/features/matchup/api";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MatchListProps } from "./type";

export default async function MatchList({ className }: MatchListProps) {
  const matches = await listMatches();
  const enriched = await Promise.all(
    matches.map(async (m) => ({
      match: m,
      home: (await getTeam(m.homeTeamId))!,
      away: (await getTeam(m.awayTeamId))!,
    })),
  );
  return (
    <div className={className}>
      <div className="grid gap-4 md:grid-cols-2">
        {enriched.map(({ match, home, away }) => (
          <Link key={match.id} href={`/matchups/${match.slug}`}>
            <Card className="hover:bg-muted/40 transition-colors">
              <CardContent className="flex items-center justify-between gap-4 p-4">
                <div className="flex items-center gap-3">
                  <Image
                    src={home.logoUrl}
                    alt={home.name}
                    width={24}
                    height={24}
                    className="rounded-full"
                  />
                  <span className="max-w-[10rem] truncate font-medium">
                    {home.name}
                  </span>
                  <span className="text-muted-foreground">vs</span>
                  <Image
                    src={away.logoUrl}
                    alt={away.name}
                    width={24}
                    height={24}
                    className="rounded-full"
                  />
                  <span className="max-w-[10rem] truncate font-medium">
                    {away.name}
                  </span>
                </div>
                {match.status === "final" && match.finalScore ? (
                  <Badge className="bg-primary text-primary-foreground">
                    {match.finalScore.home} - {match.finalScore.away}
                  </Badge>
                ) : (
                  <span className="text-muted-foreground text-xs">
                    {new Date(match.startTimeIso).toLocaleString()}
                  </span>
                )}
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
