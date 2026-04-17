import React from "react";
import NoteCard from "../components/noteCard.jsx";
import SlideHeader from "../components/shared/slideHeader.jsx";

const ConclusionContent = () => {
    const problems = [
        {icon: "fa-filter",           title: "ATS Invisible Barrier",    desc: "75% of resumes rejected before any human sees them"},
        {icon: "fa-puzzle-piece",     title: "Fragmented Pipeline",      desc: "No single tool covers resume + scoring + interview prep"},
        {icon: "fa-store",            title: "No Community Ecosystem",   desc: "Zero resume-specific community template marketplace with ATS validation"},
    ];

    const solutions = [
        {icon: "fa-robot",           title: "AI Resume Generation",    desc: "Google Gemini NLP pipeline: JD parse → keyword match → content generation → ATS score"},
        {icon: "fa-paint-brush",     title: "Drag-and-Drop Builder",   desc: "Canvas-based template designer with dynamic field binding — unique in the market"},
        {icon: "fa-microphone",      title: "Live Mock Interview",      desc: "Gemini Live WebSocket real-time voice interview tied to the same job description"},
    ];

    const achievements = [
        {icon: "fa-clock",       title: "≈ 60%",  desc: "Reduction in resume creation time"},
        {icon: "fa-chart-line",  title: "~95%",   desc: "Target ATS compatibility pass rate"},
        {icon: "fa-users",       title: "3×",     desc: "Increase in interview call rates"},
        {icon: "fa-mobile-alt",  title: "iOS+Android", desc: "Mobile companion via Expo / React Native"},
    ];

    const futureWork = [
        {icon: "fa-envelope",       title: "Cover Letter Generator",    desc: "AI-generated cover letters tied to JD and profile — planned v2.0"},
        {icon: "fa-linkedin",       title: "LinkedIn Optimisation",     desc: "Profile alignment and keyword enrichment for LinkedIn"},
        {icon: "fa-briefcase",      title: "Direct Job Application",    desc: "One-click apply to partner job boards"},
    ];

    return (
        <div className="content">
            <SlideHeader title={"Conclusion"} subtitle={"Problems solved, system delivered, key achievements, and roadmap for future development"}/>

            <div className="grid grid-cols-2 gap-5 flex-grow">
                {/* Problem Recap */}
                <div className="card">
                    <div className="card-header">
                        <div className="card-header-icon"><i className="fas fa-exclamation-triangle"></i></div>
                        <h3 className="card-header-title">Problems Solved</h3>
                    </div>
                    <div className="card-body">
                        {problems.map((item, idx) => (
                            <div key={idx} className="card-item">
                                <div className="card-item-icon"><i className={`fas ${item.icon}`}></i></div>
                                <div>
                                    <div className="card-item-title">{item.title}</div>
                                    <div className="card-item-subtitle">{item.desc}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Our Solution */}
                <div className="card card-green">
                    <div className="card-header">
                        <div className="card-header-icon"><i className="fas fa-lightbulb"></i></div>
                        <h3 className="card-header-title">ResuCraft Solution</h3>
                    </div>
                    <div className="card-body">
                        {solutions.map((item, idx) => (
                            <div key={idx} className="card-item">
                                <div className="card-item-icon"><i className={`fas ${item.icon}`}></i></div>
                                <div>
                                    <div className="card-item-title">{item.title}</div>
                                    <div className="card-item-subtitle">{item.desc}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Key Achievements */}
                <div className="card card-yellow">
                    <div className="card-header">
                        <div className="card-header-icon"><i className="fas fa-trophy"></i></div>
                        <h3 className="card-header-title">Key Achievements</h3>
                    </div>
                    <div className="card-body grid grid-cols-2 gap-3">
                        {achievements.map((item, idx) => (
                            <div key={idx} className="card-item">
                                <div className="card-item-icon"><i className={`fas ${item.icon}`}></i></div>
                                <div>
                                    <div className="card-item-title">{item.title}</div>
                                    <div className="card-item-subtitle">{item.desc}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Future Work */}
                <div className="card card-purple">
                    <div className="card-header">
                        <div className="card-header-icon"><i className="fas fa-rocket"></i></div>
                        <h3 className="card-header-title">Future Work — v2.0+</h3>
                    </div>
                    <div className="card-body">
                        {futureWork.map((item, idx) => (
                            <div key={idx} className="card-item">
                                <div className="card-item-icon"><i className={`fas ${item.icon}`}></i></div>
                                <div>
                                    <div className="card-item-title">{item.title}</div>
                                    <div className="card-item-subtitle">{item.desc}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <NoteCard
                icon="fa-flag-checkered"
                variant="green"
                note="ResuCraft is the first platform to unify AI resume generation, ATS scoring, drag-and-drop template building, a community marketplace, live voice mock interviews, and WCAG 2.1 AA accessibility — all in one interface."
            />
        </div>
    );
};

export default ConclusionContent;
