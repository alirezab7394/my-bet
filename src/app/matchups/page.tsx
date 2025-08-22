import { Suspense } from "react";
import MatchList from "@/components/MatchList";
import MatchListSkeleton from "@/components/MatchList/Skeleton";

export default function Page() {
  return (
    <div className="container mx-auto space-y-6 p-4">
      <h1 className="text-2xl font-semibold">Matchups</h1>
      <Suspense fallback={<MatchListSkeleton />}>
        <MatchList />
      </Suspense>
    </div>
  );
}
