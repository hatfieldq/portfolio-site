import { FaGithub, FaLinkedin } from "react-icons/fa"

export default function Footer() {
    return (
        <footer className="flex items-center justify-between px-4 py-2 text-14 font-var(--font-orbitron) bg-surface">
            <p>&copy; 2026 My Portfolio. All rights reserved.</p>
            <div className="flex items-center gap-4">
                <a href="https://github.com/hatfieldq" target="_blank" rel="noopener noreferrer" className="hover:text-green-500"> <FaGithub/> </a>
                <a href="https://linkedin.com/in/quinnten-hatfield" target="_blank" rel="noopener noreferrer" className="hover:text-green-500"> <FaLinkedin/> </a>
            </div>
        </footer>
    );
}