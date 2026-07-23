import Image from "next/image"
import Link from "next/link";

export default function Nav() {
    return (
        <nav className="flex items-center justify-between px-4 py-2 font-heading bg-surface sm:text-lg md:text-xl lg:text-2xl">
            <Link href="/" className="flex items-center gap-2 hover:text-green-500">
                <Image 
                    src="/icon.png"
                    alt="Site Logo"
                    width={72}
                    height={72}
                    className="sm:w-9 h-9 md:w-20 h-20" 
                />
                Quinnten
            </Link>
            <div className="flex items-center gap-4">
            <Link href="/about" className="hover:text-green-500">About</Link>
            <Link href="/projects" className="hover:text-green-500">Projects</Link>
            <Link href="/learning" className="hover:text-green-500">Learning</Link>
            <Link href="/resources" className="hover:text-green-500">Resources</Link>
            </div>
        </nav>
    );
}