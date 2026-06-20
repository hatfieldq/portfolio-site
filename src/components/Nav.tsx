import Link from "next/link";

export default function Nav() {
    return (
        <nav>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/learning">Learning</Link>
            <Link href="/resources">Resources</Link>
        </nav>
    );
}