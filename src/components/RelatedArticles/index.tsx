import { RelatedArticlesProps } from "./type";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getArticles } from "@/features/matchup/api";
import ArticlesList from "@/components/ArticlesList";

export default async function RelatedArticles({
  matchId,
  className,
}: RelatedArticlesProps) {
  const articles = await getArticles(matchId);
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>Related Articles</CardTitle>
      </CardHeader>
      <CardContent>
        <ArticlesList articles={articles} />
      </CardContent>
    </Card>
  );
}
