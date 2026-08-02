import Link from "next/link"
import TdoaDemo from "@/components/demos/TdoaDemo"

export default function Home() {
  return (
    <div>
      <main className="p-8 overflow-hidden">
        <h1 className="text-4xl md:text-8xl font-bold">Quinnten Hatfield</h1>
        <p className="mt-4 text-2xl md:text-4xl">
          Building physics-based models for multi-domain RF systems.
        </p>

        {/*FEATURED DEMO PLACEHOLDER */}
        <section id="tdoa" className="mt-12">
          <h2 className="text-2xl font-semibold">Interactive: 2D TDOA Geolocation</h2>
          <p className="mt-2 indent-8">
            Time-Difference-of-Arrival (TDOA) geolocation is a technique used to determine the position of a signal source.
            This interactive demo allows you to explore how TDOA works in a 2D environment and how TDOA hyperbolas intersect to determine an unknown position.
            I will be posting a more detailed writeup and explanation of TDOA in the future, but for now you can play around with the demo below.
          </p>
          <p className="mt-2 indent-8">
            Click on the canvas to place an emitter in red. Drag the 
            green receivers to change the geometry. Watch how the blue hyperbolas 
            change and how they continue to intersect on the estimated emitter location.
          </p>
          <div className="mt-4 mx-auto max-w-2xl">
            <TdoaDemo />
          </div>
        </section>

        {/*Links and contact info */}
        <section className="mt-10 flex flex-wrap gap-4">
          <Link href="/projects" className="border rounded-lg p-4 shadow-sm hover:bg-blue-300 hover:shadow-md transition-shadow">
            Projects</Link>
          <Link href="/resources" className="border rounded-lg p-4 shadow-sm hover:bg-blue-300 hover:shadow-md transition-shadow">
            Resources</Link>
          <a href="mailto:qhatfield27@gmail.com" className="border rounded-lg p-4 shadow-sm hover:bg-green-500 hover:shadow-md transition-shadow">
            Contact Me</a>
        </section>

      </main>
    </div>
  );
}
