"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const headerRef = useRef<HTMLElement | null>(null);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    // Close the menu if clicked outside
    const handleClickOutside = (event: MouseEvent) => {
        if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
            setMenuOpen(false);
        }
    };

    // Set up event listener for clicks outside
    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);

        // Cleanup the event listener when the component unmounts
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <header ref={headerRef} className="fixed w-full bg-black/80 backdrop-blur-md z-50">
            <div className="container flex items-center justify-between py-4 md:py-6">
                <Link href="/" className="text-3xl md:text-4xl pl-8 font-bold text-white">
                    Dawit
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex space-x-8 text-gray-300 text-base md:text-lg font-medium">
                    <Link href="#projects" className="hover:text-white transition-colors">
                        Projects
                    </Link>
                    <Link href="#about" className="hover:text-white transition-colors">
                        About
                    </Link>
                    <Link href="#contact" className="hover:text-white transition-colors">
                        Contact
                    </Link>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden pr-8 text-gray-300 focus:outline-none"
                    onClick={toggleMenu}
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d={
                                menuOpen
                                    ? "M6 18L18 6M6 6l12 12"
                                    : "M4 6h16M4 12h16M4 18h16"
                            }
                        />
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <nav className="md:hidden bg-black/90 text-gray-300 flex flex-col items-center space-y-4 py-4">
                    <Link href="/" className="hover:text-white transition-colors" onClick={() => setMenuOpen(false)}>
                        Home
                    </Link>
                    <Link href="/projects" className="hover:text-white transition-colors" onClick={() => setMenuOpen(false)}>
                        Projects
                    </Link>
                    <Link href="/about" className="hover:text-white transition-colors" onClick={() => setMenuOpen(false)}>
                        About
                    </Link>
                    <Link href="/contact" className="hover:text-white transition-colors" onClick={() => setMenuOpen(false)}>
                        Contact
                    </Link>
                </nav>
            )}
        </header>
    );
};