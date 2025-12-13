"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeft, Printer, Mail, Github, Linkedin, Globe } from "lucide-react";
import Link from "next/link";

export default function ResumePage() {
    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-10 px-4 sm:px-6 lg:px-8 print:bg-white print:p-0">
            <div className="max-w-4xl mx-auto bg-white dark:bg-black shadow-xl rounded-xl overflow-hidden print:shadow-none print:rounded-none">
                {/* Header / Actions - Hidden in Print */}
                <div className="bg-gray-50 dark:bg-gray-800 p-4 flex justify-between items-center border-b border-gray-200 dark:border-gray-700 print:hidden">
                    <Link href="/" className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back to Portfolio
                    </Link>
                    <Button onClick={() => window.print()} className="flex items-center gap-2">
                        <Printer className="h-4 w-4" />
                        Print / Save as PDF
                    </Button>
                </div>

                {/* Resume Content */}
                <div className="p-8 md:p-12 print:p-0">
                    {/* Header */}
                    <header className="border-b-2 border-gray-100 dark:border-gray-800 pb-8 mb-8">
                        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">Abdulkabir Musa</h1>
                        <h2 className="text-xl text-blue-600 dark:text-blue-400 font-medium mb-4">AI Platform Engineer & Full Stack Developer</h2>

                        <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
                            <a href="mailto:musaabdulkabeer19@gmail.com" className="flex items-center hover:text-blue-600">
                                <Mail className="mr-1 h-4 w-4" /> musaabdulkabeer19@gmail.com
                            </a>
                            <a href="https://github.com/AIEraDev" className="flex items-center hover:text-blue-600">
                                <Github className="mr-1 h-4 w-4" /> github.com/AIEraDev
                            </a>
                            <a href="https://linkedin.com/in/abdulkabirmusa" className="flex items-center hover:text-blue-600">
                                <Linkedin className="mr-1 h-4 w-4" /> linkedin.com/in/abdulkabirmusa
                            </a>
                            <a href="https://aieradev.vercel.app" className="flex items-center hover:text-blue-600">
                                <Globe className="mr-1 h-4 w-4" /> aieradev.vercel.app
                            </a>
                        </div>
                    </header>

                    {/* Summary */}
                    <section className="mb-8">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white uppercase tracking-wider border-b border-gray-200 dark:border-gray-700 pb-2 mb-4">Professional Summary</h3>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                            AI Platform Engineer and Co-founder of AIEraDev, dedicated to advancing AI education and development in Africa.
                            Combines deep technical expertise in Machine Learning and Full Stack development to build intelligent, context-aware systems.
                            Specializes in bridging the gap between ML models and production web apps using Python, TypeScript, and Next.js.
                        </p>
                    </section>

                    {/* Experience */}
                    <section className="mb-8">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white uppercase tracking-wider border-b border-gray-200 dark:border-gray-700 pb-2 mb-4">Experience</h3>

                        <div className="mb-6">
                            <div className="flex justify-between items-baseline mb-1">
                                <h4 className="text-lg font-bold text-gray-900 dark:text-white">Co-founder & CEO</h4>
                                <span className="text-sm text-gray-500">2023 - Present</span>
                            </div>
                            <div className="text-blue-600 dark:text-blue-400 font-medium mb-2">AIEraDev</div>
                            <ul className="list-disc list-outside ml-5 text-gray-700 dark:text-gray-300 space-y-1">
                                <li>Leading the mission to democratize AI education and community building across Africa.</li>
                                <li>Architecting context-aware AI solutions using the Model Context Protocol (MCP).</li>
                                <li>Mentoring the next generation of African developers through workshops and open-source initiatives.</li>
                            </ul>
                        </div>
                    </section>

                    {/* Projects */}
                    <section className="mb-8">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white uppercase tracking-wider border-b border-gray-200 dark:border-gray-700 pb-2 mb-4">Key Projects</h3>

                        <div className="space-y-4">
                            <div>
                                <div className="flex justify-between items-baseline">
                                    <h4 className="font-bold text-gray-900 dark:text-white">Phantom</h4>
                                    <span className="text-sm text-gray-500">TypeScript, Kiro</span>
                                </div>
                                <p className="text-gray-700 dark:text-gray-300 text-sm">Real-time 1v1 coding battle platform delivering low-latency competitive environments.</p>
                            </div>

                            <div>
                                <div className="flex justify-between items-baseline">
                                    <h4 className="font-bold text-gray-900 dark:text-white">StayGoTransit</h4>
                                    <span className="text-sm text-gray-500">MERN Stack, TypeScript</span>
                                </div>
                                <p className="text-gray-700 dark:text-gray-300 text-sm">Robust transportation logistics app ensuring type-safe reliability for complex scheduling.</p>
                            </div>

                            <div>
                                <div className="flex justify-between items-baseline">
                                    <h4 className="font-bold text-gray-900 dark:text-white">Blossom-Blend</h4>
                                    <span className="text-sm text-gray-500">MERN Stack</span>
                                </div>
                                <p className="text-gray-700 dark:text-gray-300 text-sm">Dynamic e-commerce platform with seamless product management and optimized user flows.</p>
                            </div>
                        </div>
                    </section>

                    {/* Skills */}
                    <section className="mb-8">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white uppercase tracking-wider border-b border-gray-200 dark:border-gray-700 pb-2 mb-4">Technical Skills</h3>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <h4 className="font-bold text-gray-900 dark:text-white mb-2">Languages & Frontend</h4>
                                <p className="text-gray-700 dark:text-gray-300 text-sm">JavaScript (ES6+), TypeScript, Python, React, Next.js, Tailwind CSS, HTML5, CSS3</p>
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900 dark:text-white mb-2">Backend & AI</h4>
                                <p className="text-gray-700 dark:text-gray-300 text-sm">Node.js, Express, NestJS, MongoDB, PostgreSQL, MCP, Machine Learning</p>
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900 dark:text-white mb-2">Tools & DevOps</h4>
                                <p className="text-gray-700 dark:text-gray-300 text-sm">Git, GitHub Actions, Docker, AWS, Vercel</p>
                            </div>
                        </div>
                    </section>

                    {/* Education */}
                    <section>
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white uppercase tracking-wider border-b border-gray-200 dark:border-gray-700 pb-2 mb-4">Education</h3>
                        <div>
                            <div className="flex justify-between items-baseline">
                                <h4 className="font-bold text-gray-900 dark:text-white">University of Ibadan</h4>
                                <span className="text-sm text-gray-500">Graduated</span>
                            </div>
                            <p className="text-gray-700 dark:text-gray-300">Bachelor of Science in Computer Science</p>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}
