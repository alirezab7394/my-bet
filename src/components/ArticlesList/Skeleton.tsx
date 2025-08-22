import { Skeleton } from "@/components/ui/skeleton";

export default function ArticlesListSkeleton({
  hidePagination,
}: {
  hidePagination?: boolean;
}) {
  return (
    <div>
      <ul className="space-y-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <li key={i} className="flex items-start gap-4">
            <Skeleton className="h-20 w-28 rounded-md" />
            <div className="min-w-0 space-y-2">
              <Skeleton className="h-3 w-12" />
              <Skeleton className="h-4 w-64" />
              <Skeleton className="h-3 w-32" />
            </div>
          </li>
        ))}
      </ul>
      {!hidePagination && (
        <div className="mt-6 flex items-center justify-center gap-2">
          <Skeleton className="h-8 w-14" />
          <Skeleton className="h-8 w-8" />
          <Skeleton className="h-8 w-8" />
        </div>
      )}
    </div>
  );
}
