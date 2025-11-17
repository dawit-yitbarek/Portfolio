"use client";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Contact() {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    const [dotCount, setDotCount] = useState(1);

    const sendMessage = async (e: any) => {
        e.preventDefault();

        setLoading(true);
        setSuccess(false);
        setError(false);

        const name = e.target.name.value;
        const email = e.target.email.value;
        const phone = e.target.phone.value;
        const message = e.target.message.value;


        try {
            const res = await axios.post("/api/send-message", {
                name,
                email,
                phone,
                message,
            });

            if (res.data.ok) {
                setSuccess(true);
                e.target.reset();
            } else {
                setError(true);
            }
        } catch (err) {
            setError(true);
        } finally {
            setLoading(false);
        }
    };


    useEffect(() => {
        if (success || error) {
            const timer = setTimeout(() => {
                setSuccess(false);
                setError(false);
            }, 30000);

            return () => clearTimeout(timer);
        }
    }, [success, error]);

    useEffect(() => {
        if (!loading) return;
        const interval = setInterval(() => setDotCount((p) => (p === 3 ? 1 : p + 1)), 400);
        return () => clearInterval(interval);
    }, [loading]);

    return (
        <section id="contact" className="container py-14 px-6 md:px-0 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                Contact Me
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold">
                        Let’s Work Together
                    </h3>

                    <p className="text-gray-300 leading-relaxed">
                        Whether you need a modern website, a full-stack web application, Telegram mini-app,
                        a Telegram bot, or a powerful backend system—I'm ready to help
                        bring your ideas to life.
                    </p>

                    <p className="text-gray-300 leading-relaxed">
                        I specialize in building fast, clean, and professional digital
                        products using technologies like React, Next.js, Node.js,
                        PostgreSQL, and more.
                    </p>

                    <div className="space-y-2 text-gray-400">
                        <p><span className="font-semibold text-white">Email:</span> <a href="mailto:dawityitbarek18@gmail.com" className="hover:underline">dawityitbarek18@gmail.com</a></p>
                        <p><span className="font-semibold text-white">Phone:</span> <a href="tel:+251967305200" className="hover:underline">+251 967 305 200</a></p>
                        <p><span className="font-semibold text-white">Location:</span> Ethiopia</p>
                    </div>
                </div>

                <form
                    onSubmit={sendMessage}
                    className="bg-[#0e0e0e] border border-white/10 p-8 rounded-xl space-y-6"
                >
                    <div>
                        <label className="block text-sm mb-1 text-gray-400">Your Name</label>
                        <input
                            type="text"
                            name="name"
                            required
                            className="w-full px-4 py-3 bg-black border border-white/10 rounded-lg text-white"
                            placeholder="Enter your name"
                        />
                    </div>

                    <div>
                        <label className="block text-sm mb-1 text-gray-400">Your Email</label>
                        <input
                            type="email"
                            name="email"
                            required
                            className="w-full px-4 py-3 bg-black border border-white/10 rounded-lg text-white"
                            placeholder="Enter your email"
                        />
                    </div>

                    <div>
                        <label className="block text-sm mb-1 text-gray-400">Your Phone (optional)</label>
                        <input
                            type="tel"
                            name="phone"
                            className="w-full px-4 py-3 bg-black border border-white/10 rounded-lg text-white"
                            placeholder="Enter your phone number"
                        />
                    </div>

                    <div>
                        <label className="block text-sm text-gray-400">Message</label>
                        <textarea
                            name="message"
                            required
                            rows={5}
                            className="w-full px-4 py-3 bg-black border border-white/10 rounded-lg text-white resize-none"
                            placeholder="Write your message…"
                        ></textarea>
                    </div>

                    {success && (
                        <p className="text-green-400 text-center text-sm">Message sent successfully!</p>
                    )}
                    {error && (
                        <p className="text-red-400 text-center text-sm">Failed to send message.</p>
                    )}

                    <button
                        type="submit"
                        className="w-full py-2 bg-white text-black rounded-md font-semibold hover:bg-gray-200 transition"
                    >
                        {loading ? `Sending${'.'.repeat(dotCount)}` : "Send Message"}
                    </button>
                </form>
            </div>
        </section>
    );
};