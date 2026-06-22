import Image from "next/image"
import Link from "next/link";

export default function About() {
  return (
    <div>
        <main>
            <Image 
                src="/about/hiking.jpg" 
                alt="Image of Quinnten and a friend" 
                width={500} 
                height={300} />

            <div>
                <h1>About Me</h1>
                <p>Hey, I'm Quinnten! I'm a modeling engineer who is interested in creating
                     physics-based models for real-world applications. This site is a place 
                     where I share my work and thoughts related to my career and life interests. 
                     I'll be updating this regularly with content related to my projects and learning, 
                     including tutorials, interactive demos, and more. Hopefully some of this can 
                     be helpful to you as well. DISCLAIMER: The information on this site is for educational purposes 
                     only.</p>
                <h2>My Interests</h2>
                <ul>
                    <li>Signal Processing</li>
                    <li>Geolocation/Tracking</li>
                    <li>Learning</li>
                </ul>
                <h2>My Recent Projects</h2>
                <ol>
                    <li>Project 1</li>
                    <li>Project 2</li>
                    <li>Project 3</li>
                </ol>
                <h2>My Contact Information</h2>
                <ol>
                    <li>Email: qhatfield27@gmail.com</li>
                    <li>LinkedIn: linkedin.com/in/quinnten-hatfield</li>
                    <li>GitHub: github.com/hatfieldq</li>
                </ol>

            </div>

        </main>

    </div>
  );
}