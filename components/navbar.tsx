"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Github, Linkedin, Twitter } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";

const navItems = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                "fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent",
                scrolled
                    ? "bg-white/80 dark:bg-black/80 backdrop-blur-md border-border shadow-sm"
                    : "bg-transparent"
            )}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:opacity-80 transition-opacity">
                            AIEraDev
                        </Link>
                    </div>

                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors hover-underline"
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className="hidden md:flex items-center space-x-4">
                        <div className="flex space-x-4 border-r border-gray-200 dark:border-gray-700 pr-4">
                            <a href="https://github.com/AIEraDev" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">
                                <Github className="h-5 w-5" />
                            </a>
                            <a href="https://linkedin.com/in/abdulkabirmusa" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">
                                <Linkedin className="h-5 w-5" />
                            </a>
                            <a href="https://twitter.com/aieradev" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">
                                <Twitter className="h-5 w-5" />
                            </a>
                        </div>
                        <ThemeToggle />
                    </div>

                    <div className="-mr-2 flex md:hidden">
                        <ThemeToggle />
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="ml-2 inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 focus:outline-none"
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div className="md:hidden bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800 animate-slide-up">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                onClick={() => setIsOpen(false)}
                                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 block px-3 py-2 rounded-md text-base font-medium"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                    <div className="pt-4 pb-4 border-t border-gray-200 dark:border-gray-800">
                        <div className="flex items-center justify-center space-x-6">
                            <a href="https://github.com/AIEraDev" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                                <Github className="h-6 w-6" />
                            </a>
                            <a href="https://linkedin.com/in/abdulkabirmusa" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                                <Linkedin className="h-6 w-6" />
                            </a>
                            <a href="https://twitter.com/aieradev" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                                <Twitter className="h-6 w-6" />
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}
