import { ArticlesListProps } from "./type";
import ArticleItem from "@/components/ArticleItem";

export default function ArticlesList({
  articles,
  className,
}: ArticlesListProps) {
  return (
    <div className={className}>
      <ul className="space-y-4">
        {articles.map((a) => (
          <ArticleItem key={a.id} article={a} />
        ))}
      </ul>
    </div>
  );
}

// timeAgo now provided inside ArticleItem; no duplicate here
