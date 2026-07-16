import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeHighlight from "rehype-highlight";
import rehypeStringify from "rehype-stringify";

interface PostMeta {
    title: string;
    date: string;
    tags?: string[];
    description?: string;
}


export async function getPostBySlug(slug: string) {
    const filePath = path.join(process.cwd(), "content/learning", `${slug}.md`);
    const rawFile = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(rawFile);

    const processed = await
    remark()
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeHighlight)
    .use(rehypeStringify)
    .process(content);

    const contentHtml = processed.toString();

    return {
        meta: data, // metadata from YAML
        contentHtml, // HTML content
    };
}


export function getAllPosts(): (PostMeta & { slug: string })[] {
    const dir = path.join(process.cwd(), "content/learning");
    const files = fs.readdirSync(dir).filter(f => f.endsWith(".md") && !f.startsWith("_"));

    const posts = files.map((file) => {
        const slug = file.replace(/\.md$/, "");
        const raw = fs.readFileSync(path.join(dir,file), "utf8");
        const { data } = matter(raw);
        const meta = data as PostMeta;
        return { slug, ...meta };
    });

    return posts.sort((a,b) => (a.date < b.date ? 1 : -1));
}