import React from "react";
import { motion } from "framer-motion";
import { Award } from "lucide-react";

const certifications = [
    {
        title: "Web Programming Certificate",
        issuer: "Ethiopian Coders Initiative (Gov. of Ethiopia & UAE)",
        year: "2025",
        description: "Completed a government-backed intensive training program focused on web Programming.",
        url: "https://www.udacity.com/certificate/e/6556e846-c2a2-11ef-8912-37fa386598ab",
    },
    // {
    //     title: "Web Development Certificate",
    //     issuer: "SoloLearn",
    //     year: "2024",
    //     description: "Completed self-paced foundational web development course covering HTML, CSS, and JavaScript.",
    //     url: "https://api2.sololearn.com/v2/certificates/CC-8DO72SUQ/image/png?t=638407670268797400",
    // },
];

export default function Certifications() {
    return (
        <section id="certifications" className="relative z-10 px-6 py-24 bg-[#0C0C0C] border-t border-[#1e1e1e]">
            <div className="max-w-5xl mx-auto text-center">
                <motion.h2
                    className="text-3xl md:text-4xl font-bold text-[#F2613F] mb-6"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    Certifications & Achievements
                </motion.h2>

                <motion.p
                    className="text-lg text-gray-300 mb-10 max-w-xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    Recognitions and certifications that mark my journey in web development.
                </motion.p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={index}
                            className="bg-[#1a1a1a] p-6 rounded-xl border border-[#2d2d2d] shadow-md hover:bg-[#2a2a2a] transition"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div className="flex items-center gap-3 mb-3">
                                <Award className="w-6 h-6 text-[#F2613F]" />
                                <h3 className="text-lg font-semibold text-[#F2613F]">{cert.title}</h3>
                            </div>
                            <p className="text-sm text-gray-400 mb-1">{cert.issuer}</p>
                            <p className="text-xs text-gray-500 mb-3">{cert.year}</p>
                            <p className="text-sm text-gray-300 mb-4">{cert.description}</p>
                            {cert.url && (
                                <a
                                    href={cert.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm text-[#F2613F] hover:underline"
                                >
                                    {cert.issuer === 'SoloLearn' ? 'Download Certificate' : 'View Certificate'}
                                </a>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};