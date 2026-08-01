import Link from "next/link";
import { FaGithub } from "react-icons/fa"

const projects = [
    { key: 1, title: "Personal FM Radio Station via SDR", description: "Personal FM radio station. Tx/Rx to enable Spotify streaming via PC rerouted over-the-air to an old analog FM radio. Built with GNURadio and a PlutoSDR.", 
        tags: ["SDR", "GNURadio", "PlutoSDR", "FM"], githubURL: "https://github.com/hatfieldq/pluto_sdr", liveUrl: null},
    { key: 2, title: "Interactive TDOA Geolocation Visualizer", description: "Visualize the TDOA hyperbolas and see how they change with geometry. Built with canvas and React.", 
        tags: ["TDOA", "Geolocation", "React"], githubURL: null, liveUrl: "/#tdoa" },
    { key: 4, title: "This Website",
        description: "The site you're on. A Next.js (App Router) portfolio with hand-built interactive canvas demos, dark mode, and a fully responsive layout. Written in TypeScript.",
        tags: ["Next.js", "React", "TypeScript", "Tailwind"],
        githubURL: "https://github.com/hatfieldq/portfolio-site", liveUrl: null },
    { key: 3, title: "More content coming soon!", description: "Stay tuned for more interactive visuals, simulations, and SDR work!",
        tags: [], githubURL: null, liveUrl: null }, 
]

export default function Projects() {
    return (
        <div>
            <main>
                <h1 className="text-4xl font-bold">Projects</h1>
                <p className="mt-4 indent-8">
                    Welcome to my projects page. Here, you'll find a collection of my recent projects, some for fun, some for practice. 
                    Click on the Github icon to view the source code for each project, as well as the README. 
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
                    {projects.map((project) => (
                        <div key={project.key} className="border rounded-lg p-4 shadow-sm hover:bg-green-500 hover:shadow-md transition-shadow flex flex-col h-full">
                            <h2 className="text-xl font-semibold pl-3 mb-4 border-b-4 rounded px-3 py-2 mb-4">{project.title}</h2>
                            <p className="text-sm  mb-4">{project.description}</p>
                            <div className="mt-auto flex flex-col gap-3">
                                <div className="flex flex-wrap gap-1">
                                    {project.tags.map((tag) => (
                                        <span key={tag} className="text-xs bg-gray-100 dark:bg-gray-700 dark:text-gray-100 px-2 py-1 rounded-full ">{tag}</span>
                                    ))}
                                </div>
                                <div className="flex items-center gap-3 mt-auto">
                                    {project.githubURL && <a href={project.githubURL} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                                        <FaGithub className="rounded-full text-2xl bg-blue-500" />
                                    </a>}
                                    {project.liveUrl && (<Link href={project.liveUrl} className="text-sm font-bold border rounded-lg p-1 hover:text-white bg-blue-500">
                                        Live Demo
                                    </Link>)}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </main>
        </div>
    );
}
