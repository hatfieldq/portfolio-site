import fs from "fs";
import path from "path";
import matter from "gray-matter";


interface PostMeta {
    title: string;
    date: string;
    tags?: string[];
    description?: string;
}


export async function getPostBySlug(slug: string) {
    const filePath = path.join(process.cwd(), "content/learning", `${slug}.mdx`);
    const rawFile = fs.readFileSync(filePath, "utf8");
    const { data } = matter(rawFile);

    const { default: Post } = await import(`@content/learning/${slug}.mdx`);

    return { meta: data as PostMeta, Post };
}


export function getAllPosts(): (PostMeta & { slug: string })[] {
    const dir = path.join(process.cwd(), "content/learning");
    const files = fs.readdirSync(dir).filter(f => f.endsWith(".mdx") && !f.startsWith("_"));

    const posts = files.map((file) => {
        const slug = file.replace(/\.mdx$/, "");
        const raw = fs.readFileSync(path.join(dir,file), "utf8");
        const { data } = matter(raw);
        const meta = data as PostMeta;
        return { slug, ...meta };
    });

    return posts.sort((a,b) => (a.date < b.date ? 1 : -1));
}