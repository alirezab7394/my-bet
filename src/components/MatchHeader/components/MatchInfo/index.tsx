import { MatchInfoProps } from "./type";

export default function MatchInfo({
  startTimeIso,
  overUnder,
  isFinal,
  className,
}: MatchInfoProps) {
  if (isFinal) return null;
  const dateStr = new Date(startTimeIso).toLocaleDateString(undefined, {
    month: "short",
    day: "2-digit",
    year: "numeric",
  });
  const timeStr = new Date(startTimeIso).toLocaleTimeString(undefined, {
    hour: "2-digit",
    minute: "2-digit",
  });
  return (
    <div
      className={`text-muted-foreground mx-auto mb-2 grid max-w-sm grid-cols-3 items-center text-xs ${className ?? ""}`}
    >
      <div />
      <div>{dateStr}</div>
      <div />
      <div />
      <div className="text-foreground text-base font-semibold">{timeStr}</div>
      <div />
      <div />
      <div>{overUnder ? `O/U ${overUnder}` : "O/U 3.5"}</div>
      <div />
    </div>
  );
}
