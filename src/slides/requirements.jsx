import React from "react";
import SlideHeader from "../components/shared/slideHeader.jsx";
import NoteCard from "../components/noteCard.jsx";

const Requirements = () => {
    const functionalRequirements = [
        {
            icon: "fa-user-circle",
            title: "User Management",
            priority: "High",
            priorityClass: "high-priority",
            desc: "Registration, login, profile creation",
        },
        {
            icon: "fa-file-alt",
            title: "Resume Builder",
            priority: "High",
            priorityClass: "high-priority",
            desc: "ATS-optimized resume creation",
        },
        {
            icon: "fa-search",
            title: "Job Analysis",
            priority: "Medium",
            priorityClass: "medium-priority",
            desc: "Keyword extraction from job descriptions",
        },
        {
            icon: "fa-download",
            title: "Export Functionality",
            priority: "High",
            priorityClass: "high-priority",
            desc: "Multiple format downloads (PDF, Word)",
        },
    ];
    const nonFunctionalRequirements = [
        {
            icon: "fa-bolt",
            title: "Performance",
            priority: "High",
            priorityClass: "high-priority",
            desc: "Response time < 2s, handle 1000+ users",
        },
        {
            icon: "fa-mobile-alt",
            title: "Usability",
            priority: "High",
            priorityClass: "high-priority",
            desc: "Intuitive interface, minimal learning curve",
        },
        {
            icon: "fa-shield-alt",
            title: "Security",
            priority: "High",
            priorityClass: "high-priority",
            desc: "Data encryption, secure authentication",
        },
        {
            icon: "fa-expand-arrows-alt",
            title: "Compatibility",
            priority: "Medium",
            priorityClass: "medium-priority",
            desc: "Cross-browser, responsive design",
        },
    ];
    const technicalRequirements = [
        {
            icon: "fa-laptop-code",
            title: "Frontend",
            priority: "High",
            priorityClass: "high-priority",
            desc: "React.js, HTML5, CSS3, responsive design",
        },
        {
            icon: "fa-server",
            title: "Backend",
            priority: "High",
            priorityClass: "high-priority",
            desc: "Node.js, Express, REST API architecture",
        },
        {
            icon: "fa-database",
            title: "Database",
            priority: "High",
            priorityClass: "high-priority",
            desc: "MongoDB for user data, file storage",
        },
        {
            icon: "fa-brain",
            title: "ATS Engine",
            priority: "High",
            priorityClass: "high-priority",
            desc: "Custom keyword extraction algorithm",
        },
    ];
    return (
        <div className="content">
            <SlideHeader title={'Requirement Analysis'}
                         subtitle={'Functional, non-functional, and technical requirements'}/>

            {/* Requirements Container */}
            <div className="grid grid-cols-2 gap-8">
                {/* Functional Requirements */}

                <div className="card card-blue col-span-1">
                    <div className="card-header">
                        <div className="card-header-icon ">
                            <i className="fas fa-cogs"></i>
                        </div>
                        <h3 className="card-header-title">
                            Functional Requirements
                        </h3>
                    </div>
                    <div className="card-body">
                        {functionalRequirements.map((req, idx) => (
                            <div key={idx} className="card-item">
                                <div className="card-item-icon ">
                                    <i className={`fas ${req.icon}`}></i>
                                </div>
                                <div className={'flex-1'}>
                                    <div className="card-item-title flex justify-between items-center">
                                        {req.title}
                                        <span
                                            className={`card-item-title bg-blue-100 text-xs mb-0 px-3 py-1 rounded-full ${req.priorityClass}`}
                                        >
                        {req.priority}
                      </span>
                                    </div>
                                    <p className="card-item-subtitle">{req.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Non-Functional Requirements */}

                <div className="card card-green col-span-1">
                    <div className="card-header">
                        <div className="card-header-icon ">
                            <i className="fas fa-tachometer-alt"></i>
                        </div>
                        <h3 className="card-header-title ">
                            Non-Functional Requirements
                        </h3>
                    </div>
                    <div className="card-body">
                        {nonFunctionalRequirements.map((req, idx) => (
                            <div key={idx} className="card-item">
                                <div className="card-item-icon">
                                    <i className={`fas ${req.icon}`}></i>
                                </div>
                                <div className={'flex-1'}>
                                    <div className="card-item-title flex justify-between items-center">
                                        {req.title}
                                        <span
                                            className={`card-item-title bg-green-100 text-xs mb-0 px-3 py-1 rounded-full ${req.priorityClass}`}
                                        >
                        {req.priority}
                      </span>
                                    </div>
                                    <p className="card-item-subtitle">{req.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>


                {/* Technical Requirements */}

                <div className="card card-yellow col-span-2">
                    <div className="card-header">
                        <div className="card-header-icon ">
                            <i className="fas fa-microchip"></i>
                        </div>
                        <h3 className="card-header-title ">
                            Technical Requirements
                        </h3>
                    </div>
                    <div className="card-body grid grid-cols-2 gap-3">
                        {technicalRequirements.map((req, idx) => (
                            <div key={idx} className="card-item col-span-1">
                                <div className="card-item-icon">
                                    <i className={`fas ${req.icon}`}></i>
                                </div>
                                <div className="flex-1">
                                    <div className="card-item-title flex justify-between items-center">
                                        {req.title}
                                        <span
                                            className={`card-item-title bg-yellow-100 text-xs mb-0 px-3 py-1 rounded-full ${req.priorityClass}`}
                                        >
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

            <NoteCard
                icon={'fa-info-circle'}
                note={`Requirements prioritized based on impact to core functionality. High-priority items will be addressed first in development sprints.`}
            />

        </div>
    );
};

export default Requirements;
