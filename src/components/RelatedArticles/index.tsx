import { RelatedArticlesProps } from "./type";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getArticlesPaged } from "@/features/matchup/api";
import ArticlesList from "@/components/ArticlesList";
import ArticlesListSkeleton from "@/components/ArticlesList/Skeleton";

export default async function RelatedArticles({
  matchId,
  className,
}: RelatedArticlesProps) {
  const firstPage = await getArticlesPaged(matchId, 1, 5);
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>Related Articles</CardTitle>
      </CardHeader>
      <CardContent>
        {firstPage.items.length ? (
          <ArticlesList
            articles={firstPage.items}
            total={firstPage.total}
            matchId={matchId}
          />
        ) : (
          <ArticlesListSkeleton />
        )}
      </CardContent>
    </Card>
  );
}
