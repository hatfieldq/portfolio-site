import Image from "next/image"

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
                <p>Welcome to my about page!</p>
                <h2>My Interests</h2>
                <p>-----</p>
                <h2>My Projects</h2>
                <p>----</p>
                <h2>My Contact Information</h2>
                <p>----</p>

            </div>
        </main>

    </div>
  );
}