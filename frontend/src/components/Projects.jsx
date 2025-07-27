import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
    {
    title: "Mira Jersey",
    description: "Jersey e-commerce platform featuring modern and classic football jerseys with online payments, order tracking, and a fully responsive design.",
    tech: ["React", "Tailwind CSS", "Chapa API", "Node.js", "Express", "PostgreSQL", "Cloudinary"],
    link: "https://mirajersey.netlify.app",
    image: "/images/mira.webp"
    },
    {
        title: "Akotet Shoes",
        description: "Premium leather e-commerce platform with online payments, order tracking, and responsive design.",
        tech: ["React", "Tailwind CSS", "Chapa API", "Node.js", "Express", "PostgreSql", "Cloudinary"],
        link: "https://akotet-shoes.vercel.app",
        image: '/images/akotet.png'
    },
    {
        title: "Nova Realm",
        description: "Full-stack airdrop reward platform with referral, staking, and Solana integration.",
        tech: ["React", "Tailwind CSS", "Solana", "Node.js", "Express", "PostgreSQL", "JWT", "Google OAuth"],
        link: "https://nova-realm.vercel.app",
        image: "/images/nova.png"
    },
    {
        title: "Becoz Broker",
        description: "Real estate listings site with admin panel, filters, image gallery, and contact features.",
        tech: ["React", "Tailwind CSS", "Node.js", "Express", "Cloudinary", "PostgreSQL"],
        link: "https://becoz.vercel.app",
        image: "/images/becoz.png"
    },
    {
        title: "Rising Star Academy",
        description:
            "Educational website for a private academy with Kindergarten to Grade 8 branches. Includes about sections, accreditation highlights, campus facilities, and SEO-optimized layout.",
        tech: ["React", "Tailwind CSS", "Responsive Design"],
        image: "/images/rising.png",
        link: "https://rsa-ethiopia.vercel.app" 
    },
    {
        title: "Sis Curtain",
        description:
            "Elegant website for a curtain and carpet seller. Built with a sleek dark design and product highlight sections to showcase home decor solutions with delivery service.",
        tech: ["React", "Tailwind CSS", "Responsive Design"],
        image: "/images/sis.png",
        link: "https://sis-curtains.vercel.app" 
    }
];

export default function Projects() {

    return (
        <section id="projects" className="relative z-10 px-6 py-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#00ADB5]">
                Featured Projects
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        className="bg-[#111]/70 backdrop-blur-md p-4 rounded-xl border border-[#222831] hover:border-[#F2613F] transition-all shadow-lg"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        viewport={{ once: true }}
                    >
                        {project.image && (
                            <img
                                src={project.image}
                                alt={`${project.title} Screenshot`}
                                className="rounded-lg mb-4 border border-[#222831]"
                            />
                        )}

                        <h3 className="text-xl font-semibold text-[#EEEEEE] mb-2">
                            {project.title}
                        </h3>
                        <p className="text-[#CCCCCC] text-sm mb-4">{project.description}</p>

                        <div className="flex flex-wrap gap-2 mb-4">
                            {project.tech.map((tech, i) => (
                                <span
                                    key={i}
                                    className="bg-[#222831] text-[#F2613F] text-xs px-3 py-1 rounded-full font-medium"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <a
                            href={project.link}
                            target="_blank"
                            className="inline-flex items-center text-[#00ADB5] hover:text-[#F2613F] text-sm font-semibold"
                        >
                            View Project <ExternalLink className="ml-1 w-4 h-4" />
                        </a>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};
