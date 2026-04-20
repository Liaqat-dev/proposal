import React from "react";
import NoteCard from "../components/noteCard.jsx";
import SlideHeader from "../components/shared/slideHeader.jsx";

function DesignPhase() {
    const systemArchitecture = [
        {icon: "fas fa-desktop",    title: "Client Layer",          tech: "Web Browser / Expo Mobile App",            color: "text-slate-500  bg-slate-100/60"},
        {icon: "fas fa-code",       title: "Frontend Layer",         tech: "React 19, Tailwind CSS, React Router",     color: "text-blue-500   bg-blue-100/40"},
        {icon: "fas fa-server",     title: "Backend Layer",          tech: "Node.js 18+, Express.js, REST API",        color: "text-green-500  bg-green-100/40"},
        {icon: "fas fa-brain",      title: "AI & External Services", tech: "Google Gemini API, Gemini Live, imgbb",    color: "text-purple-500 bg-purple-100/40"},
        {icon: "fas fa-database",   title: "Data Layer",             tech: "MongoDB 6.0+",        color: "text-yellow-500 bg-yellow-100/40"},
    ];

    const dbCollections = [
        {title: "users",             fields: ["_id", "email", "password_hash", "auth_provider", "is_verified", "created_at"],          pk: ["_id"]},
        {title: "profiles",          fields: ["_id", "user_id", "personal_info", "education[]", "experience[]", "skills[]", "projects[]"], pk: ["_id"], fk: ["user_id"]},
        {title: "resumes",           fields: ["_id", "user_id", "title", "template_id", "ats_score", "content", "job_description"],    pk: ["_id"], fk: ["user_id", "template_id"]},
        {title: "templates",         fields: ["_id", "creator_id", "name", "canvas_json", "category", "is_published", "ratings"],      pk: ["_id"], fk: ["creator_id"]},
        {title: "interview_sessions",fields: ["_id", "user_id", "job_description", "questions[]", "responses[]", "score"],            pk: ["_id"], fk: ["user_id"]},
    ];

    const uiScreens = ["Profile Builder", "Resume Generator", "Template Designer", "Mock Interview", "Marketplace"];

    return (
        <div className="content">
            <SlideHeader title={"System Design"} subtitle={"MERN + AI system architecture implemented, layered design decisions, and MongoDB document schema"}/>

            <section className="design-grid grid grid-cols-3 gap-6 flex-grow">
                {/* System Architecture */}
                <div className="design-card bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition flex flex-col">
                    <div className="flex items-center mb-5">
                        <div className="card-icon w-12 h-12 rounded-xl flex items-center justify-center mr-4 bg-gradient-to-br from-blue-100 to-blue-200">
                            <i className="fas fa-sitemap text-blue-500 text-2xl"></i>
                        </div>
                        <h3 className="text-xl font-semibold text-blue-600">System Architecture</h3>
                    </div>
                    <div className="flex flex-col gap-3">
                        {systemArchitecture.map((layer, idx) => (
                            <div key={idx} className="flex items-center bg-slate-50 rounded-xl p-3 hover:translate-x-2 transition">
                                <div className={`w-10 h-10 flex items-center justify-center rounded-lg mr-3 ${layer.color}`}>
                                    <i className={`${layer.icon} text-lg`}></i>
                                </div>
                                <div>
                                    <p className="font-semibold text-sm">{layer.title}</p>
                                    <p className="text-xs text-slate-500">{layer.tech}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* AI Pipeline */}
                    <div className="mt-4 bg-purple-50 rounded-xl p-3">
                        <p className="text-xs font-bold text-purple-700 mb-2">AI Semantic Pipeline</p>
                        <div className="flex items-center gap-1 flex-wrap text-xs text-purple-600 font-medium">
                            {["JD Parse", "→", "Keywords", "→", "Profile Match", "→", "Gap Analysis", "→", "Generate", "→", "ATS Score"].map((s, i) => (
                                <span key={i} className={s === "→" ? "text-purple-300" : "bg-white rounded px-1.5 py-0.5 shadow-sm"}>{s}</span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* UI/UX Design */}
                <div className="design-card bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition flex flex-col">
                    <div className="flex items-center mb-5">
                        <div className="card-icon w-12 h-12 rounded-xl flex items-center justify-center mr-4 bg-gradient-to-br from-green-100 to-green-200">
                            <i className="fas fa-paint-brush text-green-500 text-2xl"></i>
                        </div>
                        <h3 className="text-xl font-semibold text-green-600">UI/UX Screens</h3>
                    </div>
                    <div className="flex flex-col gap-4">
                        {uiScreens.map((mockup, idx) => (
                            <div key={idx} className="mockup bg-slate-50 rounded-xl p-4 flex flex-col gap-2 hover:-translate-y-1 transition">
                                <div className="flex justify-between items-center border-b pb-2 border-slate-200">
                                    <p className="text-green-600 font-semibold text-sm">{mockup}</p>
                                    <div className="flex gap-1">
                                        <div className="w-3 h-3 rounded-full bg-red-400"></div>
                                        <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                                        <div className="w-3 h-3 rounded-full bg-green-400"></div>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-1.5">
                                    <div className="h-2 rounded bg-slate-200 w-full"></div>
                                    <div className="h-2 rounded bg-slate-200 w-4/5"></div>
                                    <div className="h-2 rounded bg-slate-200 w-3/5"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Database Design */}
                <div className="design-card bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition flex flex-col">
                    <div className="flex items-center mb-5">
                        <div className="card-icon w-12 h-12 rounded-xl flex items-center justify-center mr-4 bg-gradient-to-br from-yellow-100 to-yellow-200">
                            <i className="fas fa-database text-yellow-500 text-2xl"></i>
                        </div>
                        <h3 className="text-xl font-semibold text-yellow-600">MongoDB Schema</h3>
                    </div>
                    <div className="flex flex-col gap-3">
                        {dbCollections.map((col, idx) => (
                            <div key={idx} className="bg-slate-50 rounded-xl p-3 hover:-translate-y-1 transition">
                                <div className="flex items-center border-b pb-1.5 mb-2 border-slate-200">
                                    <i className="fas fa-table text-yellow-500 mr-2 text-xs"></i>
                                    <p className="text-xs font-bold text-yellow-700 font-mono">{col.title}</p>
                                </div>
                                <div className="flex flex-wrap gap-1.5">
                                    {col.fields.map((field, fIdx) => {
                                        let extra = col.pk?.includes(field)
                                            ? "bg-blue-100 text-blue-600"
                                            : col.fk?.includes(field)
                                                ? "bg-purple-100 text-purple-600"
                                                : "bg-white text-slate-600";
                                        return (
                                            <span key={fIdx} className={`px-2 py-0.5 rounded text-xs font-mono shadow-sm ${extra}`}>
                                                {field}
                                            </span>
                                        );
                                    })}
                                </div>
                            </div>
                        ))}
                        <div className="flex gap-3 text-xs mt-1">
                            <span className="bg-blue-100 text-blue-600 px-2 py-0.5 rounded font-mono">PK</span>
                            <span className="bg-purple-100 text-purple-600 px-2 py-0.5 rounded font-mono">FK</span>
                            <span className="text-slate-400">= field type indicators</span>
                        </div>
                    </div>
                </div>
            </section>

            <NoteCard note="Three-tier architecture with AI layer: React SPA ↔ Express REST API ↔ MongoDB. Google Gemini handles NLP & content generation; Gemini Live manages WebSocket interview sessions. All tiers communicate over TLS 1.2+."/>
        </div>
    );
}

export default DesignPhase;
