import React from "react";
import { motion } from "framer-motion";
import { SiHtml5, SiCss3, SiJavascript, SiBootstrap, SiReact, SiTailwindcss, SiNodedotjs, SiExpress, SiPostgresql, SiJsonwebtokens, SiRender, SiVite, SiCloudinary, SiGit } from "react-icons/si";
import { VscCode } from "react-icons/vsc";

const skillGroups = [
    {
        title: "Frontend", skills: [
            { name: "HTML", icon: <SiHtml5 className="text-orange-500 w-7 h-7" /> },
            { name: "CSS", icon: <SiCss3 className="text-blue-500 w-7 h-7" /> },
            { name: "Bootstrap", icon: <SiBootstrap className="text-blue-500 w-7 h-7" /> },
            { name: "JavaScript", icon: <SiJavascript className="text-yellow-400 w-7 h-7" /> },
            { name: "React", icon: <SiReact className="text-cyan-400 w-7 h-7" /> },
            { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400 w-7 h-7" /> },
        ],
    },
    {
        title: "Backend", skills: [
            { name: "Node.js", icon: <SiNodedotjs className="text-green-500 w-7 h-7" /> },
            { name: "Express.js", icon: <SiExpress className="text-gray-300 w-7 h-7" /> },
            { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-600 w-7 h-7" /> },
            { name: "JWT", icon: <SiJsonwebtokens className="text-red-400 w-7 h-7" /> },
        ],
    },
    {
        title: "Tools", skills: [
            { name: "Vite", icon: <SiVite className="text-purple-400 w-7 h-7" /> },
            { name: "Cloudinary", icon: <SiCloudinary className="text-blue-300 w-7 h-7" /> },
            { name: "Git", icon: <SiGit className="text-red-500 w-7 h-7" /> },
            { name: "VS Code", icon: <VscCode className="text-blue-400 w-7 h-7" /> },
        ],
    },
];


export default function Skills() {
    return (
        <section id="skills" className="relative z-10 px-6 py-16 bg-[#0C0C0C]">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#00ADB5]">Tech Stack</h2>

            <div className="max-w-6xl mx-auto space-y-12">
                {skillGroups.map((group, idx) => (
                    <div key={idx}>
                        <h3 className="text-xl font-semibold mb-6 text-[#F2613F]">{group.title}</h3>
                        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6">
                            {group.skills.map((skill, index) => (
                                <motion.div
                                    key={index}
                                    className="flex flex-col items-center gap-2 p-4 rounded-lg hover:bg-[#111]/50 transition"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.05 }}
                                    viewport={{ once: true }}
                                >
                                    {skill.icon}
                                    <span className="text-sm text-[#EEEEEE] text-center">{skill.name}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};