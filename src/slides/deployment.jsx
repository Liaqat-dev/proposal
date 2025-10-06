import React from "react";
import NoteCard from "../components/noteCard.jsx";

const DeploymentContent = () => {
    return (
        <div className="content">
            {/* Header */}
            <div className="mb-[30px]">
                <h1 className="text-[42px] font-bold text-blue-900 mb-[10px]">
                    Deployment Strategy
                </h1>
                <p className="text-[18px] text-gray-500 font-normal">
                    Environment setup, pipeline, and maintenance for the ATS-Friendly Resume Maker
                </p>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-2 gap-[25px] flex-grow">
                {/* Card 1 - Strategy */}
                <div
                    className="card">
                    <div className="card-header">
                        <div
                            className="card-header-icon">
                            <i className="fas fa-chess"></i>
                        </div>
                        <h3 className="card-header-title">
                            Deployment Strategy
                        </h3>
                    </div>

                    <div className="card-body">
                        {[
                            {
                                icon: "fa-layer-group",
                                title: "Multi-Environment Approach",
                                desc: "Development → Staging → Production"
                            },
                            {
                                icon: "fa-shield-alt",
                                title: "Security First",
                                desc: "SSL/TLS, data encryption, secure access"
                            },
                            {
                                icon: "fa-expand-arrows-alt",
                                title: "Scalable Architecture",
                                desc: "Auto-scaling based on user load"
                            },
                        ].map((item, idx) => (
                            <div key={idx}
                                 className="card-item">
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

                {/* Card 2 - Environment */}
                <div
                    className="card card-green">
                    <div className="card-header">
                        <div
                            className="card-header-icon">
                            <i className="fas fa-server"></i>
                        </div>
                        <h3 className="card-header-title">Environment Setup</h3>
                    </div>

                    <div className="card-body">
                        {[
                            {
                                icon: "fa-code-branch",
                                title: "Development Environment",
                                desc: "Local development with Docker containers"
                            },
                            {icon: "fa-flask", title: "Staging Environment", desc: "Mirror of production for testing"},
                            {
                                icon: "fa-globe",
                                title: "Production Environment",
                                desc: "High availability with load balancing i.e AWS EC2,S3"
                            },
                        ].map((item, idx) => (
                            <div key={idx}
                                 className="card-item">
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

                {/* Card 3 - Pipeline */}
                <div
                    className="card card-yellow">
                    <div className="card-header">
                        <div
                            className="card-header-icon">
                            <i className="fas fa-sync-alt "></i>
                        </div>
                        <h3 className="card-header-title">CI/CD Pipeline</h3>
                    </div>

                    {/* Pipeline Flow */}
                    <div className="flex justify-between mt-3 relative mb-2">
                        <div className="absolute top-[20px] left-[40px] right-[40px] h-[2px] bg-gray-200"></div>
                        {["Commit", "Build", "Test", "Deploy"].map((step, idx) => (
                            <div key={idx} className="relative z-10 flex flex-col items-center w-20">
                                <div
                                    className="w-10 h-10 rounded-full flex z-10 items-center justify-center bg-gradient-to-br from-yellow-100 to-yellow-200 text-yellow-700 font-semibold mb-1">
                                    {idx + 1}
                                </div>
                                <div className="text-xs font-medium text-gray-700 mt-1">{step}</div>
                            </div>
                        ))}
                    </div>

                    <div className="card-body">
                        {[
                            {icon: "fa-code", title: "Automated Workflows", desc: "GitHub Actions for CI/CD pipeline"},
                            {icon: "fa-box", title: "Containerization", desc: "Docker for consistent environments"},
                        ].map((item, idx) => (
                            <div key={idx}
                                 className="card-item">
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

                {/* Card 4 - Monitoring */}
                <div
                    className="card card-purple">
                    <div className="card-header">
                        <div
                            className="card-header-icon">
                            <i className="fas fa-chart-line"></i>
                        </div>
                        <h3 className="card-header-title">Monitoring & Maintenance</h3>
                    </div>

                    <div className="card-body">
                        {[
                            {
                                icon: "fa-heartbeat",
                                title: "Health Monitoring",
                                desc: "Real-time system status tracking"
                            },
                            {icon: "fa-bug", title: "Error Tracking", desc: "Automated error detection and alerting"},
                            {icon: "fa-sync", title: "Update Strategy", desc: "Rolling updates with zero downtime"},
                        ].map((item, idx) => (
                            <div key={idx}
                                 className="card-item">
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

            {/* Note */}
            <NoteCard
                icon={'fa-lightbulb'}
                note={`Deployment strategy focuses on reliability, scalability, and security to ensure the ATS-Friendly Resume Maker is always available and performing optimally.`}
            />
        </div>
    );
};

export default DeploymentContent;
