import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeHighlight from "rehype-highlight";
import rehypeStringify from "rehype-stringify";

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