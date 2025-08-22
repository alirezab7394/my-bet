import { Countdown } from "../Countdown";
import { MatchHeaderProps } from "./type";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import TeamItem from "@/components/TeamItem";
import MatchInfo from "./components/MatchInfo";

export default function MatchHeader({
  match,
  homeTeam,
  awayTeam,
  className,
}: MatchHeaderProps) {
  const isFinal = match.status === "final" && match.finalScore;
  return (
    <Card className={cn("w-full", className)}>
      <CardContent className="p-0">
        <div className="border-b px-4 py-6 text-center md:px-6 md:py-8">
          <MatchInfo
            startTimeIso={match.startTimeIso}
            isFinal={Boolean(isFinal)}
          />

          <div className="grid grid-cols-1 items-center gap-4 md:grid-cols-3">
            <TeamItem
              className="justify-self-center md:justify-self-start"
              team={homeTeam}
              mode="header"
            />
            <div className="justify-self-center">
              {isFinal ? (
                <Badge className="bg-primary text-primary-foreground px-4 py-2 text-base">
                  Final {match.finalScore!.home} - {match.finalScore!.away}
                </Badge>
              ) : (
                <Countdown
                  targetIso={match.startTimeIso}
                  onCompleteText="In progress"
                  className="mx-auto"
                />
              )}
            </div>
            <TeamItem
              className="justify-self-center md:justify-self-end"
              team={awayTeam}
              align="end"
              mode="header"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
