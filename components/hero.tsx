"use client";

import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";

const HERO_WORDS = [
    "Context-Aware Intelligence",
    "Architecting Intelligence",
    "Scalable AI Solutions",
    "Next-Gen Applications"
];

export function Hero() {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-16">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
                <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
                <div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-pink-500/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
                <div className="animate-fade-in">
                    <span className="inline-block py-1 px-3 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 text-sm font-semibold mb-6 border border-blue-200 dark:border-blue-800">
                        Available for new projects
                    </span>

                    <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-6">
                        <span className="block mb-2">Engineering</span>
                        <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                            <TypewriterEffect words={HERO_WORDS} />
                        </span>
                    </h1>

                    <p className="mt-4 text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
                        Solving complex problems with reliable, AI-driven software solutions.
                        I build the infrastructure for the next era of intelligent applications.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            href="#projects"
                            className="btn-primary flex items-center group"
                        >
                            View Projects
                            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        </Link>

                        <Link
                            href="/resume.pdf"
                            target="_blank"
                            className="btn-secondary flex items-center group"
                        >
                            Download Resume
                            <Download className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
                        </Link>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
                <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center">
                    <div className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2"></div>
                </div>
            </div>
        </section>
    );
}
