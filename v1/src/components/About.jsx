import React from "react";
import { motion } from "framer-motion";
import { Lightbulb, Rocket, Puzzle, Brain } from "lucide-react";

export default function About() {
    return (
        <section id="about" className="relative z-10 px-6 py-16 bg-[#0C0C0C]">
            <div className="max-w-5xl mx-auto text-center">
                <motion.h2
                    className="text-3xl md:text-4xl font-bold text-[#F2613F] mb-6"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    About Me
                </motion.h2>

                <motion.p
                    className="text-lg text-gray-300 mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    I'm a passionate full stack web developer who loves transforming ideas into real-world applications. With a sharp eye for detail and a strong technical foundation, I enjoy building beautiful user interfaces and powerful backend systems.
                </motion.p>

                <motion.p
                    className="text-lg text-gray-300 mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15, duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    I enjoy solving complex challenges and turning them into seamless user experiences. Whether it's designing a clean UI, optimizing backend performance, or integrating APIs, I strive for quality and maintainability in every line of code.
                </motion.p>
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left max-w-3xl mx-auto"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ staggerChildren: 0.2 }}
                >
                    {[
                        { icon: <Lightbulb className="text-[#F2613F] w-6 h-6" />, text: "I craft responsive and elegant frontends" },
                        { icon: <Rocket className="text-[#F2613F] w-6 h-6" />, text: "I develop secure and scalable backend APIs" },
                        { icon: <Puzzle className="text-[#F2613F] w-6 h-6" />, text: "I integrate third-party services & APIs" },
                        { icon: <Brain className="text-[#F2613F] w-6 h-6" />, text: "I focus on performance and clean code" },
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            className="flex items-start gap-3 text-sm text-gray-400"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                        >
                            {item.icon}
                            <span>{item.text}</span>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.blockquote
                    className="mt-10 text-[#9B3922] italic text-base border-l-4 border-[#F2613F] pl-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    "Problem-solving is the foundation of development — but building elegant, user-focused solutions is what truly sets great developers apart."
                </motion.blockquote>
            </div>
        </section>
    );
};