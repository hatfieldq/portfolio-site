import Image from "next/image";
import { FaGithub } from "react-icons/fa"

const projects = [
    { key: 1, title: "Personal FM Radio Station via SDR", description: "PlutoSDR and GNURadio enabled me to create a personal FM radio station in my room!", 
        tags: ["SDR", "GNURadio", "PlutoSDR", "FM"], githubURL: "https://github.com/hatfieldq/pluto_sdr"},
    { key: 2, title: "More content coming soon!", description: "More content coming soon!",
        tags: [], githubURL: null}
]

export default function Projects() {
    return (
        <div>
            <main>
                <h1 className="text-2xl font-bold">Projects</h1>
                <p className="mt-4 indent-8">
                    Welcome to my projects page. Here, you'll find a collection of my recent projects, some for fun, some for practice. 
                    Click on the Github icon to view the source code for each project, as well as the README. 
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
                    {projects.map((project) => (
                        <div key={project.key} className="border rounded-lg p-4 shadow-sm hover:bg-blue-300 hover:shadow-md transition-shadow">
                            <h2 className="text-xl font-semibold border-l-4 border-blue-500 pl-3 mb-4">{project.title}</h2>
                            <p className="text-sm mt-4 mb-4">{project.description}</p>
                            {project.tags.map((tag) => (
                                <span key={tag} className="text-xs bg-gray-100 px-2 py-1 rounded-full">{tag}</span>
                            ))}
                            <div className=" flex  mt-4">
                                {project.githubURL && <a href={project.githubURL} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                                    <FaGithub className="text-2xl " />
                                </a>}
                            </div>
                        </div>
                    ))}
                </div>

            </main>
        </div>
    );
}
