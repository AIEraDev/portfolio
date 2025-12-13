import Image from "next/image";
import { Github, ExternalLink } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface ProjectCardProps {
    title: string;
    description: string;
    tags: string[];
    image?: string;
    demoUrl?: string;
    repoUrl?: string;
}

export function ProjectCard({ title, description, tags, image, demoUrl, repoUrl }: ProjectCardProps) {
    return (
        <Card className="overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-300 dark:bg-gray-900/50 backdrop-blur-sm group h-full flex flex-col">
            <div className="relative h-48 w-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 group-hover:opacity-0 transition-opacity duration-500 z-10"></div>
                <Image
                    src={image || "/placeholder.jpg"}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
            </div>

            <CardHeader>
                <CardTitle className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                    {title}
                </CardTitle>
                <div className="flex flex-wrap gap-2 mt-2">
                    {tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 hover:bg-blue-100 dark:hover:bg-blue-900/40 transition-colors">
                            {tag}
                        </Badge>
                    ))}
                </div>
            </CardHeader>

            <CardContent className="flex-grow">
                <CardDescription className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {description}
                </CardDescription>
            </CardContent>

            <CardFooter className="flex justify-between gap-4 pt-4 border-t border-gray-100 dark:border-gray-800">
                {repoUrl && (
                    <Button variant="outline" size="sm" className="w-full group hover:border-blue-500 hover:text-blue-500 transition-colors" asChild>
                        <a href={repoUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="mr-2 h-4 w-4" />
                            Code
                        </a>
                    </Button>
                )}
                {demoUrl && (
                    <Button size="sm" className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-none" asChild>
                        <a href={demoUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Live Demo
                        </a>
                    </Button>
                )}
            </CardFooter>
        </Card>
    );
}
