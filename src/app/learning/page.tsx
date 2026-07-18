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
                <p className="mt-4">Below are some blog-style write ups for different topics that I have been exploring in my personal time.
                    Also there are some write ups that relate directly to some of my projects!
                </p>
                <ul className="mt-4 space-y-3">
                    {posts.map((post) => (
                        <li key={post.slug}>
                            <Link
                                href={`/learning/${post.slug}`}
                                className="block rounded-lg border px-4 py-3 transition-colors hover:bg-blue-300"
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
