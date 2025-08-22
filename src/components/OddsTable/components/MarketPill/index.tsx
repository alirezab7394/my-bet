import { cn } from "@/lib/utils";
import { MarketPillProps } from "./type";

export default function MarketPill({ label, className }: MarketPillProps) {
  return (
    <div
      className={cn(
        "bg-muted inline-flex items-center gap-2 rounded-md px-3 py-1 text-xs",
        className,
      )}
    >
      {label}
    </div>
  );
}
