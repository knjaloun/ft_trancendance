import { Link } from "react-router-dom";

export function Footer() {
    return (
        <footer className="w-full border-t border-gray-200 bg-white">
            <div className="mx-auto flex w-11/12 max-w-3xl flex-col items-center gap-2 py-5 text-xs text-gray-500 sm:flex-row sm:justify-between">
                <span>&copy; {new Date().getFullYear()} Transcendence &mdash; a 42 student project</span>
                <nav className="flex gap-4">
                    <Link to="/privacy" className="hover:text-red-500 hover:underline">
                        Privacy Policy
                    </Link>
                    <Link to="/terms" className="hover:text-red-500 hover:underline">
                        Terms of Service
                    </Link>
                </nav>
            </div>
        </footer>
    );
}
