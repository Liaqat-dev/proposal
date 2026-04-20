import React from "react";
import NoteCard from "../components/noteCard.jsx";
import SlideHeader from "../components/shared/slideHeader.jsx";

const Scope = () => {
    const inScope = [
        {icon: "fas fa-user-circle",     title: "User Management",          desc: "Registration, Google OAuth 2.0, JWT sessions, account settings"},
        {icon: "fas fa-id-card",         title: "Professional Profile",      desc: "Education, experience, projects, skills, achievements + speech-to-text"},
        {icon: "fas fa-robot",           title: "AI Resume Generation",      desc: "Google Gemini NLP — JD parsing, keyword matching, content rewriting"},
        {icon: "fas fa-paint-brush",     title: "Drag-and-Drop Builder",     desc: "Canvas-based template designer with dynamic field binding"},
        {icon: "fas fa-store",           title: "Community Marketplace",     desc: "Browse, rate, clone & publish templates — moderated ecosystem"},
        {icon: "fas fa-microphone",      title: "Live Mock Interview",       desc: "Real-time voice interview via Gemini Live WebSocket"},
        {icon: "fas fa-tachometer-alt",  title: "ATS Scoring & Suggestions", desc: "0–100 score with actionable improvement recommendations"},
    ];

    const outOfScope = [
        {icon: "fas fa-envelope",       title: "Cover Letter Generator",    desc: "Planned for v2.0"},
        {icon: "fas fa-linkedin",       title: "LinkedIn Optimisation",     desc: "Future enhancement"},
        {icon: "fas fa-briefcase",      title: "Direct Job Application",    desc: "No job board integration in v1.0"},
        {icon: "fas fa-credit-card",    title: "Payment Gateway",           desc: "Subscription billing deferred"},
        {icon: "fas fa-video",          title: "Video Resume Generation",   desc: "Outside v1.0 scope"},
        {icon: "fas fa-users",          title: "Bulk Resume Generation",    desc: "Career service professional feature — future"},
        {icon: "fas fa-users-cog",      title: "Real-time Collaborative Editing", desc: "Multi-user template co-editing deferred"},
    ];

    return (
        <div className="content">
            <SlideHeader
                title={"Project Scope"}
                subtitle={"Features implemented in this version and explicitly deferred features for future releases"}
            />

            <div className="grid grid-cols-2 gap-6 flex-grow">
                {/* In Scope */}
                <div className="card card-green h-fit">
                    <div className="card-header">
                        <div className="card-header-icon rounded-full">
                            <i className="fas fa-check-circle"></i>
                        </div>
                        <h2 className="card-header-title">Implemented Features</h2>
                    </div>
                    <div className="card-body">
                        {inScope.map((item, idx) => (
                            <div key={idx} className="card-item">
                                <div className="card-item-icon">
                                    <i className={item.icon}></i>
                                </div>
                                <div>
                                    <h3 className="card-item-title">{item.title}</h3>
                                    <p className="card-item-subtitle">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Out of Scope */}
                <div className="card card-red h-fit">
                    <div className="card-header">
                        <div className="card-header-icon rounded-full">
                            <i className="fas fa-times-circle"></i>
                        </div>
                        <h2 className="card-header-title">Not Implemented — Future Work</h2>
                    </div>
                    <div className="card-body">
                        {outOfScope.map((item, idx) => (
                            <div key={idx} className="card-item">
                                <div className="card-item-icon">
                                    <i className={item.icon}></i>
                                </div>
                                <div>
                                    <h3 className="card-item-title">{item.title}</h3>
                                    <p className="card-item-subtitle">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <NoteCard
                icon="fa-info-circle"
                title="Technical Scope"
                note="MERN stack (React 19, Node.js/Express.js, MongoDB) + Google Gemini API + Expo/React Native mobile companion. Targets Chrome, Firefox, Safari, Edge v90+. Minimum 1280×720 resolution."
            />
        </div>
    );
};

export default Scope;
