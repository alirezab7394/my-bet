import { cn } from "@/lib/utils";
import { MoneylinePillProps } from "./type";

export default function MoneylinePill({
  value,
  className,
}: MoneylinePillProps) {
  return (
    <div
      className={cn(
        "bg-muted inline-flex items-center rounded-md px-3 py-1 text-xs",
        className,
      )}
    >
      {value > 0 ? `+${value}` : value}
    </div>
  );
}
