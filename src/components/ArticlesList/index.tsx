"use client";
import { useMemo, useRef, useState, useTransition } from "react";
import { ArticlesListProps } from "./type";
import ArticleItem from "@/components/ArticleItem";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import ArticlesListSkeleton from "@/components/ArticlesList/Skeleton";

export default function ArticlesList({
  articles,
  total,
  matchId,
  className,
}: ArticlesListProps) {
  const pageSize = 5;
  const [page, setPage] = useState(1);
  const [items, setItems] = useState(articles);
  const [isPending, startTransition] = useTransition();
  const cacheRef = useRef<Record<number, typeof articles>>({ 1: articles });
  const totalCount = total ?? articles.length;
  const totalPages = Math.max(1, Math.ceil(totalCount / pageSize));

  const pageItems = useMemo(() => items, [items]);

  const canPrev = page > 1;
  const canNext = page < totalPages;

  return (
    <div className={className}>
      {isPending ? (
        <ArticlesListSkeleton hidePagination />
      ) : (
        <ul className="space-y-4">
          {pageItems.map((a) => (
            <ArticleItem key={a.id} article={a} />
          ))}
        </ul>
      )}

      {totalPages > 1 && (
        <Pagination className="mt-6">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  if (canPrev) handlePage(Math.max(1, page - 1));
                }}
                aria-disabled={!canPrev}
              />
            </PaginationItem>

            {Array.from({ length: totalPages }).map((_, idx) => {
              const num = idx + 1;
              if (totalPages > 7) {
                const isEdge = num === 1 || num === totalPages;
                const nearCurrent = Math.abs(num - page) <= 1;
                if (!(isEdge || nearCurrent)) {
                  if (num === 2 || num === totalPages - 1) {
                    return (
                      <PaginationItem key={`ellipsis-${num}`}>
                        <PaginationEllipsis />
                      </PaginationItem>
                    );
                  }
                  return null;
                }
              }
              const active = num === page;
              return (
                <PaginationItem key={num}>
                  <PaginationLink
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      handlePage(num);
                    }}
                    isActive={active}
                    aria-current={active ? "page" : undefined}
                  >
                    {num}
                  </PaginationLink>
                </PaginationItem>
              );
            })}

            <PaginationItem>
              <PaginationNext
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  if (canNext) handlePage(Math.min(totalPages, page + 1));
                }}
                aria-disabled={!canNext}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )}
    </div>
  );

  function handlePage(nextPage: number) {
    if (nextPage === page) return;
    setPage(nextPage);
    const cached = cacheRef.current[nextPage];
    if (cached) {
      setItems(cached);
      return;
    }
    if (!matchId) {
      const start = (nextPage - 1) * pageSize;
      const slice = articles.slice(start, start + pageSize);
      cacheRef.current[nextPage] = slice;
      setItems(slice);
      return;
    }
    startTransition(async () => {
      const { fetchMatchArticles } = await import("@/app/actions/articles");
      const res = await fetchMatchArticles({
        matchId,
        page: nextPage,
        pageSize,
      });
      cacheRef.current[nextPage] = res.items;
      setItems(res.items);
    });
  }
}
