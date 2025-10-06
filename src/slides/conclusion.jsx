import React from "react";
import NoteCard from "../components/noteCard.jsx";
import SlideHeader from "../components/shared/slideHeader.jsx";

const ConclusionContent = () => {
    const problems = [
        {
            icon: "fa-filter",
            title: "ATS Rejection",
            desc: "75% of resumes rejected before human review",
        },
        {
            icon: "fa-puzzle-piece",
            title: "Gap in Solutions",
            desc: "Existing tools lack ATS optimization",
        },
        {
            icon: "fa-user-times",
            title: "Job Seeker Frustration",
            desc: "Qualified candidates overlooked",
        },
    ];
    const futurePotential = [
        {
            icon: "fa-brain",
            title: "AI Enhancements",
            desc: "Advanced content suggestions and optimization",
        },
        {
            icon: "fa-briefcase",
            title: "Job Board Integration",
            desc: "Direct application to job platforms",
        },
        {
            icon: "fa-mobile-alt",
            title: "Mobile Application",
            desc: "On-the-go resume creation and editing",
        },
    ];
    const benefits = [
        {
            icon: "fa-chart-line",
            title: "Higher Interview Rates",
            desc: "3x increase in interview calls",
        },
        {
            icon: "fa-clock",
            title: "Time Efficiency",
            desc: "60% reduction in resume creation time",
        },
        {
            icon: "fa-smile",
            title: "Improved Experience",
            desc: "Reduced frustration with job search process",
        },
    ];
    const solutions = [
        {
            icon: "fa-file-alt",
            title: "ATS-Optimized Builder",
            desc: "Web application for creating compatible resumes",
        },
        {
            icon: "fa-search",
            title: "Keyword Analysis",
            desc: "Job description integration for optimization",
        },
        {
            icon: "fa-tachometer-alt",
            title: "Real-Time Feedback",
            desc: "ATS compatibility scoring and suggestions",
        },
    ];
    return (
        <div className="content">
            <SlideHeader title={'Project Conclusion'} subtitle={'Key takeaways and future potential of the ATS-Friendly Resume Maker'}/>

            {/* Conclusion Grid */}
            <div className="grid grid-cols-2 gap-6 flex-grow">
                {/* Problem Recap */}
                <div
                    className="card">
                    <div className="card-header ">
                        <div
                            className="card-header-icon">
                            <i className="fas fa-exclamation-triangle "></i>
                        </div>
                        <h3 className="card-header-title">Problem Recap</h3>
                    </div>

                    <div className="card-body">
                        {problems.map((item, idx) => (
                            <div
                                key={idx}
                                className="card-item"
                            >
                                <div className="card-item-icon">
                                    <i className={`fas ${item.icon} `}></i>
                                </div>
                                <div>
                                    <div className="card-item-title">{item.title}</div>
                                    <div className="card-item-subtitle">{item.desc}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Our Solution */}
                <div
                    className="card card-green">
                    <div className="card-header ">
                        <div
                            className="card-header-icon">
                            <i className="fas fa-lightbulb "></i>
                        </div>
                        <h3 className="card-header-title">Our Solution</h3>
                    </div>

                    <div className="card-body">
                        {solutions.map((item, idx) => (
                            <div
                                key={idx}
                                className="card-item"
                            >
                                <div className="card-item-icon">
                                    <i className={`fas ${item.icon} `}></i>
                                </div>
                                <div>
                                    <div className="card-item-title">{item.title}</div>
                                    <div className="card-item-subtitle">{item.desc}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Key Benefits */}
                <div
                    className="card card-yellow">
                    <div className="card-header">
                        <div
                            className="card-header-icon">
                            <i className="fas fa-star "></i>
                        </div>
                        <h3 className="card-header-title">Key Benefits</h3>
                    </div>

                    <div className="card-body">
                        {benefits.map((item, idx) => (
                            <div
                                key={idx}
                                className="card-item"
                            >
                                <div className="card-item-icon">
                                    <i className={`fas ${item.icon}`}></i>
                                </div>
                                <div>
                                    <div className="card-item-title">{item.title}</div>
                                    <div className="card-item-subtitle">{item.desc}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Future Potential */}
                <div
                    className="card card-purple">
                    <div className="card-header">
                        <div
                            className="card-header-icon">
                            <i className="fas fa-rocket "></i>
                        </div>
                        <h3 className="card-header-title">
                            Future Potential
                        </h3>
                    </div>

                    <div className="flex flex-col gap-4">
                        {futurePotential.map((item, idx) => (
                            <div
                                key={idx}
                                className="card-item"
                            >
                                <div className="card-item-icon">
                                    <i className={`fas ${item.icon}`}></i>
                                </div>
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
                icon={'fa-trophy'}
                note={"The project bridges the gap between candidates and employers by ensuring resumes pass through automated screening systems,empowering candidates to showcase their skills effectively."}
            />
        </div>
    );
};

export default ConclusionContent;
