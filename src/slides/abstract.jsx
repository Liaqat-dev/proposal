import React from "react";
import SlideHeader from "../components/shared/slideHeader.jsx";
import NoteCard from "../components/noteCard.jsx";

function Abstract() {
    const pillars = [
        {
            icon: "fa-bullseye",
            color: "blue",
            title: "What We Built",
            points: [
                "Full-stack AI-powered resume builder (Web + Mobile)",
                "Broke the ATS knowledge barrier for job seekers",
                "Unified resume creation, scoring & interview prep",
            ],
        },
        {
            icon: "fa-cogs",
            color: "green",
            title: "How We Built It",
            points: [
                "MERN stack (React 19 / Node.js / Express / MongoDB)",
                "Google Gemini API for NLP & content generation",
                "Gemini Live WebSocket for real-time voice interviews",
            ],
        },
        {
            icon: "fa-chart-line",
            color: "purple",
            title: "What We Achieved",
            points: [
                "≈ 80% faster resume creation vs manual methods",
                " ATS compatibility on generated resumes",
                "Professional resume ready in under 2 minutes",
            ],
        },
    ];

    const features = [
        {icon: "fa-robot",           label: "AI Resume Generation"},
        {icon: "fa-tachometer-alt",  label: "ATS Scoring & Feedback"},
        {icon: "fa-paint-brush",     label: "Drag-and-Drop Builder"},
        {icon: "fa-store",           label: "Community Marketplace"},
        {icon: "fa-microphone",      label: "Live Mock Interview"},
        {icon: "fa-universal-access",label: "Speech-to-Text Input"},
        {icon: "fa-file-pdf",        label: "PDF Export"},
        {icon: "fa-mobile-alt",      label: "iOS & Android App"},
    ];

    const colorMap = {
        blue:   {header: "text-blue-800",   icon: "bg-gradient-to-br from-blue-100 to-blue-200 text-blue-500",   check: "text-blue-500"},
        green:  {header: "text-green-800",  icon: "bg-gradient-to-br from-green-100 to-green-200 text-green-500", check: "text-green-500"},
        purple: {header: "text-purple-800", icon: "bg-gradient-to-br from-purple-100 to-purple-200 text-purple-500", check: "text-purple-500"},
    };

    return (
        <main className="content">
            <SlideHeader
                title={"Project Abstract"}
                subtitle={"ResuCraft — An AI-powered, ATS-optimized & accessible resume designer builder (Web + Mobile)"}
            />

            <section className="flex gap-6 ">
                {pillars.map((p, idx) => {
                    const c = colorMap[p.color];
                    return (
                        <div key={idx} className="card flex-1 flex flex-col">
                            <div className="flex items-center mb-4">
                                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mr-4 ${c.icon}`}>
                                    <i className={`fas ${p.icon} text-xl`}></i>
                                </div>
                                <h3 className={`text-xl font-semibold ${c.header}`}>{p.title}</h3>
                            </div>
                            <div className="flex flex-col gap-3">
                                {p.points.map((pt, i) => (
                                    <div key={i} className="flex items-start text-slate-600">
                                        <i className={`fas fa-check-circle mt-0.5 mr-2 ${c.check}`}></i>
                                        <span>{pt}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    );
                })}
            </section>

            <div className="bg-white rounded-2xl p-5 shadow-md mt-5 relative z-10">
                <h3 className="text-lg font-semibold text-slate-700 mb-3 flex items-center">
                    <i className="fas fa-star text-[#827c76] mr-2"></i>
                    Implemented Feature Set
                </h3>
                <div className="flex flex-wrap gap-3">
                    {features.map((f, i) => (
                        <div key={i} className="feature-tag bg-gradient-to-r from-[#f0ede9] to-[#e1dcd7] rounded-full px-4 py-2 text-[#827c76] font-medium flex items-center">
                            <i className={`fas ${f.icon} mr-2 text-sm`}></i>
                            {f.label}
                        </div>
                    ))}
                </div>
            </div>

            <NoteCard
                icon="fa-lightbulb"
                note="ResuCraft addresses six identified market gaps simultaneously — the only platform that unifies AI resume generation, ATS scoring, visual template building, community marketplace, live mock interviews, and full accessibility compliance in one application."
            />
        </main>
    );
}

export default Abstract;
