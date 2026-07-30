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
                     physics-based models for real-world applications. In particular, I am excited about estimation
                     algorithms for geolocation and tracking, signal processing, scenario-level simulation, and autonomy.
                     This site is where I will share my work and thoughts related to my career and life interests. 
                     I am passionate about teaching and sharing knowledge and resources to help set others up for success.
                     A lot of this content will be directed towards people new to these fields. I'll be updating this regularly with content related to my projects and learning, 
                     including tutorials, interactive demos, resources, and more.  If you have any comments or questions on the work
                     I show here, don't hesitate to reach out!
                </p>
                <p className="mt-4">  See what I've been building on my{" "}
                <Link href="/projects" className="text-blue-500 hover:underline">projects page</Link>.
                </p>
                <h2 className="text-xl font-semibold mt-4">Interests</h2>
                <ul className="mt-2">
                    <li className="list-disc pl-2 ml-4">RF Signal Processing</li>
                    <li className="list-disc pl-2 ml-4">Estimation Techniques for Geolocation</li>
                    <li className="list-disc pl-2 ml-4">Satellite Systems</li>
                    <li className="list-disc pl-2 ml-4">Autonomous Systems</li>
                </ul>
                


                <h2 className="text-xl font-semibold mt-4">Contact Information</h2>
                <ul className="mt-2">
                    <li>Email: qhatfield27@gmail.com</li>
                    <li>LinkedIn: <a href="https://linkedin.com/in/quinnten-hatfield" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">linkedin.com/in/quinnten-hatfield</a></li>
                    <li>GitHub: <a href="https://github.com/hatfieldq" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">github.com/hatfieldq</a></li>
                </ul>

            </div>

        </main>

    </div>
  );
}