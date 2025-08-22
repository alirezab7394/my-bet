import { cn } from "@/lib/utils";
import { TeamItemProps } from "./type";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function TeamItem({
  team,
  align = "start",
  mode = "row",
  className,
}: TeamItemProps) {
  const sizeClass = mode === "header" ? "h-12 w-12" : "h-8 w-8"; // 48px or 32px
  return (
    <div
      className={cn(
        "flex items-center gap-3",
        align === "end" && "flex-row-reverse text-right",
        className,
      )}
    >
      <Avatar className={cn(sizeClass)}>
        <AvatarImage src={team.logoUrl} alt={team.name} />
        <AvatarFallback>
          {team.shortName ?? team.name.slice(0, 2)}
        </AvatarFallback>
      </Avatar>
      <div>
        <div
          className={cn(
            "font-semibold",
            mode === "header" ? "text-xl" : "text-base font-medium",
          )}
        >
          {team.name}
        </div>
        {mode === "row" && (
          <div className="text-muted-foreground text-sm">{team.shortName}</div>
        )}
      </div>
    </div>
  );
}
