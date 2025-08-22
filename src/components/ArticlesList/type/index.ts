import { Article } from "@/types/domain";

export interface ArticlesListProps {
    articles: Article[];
    total?: number;
    matchId?: string;
    className?: string;
}


