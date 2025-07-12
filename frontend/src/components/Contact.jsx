import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";
import { Mail, Send } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="relative z-10 px-6 py-24 bg-[#0C0C0C] border-t border-[#1e1e1e]">
            <div className="max-w-4xl mx-auto text-center">
                <motion.h2
                    className="text-3xl md:text-4xl font-bold text-[#F2613F] mb-6"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    Let's Work Together
                </motion.h2>

                <motion.p
                    className="text-lg text-gray-300 mb-10 max-w-xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    Whether you have a project idea or just want to connect — feel free to reach out!
                </motion.p>

                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-3 gap-6"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ staggerChildren: 0.2 }}
                >
                    {[
                        {
                            icon: <Mail className="w-6 h-6 text-[#F2613F]" />,
                            label: "Email",
                            value: "davidyit17@gmail.com",
                            href: "mailto:davidyit17@gmail.com"
                        },
                        {
                            icon: <Send className="w-6 h-6 text-[#F2613F]" />,
                            label: "Telegram",
                            value: "@davidyz17",
                            href: "https://t.me/davidyz17"
                        },
                        {
                            icon: <FaLinkedin className="w-6 h-6 text-[#F2613F]" />,
                            label: "LinkedIn",
                            value: "Connect",
                            href: "https://linkedin.com/in/dawit-yitbarek-136984373"
                        },
                    ].map((item, i) => (
                        <motion.a
                            key={i}
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[#1a1a1a] p-6 rounded-xl hover:bg-[#2a2a2a] transition border border-[#2d2d2d] shadow-md"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <div className="flex items-center justify-center mb-3">
                                {item.icon}
                            </div>
                            <h4 className="text-[#F2613F] font-semibold mb-1">{item.label}</h4>
                            <p className="text-sm text-gray-400">{item.value}</p>
                        </motion.a>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};