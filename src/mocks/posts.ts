import { Comment, Post } from "../types/domain";

export const POSTS: Post[] = Array.from({ length: 23 }).map((_, idx) => {
    const created = new Date(Date.now() - (idx + 1) * 1000 * 60 * 60 * 8);
    return {
        id: `post_${idx + 1}`,
        title: `Match analysis #${idx + 1}`,
        body: `This is a mock body for post #${idx + 1}. It discusses tactics, players, and form.`,
        author: idx % 2 === 0 ? "Analyst A" : "Analyst B",
        createdAtIso: created.toISOString(),
        updatedAtIso: created.toISOString(),
    } as Post;
});

export const COMMENTS: Comment[] = POSTS.flatMap((p, i) => {
    const count = (i % 3) + 1;
    return Array.from({ length: count }).map((_, j) => ({
        id: `c_${p.id}_${j + 1}`,
        postId: p.id,
        author: j % 2 === 0 ? "User X" : "User Y",
        body: `Comment ${j + 1} on ${p.title}`,
        createdAtIso: new Date(Date.now() - (i + j + 1) * 1000 * 60 * 37).toISOString(),
    }));
});


