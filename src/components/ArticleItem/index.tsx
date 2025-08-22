import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ArticleItemProps } from "./type";

export default function ArticleItem({ article, className }: ArticleItemProps) {
  return (
    <li className={cn("flex items-start gap-4", className)}>
      <div className="bg-muted h-20 w-28 overflow-hidden rounded-md">
        {article.imageUrl && (
          <Image
            src={article.imageUrl}
            alt={article.title}
            width={160}
            height={120}
            className="h-full w-full object-cover"
          />
        )}
      </div>
      <div className="min-w-0">
        {article.category && (
          <div className="text-primary text-xs font-semibold">
            {article.category}
          </div>
        )}
        <Link
          href={article.url}
          target="_blank"
          className="block truncate font-semibold hover:underline"
        >
          {article.title}
        </Link>
        <div className="text-muted-foreground text-xs">
          {(article.author ?? article.source) +
            " • " +
            timeAgo(article.publishedAtIso)}
        </div>
      </div>
    </li>
  );
}

function timeAgo(iso: string) {
  const diff = Date.now() - new Date(iso).getTime();
  const month = 1000 * 60 * 60 * 24 * 30;
  const week = 1000 * 60 * 60 * 24 * 7;
  if (diff >= month) {
    const m = Math.floor(diff / month);
    return `${m} month${m > 1 ? "s" : ""} ago`;
  }
  if (diff >= week) {
    const w = Math.floor(diff / week);
    return `${w} week${w > 1 ? "s" : ""} ago`;
  }
  return "recent";
}
