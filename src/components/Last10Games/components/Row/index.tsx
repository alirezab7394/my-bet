import { cn } from "@/lib/utils";
import { Last10RowProps } from "./type";
import { TableRow, TableCell } from "@/components/ui/table";
import { formatScore } from "@/lib/formatResult";

export default function Last10Row({ game }: Last10RowProps) {
  return (
    <TableRow>
      <TableCell className="whitespace-nowrap">
        {new Date(game.dateIso).toLocaleDateString()}
      </TableCell>
      <TableCell className="whitespace-nowrap">{game.opponentName}</TableCell>
      <TableCell title={formatScore(game)}>
        <span
          className={cn(
            "w-fit rounded-md px-2 py-1 font-semibold whitespace-nowrap",
            game.result === "W"
              ? "bg-green-600"
              : game.result === "L"
                ? "bg-red-600"
                : "bg-yellow-600",
          )}
        >
          {formatScore(game)}
        </span>
      </TableCell>
      <TableCell className="whitespace-nowrap">
        {game.betting ? (
          <span
            className={
              game.betting.totalType === "U" ? "text-red-400" : "text-green-400"
            }
          >
            {game.betting.totalType} {game.betting.totalLine}
          </span>
        ) : (
          <span className="text-muted-foreground">—</span>
        )}
      </TableCell>
      <TableCell className="whitespace-nowrap">
        {game.betting ? (
          <span
            className={
              game.betting.moneyline.result === "W"
                ? "text-green-400"
                : "text-red-400"
            }
          >
            {game.betting.moneyline.result} {game.betting.moneyline.price}
          </span>
        ) : (
          <span className="text-muted-foreground">—</span>
        )}
      </TableCell>
    </TableRow>
  );
}
