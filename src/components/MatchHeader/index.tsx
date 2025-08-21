import Image from "next/image";
import { Countdown } from "../Countdown";
import { MatchHeaderProps } from "./type";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export default function MatchHeader({
  match,
  homeTeam,
  awayTeam,
  className,
}: MatchHeaderProps) {
  const isFinal = match.status === "final" && match.finalScore;
  return (
    <Card className={cn("w-full", className)}>
      <CardContent className="flex flex-col gap-4 p-4 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-4">
          <TeamItem name={homeTeam.name} logoUrl={homeTeam.logoUrl} />
          <div className="text-muted-foreground">vs</div>
          <TeamItem name={awayTeam.name} logoUrl={awayTeam.logoUrl} />
        </div>
        <div className="flex items-center gap-3">
          {isFinal ? (
            <Badge className="bg-primary text-primary-foreground">
              Final {match.finalScore!.home} - {match.finalScore!.away}
            </Badge>
          ) : (
            <div className="flex flex-col items-end">
              <span className="text-muted-foreground text-xs">Kickoff</span>
              <span className="text-sm font-medium">
                {new Date(match.startTimeIso).toLocaleString()}
              </span>
              <Countdown
                targetIso={match.startTimeIso}
                onCompleteText="In progress"
                className="mt-1"
              />
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

function TeamItem({ name, logoUrl }: { name: string; logoUrl: string }) {
  return (
    <div className="flex items-center gap-2">
      <Image
        src={logoUrl}
        alt={name}
        width={32}
        height={32}
        className="rounded-full"
      />
      <span className="font-medium">{name}</span>
    </div>
  );
}
