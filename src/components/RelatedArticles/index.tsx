import Link from "next/link";
import { RelatedArticlesProps } from "./type";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getArticles } from "@/features/matchup/api";

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
        <ul className="space-y-3">
          {articles.map((a) => (
            <li key={a.id} className="flex items-center justify-between gap-4">
              <div className="min-w-0">
                <Link
                  href={a.url}
                  target="_blank"
                  className="text-primary truncate font-medium hover:underline"
                >
                  {a.title}
                </Link>
                <div className="text-muted-foreground text-xs">
                  {a.source} • {new Date(a.publishedAtIso).toLocaleDateString()}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
