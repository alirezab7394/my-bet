import MatchHeader from "@/components/MatchHeader";
import Last10Games from "@/components/Last10Games";
import Last10GamesSkeleton from "@/components/Last10Games/Skeleton";
import OddsTable from "@/components/OddsTable";
import OddsTableSkeleton from "@/components/OddsTable/Skeleton";
import RelatedArticles from "@/components/RelatedArticles";
import RelatedArticlesSkeleton from "@/components/RelatedArticles/Skeleton";
import Signals from "@/components/Signals";
import SignalsSkeleton from "@/components/Signals/Skeleton";
import { Suspense } from "react";
import { getMatchupAggregate } from "@/features/matchup/api";

interface Params {
  params: { slug: string };
}

export default async function Page({ params: { slug } }: Params) {
  const agg = await getMatchupAggregate(slug);
  if (!agg) return <div className="p-6">Match not found</div>;
  // Components fetch their own data server-side via async.

  return (
    <div className="container mx-auto space-y-6 p-4">
      <MatchHeader
        match={agg.match}
        homeTeam={agg.homeTeam}
        awayTeam={agg.awayTeam}
      />

      <div className="grid gap-6 md:grid-cols-2">
        <Suspense
          fallback={
            <Last10GamesSkeleton
              title={`Last 10 Games — ${agg.homeTeam.name}`}
            />
          }
        >
          <Last10Games team={agg.homeTeam} opponentName={agg.awayTeam.name} />
        </Suspense>
        <Suspense
          fallback={
            <Last10GamesSkeleton
              title={`Last 10 Games — ${agg.awayTeam.name}`}
            />
          }
        >
          <Last10Games team={agg.awayTeam} opponentName={agg.homeTeam.name} />
        </Suspense>
      </div>

      <Suspense fallback={<OddsTableSkeleton />}>
        {/* Async server component fetches internally */}
        <OddsTable matchId={agg.match.id} />
      </Suspense>

      <Suspense fallback={<RelatedArticlesSkeleton />}>
        <RelatedArticles matchId={agg.match.id} />
      </Suspense>

      <Suspense fallback={<SignalsSkeleton />}>
        <Signals matchId={agg.match.id} />
      </Suspense>
    </div>
  );
}
