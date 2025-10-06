import React from "react";
import NoteCard from "../components/noteCard.jsx";
import SlideHeader from "../components/shared/slideHeader.jsx";

const Scope = () => {
    const outOfScope = [
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
    ];
    const inScope = [
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
    ];


    return (
        <div className="content">
            <SlideHeader title={'Project Scope'} subtitle={'Defining boundaries and limitations of the ATS-Friendly Resume Maker'}/>

            {/* Scope Container */}
            <div className="grid grid-cols-2 gap-6 flex-grow">
                {/* In Scope */}
                <div
                    className=" card h-fit card-blue">
                    <div className="card-header">
                        <div
                            className="card-header-icon rounded-full ">
                            <i className="fas fa-check-circle "></i>
                        </div>
                        <h2 className="card-header-title">
                            In Scope
                        </h2>
                    </div>
                    <div className="card-body">
                        {inScope.map((item, idx) => (
                            <div
                                key={idx}
                                className="card-item"
                            >
                                <div
                                    className="card-item-icon">
                                    <i className={`${item.icon}`}></i>
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
                <div
                    className="card card-red h-fit">
                    <div className="card-header">
                        <div
                            className="card-header-icon rounded-full">
                            <i className="fas fa-times-circle "></i>
                        </div>
                        <h2 className="card-header-title">
                            Out of Scope
                        </h2>
                    </div>
                    <div className="card-body">
                        {outOfScope.map((item, idx) => (
                            <div
                                key={idx}
                                className="card-item"
                            >
                                <div className="card-item-icon">
                                    <i className={`${item.icon}`}></i>
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
                icon={"fa-info-circle"}
                title={"Project Boundaries"}
                note={" Features outside the defined scope may be considered for future development phases based on user feedback and resource availability."}/>
        </div>
    );
};

export default Scope;
