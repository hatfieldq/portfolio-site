import Link from "next/link";

export default function Nav() {
    return (
        <nav className="flex items-center justify-between px-4 py-2 text-26 font-var(--font-orbitron)">
            <Link href="/" className="hover:text-green-500">Quinnten Hatfield</Link>
            <div className="flex items-center gap-4">
            <Link href="/about" className="hover:text-green-500">About</Link>
            <Link href="/projects" className="hover:text-green-500">Projects</Link>
            <Link href="/learning" className="hover:text-green-500">Learning</Link>
            <Link href="/resources" className="hover:text-green-500">Resources</Link>
            </div>
        </nav>
    );
}