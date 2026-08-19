import Image from "next/image";
import Link from "next/link";
import { getAllPosts } from "@/lib/posts"

export default function Learning() {
    const posts = getAllPosts();
    return (
        <main>
            <h1 className="text-2xl font-bold">Learning</h1>
            {posts.length === 0 ? (
                <p>Nothing here yet. Check back later for updates.</p>
            ) : (
                <div>
                <p className="mt-4">Here I will be writing some blog-style articles about various topics related to my
                    work, projects, and interests. 
                </p>
                <ul className="mt-4 space-y-3">
                    {posts.map((post) => (
                        <li key={post.slug}>
                            <Link
                                href={`/learning/${post.slug}`}
                                className="block rounded-lg border px-4 py-3 transition-colors hover:bg-green-500"
                            >
                                <div className="flex items-center justify-between gap-4">
                                    <span className="font-semibold">{post.title}</span>
                                    <span className="text-sm text-gray-600">{post.date}</span>
                                </div>
                                <p className="mt-1 text-sm">{post.description}</p>
                            </Link>
                        </li>
                    ))}
                </ul>
                </div>
            )}
        </main>
    );
}
