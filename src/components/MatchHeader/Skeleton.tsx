import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function MatchHeaderSkeleton() {
  return (
    <Card>
      <CardContent className="p-0">
        <div className="border-b px-6 py-8 text-center">
          <div className="mx-auto mb-2 grid max-w-sm grid-cols-3 items-center text-xs">
            <div />
            <Skeleton className="mx-auto h-4 w-24" />
            <div />
            <div />
            <Skeleton className="mx-auto h-5 w-16" />
            <div />
            <div />
            <Skeleton className="mx-auto h-4 w-16" />
            <div />
          </div>

          <div className="grid grid-cols-3 items-center">
            <div className="flex items-center gap-3 justify-self-start">
              <Skeleton className="h-12 w-12 rounded-full" />
              <Skeleton className="h-6 w-32" />
            </div>
            <div className="justify-self-center">
              <Skeleton className="mx-auto h-7 w-28" />
            </div>
            <div className="flex items-center gap-3 justify-self-end">
              <Skeleton className="h-12 w-12 rounded-full" />
              <Skeleton className="h-6 w-32" />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
