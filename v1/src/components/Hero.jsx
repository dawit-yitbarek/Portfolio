import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import "@fontsource-variable/inter";

const roles = [
    "Full Stack Developer",
    "Frontend Craftsman",
    "Backend Architect",
    "Modern UI Builder",
    "Web App Engineer",
];

export default function Hero() {
    const [currentText, setCurrentText] = useState("");
    const [charIndex, setCharIndex] = useState(0);
    const [roleIndex, setRoleIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const fullText = roles[roleIndex];
        let timeout;

        if (!isDeleting && charIndex < fullText.length) {
            setCurrentText(fullText.substring(0, charIndex + 1));
            timeout = setTimeout(() => setCharIndex((prev) => prev + 1), 100);
        } else if (!isDeleting && charIndex === fullText.length) {
            timeout = setTimeout(() => setIsDeleting(true), 1500);
        } else if (isDeleting && charIndex > 0) {
            setCurrentText(fullText.substring(0, charIndex - 1));
            timeout = setTimeout(() => setCharIndex((prev) => prev - 1), 50);
        } else if (isDeleting && charIndex === 0) {
            setIsDeleting(false);
            setRoleIndex((prev) => (prev + 1) % roles.length);
        }

        return () => clearTimeout(timeout);
    }, [charIndex, isDeleting, roleIndex]);

    return (
        <section className="relative z-10 px-6 py-16 md:py-32 text-center flex flex-col items-center justify-center gap-6 min-h-[80vh]">
            <motion.div
                className="bg-[#111111]/50 backdrop-blur-md px-8 py-6 rounded-2xl border border-[#222831] shadow-xl max-w-3xl"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                <motion.h2
                    className="text-4xl md:text-6xl font-extrabold leading-tight"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                >
                    Building Experiences,
                    <br className="hidden md:block" />
                    <span className="text-[#00ADB5]">Not Just Websites.</span>
                </motion.h2>

                <motion.p
                    className="mt-4 text-[#CCCCCC] text-lg md:text-xl font-mono h-[32px]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                >
                    &gt; {currentText}_
                </motion.p>

                <motion.div
                    className="mt-8"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                >
                    <a href="#projects" >
                        <Button className="bg-[#F2613F] hover:bg-[#e9552f] text-white px-6 py-3 text-lg rounded-xl shadow-md shadow-[#F2613F]/30 transition-all">
                            View Projects <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                    </a>
                </motion.div>
            </motion.div>
        </section>
    );
};