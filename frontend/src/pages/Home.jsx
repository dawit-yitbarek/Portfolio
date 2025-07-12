import React, { useEffect } from "react";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills"
import About from "../components/About"
import Contact from "../components/Contact";
import Certifications from '../components/Certifications';
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import "@fontsource-variable/inter";

export default function HomePage() {

  useEffect(() => {
    document.title = "Dawit | Full Stack Web Developer";
  }, []);

  return (
    <div className="relative min-h-screen bg-[#0C0C0C] text-[#EEEEEE] font-inter overflow-hidden">

      {/* Background Blobs */}
      <div className="absolute top-[-150px] left-[-100px] w-[500px] h-[500px] bg-[#00ADB5] opacity-25 rounded-full filter blur-3xl animate-pulse z-0"></div>
      <div className="absolute top-[200px] right-[-150px] w-[400px] h-[400px] bg-[#00ADB5] opacity-10 rounded-full filter blur-3xl animate-pulse z-0"></div>

      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Projects Section */}
      <Projects />

      {/* Skills Section */}
      <Skills />

      {/* About Section */}
      <About />

      {/* Contact Section */}
      <Contact />

      {/* Certifications Section */}
      <Certifications />

      {/* Footer Section */}
      <Footer />
    </div>
  );
};