"use server";
import { getArticlesPaged } from "@/features/matchup/api";

export async function fetchMatchArticles(params: {
    matchId: string;
    page: number;
    pageSize: number;
}) {
    const { matchId, page, pageSize } = params;
    return getArticlesPaged(matchId, page, pageSize);
}


