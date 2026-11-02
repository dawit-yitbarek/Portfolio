import { SKILLS, type Skill } from "@/config/constants";

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
                        I’m a passionate Full Stack Developer who loves
                        building modern, clean, and high-performance web
                        applications, Mobile apps, Telegram mini-apps, and Telegram bots. I specialize in frontend and backend
                        development using cutting-edge tools and best practices.
                    </p>

                    <p className="text-gray-300 leading-relaxed">
                        I enjoy creating digital products that are fast,
                        beautiful, and easy to use — from backend logic and
                        authentication systems to polished user interfaces.
                    </p>

                    <p className="text-gray-300 leading-relaxed">
                        My goal is to craft websites and apps that are both visually
                        impressive and technically strong, giving businesses
                        and users an excellent experience.
                    </p>
                </div>

                {/* Right Column — Skills */}
                <div className="md:w-1/2">
                    <h3 className="text-xl font-semibold mb-5">Skills & Tools</h3>

                    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6">
                        {SKILLS.map((skill) => (
                            <SkillIcon key={skill.label} {...skill} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

/* Small reusable skill icon */
function SkillIcon({ label, src, color, size }: Skill) {
    return (
        <div className="flex flex-col items-center group cursor-pointer">
            <div
                className="w-10 h-10 flex items-center justify-center rounded-full transition-transform duration-200 group-hover:scale-110"
                style={{ backgroundColor: color || "transparent" }}
            >
                <img
                    src={src}
                    alt={label}
                    className={`${size == "large" ? "w-10 h-10" : "w-6 h-6"
                        } opacity-90 rounded-full object-contain`}
                />
            </div>
            <p className="text-xs mt-1 text-gray-400 group-hover:text-white transition-colors">
                {label}
            </p>
        </div>
    );
}