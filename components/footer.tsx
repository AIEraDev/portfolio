import { Github, Linkedin, Twitter, Heart } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-gray-50 dark:bg-black border-t border-gray-200 dark:border-gray-800 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center">
                            © {new Date().getFullYear()} AIEraDev. Built with
                            <Heart className="h-4 w-4 mx-1 text-red-500 fill-current animate-pulse" />
                            using Next.js & Tailwind.
                        </p>
                    </div>

                    <div className="flex space-x-6">
                        <a href="https://github.com/AIEraDev" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                            <span className="sr-only">GitHub</span>
                            <Github className="h-5 w-5" />
                        </a>
                        <a href="https://linkedin.com/in/abdulkabirmusa" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                            <span className="sr-only">LinkedIn</span>
                            <Linkedin className="h-5 w-5" />
                        </a>
                        <a href="https://twitter.com/aieradev" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-sky-500 dark:hover:text-sky-400 transition-colors">
                            <span className="sr-only">Twitter</span>
                            <Twitter className="h-5 w-5" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
