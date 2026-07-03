import Image from "next/image";

const categories = [
    { 
        key: 1,
        categoryTitle: "Signals", 
        resources: [
            { key: 1, title: "TITLE12", url:  "https://crows.org/jed/", description: "Journel for EM Dominance" }, 
            { key: 2, title: "TITLE2", url:  "https://crows.org/jed/", description: "Journel for EM Dominance" },
        ],
    },
    {
        key: 2, 
        categoryTitle: "Geolocation",
        resources: [
            { key: 1, title: "TITLE1", url:  "https://crows.org/jed/", description: "Journel for EM Dominance" },
            { key: 2, title: "TITLE4", url:  "https://crows.org/jed/", description: "Journel for EM Dominance" },
        ],
    },
];

export default function Resources() {
    return (
        <div>
            <main>
                <h1 className="text-2xl font-bold">Resources</h1>
                <p className="mt-4">Nothing to see here yet. Check back later for updates!</p>

                <div>
                    {categories.map((category) => (
                        <section key={category.key} className="mt-10 border-black border-t-4">
                            <h2 className="text-xl font-semibold mb-4 border-l-4 border-blue-500 pl-3">{category.categoryTitle}</h2>
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
                </div>

            </main>
        </div>
    );
}
