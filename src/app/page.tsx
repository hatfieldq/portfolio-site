import Link from "next/link"
import TdoaDemo from "@/components/demos/TdoaDemo"

export default function Home() {
  return (
    <div>
      <main className="p-8 overflow-hidden">
        <h1 className="text-4xl md:text-8xl font-bold">Quinnten Hatfield</h1>
        <p className="mt-4 text-2xl md:text-4xl">
          I build physics-based models for multi-domain geolocation sensor systems.
        </p>

        {/*FEATURED DEMO PLACEHOLDER */}
        <section id="tdoa" className="mt-12">
          <h2 className="text-2xl font-semibold">Interactive: 2D TDOA Geolocation</h2>
          <p className="mt-2">Click on the canvas to place an emitter</p>
          <div className="mt-4">
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
