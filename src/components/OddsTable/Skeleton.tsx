import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function OddsTableSkeleton() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Game Odds</CardTitle>
        <div className="flex items-center gap-2">
          <Skeleton className="h-8 w-32" />
        </div>
      </CardHeader>
      <CardContent className="space-y-0">
        <div className="text-muted-foreground mb-4 grid grid-cols-2 gap-4 text-xs font-medium">
          <div></div>
          <div className="flex justify-end gap-12">
            <span>Total</span>
            <span>Moneyline</span>
          </div>
        </div>

        <div className="space-y-1">
          {Array.from({ length: 2 }).map((_, i) => (
            <div
              key={i}
              className="flex items-center justify-between gap-4 py-3"
            >
              <div className="flex items-center gap-3">
                <Skeleton className="h-8 w-8 rounded-full" />
                <div className="space-y-1">
                  <Skeleton className="h-4 w-12" />
                  <Skeleton className="h-3 w-20" />
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="space-y-1 text-right">
                  <Skeleton className="h-3 w-8" />
                  <Skeleton className="h-6 w-16 rounded-md" />
                </div>

                <div className="space-y-1 text-right">
                  <Skeleton className="h-3 w-12" />
                  <Skeleton className="h-6 w-12 rounded-md" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="pt-4 text-center">
          <Skeleton className="mx-auto h-4 w-24" />
        </div>
      </CardContent>
    </Card>
  );
}
