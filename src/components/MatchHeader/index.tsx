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
      <CardContent className="p-0">
        <div className="border-b px-6 py-8 text-center">
          {!isFinal ? (
            <div className="text-muted-foreground mx-auto mb-2 grid max-w-sm grid-cols-3 items-center text-xs">
              <div />
              <div>
                {new Date(match.startTimeIso).toLocaleDateString(undefined, {
                  month: "short",
                  day: "2-digit",
                  year: "numeric",
                })}
              </div>
              <div />
              <div />
              <div className="text-foreground text-base font-semibold">
                {new Date(match.startTimeIso).toLocaleTimeString(undefined, {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </div>
              <div />
              <div />
              <div>
                {typeof (null as unknown) === "string" ? "" : "O/U 3.5"}
              </div>
              <div />
            </div>
          ) : null}

          <div className="grid grid-cols-3 items-center">
            <div className="justify-self-start">
              <TeamItem name={homeTeam.name} logoUrl={homeTeam.logoUrl} large />
            </div>
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
            <div className="justify-self-end">
              <TeamItem
                name={awayTeam.name}
                logoUrl={awayTeam.logoUrl}
                align="end"
                large
              />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function TeamItem({
  name,
  logoUrl,
  align = "start",
  large = false,
}: {
  name: string;
  logoUrl: string;
  align?: "start" | "end";
  large?: boolean;
}) {
  return (
    <div
      className={cn(
        "flex items-center gap-3",
        align === "end" && "flex-row-reverse text-right",
      )}
    >
      <Image
        src={logoUrl}
        alt={name}
        width={large ? 48 : 32}
        height={large ? 48 : 32}
        className="rounded-full"
      />
      <span className="text-xl font-semibold">{name}</span>
    </div>
  );
}
