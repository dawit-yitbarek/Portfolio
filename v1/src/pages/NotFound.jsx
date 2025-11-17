import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import { Ghost } from "lucide-react";

export default function NotFound() {
    return (
        <div className="min-h-screen bg-[#0C0C0C] text-[#EEEEEE] flex flex-col items-center justify-center px-6 py-24 text-center font-inter">
            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-6" >
                <Ghost className="w-16 h-16 text-[#F2613F]" />
            </motion.div>

            <motion.h1 className="text-4xl md:text-5xl font-bold mb-4" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.5 }} >
                404 - Page Not Found
            </motion.h1>

            <motion.p className="text-gray-400 mb-8 max-w-md" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.5 }} >
                Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.5 }} >
                <Button asChild>
                    <Link to="/" className="bg-[#F2613F] rounded w-full h-full block px-4 py-2">Go Back Home</Link>
                </Button>
            </motion.div>
        </div>
    );
};
