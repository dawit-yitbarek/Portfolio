"use client";

import { useState } from "react";
import { projects, Category, CATEGORIES, buttonTexts } from "@/config/constants";


export default function Projects() {
    const [selectedCategory, setSelectedCategory] = useState<Category>("All");

    const filteredProjects = selectedCategory === "All"
        ? projects
        : projects.filter((p) => p.category?.category === selectedCategory);

    return (
        <section id="projects" className="py-14 container px-6 md:px-0 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
                Projects
            </h2>

            <p className="text-gray-400 max-w-xl mb-8">
                A selection of real-world projects I've built — from full-stack web applications
                to mobile apps, Telegram bots, and Telegram mini-apps.
            </p>

            {/* Category Filter Tabs */}
            <div className="flex flex-wrap gap-2 mb-10 border-b border-white/10 pb-6">
                {CATEGORIES.map((category) => (
                    <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition ${selectedCategory === category
                            ? "bg-white text-black font-semibold"
                            : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/5"
                            }`}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                {filteredProjects.length > 0 ? (
                    filteredProjects.map((p, i) => (
                        <ProjectCard key={i} {...p} />
                    ))
                ) : (
                    <div className="col-span-full py-12 text-center text-gray-500">
                        No projects found in this category yet.
                    </div>
                )}
            </div>
        </section>
    );
}

interface ProjectProps {
    title: string;
    description: string;
    image: string;
    tech: string[];
    link: string;
    category: { label: String, category: Category };
    botData?: { commands: string[], username: string };
}

function ProjectCard({ title, description, image, tech, link, category, botData }: ProjectProps) {
    const [isExpanded, setIsExpanded] = useState(false);
    const maxLength = 150;
    const isBot = category?.category === "Telegram Bots" && botData;

    const truncatedDescription = description.length > maxLength
        ? `${description.substring(0, maxLength)}...`
        : description;

    return (
        <div className="bg-[#111] rounded-xl overflow-hidden border border-white/5 hover:border-white/20 transition group flex flex-col h-full relative">
            {/* Category tag badge */}
            <span className="absolute top-3 right-3 z-10 text-[10px] tracking-wider uppercase bg-black/70 backdrop-blur-md text-white/80 px-2.5 py-1 rounded-full border border-white/10">
                {category.label}
            </span>

            {/* Visual Header: Conditional rendering for Bots vs Visual Apps */}
            {isBot ? (
                <div className="h-48 w-full bg-[#0a0a0a] border-b border-white/5 p-4 flex flex-col font-mono text-xs">
                    <div className="flex items-center justify-between text-gray-500 border-b border-white/5 pb-2">
                        <span className="flex items-center gap-1.5">
                            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                            <a
                                href={link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:underline"
                            >
                                @{botData.username.replace("@", "")}
                            </a>
                        </span>
                    </div>
                    <div className="space-y-1.5 text-gray-300 py-2">
                        <p className="text-gray-500 mb-1">// Available commands:</p>

                        {/* Scrollable container */}
                        <div className="max-h-32 overflow-y-auto space-y-1 pr-1 custom-scrollbar">
                            {botData.commands.map((cmd, idx) => (
                                <div key={idx} className="bg-white/5 px-2.5 py-1 rounded text-white/90 flex items-center justify-between text-[11px]">
                                    <span className="text-blue-400 font-mono">{cmd}</span>
                                    <span className="text-[10px] text-gray-500">active</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ) : (
                // Image View for Websites, Mobile Apps, and Mini-Apps
                <div className={`h-48 w-full overflow-hidden flex items-center justify-center ${category.category === "Mobile Apps" || category.category === "Telegram Mini-Apps"
                        ? "bg-neutral-950 p-3"
                        : "bg-neutral-900"
                    }`}>
                    <img
                        loading="lazy"
                        src={image || "/placeholder.png"}
                        alt={title}
                        className={`w-full h-full transition group-hover:scale-105 ${category.category === "Mobile Apps" || category.category === "Telegram Mini-Apps"
                                ? "object-contain drop-shadow-md" // Prevents cropping, shows full phone screen
                                : ""                  // Fills landscape for websites
                            }`}
                    />
                </div>
            )}

            {/* Content */}
            <div className="p-5 space-y-3 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold">{title}</h3>
                <p className="text-gray-400 text-sm">
                    {isExpanded ? description : truncatedDescription}

                    {description.length > maxLength && (
                        <button
                            onClick={() => setIsExpanded((prev) => !prev)}
                            className="inline-block text-sm text-white hover:text-white/60 transition ml-2"
                        >
                            {isExpanded ? "Read Less" : "Read More"}
                        </button>
                    )}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 pt-2">
                    {tech.map((t, i) => (
                        <span
                            key={i}
                            className="text-xs bg-white/10 px-2 py-1 rounded-md border border-white/10"
                        >
                            {t}
                        </span>
                    ))}
                </div>

                {/* View Button */}
                <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-center bg-white text-black mt-auto px-4 py-2 text-sm font-semibold border border-white rounded-md hover:bg-white/70 hover:text-black hover:border-white/50 transition"
                >
                    {category.category === "All" ? "View project" : buttonTexts[category.category]}
                </a>
            </div>
        </div>
    );
};