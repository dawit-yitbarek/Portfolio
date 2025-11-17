export default function Hero() {
    return (
        <section className="min-h-screen flex flex-col md:flex-row items-center justify-between container px-6 md:px-0 py-8">

            {/* Left Column */}
            <div className="md:w-1/2 space-y-6">
                <p className="text-lg text-gray-400">Hi, my name is</p>

                <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
                    Dawit
                </h1>

                <h2 className="text-2xl md:text-3xl text-gray-300">
                    Full Stack Web Developer
                </h2>

                <p className="text-gray-400 max-w-md">
                    I build modern, high-performance web applications, Telegram mini-apps and Telegram bots with clean code,
                    beautiful UI, and solid backend architecture.
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <a
                        href="#projects"
                        className="px-6 py-3 bg-white text-black rounded-md font-semibold hover:bg-gray-200 transition"
                    >
                        View Projects
                    </a>

                    <a
                        href="#contact"
                        className="px-6 py-3 border border-white text-white rounded-md font-semibold hover:bg-white hover:text-black transition"
                    >
                        Contact Me
                    </a>
                </div>
            </div>

            {/* Right Column — Illustration */}
            <div className="md:w-1/2 flex justify-center mt-12 md:mt-0">
                <img
                    src="/images/hero.svg"
                    alt="Developer illustration"
                    className="w-full max-w-lg opacity-90"
                />
            </div>
        </section>
    );
}