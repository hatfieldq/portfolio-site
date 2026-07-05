import { getPostBySlug } from '@/lib/posts';

export default async function LearningPost({
    params, 
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const { meta, contentHtml } = await getPostBySlug(slug);

    return (
        <div>
            <main>
                <h1 className="text-2xl font-bold">{meta.title}</h1>
                <div dangerouslySetInnerHTML={{__html: contentHtml}}/>    
            </main>
        </div>
    );
}
