import React from "react";
import SlideHeader from "../components/shared/slideHeader.jsx";
import NoteCard from "../components/noteCard.jsx";

const Requirements = () => {
    const functionalRequirements = [
        {icon: "fa-user-circle",    title: "User Auth & Account",    priority: "High",   priorityClass: "high-priority",   desc: "Email/password + Google OAuth 2.0, JWT sessions, OTP verification, rate limiting"},
        {icon: "fa-id-card",        title: "Profile Management",     priority: "High",   priorityClass: "high-priority",   desc: "Multi-section profile (Education, Experience, Projects, Skills) with speech-to-text"},
        {icon: "fa-robot",          title: "AI Resume Generation",   priority: "High",   priorityClass: "high-priority",   desc: "JD parsing → keyword extraction → profile matching → ATS-optimised content via Gemini"},
        {icon: "fa-tachometer-alt", title: "ATS Scoring",            priority: "High",   priorityClass: "high-priority",   desc: "0–100 score with categorical breakdown and improvement recommendations"},
        {icon: "fa-paint-brush",    title: "Template Builder",       priority: "High",   priorityClass: "high-priority",   desc: "Drag-and-drop canvas designer with dynamic field binding and publishing workflow"},
        {icon: "fa-store",          title: "Marketplace",            priority: "Medium", priorityClass: "medium-priority", desc: "Community template browsing, filtering, rating, cloning, and moderation"},
        {icon: "fa-microphone",     title: "Live Mock Interview",    priority: "Medium", priorityClass: "medium-priority", desc: "Gemini Live WebSocket — 5 structured questions, real-time audio streaming"},
        {icon: "fa-file-pdf",       title: "PDF Export",             priority: "High",   priorityClass: "high-priority",   desc: "Server-side Puppeteer export preserving ATS-safe single-column formatting"},
    ];

    const nonFunctionalRequirements = [
        {icon: "fa-bolt",             title: "Performance",    priority: "High", priorityClass: "high-priority",   desc: "< 2s response time, 1000+ concurrent users, resume generation ≤ 50s for 95%"},
        {icon: "fa-shield-alt",       title: "Security",       priority: "High", priorityClass: "high-priority",   desc: "bcrypt (salt 12), TLS 1.2+, CORS, XSS protection, GDPR & CCPA compliance"},
        {icon: "fa-expand-arrows-alt","title": "Scalability",  priority: "High", priorityClass: "high-priority",   desc: "Horizontal scaling, MongoDB indexing, Nginx reverse proxy, cloud deployment"},
    ];

    const technicalRequirements = [
        {icon: "fa-laptop-code",  title: "Frontend",        priority: "High", priorityClass: "high-priority",   desc: "React 19, Tailwind CSS, React Router, Axios interceptors — SPA architecture"},
        {icon: "fa-server",       title: "Backend",         priority: "High", priorityClass: "high-priority",   desc: "Node.js 18+, Express.js REST API, JWT (15-min/30-day), bcrypt, Nodemailer"},
        {icon: "fa-database",     title: "Database",        priority: "High", priorityClass: "high-priority",   desc: "MongoDB 6.0+ document store — Users, Profiles, Resumes, Templates, Sessions"},
        {icon: "fa-brain",        title: "AI Layer",        priority: "High", priorityClass: "high-priority",   desc: "Google Gemini API (content generation, NLP) + Gemini Live (real-time interview WebSocket)"},
        {icon: "fa-file-pdf",     title: "PDF Engine",      priority: "High", priorityClass: "high-priority",   desc: "Puppeteer (headless Chromium) — server-side PDF generation"},
        {icon: "fa-lock",         title: "Auth Integrations",priority:"High", priorityClass: "high-priority",   desc: "Google Identity Platform (OAuth 2.0), Gmail SMTP (Nodemailer) for OTP & notifications"},
    ];

    return (
        <div className="content">
            <SlideHeader
                title={"Requirements — Implemented"}
                subtitle={"Functional, non-functional, and technical requirements fulfilled (IEEE 830-1998 standard)"}
            />

            <div className="grid grid-cols-2 gap-6">
                {/* Functional */}
                <div className="card card-blue">
                    <div className="card-header">
                        <div className="card-header-icon"><i className="fas fa-cogs"></i></div>
                        <h3 className="card-header-title">Functional Requirements</h3>
                    </div>
                    <div className="card-body">
                        {functionalRequirements.map((req, idx) => (
                            <div key={idx} className="card-item">
                                <div className="card-item-icon"><i className={`fas ${req.icon}`}></i></div>
                                <div className="flex-1">
                                    <div className="card-item-title flex justify-between items-center">
                                        {req.title}
                                        <span className={`card-item-title bg-blue-100 text-xs mb-0 px-3 py-1 rounded-full ${req.priorityClass}`}>
                                            {req.priority}
                                        </span>
                                    </div>
                                    <p className="card-item-subtitle">{req.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col gap-6">
                    {/* Non-Functional */}
                    <div className="card card-green">
                        <div className="card-header">
                            <div className="card-header-icon"><i className="fas fa-tachometer-alt"></i></div>
                            <h3 className="card-header-title">Non-Functional Requirements</h3>
                        </div>
                        <div className="card-body">
                            {nonFunctionalRequirements.map((req, idx) => (
                                <div key={idx} className="card-item">
                                    <div className="card-item-icon"><i className={`fas ${req.icon}`}></i></div>
                                    <div className="flex-1">
                                        <div className="card-item-title flex justify-between items-center">
                                            {req.title}
                                            <span className={`card-item-title bg-green-100 text-xs mb-0 px-3 py-1 rounded-full ${req.priorityClass}`}>
                                                {req.priority}
                                            </span>
                                        </div>
                                        <p className="card-item-subtitle">{req.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Technical */}
                    <div className="card card-yellow">
                        <div className="card-header">
                            <div className="card-header-icon"><i className="fas fa-microchip"></i></div>
                            <h3 className="card-header-title">Technical Requirements</h3>
                        </div>
                        <div className="card-body grid grid-cols-2 gap-3">
                            {technicalRequirements.map((req, idx) => (
                                <div key={idx} className="card-item col-span-1">
                                    <div className="card-item-icon"><i className={`fas ${req.icon}`}></i></div>
                                    <div className="flex-1">
                                        <div className="card-item-title flex justify-between items-center">
                                            {req.title}
                                            <span className={`card-item-title bg-yellow-100 text-xs mb-0 px-2 py-0.5 rounded-full ${req.priorityClass}`}>
                                                {req.priority}
                                            </span>
                                        </div>
                                        <p className="card-item-subtitle">{req.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Requirements;
