import Image from "next/image"
import Link from "next/link";

export default function About() {
  return (
    <div>
        <main  className="p-8 overflow-hidden">
            <div className="flex-shrink-0 flex justify-center">
                <Image 
                    src="/about/hiking.jpg" 
                    alt="Image of Quinnten and a friend" 
                    width={400}
                    height={300}  
                    className=" mb-4 w-full md:w-auto rounded-sm"           
                />
            </div>

            <div>
                <h1 className="text-2xl font-bold">About Me</h1>
                <p className="indent-8 mt-4">Hey, I'm Quinnten! I'm a modeling engineer who is interested in creating
                     physics-based models for real-world applications. This site is a place 
                     where I share my work and thoughts related to my career and life interests. 
                     I'll be updating this regularly with content related to my projects and learning, 
                     including tutorials, interactive demos, and more. Hopefully some of this can 
                     be helpful to you as well. DISCLAIMER: The information on this site is for educational purposes 
                     only.</p>
                <h2 className="text-xl font-semibold mt-4">Interests</h2>
                <ul>
                    <li>Signal Processing</li>
                    <li>Geolocation/Tracking</li>
                    <li>Learning</li>
                </ul>
                <h2 className="text-xl font-semibold mt-4">Recent Projects</h2>
                <ol>
                    <li>Project 1</li>
                    <li>Project 2</li>
                    <li>Project 3</li>
                </ol>
                <h2 className="text-xl font-semibold mt-4">Contact Information</h2>
                <ol>
                    <li>Email: qhatfield27@gmail.com</li>
                    <li>LinkedIn: <a href="https://linkedin.com/in/quinnten-hatfield" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">linkedin.com/in/quinnten-hatfield</a></li>
                    <li>GitHub: <a href="https://github.com/hatfieldq" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">github.com/hatfieldq</a></li>
                </ol>

            </div>

        </main>

    </div>
  );
}