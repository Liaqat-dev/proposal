import React from "react";
import NoteCard from "../components/noteCard.jsx";

const Requirements = () => {
    return (
        <div className="content">
            {/* Header */}
            <div className="mb-8">
                <h1 className="text-4xl font-bold text-blue-900 mb-2">
                    Project Scope
                </h1>
                <p className="text-lg text-slate-500 font-normal">
                    Defining boundaries and limitations of the ATS-Friendly Resume Maker
                </p>
            </div>

            {/* Scope Container */}
            <div className="flex gap-8 flex-grow">
                {/* In Scope */}
                <div className="flex-1 flex flex-col gap-6">
                    <div
                        className="bg-white rounded-2xl shadow-lg p-6 flex flex-col hover:shadow-xl hover:-translate-y-1 transition">
                        <div className="flex items-center mb-5">
                            <div
                                className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-100 to-blue-200 mr-4">
                                <i className="fas fa-check-circle text-3xl text-blue-500"></i>
                            </div>
                            <h2 className="text-2xl font-bold text-blue-500">In Scope</h2>
                        </div>

                        <div className="flex flex-col gap-4 flex-grow">
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
                            ].map((item, i) => (
                                <div
                                    key={i}
                                    className="flex items-start bg-slate-50 rounded-xl p-4 hover:translate-x-1 transition"
                                >
                                    <div
                                        className="w-10 h-10 flex items-center justify-center rounded-md bg-blue-100 mr-4">
                                        <i className={`${item.icon} text-blue-500 text-lg`}></i>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-blue-900 mb-1">
                                            {item.title}
                                        </h3>
                                        <p className="text-sm text-slate-500">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Out of Scope */}
                <div className="flex-1 flex flex-col gap-6">
                    <div
                        className="bg-white rounded-2xl shadow-lg p-6 flex flex-col hover:shadow-xl hover:-translate-y-1 transition">
                        <div className="flex items-center mb-5">
                            <div
                                className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-br from-red-100 to-red-200 mr-4">
                                <i className="fas fa-times-circle text-3xl text-red-500"></i>
                            </div>
                            <h2 className="text-2xl font-bold text-red-500">Out of Scope</h2>
                        </div>

                        <div className="flex flex-col gap-4 flex-grow">
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
                            ].map((item, i) => (
                                <div
                                    key={i}
                                    className="flex items-start bg-slate-50 rounded-xl p-4 hover:translate-x-1 transition"
                                >
                                    <div
                                        className="w-10 h-10 flex items-center justify-center rounded-md bg-red-100 mr-4">
                                        <i className={`${item.icon} text-red-500 text-lg`}></i>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-red-700 mb-1">
                                            {item.title}
                                        </h3>
                                        <p className="text-sm text-slate-500">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <NoteCard
                icon={'fa-info-circle'}
                title={"Project Boundaries"}
                note={"Features outside the defined scope may be considered for future development phases based on user feedback and resource availability."}
            />
        </div>
    );
};

export default Requirements;
