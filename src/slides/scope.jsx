import React from "react";
import NoteCard from "../components/noteCard.jsx";

const Scope = () => {
    return (
        <div className="content relative flex flex-col p-[50px] px-[60px]">
            {/* Header */}
            <div className="header mb-8">
                <h1 className="title text-[42px] font-bold text-blue-900 mb-2">
                    Project Scope
                </h1>
                <p className="subtitle text-lg text-gray-500 font-normal">
                    Defining boundaries and limitations of the ATS-Friendly Resume Maker
                </p>
            </div>

            {/* Scope Container */}
            <div className="scope-container flex gap-8 flex-grow">
                {/* In Scope */}
                <div className="scope-column flex flex-col gap-6 flex-1">
                    <div
                        className="scope-card bg-white rounded-2xl p-6 shadow-md hover:-translate-y-1 hover:shadow-lg transition-all flex flex-col">
                        <div className="scope-header flex items-center mb-6">
                            <div
                                className="scope-icon in-scope-icon w-14 h-14 rounded-full flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-200 mr-4">
                                <i className="fas fa-check-circle text-blue-500 text-2xl"></i>
                            </div>
                            <h2 className="scope-title text-2xl font-bold text-blue-500">
                                In Scope
                            </h2>
                        </div>
                        <div className="scope-list flex flex-col gap-4 flex-grow">
                            {[
                                {
                                    icon: "fas fa-user-circle",
                                    title: "User Management",
                                    desc: "Registration, login, profile creation",
                                },
                                {
                                    icon: "fas fa-file-alt",
                                    title: "Resume Builder",
                                    desc: "ATS-optimized resume creation",
                                },
                                {
                                    icon: "fas fa-search",
                                    title: "Job Description Analysis",
                                    desc: "Keyword extraction and optimization",
                                },
                                {
                                    icon: "fas fa-palette",
                                    title: "Template Library",
                                    desc: "ATS-friendly professional templates",
                                },
                                {
                                    icon: "fas fa-download",
                                    title: "Export Functionality",
                                    desc: "Multiple format downloads (PDF, Word)",
                                },
                            ].map((item, idx) => (
                                <div
                                    key={idx}
                                    className="scope-item flex items-start bg-gray-50 rounded-xl p-4 hover:translate-x-1 transition"
                                >
                                    <div
                                        className="scope-item-icon w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center mr-4">
                                        <i className={`${item.icon} text-blue-500 text-lg`}></i>
                                    </div>
                                    <div className="scope-item-content">
                                        <h3 className="scope-item-title text-lg font-semibold text-blue-900 mb-1">
                                            {item.title}
                                        </h3>
                                        <p className="scope-item-desc text-sm text-gray-500">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Out of Scope */}
                <div className="scope-column flex flex-col gap-6 flex-1">
                    <div
                        className="scope-card bg-white rounded-2xl p-6 shadow-md hover:-translate-y-1 hover:shadow-lg transition-all flex flex-col">
                        <div className="scope-header flex items-center mb-6">
                            <div
                                className="scope-icon out-scope-icon w-14 h-14 rounded-full flex items-center justify-center bg-gradient-to-br from-red-100 to-red-200 mr-4">
                                <i className="fas fa-times-circle text-red-500 text-2xl"></i>
                            </div>
                            <h2 className="scope-title text-2xl font-bold text-red-500">
                                Out of Scope
                            </h2>
                        </div>
                        <div className="scope-list flex flex-col gap-4 flex-grow">
                            {[
                                {
                                    icon: "fas fa-briefcase",
                                    title: "Job Board Integration",
                                    desc: "Direct application to job platforms",
                                },
                                {
                                    icon: "fas fa-envelope",
                                    title: "Cover Letter Generator",
                                    desc: "Automated cover letter creation",
                                },
                                {
                                    icon: "fas fa-comments",
                                    title: "Interview Preparation",
                                    desc: "Mock interviews and coaching",
                                },
                                {
                                    icon: "fas fa-mobile-alt",
                                    title: "Mobile Application",
                                    desc: "Native iOS and Android apps",
                                },
                                {
                                    icon: "fas fa-chart-line",
                                    title: "Advanced Analytics",
                                    desc: "Detailed application tracking",
                                },
                            ].map((item, idx) => (
                                <div
                                    key={idx}
                                    className="scope-item flex items-start bg-gray-50 rounded-xl p-4 hover:translate-x-1 transition"
                                >
                                    <div
                                        className="scope-item-icon w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center mr-4">
                                        <i className={`${item.icon} text-red-500 text-lg`}></i>
                                    </div>
                                    <div className="scope-item-content">
                                        <h3 className="scope-item-title text-lg font-semibold text-red-700 mb-1">
                                            {item.title}
                                        </h3>
                                        <p className="scope-item-desc text-sm text-gray-500">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <NoteCard
                icon={"fa-info-circle"}
                title={"Project Boundaries"}
                note={" Features outside the defined scope may be considered for future development phases based on user feedback and resource availability."}/>
        </div>
    );
};

export default Scope;
