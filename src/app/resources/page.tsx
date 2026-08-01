import Image from "next/image";
import { categories, books } from "@/data/resources"

export default function Resources() {
    return (
        <div>
            <main>
                <h1 className="text-4xl font-bold">Resources</h1>
                <p className="mt-4 indent-8">Here, you can find resources that I use or have used while learning about various topics in 
                    electronic warfare, modeling, software engineering, etc. I also show some tools that are useful for many applications.
                    Finally, at the end, there are some textbooks, some which are available as free PDFs online and some that can be downloaded
                    as PDFs from <a href="https://ieeexplore.ieee.org/Xplore/home.jsp" className="text-blue-500 hover:underline">IEEE Xplore</a> with a student or member account.
                </p>

                <div>
                    {categories.map((category) => (
                        <section key={category.key} className="mt-6 ">
                            <h2 className="text-xl font-semibold mb-4 border-b-4  border-green-500 pl-3">{category.categoryTitle}</h2>
                            <ul className="space-y-2">
                                {category.resources.map((resource) => (
                                    <li key={resource.key}>
                                        <a href={resource.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                                            {resource.title}
                                        </a>
                                        <p className="text-sm text-gray-600">{resource.description}</p>
                                    </li>
                                ))}
                            </ul>
                        </section>
                    ))}

                    <section className="mt-6 border-t-4">
                        <h2 className="text-xl font-semibold mb-4 border-l-4 border-blue-500 pl-3">Books & Papers</h2>
                        <ul className="space-y-2">
                            {books.map((book) => (
                                <li key={book.key}>
                                    {book.url ? (
                                        <a href={book.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                                            {book.title}
                                        </a>
                                    ) : (
                                        <span className="font-medium">{book.title}</span>
                                    )}
                                    <span className="text-sm text-gray-600"> — {book.author}</span>
                                    <p className="text-sm text-gray-600">{book.description}</p>
                                </li>
                            ))}
                        </ul>
                    </section>
                </div>
                


            </main>
        </div>
    );
}
