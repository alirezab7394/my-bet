"use client";
import { useEffect, useState } from "react";
import { getPost, listComments, listPosts, Paginated } from "./api";
import { Comment, Post } from "../../types/domain";

function useAsync<T>(fn: () => Promise<T>, deps: unknown[] = []) {
    const [data, setData] = useState<T | undefined>(undefined);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<unknown>(undefined);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        let cancelled = false;
        setLoading(true);
        setError(undefined);
        fn()
            .then((value) => {
                if (!cancelled) setData(value);
            })
            .catch((e) => !cancelled && setError(e))
            .finally(() => !cancelled && setLoading(false));
        return () => {
            cancelled = true;
        };
    }, deps);
    return { data, loading, error } as const;
}

export function usePosts(page: number, pageSize: number) {
    return useAsync<Paginated<Post>>(() => listPosts(page, pageSize), [page, pageSize]);
}

export function usePost(id?: string) {
    return useAsync<Post | undefined>(() => getPost(id!), [id]);
}

export function useComments(postId?: string) {
    return useAsync<Comment[]>(() => listComments(postId!), [postId]);
}


