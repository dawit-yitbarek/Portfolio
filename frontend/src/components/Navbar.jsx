import React, { useState } from "react";
import { Menu, X } from "lucide-react"

const navLinks = [
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
];

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 w-full z-50 border-b border-[#222831] bg-[#0C0C0C]/80 backdrop-blur px-6 py-2">
            <div className="max-w-6xl mx-auto flex items-center justify-between">
                <h1 className="text-2xl font-bold text-[#00ADB5]">David.Dev</h1>
                <nav className="hidden md:flex gap-6 text-sm">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="text-gray-300 hover:text-[#F2613F] transition"
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>

                <button
                    className="md:hidden text-gray-300 hover:text-[#F2613F]"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {menuOpen && (
                <div className="md:hidden mt-4 px-4">
                    <div className="flex flex-col gap-4">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={() => setMenuOpen(false)}
                                className="text-gray-300 hover:text-[#F2613F] transition"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </header>
    );
};