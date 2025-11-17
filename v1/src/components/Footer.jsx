import React from "react";
import { motion } from "framer-motion";
import { SiLinkedin, SiGithub, SiTelegram } from "react-icons/si";
import { Copyright } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-[#0B0B0B] border-t border-[#1e1e1e] px-6 py-10 text-center text-sm text-gray-500">
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <div className="flex items-center justify-center gap-2 mb-2 text-gray-400">
                    <Copyright className="w-4 h-4" />
                    <span>{new Date().getFullYear()} David. All rights reserved.</span>
                </div>

                <div className="flex justify-center gap-4 text-xl text-gray-400">
                    <a
                        href="https://github.com/dawit-yitbarek"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[#F2613F] transition"
                    >
                        <SiGithub />
                    </a>
                    <a
                        href="https://linkedin.com/in/dawit-yitbarek-136984373"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[#F2613F] transition"
                    >
                        <SiLinkedin />
                    </a>
                    <a
                        href="https://t.me/davidyz17"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[#F2613F] transition"
                    >
                        <SiTelegram />
                    </a>
                </div>
            </motion.div>
        </footer>
    );
};