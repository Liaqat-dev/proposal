import React, {useEffect, useState} from "react";

function Home() {
    const texts = ["ResuCraft", "Resumes That Beat the Bots", "AI-Powered. ATS-Optimized."];
    const [text, setText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopIndex, setLoopIndex] = useState(0);
    const [blink, setBlink] = useState(true);
    const [typingSpeed, setTypingSpeed] = useState(100);

    useEffect(() => {
        const currentText = texts[loopIndex % texts.length];

        const handleTyping = () => {
            setText((prev) =>
                isDeleting
                    ? currentText.substring(0, prev.length - 1)
                    : currentText.substring(0, prev.length + 1)
            );
            setTypingSpeed(isDeleting ? 40 : 90);

            if (!isDeleting && text === currentText) {
                setTimeout(() => setIsDeleting(true), 1600);
            } else if (isDeleting && text === "") {
                setIsDeleting(false);
                setLoopIndex((prev) => prev + 1);
            }
        };

        const typingTimeout = setTimeout(handleTyping, typingSpeed);
        return () => clearTimeout(typingTimeout);
    }, [text, isDeleting, loopIndex]);

    useEffect(() => {
        const blinkInterval = setInterval(() => setBlink((prev) => !prev), 500);
        return () => clearInterval(blinkInterval);
    }, []);

    const features = [
        {icon: "fa-robot", label: "AI Resume Generation", sub: "Google Gemini NLP"},
        {icon: "fa-bullseye", label: "ATS Optimization", sub: "95% pass rate target"},
        {icon: "fa-microphone", label: "Live Mock Interview", sub: "Gemini Live WebSocket"},
        {icon: "fa-paint-brush", label: "Template Marketplace", sub: "Community-driven"},
        {icon: "fa-mobile-alt", label: "Mobile Companion", sub: "iOS & Android (Expo)"},
    ];

    const team = [
        {name: "Alishba Ramzan", id: "BSCS-FA22/395/D"},
        {name: "Liaqat Ali", id: "BSCS-FA22/096/C"},
    ];

    return (
        <div className="content">
            {/* Title block */}
            <div className="mb-8">
                <div className="flex items-baseline gap-1 mb-2">
                    <h1 className="text-[68px] italic font-extrabold leading-tight bg-gradient-to-r from-[#827c76] to-[rgba(130,124,118,0.45)] bg-clip-text text-transparent tracking-tight">
                        <span>{text}</span>
                        <span
                            className={`ml-1 ${blink ? "opacity-100" : "opacity-0"} transition-opacity duration-150 text-[#827c76] inline-block`}
                            style={{transform: "skewX(-10deg)"}}>|</span>
                    </h1>
                </div>
                <p className="text-[22px] text-slate-500 font-medium max-w-2xl">
                    A fully built, AI-powered, ATS-optimized &amp; accessible resume builder — MERN stack + Google Gemini API
                </p>
                <div className="flex gap-4 mt-4">
                    {team.map((m, i) => (
                        <div key={i} className="flex items-center bg-white rounded-xl px-4 py-2 shadow-sm">
                            <i className="fas fa-user-circle text-[#827c76] mr-2 text-lg"></i>
                            <div>
                                <span className="text-sm font-semibold text-slate-700">{m.name}</span>
                                <span className="text-xs text-slate-400 ml-2">{m.id}</span>
                            </div>
                        </div>
                    ))}
                    <div className="flex items-center bg-white rounded-xl px-4 py-2 shadow-sm">
                        <i className="fas fa-chalkboard-teacher text-[#827c76] mr-2 text-lg"></i>
                        <div>
                            <span className="text-sm font-semibold text-slate-700">Dr. Maria Tariq</span>
                            <span className="text-xs text-slate-400 ml-2">Supervisor</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Feature grid */}
            <div className="grid grid-cols-3 gap-5 ">
                {features.map((f, idx) => (
                    <div
                        key={idx}
                        className="flex items-center bg-white rounded-2xl shadow-md p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                        style={{animationDelay: `${idx * 80}ms`}}
                    >
                        <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br from-[#f0ede9] to-[#e1dcd7] mr-4 flex-shrink-0">
                            <i className={`fas ${f.icon} text-[#827c76] text-xl`}></i>
                        </div>
                        <div>
                            <div className="text-base font-semibold text-slate-700 leading-tight">{f.label}</div>
                            <div className="text-xs text-slate-400 mt-0.5">{f.sub}</div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Stack badges */}
            <div className="flex gap-3 mt-6 flex-wrap">
                {["React 19", "Node.js", "Express.js", "MongoDB", "Google Gemini API", "Expo / React Native", "Puppeteer", "JWT & OAuth 2.0"].map((t, i) => (
                    <span key={i} className="bg-white border border-gray-200 rounded-full px-4 py-1.5 text-sm font-medium text-slate-600 shadow-sm">
                        {t}
                    </span>
                ))}
            </div>

            {/* Accent circle */}
            <div className="absolute -top-24 right-48 w-[200px] h-[200px] rounded-full bg-gradient-to-br from-gray-100 to-gray-200 z-[-1]"></div>
        </div>
    );
}

export default Home;
