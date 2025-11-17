export default function About() {
    return (
        <section
            id="about"
            className="py-14 container px-6 md:px-0 text-white"
        >
            {/* Title */}
            <h2 className="text-3xl md:text-4xl font-bold mb-10">
                About Me
            </h2>

            <div className="flex flex-col md:flex-row items-start gap-12">
                {/* Left Column — Text */}
                <div className="md:w-1/2 space-y-5">
                    <p className="text-gray-300 leading-relaxed">
                        I’m a passionate Full Stack Web Developer who loves
                        building modern, clean, and high-performance web
                        applications, Telegram mini-apps, and Telegram bots. I specialize in frontend and backend
                        development using cutting-edge tools and best practices.
                    </p>

                    <p className="text-gray-300 leading-relaxed">
                        I enjoy creating digital products that are fast,
                        beautiful, and easy to use — from backend logic and
                        authentication systems to polished user interfaces.
                    </p>

                    <p className="text-gray-300 leading-relaxed">
                        My goal is to craft websites that are both visually
                        impressive and technically strong, giving businesses
                        and users an excellent experience.
                    </p>
                </div>

                {/* Right Column — Skills */}
                <div className="md:w-1/2">
                    <h3 className="text-xl font-semibold mb-5">Skills & Tools</h3>

                    <div className="grid grid-cols-3 sm:grid-cols-4 gap-6">
                        {/* Icons */}
                        <SkillIcon src="/icons/react.svg" label="React" color="#61DAFB" />
                        <SkillIcon src="/icons/nextjs.svg" label="Next.js" color="#ffffff" />
                        <SkillIcon src="/icons/tailwind.svg" label="Tailwind" color="#06B6D4" />
                        <SkillIcon src="/icons/node.svg" label="Node.js" color="#5FA04E" />
                        <SkillIcon src="/icons/express.svg" label="Express" color="#ffffff" />
                        <SkillIcon src="/icons/postgres.svg" label="PostgreSQL" color="#4169E1" />
                        <SkillIcon src="/icons/chapa.jpg" label="Chapa API" chapa={true} />
                        <SkillIcon src="/icons/typescript.svg" label="TypeScript" color="#3178C6" />
                    </div>
                </div>
            </div>
        </section>
    );
}

/* Small reusable skill icon */
function SkillIcon({ src, label, color, chapa }: { src: string; label: string; color?: string; chapa?: boolean; }) {
    return (
        <div className="flex flex-col items-center">
            <div
                className="w-10 h-10 flex items-center justify-center rounded-full"
                style={{ backgroundColor: color }}
            >
                <img src={src} alt={label} className={` ${chapa ? "w-10 h-10" : "w-6 h-6"} opacity-90 rounded-full`} />
            </div>
            <p className="text-xs mt-1 text-gray-400">{label}</p>
        </div>
    );
}