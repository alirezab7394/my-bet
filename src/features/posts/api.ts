import { sleep } from "../../lib/sleep";
import { COMMENTS, POSTS } from "../../mocks/posts";
import { Comment, Post } from "../../types/domain";

const DEFAULT_DELAY_MS = 200;

export interface Paginated<T> {
    items: T[];
    total: number;
    page: number;
    pageSize: number;
}

export async function listPosts(
    page: number,
    pageSize: number
): Promise<Paginated<Post>> {
    await sleep(DEFAULT_DELAY_MS);
    const start = (page - 1) * pageSize;
    const end = start + pageSize;
    const items = POSTS.slice(start, end);
    return { items, total: POSTS.length, page, pageSize };
}

export async function getPost(id: string): Promise<Post | undefined> {
    await sleep(DEFAULT_DELAY_MS);
    return POSTS.find((p) => p.id === id);
}

export async function listComments(postId: string): Promise<Comment[]> {
    await sleep(DEFAULT_DELAY_MS);
    return COMMENTS.filter((c) => c.postId === postId);
}


