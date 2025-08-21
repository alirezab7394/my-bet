import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function SignalsSkeleton() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Signals (Mock)</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="space-y-2">
            <div className="flex items-center justify-between">
              <Skeleton className="h-4 w-40" />
              <Skeleton className="h-4 w-10" />
            </div>
            <Skeleton className="h-2 w-full" />
            <Skeleton className="h-3 w-64" />
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
