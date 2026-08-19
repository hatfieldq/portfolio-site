import { getPostBySlug, getAllPosts } from '@/lib/posts';

export default async function LearningPost({
    params, 
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const { meta, Post } = await getPostBySlug(slug);

    return (
        <div>
            <main>
                <h1 className="text-4xl font-bold mb-4 text-center border-b">{meta.title}</h1>
                    <div className="prose dark:prose-invert max-w-none">
                        <Post />
                    </div>
            </main>
        </div>
    );
}

export function generateStaticParams() {
    return getAllPosts().map((post) => ({ slug: post.slug }));
}

export const dynamicParams = false;
