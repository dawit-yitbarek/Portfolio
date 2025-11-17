"use client";

import { useState } from "react";

export default function Projects() {
    const projects = [
        {
            title: "4-3-3 Media Network",
            description: "A modern multi-category media platform unifying sports, Forex, crypto, film, games, and news content with a secure admin system, Telegram integration, and real-time content publishing. Fully optimized for performance, accessibility, and SEO.",
            image: "/images/433media.jpg",
            tech: ["React", "Tailwind CSS", "Node.js", "Express", "PostgreSQL", "JWT Auth"],
            link: "https://433-media-network.vercel.app/"
        },
        {
            title: "Nova Realm",
            description: "A full-stack airdrop website with tasks, referrals, rewards, and Solana integration.",
            image: "/images/nova.png",
            tech: ["React", "Tailwind CSS", "Node.js", "Express", "PostgreSQL", "Solana", "Google OAuth"],
            link: "https://nova-realm.vercel.app/"
        },
        {
            title: "Geld Earn Bot & Mini App",
            description: "A complete Telegram referral system with a custom mini-app. Includes referral tracking, user ranking, admin dashboard, task system, joining verification, and fraud-resistant referral approval. The mini-app features real-time leaderboard, profile management, and admin tools for user and referral inspection.",
            image: "/images/geldearn.jpg",
            tech: ["React", "Tailwind CSS", "Node.js", "Express", "PostgreSQL", "Telegram Bot API", "Telegram Mini App"],
            link: "https://t.me/Geldearn_Bot?start=6867085646"
        },
        {
            title: "Becoz Real Estate",
            description: "A clean and modern real estate website with filtering, listings, and admin panel.",
            image: "/images/becoz.png",
            tech: ["React", "Tailwind CSS", "Node.js", "Express", "PostgreSQL", "Cloudinary"],
            link: "https://becoz.vercel.app/"
        },
        {
            title: "Mira Jersey",
            description: "E-commerce platform for selling jerseys with Chapa payment integration.",
            image: "/images/mira.webp",
            tech: ["React", "Tailwind CSS", "Node.js", "Express", "Chapa API", "PostgreSQL", "Cloudinary"],
            link: "https://mirajersey.netlify.app/"
        },
        {
            title: "Rising Star Academy",
            description: "Educational website for a private academy with Kindergarten to Grade 8 branches. Includes about sections, accreditation highlights, campus facilities, and SEO-optimized layout.",
            image: "/images/rising.png",
            tech: ["React", "Tailwind CSS"],
            link: "https://rsa-ethiopia.vercel.app"
        },
        {
            title: "ግጥም Lounge",
            description: "Poem reading and publishing platform where anyone can explore poems or sign up to share their own, with a clean profile system, modern UI, and smooth reading experience.",
            image: "/images/gitimlounge.webp",
            tech: ["React", "Tailwind CSS", "Node.js", "Express", "PostgreSQL"],
            link: "https://gitimlounge.vercel.app",
        },
        {
            title: "Akotet Shoes",
            description: "Premium leather e-commerce platform with online payments, order tracking, and responsive design.",
            image: '/images/akotet.png',
            tech: ["React", "Tailwind CSS", "Chapa API", "Node.js", "Express", "PostgreSql", "Cloudinary"],
            link: "https://akotet-shoes.vercel.app",
        },
        {
            title: "Sis Curtain",
            description: "Elegant website for a curtain and carpet seller. Built with a sleek dark design and product highlight sections to showcase home decor solutions with delivery service.",
            image: "/images/sis.png",
            tech: ["React", "Tailwind CSS"],
            link: "https://sis-curtains.vercel.app"
        },
    ];

    return (
        <section id="projects" className="py-14 container px-6 md:px-0 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
                Projects
            </h2>

            <p className="text-gray-400 max-w-xl mb-12">
                A selection of real-world projects I've built — from full-stack web applications
                to modern business websites and Telegram mini-apps.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                {projects.map((p, i) => (
                    <ProjectCard key={i} {...p} />
                ))}
            </div>
        </section>
    );
}

function ProjectCard({ title, description, image, tech, link }: { title: string; description: string; image: string; tech: string[]; link: string; }) {
    const [isExpanded, setIsExpanded] = useState(false);
    const maxLength = 150;

    const truncatedDescription = description.length > maxLength
        ? `${description.substring(0, maxLength)}...`
        : description;

    const handleToggle = () => {
        setIsExpanded((prev) => !prev);
    };

    return (
        <div className="bg-[#111] rounded-xl overflow-hidden border border-white/5 hover:border-white/20 transition group flex flex-col h-full">
            {/* Image */}
            <div className="h-48 w-full overflow-hidden">
                <img
                    loading="lazy"
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover group-hover:scale-105 transition"
                />
            </div>

            {/* Content */}
            <div className="p-5 space-y-3 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold">{title}</h3>
                <p className="text-gray-400 text-sm">
                    {isExpanded ? description : truncatedDescription}

                    {description.length > maxLength && (
                        <button
                            onClick={handleToggle}
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
                    className="inline-block bg-white text-black mt-auto px-4 py-2 text-sm font-semibold border border-white rounded-md hover:bg-white/70 hover:text-black hover:border-white/50 transition"
                >
                    View Project
                </a>
            </div>
        </div>
    );
};