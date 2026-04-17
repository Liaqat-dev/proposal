import React from "react";
import SlideHeader from "../components/shared/slideHeader.jsx";
import NoteCard from "../components/noteCard.jsx";

function TechStack() {
    const layers = [
        {
            title: "Frontend",
            color: "blue",
            icon: "fa-laptop-code",
            items: [
                {name: "React 19",          desc: "SPA, hooks, Suspense",            icon: "fab fa-react"},
                {name: "Tailwind CSS v4",   desc: "Utility-first styling",           icon: "fas fa-paint-brush"},
                {name: "React Router v6",   desc: "Client-side routing",             icon: "fas fa-route"},
                {name: "Axios",             desc: "HTTP client w/ interceptors",     icon: "fas fa-exchange-alt"},
                {name: "Vite",              desc: "Lightning-fast dev bundler",      icon: "fas fa-bolt"},
            ],
        },
        {
            title: "Backend",
            color: "green",
            icon: "fa-server",
            items: [
                {name: "Node.js 18+",       desc: "JS runtime environment",          icon: "fab fa-node-js"},
                {name: "Express.js",        desc: "REST API framework",              icon: "fas fa-server"},
                {name: "JWT + bcrypt",      desc: "Auth tokens + password hashing",  icon: "fas fa-lock"},
                {name: "Nodemailer",        desc: "Gmail SMTP transactional email",  icon: "fas fa-envelope"},
                {name: "Puppeteer",         desc: "Server-side PDF generation",      icon: "fas fa-file-pdf"},
            ],
        },
        {
            title: "AI & External",
            color: "purple",
            icon: "fa-brain",
            items: [
                {name: "Google Gemini API", desc: "NLP, content generation",         icon: "fas fa-brain"},
                {name: "Gemini Live",       desc: "Real-time WebSocket interview",   icon: "fas fa-microphone"},
                {name: "Google OAuth 2.0",  desc: "Social sign-in integration",      icon: "fab fa-google"},
                {name: "imgbb API",         desc: "Cloud image hosting",             icon: "fas fa-image"},
                {name: "Web Speech API",    desc: "Browser speech-to-text",          icon: "fas fa-microphone-alt"},
            ],
        },
        {
            title: "Database & DevOps",
            color: "yellow",
            icon: "fa-database",
            items: [
                {name: "MongoDB 6.0+",      desc: "Document store — Atlas cloud",    icon: "fas fa-database"},
                {name: "Nginx",             desc: "Reverse proxy + SSL termination", icon: "fas fa-network-wired"},
                {name: "Docker",            desc: "Container-based environments",    icon: "fab fa-docker"},
                {name: "GitHub Actions",    desc: "CI/CD pipeline automation",       icon: "fab fa-github"},
                {name: "AWS EC2 + S3",      desc: "Cloud compute + static assets",   icon: "fab fa-aws"},
            ],
        },
        {
            title: "Mobile",
            color: "orange",
            icon: "fa-mobile-alt",
            items: [
                {name: "Expo 54",           desc: "Universal React Native toolchain",icon: "fas fa-mobile-alt"},
                {name: "React Native 0.81", desc: "Cross-platform mobile framework", icon: "fab fa-react"},
                {name: "NativeWind v4",     desc: "Tailwind CSS for React Native",   icon: "fas fa-paint-brush"},
                {name: "iOS + Android",     desc: "Companion app companion app",     icon: "fab fa-apple"},
            ],
        },
    ];

    const colorMap = {
        blue:   {header: "text-blue-700",   icon: "text-blue-500 bg-blue-100",    badge: "bg-blue-50 text-blue-600",   border: "border-blue-200"},
        green:  {header: "text-green-700",  icon: "text-green-500 bg-green-100",  badge: "bg-green-50 text-green-600", border: "border-green-200"},
        purple: {header: "text-purple-700", icon: "text-purple-500 bg-purple-100",badge: "bg-purple-50 text-purple-600",border: "border-purple-200"},
        yellow: {header: "text-yellow-700", icon: "text-yellow-600 bg-yellow-100",badge: "bg-yellow-50 text-yellow-700",border: "border-yellow-200"},
        orange: {header: "text-orange-700", icon: "text-orange-500 bg-orange-100",badge: "bg-orange-50 text-orange-600",border: "border-orange-200"},
    };

    return (
        <div className="content">
            <SlideHeader
                title={"Technology Stack"}
                subtitle={"MERN stack + Google Gemini AI + Expo mobile — complete technology breakdown"}
            />

            <div className="grid grid-cols-5 gap-4">
                {layers.map((layer, idx) => {
                    const c = colorMap[layer.color];
                    return (
                        <div key={idx} className={`bg-white rounded-2xl p-4 shadow-md hover:shadow-xl hover:-translate-y-1 transition flex flex-col border-t-4 ${c.border}`}>
                            <div className="flex items-center mb-4">
                                <div className={`w-9 h-9 rounded-lg flex items-center justify-center mr-2 ${c.icon}`}>
                                    <i className={`fas ${layer.icon} text-sm`}></i>
                                </div>
                                <h3 className={`font-bold text-sm ${c.header}`}>{layer.title}</h3>
                            </div>
                            <div className="flex flex-col gap-2 ">
                                {layer.items.map((item, i) => (
                                    <div key={i} className={`flex items-center rounded-xl p-2.5 ${c.badge}`}>
                                        <i className={`${item.icon} mr-2 text-xs flex-shrink-0`}></i>
                                        <div>
                                            <div className="text-xs font-bold leading-tight">{item.name}</div>
                                            <div className="text-[10px] opacity-70 leading-tight">{item.desc}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    );
                })}
            </div>

            <NoteCard
                icon="fa-cogs"
                note="All tiers communicate over TLS 1.2+. Google Gemini API powers the core AI pipeline; Gemini Live provides the real-time WebSocket voice interview channel. The Expo companion shares the same REST API as the web application."
            />
        </div>
    );
}

export default TechStack;
