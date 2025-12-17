"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Printer, Mail, Github, Linkedin, Globe, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

export default function ResumePage() {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-950 py-10 px-4 sm:px-6 lg:px-8 print:bg-white print:p-0">
            <div className="max-w-4xl mx-auto bg-white dark:bg-gray-900 shadow-lg rounded-xl overflow-hidden print:shadow-none print:rounded-none print:max-w-none">
                {/* Header / Actions - Hidden in Print */}
                <div className="bg-gray-50/50 dark:bg-gray-900/50 p-4 flex justify-between items-center border-b border-gray-200 dark:border-gray-800 print:hidden backdrop-blur-sm sticky top-0 z-10">
                    <Link to="/" className="flex items-center text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back to Portfolio
                    </Link>
                    <Button onClick={() => window.print()} variant="outline" size="sm" className="flex items-center gap-2">
                        <Printer className="h-4 w-4" />
                        Print / Save PDF
                    </Button>
                </div>

                {/* Resume Content */}
                <div className="p-8 md:p-12 print:p-0 print:text-black">
                    {/* Header */}
                    <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10">
                        <div>
                            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white tracking-tight mb-2 print:text-black">
                                Abdulkabir Musa
                            </h1>
                            <h2 className="text-xl text-primary font-medium mb-4 print:text-black">
                                AI Platform Engineer & Full Stack Developer
                            </h2>
                            <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm print:text-black">
                                <MapPin className="mr-1 h-3 w-3" />
                                <span>Nigeria (Open to Remote)</span>
                            </div>
                        </div>

                        <div className="flex flex-col gap-2 text-sm text-gray-600 dark:text-gray-400 print:text-black">
                            <a href="mailto:musaabdulkabeer19@gmail.com" className="flex items-center hover:text-primary transition-colors print:text-black">
                                <Mail className="mr-2 h-4 w-4" /> musaabdulkabeer19@gmail.com
                            </a>
                            <a href="https://github.com/AIEraDev" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-primary transition-colors print:text-black">
                                <Github className="mr-2 h-4 w-4" /> github.com/AIEraDev
                            </a>
                            <a href="https://linkedin.com/in/abdulkabirmusa" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-primary transition-colors print:text-black">
                                <Linkedin className="mr-2 h-4 w-4" /> linkedin.com/in/abdulkabirmusa
                            </a>
                            <a href="https://abdulkabirmusa.com" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-primary transition-colors print:text-black">
                                <Globe className="mr-2 h-4 w-4" /> abdulkabirmusa.com
                            </a>
                        </div>
                    </header>

                    <Separator className="my-8 print:hidden" />

                    {/* Summary */}
                    <section className="mb-10 break-inside-avoid">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white uppercase tracking-wider mb-4 flex items-center gap-2 print:text-black">
                            <span className="w-1 h-6 bg-primary rounded-full inline-block print:bg-black"></span>
                            Professional Summary
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-base print:text-black">
                            AI Platform Engineer and Co-founder of AIEraDev, dedicated to advancing AI education and community building across Africa.
                            I combine deep technical expertise in Machine Learning and Full Stack development to build intelligent, context-aware systems.
                            Specializing in bridging the gap between ML models and production web apps using <strong>Python</strong>, <strong>TypeScript</strong>, and <strong>Next.js</strong>.
                            Passionate about software reliability and the Model Context Protocol (MCP).
                        </p>
                    </section>

                    {/* Experience */}
                    <section className="mb-10 break-inside-avoid">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white uppercase tracking-wider mb-6 flex items-center gap-2 print:text-black">
                            <span className="w-1 h-6 bg-primary rounded-full inline-block print:bg-black"></span>
                            Experience
                        </h3>

                        <div className="relative border-l-2 border-gray-200 dark:border-gray-800 ml-3 pl-8 pb-2 space-y-10 print:border-gray-300">
                            {/* AIEraDev */}
                            <div className="relative break-inside-avoid">
                                <div className="absolute -left-[41px] top-0 h-4 w-4 rounded-full bg-primary ring-4 ring-white dark:ring-gray-900 print:bg-black print:ring-0"></div>
                                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
                                    <h4 className="text-xl font-bold text-gray-900 dark:text-white print:text-black">Co-founder & CEO</h4>
                                    <span className="text-sm font-mono text-gray-500 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded print:bg-transparent print:text-black print:border print:border-gray-300">2023 - Present</span>
                                </div>
                                <div className="text-primary font-medium mb-4 print:text-black">AIEraDev</div>
                                <ul className="list-disc list-outside ml-4 text-gray-700 dark:text-gray-300 space-y-2 text-sm leading-relaxed print:text-black">
                                    <li>Leading the mission to democratize AI education and community building across Africa.</li>
                                    <li>Architecting context-aware AI solutions using the Model Context Protocol (MCP) and LLMs.</li>
                                    <li>Mentoring the next generation of African developers through workshops, hackathons, and open-source initiatives.</li>
                                    <li>Driving technical strategy and product vision for internal tools and community platforms.</li>
                                </ul>
                            </div>

                            {/* Sizemug */}
                            <div className="relative break-inside-avoid">
                                <div className="absolute -left-[41px] top-0 h-4 w-4 rounded-full bg-gray-200 dark:bg-gray-700 ring-4 ring-white dark:ring-gray-900 print:bg-gray-300 print:ring-0"></div>
                                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
                                    <h4 className="text-xl font-bold text-gray-900 dark:text-white print:text-black">Lead Frontend Developer</h4>
                                    <span className="text-sm font-mono text-gray-500 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded print:bg-transparent print:text-black print:border print:border-gray-300">Nov 2024 - Nov 2025</span>
                                </div>
                                <div className="text-primary font-medium mb-4 print:text-black">Sizemug <span className="text-gray-400 font-normal text-sm ml-2 print:text-gray-600">United Kingdom · Remote</span></div>
                                <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-4 print:text-black">
                                    Driving development of user-centric web apps and mentoring frontend teams. Combining technical leadership with hands-on coding to deliver high-quality solutions.
                                </p>

                                <div className="mt-4 pl-4 border-l-2 border-gray-100 dark:border-gray-800 print:border-gray-200">
                                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-1">
                                        <h5 className="text-md font-bold text-gray-800 dark:text-gray-200 print:text-black">Frontend Developer</h5>
                                        <span className="text-xs font-mono text-gray-500 print:text-black">Apr 2024 - Nov 2024</span>
                                    </div>
                                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed print:text-black">
                                        Specialized in designing and developing visually captivating, user-friendly, and high-performance web applications. Bridged the gap between design and engineering.
                                    </p>
                                </div>
                            </div>

                            {/* Deen Minder */}
                            <div className="relative break-inside-avoid">
                                <div className="absolute -left-[41px] top-0 h-4 w-4 rounded-full bg-gray-200 dark:bg-gray-700 ring-4 ring-white dark:ring-gray-900 print:bg-gray-300 print:ring-0"></div>
                                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
                                    <h4 className="text-xl font-bold text-gray-900 dark:text-white print:text-black">Web Frontend Engineer</h4>
                                    <span className="text-sm font-mono text-gray-500 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded print:bg-transparent print:text-black print:border print:border-gray-300">Apr 2024 - Dec 2024</span>
                                </div>
                                <div className="text-primary font-medium mb-4 print:text-black">Deen Minder <span className="text-gray-400 font-normal text-sm ml-2 print:text-gray-600">United Kingdom · Remote</span></div>
                                <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-4 print:text-black">
                                    Developed DeenMinder's responsive web UIs and public site (prayer widget, blog, admin dashboards), optimized for RTL, audio playback, and discoverability.
                                </p>

                                <div className="mt-4 pl-4 border-l-2 border-gray-100 dark:border-gray-800 print:border-gray-200">
                                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-1">
                                        <h5 className="text-md font-bold text-gray-800 dark:text-gray-200 print:text-black">Mobile Frontend Engineer</h5>
                                        <span className="text-xs font-mono text-gray-500 print:text-black">Jan 2024 - Dec 2024</span>
                                    </div>
                                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed print:text-black">
                                        Contributed to developing and optimizing an Islamic app designed to support spiritual productivity. Focused on API integration and Dart development.
                                    </p>
                                </div>
                            </div>

                            {/* DataQolo */}
                            <div className="relative break-inside-avoid">
                                <div className="absolute -left-[41px] top-0 h-4 w-4 rounded-full bg-gray-200 dark:bg-gray-700 ring-4 ring-white dark:ring-gray-900 print:bg-gray-300 print:ring-0"></div>
                                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
                                    <h4 className="text-xl font-bold text-gray-900 dark:text-white print:text-black">Full Stack Developer</h4>
                                    <span className="text-sm font-mono text-gray-500 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded print:bg-transparent print:text-black print:border print:border-gray-300">Apr 2024 - Sep 2024</span>
                                </div>
                                <div className="text-primary font-medium mb-4 print:text-black">DataQolo <span className="text-gray-400 font-normal text-sm ml-2 print:text-gray-600">Nigeria · Remote</span></div>
                                <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed print:text-black">
                                    Played a pivotal role in bridging the gap between offline and online data. Designed and developed scalable web solutions that empowered data-driven decision making.
                                </p>
                            </div>

                            {/* OIC Hub */}
                            <div className="relative break-inside-avoid">
                                <div className="absolute -left-[41px] top-0 h-4 w-4 rounded-full bg-gray-200 dark:bg-gray-700 ring-4 ring-white dark:ring-gray-900 print:bg-gray-300 print:ring-0"></div>
                                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
                                    <h4 className="text-xl font-bold text-gray-900 dark:text-white print:text-black">Frontend Development Tutor</h4>
                                    <span className="text-sm font-mono text-gray-500 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded print:bg-transparent print:text-black print:border print:border-gray-300">Oct 2023 - Oct 2024</span>
                                </div>
                                <div className="text-primary font-medium mb-4 print:text-black">OIC Hub <span className="text-gray-400 font-normal text-sm ml-2 print:text-gray-600">Nigeria · On-site</span></div>
                                <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed print:text-black">
                                    Combined passion for teaching with hands-on development. Tutored and mentored fellow developers while sharpening expertise in frontend development.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Projects */}
                    <section className="mb-10 break-inside-avoid">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white uppercase tracking-wider mb-6 flex items-center gap-2 print:text-black">
                            <span className="w-1 h-6 bg-primary rounded-full inline-block print:bg-black"></span>
                            Key Projects
                        </h3>

                        <div className="grid gap-6">
                            <div className="group break-inside-avoid">
                                <div className="flex justify-between items-baseline mb-2">
                                    <h4 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors print:text-black">Phantom</h4>
                                    <div className="flex gap-2">
                                        <Badge variant="secondary" className="text-xs print:bg-transparent print:border print:border-gray-300 print:text-black">TypeScript</Badge>
                                        <Badge variant="secondary" className="text-xs print:bg-transparent print:border print:border-gray-300 print:text-black">Kiro</Badge>
                                    </div>
                                </div>
                                <p className="text-gray-700 dark:text-gray-300 text-sm mb-2 print:text-black">
                                    Real-time 1v1 coding battle platform engineered to deliver low-latency competitive environments for developer assessment.
                                </p>
                            </div>

                            <div className="group break-inside-avoid">
                                <div className="flex justify-between items-baseline mb-2">
                                    <h4 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors print:text-black">StayGoTransit</h4>
                                    <div className="flex gap-2">
                                        <Badge variant="secondary" className="text-xs print:bg-transparent print:border print:border-gray-300 print:text-black">MERN</Badge>
                                        <Badge variant="secondary" className="text-xs print:bg-transparent print:border print:border-gray-300 print:text-black">TypeScript</Badge>
                                    </div>
                                </div>
                                <p className="text-gray-700 dark:text-gray-300 text-sm mb-2 print:text-black">
                                    Robust full-stack transportation logistics app built ensuring type-safe reliability for complex scheduling and route optimization.
                                </p>
                            </div>

                            <div className="group break-inside-avoid">
                                <div className="flex justify-between items-baseline mb-2">
                                    <h4 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors print:text-black">Blossom-Blend</h4>
                                    <div className="flex gap-2">
                                        <Badge variant="secondary" className="text-xs print:bg-transparent print:border print:border-gray-300 print:text-black">React</Badge>
                                        <Badge variant="secondary" className="text-xs print:bg-transparent print:border print:border-gray-300 print:text-black">Node.js</Badge>
                                    </div>
                                </div>
                                <p className="text-gray-700 dark:text-gray-300 text-sm mb-2 print:text-black">
                                    Dynamic e-commerce platform featuring seamless product management, cart functionality, and optimized user flows.
                                </p>
                            </div>

                            <div className="group break-inside-avoid">
                                <div className="flex justify-between items-baseline mb-2">
                                    <h4 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors print:text-black">WorldWise</h4>
                                    <div className="flex gap-2">
                                        <Badge variant="secondary" className="text-xs print:bg-transparent print:border print:border-gray-300 print:text-black">React</Badge>
                                        <Badge variant="secondary" className="text-xs print:bg-transparent print:border print:border-gray-300 print:text-black">Leaflet</Badge>
                                    </div>
                                </div>
                                <p className="text-gray-700 dark:text-gray-300 text-sm mb-2 print:text-black">
                                    Interactive map tracking application enabling users to document global travels with geospatial precision.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Skills */}
                    <section className="mb-10 break-inside-avoid">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white uppercase tracking-wider mb-6 flex items-center gap-2 print:text-black">
                            <span className="w-1 h-6 bg-primary rounded-full inline-block print:bg-black"></span>
                            Technical Skills
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="break-inside-avoid">
                                <h4 className="font-bold text-gray-900 dark:text-white mb-3 text-sm uppercase tracking-wide print:text-black">Languages</h4>
                                <div className="flex flex-wrap gap-2">
                                    {["TypeScript", "JavaScript (ES6+)", "Python", "HTML5", "CSS3", "SQL"].map((skill) => (
                                        <Badge key={skill} variant="outline" className="font-normal print:text-black print:border-gray-300">{skill}</Badge>
                                    ))}
                                </div>
                            </div>
                            <div className="break-inside-avoid">
                                <h4 className="font-bold text-gray-900 dark:text-white mb-3 text-sm uppercase tracking-wide print:text-black">Frameworks & Libs</h4>
                                <div className="flex flex-wrap gap-2">
                                    {["React", "Next.js", "Node.js", "Express", "NestJS", "Tailwind CSS"].map((skill) => (
                                        <Badge key={skill} variant="outline" className="font-normal print:text-black print:border-gray-300">{skill}</Badge>
                                    ))}
                                </div>
                            </div>
                            <div className="break-inside-avoid">
                                <h4 className="font-bold text-gray-900 dark:text-white mb-3 text-sm uppercase tracking-wide print:text-black">Tools & Platforms</h4>
                                <div className="flex flex-wrap gap-2">
                                    {["Git", "Docker", "AWS", "Vercel", "MongoDB", "PostgreSQL", "MCP"].map((skill) => (
                                        <Badge key={skill} variant="outline" className="font-normal print:text-black print:border-gray-300">{skill}</Badge>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Education */}
                    <section className="break-inside-avoid">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white uppercase tracking-wider mb-6 flex items-center gap-2 print:text-black">
                            <span className="w-1 h-6 bg-primary rounded-full inline-block print:bg-black"></span>
                            Education
                        </h3>
                        <div className="flex justify-between items-center">
                            <div>
                                <h4 className="text-lg font-bold text-gray-900 dark:text-white print:text-black">University of Ibadan</h4>
                                <p className="text-gray-700 dark:text-gray-300 print:text-black">Bachelor of Science in Computer Science</p>
                            </div>
                            <div className="text-right">
                                <span className="block text-sm font-mono text-gray-500 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded print:bg-transparent print:text-black print:border print:border-gray-300">Graduated</span>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}
