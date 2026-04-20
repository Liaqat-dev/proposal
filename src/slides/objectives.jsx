import React from "react";
import NoteCard from "../components/noteCard.jsx";
import SlideHeader from "../components/shared/slideHeader.jsx";

const Objectives = () => {
    const objectives = [
        {
            num: "O1",
            icon: "fa-robot",
            color: "blue",
            title: "AI Resume Generation Engine",
            desc: "NLP-driven engine using Google Gemini API to parse JDs, extract keywords, match user profile, and generate ATS-optimised content.",
            metric: "JD → tailored resume in < 50s",
        },
        {
            num: "O2",
            icon: "fa-tachometer-alt",
            color: "green",
            title: "ATS Optimisation Scoring",
            desc: "Numeric 0–100 ATS score with categorical breakdown (keywords, format, structure) and actionable improvement suggestions.",
            metric: "Achieved: 95% ATS pass rate",
        },
        {
            num: "O3",
            icon: "fa-paint-brush",
            color: "yellow",
            title: "Drag-and-Drop Template Builder",
            desc: "Canvas-based visual designer with dynamic field binding, style customisation, and one-click template publishing.",
            metric: "10+ ATS-validated templates",
        },
        {
            num: "O4",
            icon: "fa-store",
            color: "purple",
            title: "Community Template Marketplace",
            desc: "Self-sustaining ecosystem for template creators to publish, users to discover and clone, with moderation workflow.",
            metric: "Community-driven quality",
        },
        {
            num: "O5",
            icon: "fa-microphone",
            color: "indigo",
            title: "Live Mock Interview Module",
            desc: "Real-time voice interview via Gemini Live WebSocket — structured questions covering motivation, skills, STAR(Situation, Task, Action, Result) behavioural, and technical.",
            metric: "Real-time voice streaming",
        },
        {
            num: "O6",
            icon: "fa-shield-alt",
            color: "red",
            title: "Secure Architecture",
            desc: " bcrypt password hashing, JWT auth (15-min access / 30-day refresh), GDPR & CCPA compliance.",
            metric: "< 2s response time",
        },
        {
            num: "O7",
            icon: "fa-mobile-alt",
            color: "pink",
            title: "Production-Ready Web + Mobile App",
            desc: "First-time user creates a professional, ATS-optimised resume within 10 minutes of registration. iOS & Android companion via Expo.",
            metric: "Complete resume in < 10 min",
        },
    ];

    const colorMap = {
        blue:   {bg: "bg-blue-100",   text: "text-blue-500",   dark: "text-blue-800",   badge: "bg-blue-100 text-blue-700"},
        green:  {bg: "bg-green-100",  text: "text-green-500",  dark: "text-green-800",  badge: "bg-green-100 text-green-700"},
        yellow: {bg: "bg-yellow-100", text: "text-yellow-600", dark: "text-yellow-800", badge: "bg-yellow-100 text-yellow-700"},
        purple: {bg: "bg-purple-100", text: "text-purple-500", dark: "text-purple-800", badge: "bg-purple-100 text-purple-700"},
        indigo: {bg: "bg-indigo-100", text: "text-indigo-500", dark: "text-indigo-800", badge: "bg-indigo-100 text-indigo-700"},
        orange: {bg: "bg-orange-100", text: "text-orange-500", dark: "text-orange-800", badge: "bg-orange-100 text-orange-700"},
        red:    {bg: "bg-red-100",    text: "text-red-500",    dark: "text-red-800",    badge: "bg-red-100 text-red-700"},
        pink:   {bg: "bg-pink-100",   text: "text-pink-500",   dark: "text-pink-800",   badge: "bg-pink-100 text-pink-700"},
    };

    return (
        <div className="content">
            <SlideHeader
                title={"Project Objectives"}
                subtitle={"Eight primary objectives — all implemented and demonstrated in the final system"}
            />

            <div className="grid grid-cols-4 gap-4 ">
                {objectives.map((obj, idx) => {
                    const c = colorMap[obj.color];
                    return (
                        <div
                            key={idx}
                            className="bg-white rounded-2xl p-4 shadow-md hover:shadow-xl hover:-translate-y-1 transition flex flex-col"
                        >
                            <div className="flex items-center mb-3">
                                <div className={`w-10 h-10 rounded-xl flex items-center justify-center mr-3 ${c.bg}`}>
                                    <i className={`fas ${obj.icon} ${c.text}`}></i>
                                </div>
                                <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${c.badge}`}>{obj.num}</span>
                            </div>
                            <h3 className={`text-sm font-bold mb-2 ${c.dark}`}>{obj.title}</h3>
                            <p className="text-xs text-slate-500 leading-relaxed flex-grow">{obj.desc}</p>
                            <div className={`mt-3 text-xs font-semibold px-2 py-1 rounded-lg ${c.badge} flex items-center`}>
                                <i className="fas fa-chart-line mr-1"></i>
                                {obj.metric}
                            </div>
                        </div>
                    );
                })}
            </div>

            <NoteCard
                icon="fa-info-circle"
                note="Success measured through ATS compatibility scores, user adoption rates, resume creation time benchmarks, and feedback from both job seekers and recruitment professionals."
            />
        </div>
    );
};

export default Objectives;
