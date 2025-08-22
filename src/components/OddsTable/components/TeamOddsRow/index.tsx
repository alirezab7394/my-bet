import { cn } from "@/lib/utils";
import { TeamOddsRowProps } from "./type";
import TeamItem from "@/components/TeamItem";

export default function TeamOddsRow({
  team,
  totalLine,
  totalPrice,
  moneylinePrice,
  className,
}: TeamOddsRowProps) {
  return (
    <div
      className={cn("flex items-center justify-between gap-4 py-3", className)}
    >
      <TeamItem team={team} mode="row" />

      <div className="flex items-center gap-3">
        <div className="text-right">
          <button className="bg-muted hover:bg-muted/80 inline-flex items-center gap-1 rounded-md px-3 py-1 text-xs">
            <span>O {totalLine}</span>
            <span className="text-muted-foreground">({totalPrice})</span>
            <span className="text-primary ml-1">✕</span>
          </button>
        </div>

        <div className="text-right">
          <button className="bg-muted hover:bg-muted/80 inline-flex items-center gap-1 rounded-md px-3 py-1 text-xs">
            <span>
              {moneylinePrice > 0 ? `+${moneylinePrice}` : moneylinePrice}
            </span>
            <span className="text-primary ml-1">🏆</span>
          </button>
        </div>
      </div>
    </div>
  );
}
