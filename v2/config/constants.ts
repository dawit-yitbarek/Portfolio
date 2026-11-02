export const CATEGORIES = [
    "All",
    "Websites",
    "Mobile Apps",
    "Telegram Bots",
    "Telegram Mini-Apps"
] as const;

export type Category = typeof CATEGORIES[number];

export const buttonTexts: Record<Exclude<Category, "All">, string> = {
    "Websites": "Open website",
    "Mobile Apps": "Download app",
    "Telegram Bots": "Open Bot in Telegram",
    "Telegram Mini-Apps": "Open Mini-app in Telegram"
};

type Project = {
    title: string;
    description: string;
    image: string;
    tech: string[];
    link: string;
    category: { label: String, category: Category };
    botData?: { commands: string[], username: string };
};

export type Skill = {
    label: string;
    src: string;
    color?: string;
    size?: "large" | "small"
}

export const projects: Project[] = [
    {
        title: "4-3-3 Media Network",
        description: "A modern multi-category media platform unifying sports, Forex, crypto, film, games, and news content with a secure admin system, Telegram integration, and real-time content publishing. Fully optimized for performance, accessibility, and SEO.",
        image: "/images/433media.jpg",
        tech: ["React", "Tailwind CSS", "Node.js", "Express", "PostgreSQL", "JWT Auth"],
        link: "https://433-media-network.vercel.app",
        category: { label: "Website", category: "Websites" }
    },
    {
        title: "Krypta",
        description: "High-performance real-time cryptocurrency analytics and trading terminal. Built with an optimized multiplexed WebSocket architecture, live order book depth, interactive candlestick charts, and instant trade feeds.",
        image: "/images/krypta.jpg",
        tech: ["React", "WebSockets", "TypeScript", "Node.js", "Express", "Tailwind CSS", "lightweight-charts"],
        link: "https://krypta.pro.et",
        category: { label: "Website", category: "Websites" }
    },
    {
        title: "Stadion",
        description: "High-performance live football streaming mobile application built with a resilient Node.js/Redis backend and an Expo/React Native client. Features automated API key rotation, multi-stream load balancing, merge-and-retain cache synchronization to combat upstream data flickering, and dynamic skeleton UI loading.",
        image: "/images/stadion.jpg",
        tech: ["React Native", "Expo", "NativeWind", "Tailwind CSS", "TypeScript", "Node.js", "Express", "Redis"],
        link: "https://github.com/dawit-yitbarek/stadion/releases/download/prod-1/application-aa94ca98-395f-4245-85a7-c549bd01e0a3.apk",
        category: { label: "Mobile app", category: "Mobile Apps" }
    },
    {
        title: "EEC Cologne",
        description: "A modern, GDPR-compliant multilingual platform built for a German church organization. Features localized UI across English, German, and Amharic, dynamic image gallery powered by Cloudinary, integrated PayPal donation system, and an ultra-lightweight, zero-tracker architecture.",
        image: "/images/eec-cologne.png",
        tech: ["Next.js", "React", "Tailwind CSS", "Cloudinary", "PayPal"],
        link: "https://aeg-koeln.de",
        category: { label: "Website", category: "Websites" }
    },
    {
        title: "Nova Realm",
        description: "A full-stack Solana airdrop and rewards platform where users connect a wallet, complete community and investment tasks, invite friends, and earn points. Includes a personalized dashboard, daily rewards and streaks, referral tracking, and a points leaderboard, with support for popular Solana wallets.",
        image: "/images/nova.jpg",
        tech: ["React", "Tailwind CSS", "Node.js", "Express", "PostgreSQL", "Solana", "Google OAuth"],
        link: "https://nova-realm.vercel.app",
        category: { label: "Website", category: "Websites" }
    },
    {
        title: "Geld Earn",
        description: "A feature-rich Telegram mini-app and automated bot platform designed for community growth. Features real-time channel membership tracking, a dynamic referral point sync engine, global user leaderboards, secure bank payout requests, and a dedicated admin dashboard for reviewing and processing withdrawals.",
        image: "/images/geldearn.jpg",
        tech: ["React", "Vite", "Tailwind CSS", "Node.js", "Express", "TypeScript", "PostgreSQL", "Redis", "Telegraf"],
        link: "https://t.me/Geldearn_Bot?start=6867085646",
        category: { label: "Telegram Mini-App", category: "Telegram Mini-Apps" }
    },
    {
        title: "Video Downloader Bot",
        description: "Production-grade, type-safe Telegram bot designed to download high-quality videos, photos, and carousels across major platforms like TikTok, Instagram, Pinterest, twitter and others. Built with a robust backend architecture featuring Redis caching, BullMQ background queues, smart URL resolution, and containerized media extraction tools.",
        image: "",
        tech: ["TypeScript", "Node.js", "grammY", "Redis", "BullMQ", "Docker", "yt-dlp", "gallery-dl"],
        link: "https://t.me/VidDownloaderProBot",
        category: { label: "Telegram Bot", category: "Telegram Bots" },
        botData: {
            commands: ["/start", "/status", "/help"],
            username: "VidDownloaderProBot"
        }
    },
    {
        title: "Dinkinesh ai",
        description: "Production-grade, resilient Telegram AI chatbot powered by Google's Gemini API and Node.js. Features intelligent context management, Redis-backed conversation history, multi-key rotation with automatic rate-limit handling (HTTP 429), strict Telegram HTML formatting pipelines, rate limiting, and channel membership validation.",
        image: "",
        tech: ["Node.js", "Express", "Telegraf", "Google GenAI", "Redis"],
        link: "https://t.me/Dinq_Nesh_Ai_bot",
        category: { label: "Telegram Bot", category: "Telegram Bots" },
        botData: {
            commands: ["/start", "/help", "/reset", "/limit"],
            username: "Dinq_Nesh_Ai_bot"
        }
    },
    {
        title: "Join Request Accepter",
        description: "A Telegram bot that automatically approves incoming join requests for channels and groups, then sends requesters a welcome message. Includes a private-chat setup guide, production webhook and local polling modes, and rotating logs for monitoring.",
        image: "",
        tech: ["Node.js", "Telegraf", "Winston"],
        link: "https://t.me/AcceptJoinRequest4_bot",
        category: { label: "Telegram Bot", category: "Telegram Bots" },
        botData: {
            commands: ["/start"],
            username: "AcceptJoinRequest4_bot"
        }
    },
    {
        title: "Predict Game",
        description: "A Telegram-based football game prediction with a companion web dashboard for admins to manage matches and view winners. Players join the channel, invite friends through referral links, and predict scores for upcoming matches. Predictions are time-limited, and users unlock access after reaching the referral requirement.",
        image: "",
        tech: ["Node.js", "Telegraf", "Express", "PostgreSQL", "Redis", "React", "Vite", "Tailwind CSS"],
        link: "https://t.me/predict_game433_bot",
        category: { label: "Telegram Bot", category: "Telegram Bots" },
        botData: {
            commands: ["/start", "/games", "/cancel", "/admin"],
            username: "predict_game433_bot"
        }
    },
    {
        title: "Mira Jersey",
        description: "E-commerce platform for selling jerseys with Chapa payment integration.",
        image: "/images/mira.png",
        tech: ["React", "Tailwind CSS", "Node.js", "Express", "Chapa", "PostgreSQL", "Cloudinary"],
        link: "https://mirajersey.netlify.app",
        category: { label: "Website", category: "Websites" }
    },
    {
        title: "Nexus Blog",
        description: "A modern, full-stack blogging platform focused on emerging technology, where readers can discover articles and authors can publish and manage their content. It features account authentication, author profiles, a personalized dashboard, dynamic article pages, and AI-powered semantic search that uses OpenAI embeddings and Supabase pgvector to find relevant posts by meaning—not just keywords.",
        image: "/images/nexus-blog.jpg",
        tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Supabase", "PostgreSQL", "pgvector", "OpenAI Embeddings",],
        link: "https://nexus-blog-eth.vercel.app",
        category: { label: "Website", category: "Websites" }
    },
    {
        title: "Becoz Real Estate",
        description: "A clean and modern real estate website with filtering, listings, and admin panel.",
        image: "/images/becoz.png",
        tech: ["React", "Tailwind CSS", "Node.js", "Express", "PostgreSQL", "Cloudinary"],
        link: "https://becoz.vercel.app",
        category: { label: "Website", category: "Websites" }
    },
    {
        title: "ግጥም Lounge",
        description: "A full-stack poetry publishing and reading platform where readers can discover poems, browse by author, and enjoy a focused reading experience. Members can create accounts, publish and manage their poems, customize their profiles, and like poems. Includes PostgreSQL-backed data, JWT authentication, Cloudinary image uploads, and email verification.",
        image: "/images/gitimlounge.jpg",
        tech: ["React", "Vite", "Tailwind CSS", "Node.js", "Express", "PostgreSQL", "JWT", "Cloudinary", "Brevo"],
        link: "https://gitimlounge.vercel.app",
        category: { label: "Website", category: "Websites" }
    },
    {
        title: "Akotet Shoes",
        description: "A premium e-commerce website for handcrafted leather shoes. Customers can browse the collection, search by product code, filter by size, sort by price, and complete checkout with Chapa online payments. The project also includes an admin panel for managing products, images, and orders, backed by a PostgreSQL database and Cloudinary image storage",
        image: '/images/akotet.png',
        tech: ["React", "Vite", "Tailwind CSS", "Node.js", "Express", "PostgreSQL", "Cloudinary", "Chapa"],
        link: "https://akotet-shoes.vercel.app",
        category: { label: "Website", category: "Websites" }
    },
    {
        title: "Rising Star Academy",
        description: "Educational website for a private academy with Kindergarten to Grade 8 branches. Includes about sections, accreditation highlights, campus facilities, and SEO-optimized layout.",
        image: "/images/rising.png",
        tech: ["React", "Vite", "Tailwind CSS"],
        link: "https://rsa-ethiopia.vercel.app",
        category: { label: "Website", category: "Websites" }
    },
    {
        title: "Sis Curtain",
        description: "Elegant website for a curtain and carpet seller. Built with a sleek light design and product highlight sections to showcase home decor solutions with delivery service.",
        image: "/images/sis.png",
        tech: ["React", "Vite", "Tailwind CSS"],
        link: "https://sis-curtains.vercel.app",
        category: { label: "Website", category: "Websites" }
    }
];

export const SKILLS: Skill[] = [
    // Core Languages & Frontend
    { label: "JavaScript", src: "/icons/javascript.png", size: "large" },
    { label: "TypeScript", src: "/icons/typescript.png", size: "large" },
    { label: "HTML5", src: "/icons/html5.png", size: "large" },
    { label: "CSS", src: "/icons/css.png", size: "large" },
    { label: "React", src: "/icons/react.svg", color: "#61DAFB" },
    { label: "Next.js", src: "/icons/nextjs.svg", color: "#ffffff" },
    { label: "Tailwind", src: "/icons/tailwind.svg", color: "#06B6D4" },

    // Mobile
    { label: "React Native", src: "/icons/react.svg", color: "#61DAFB" },
    { label: "Expo", src: "/icons/expo.png", color: "#ffffff" },

    // Backend, DB & Real-time
    { label: "Node.js", src: "/icons/node.svg", color: "#5FA04E" },
    { label: "Express", src: "/icons/express.svg", color: "#ffffff" },
    { label: "PostgreSQL", src: "/icons/postgres.svg", color: "#4169E1" },
    { label: "Redis", src: "/icons/redis.png", color: "#000000", size: "large" },
    { label: "WebSocket", src: "/icons/websocket.svg", color: "#ffffff" },

    // APIs & DevOps / Tools
    { label: "Chapa API", src: "/icons/chapa.jpg", size: "large" },
    { label: "Docker", src: "/icons/docker.png", color: "#ffffff" },
    { label: "Git", src: "/icons/git.png", color: "#000000", size: "large" },
];