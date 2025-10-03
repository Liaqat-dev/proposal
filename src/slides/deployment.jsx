import React from "react";

const DeploymentContent = () => {
    return (
        <div className="flex flex-col relative flex-1 px-[60px] py-[50px]">
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
                <div className="bg-white rounded-2xl p-[25px] shadow-md hover:-translate-y-1 hover:shadow-xl transition">
                    <div className="flex items-center mb-5">
                        <div className="w-[50px] h-[50px] rounded-xl bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center mr-[15px]">
                            <i className="fas fa-chess text-blue-500 text-2xl"></i>
                        </div>
                        <h3 className="text-[20px] font-semibold text-blue-500">
                            Deployment Strategy
                        </h3>
                    </div>

                    <div className="flex flex-col gap-[15px]">
                        {[
                            { icon: "fa-layer-group", title: "Multi-Environment Approach", desc: "Development → Staging → Production" },
                            { icon: "fa-shield-alt", title: "Security First", desc: "SSL/TLS, data encryption, secure access" },
                            { icon: "fa-expand-arrows-alt", title: "Scalable Architecture", desc: "Auto-scaling based on user load" },
                        ].map((item, idx) => (
                            <div key={idx} className="flex items-start bg-gray-50 rounded-xl p-[15px] hover:translate-x-1 transition">
                                <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-blue-100 mr-3">
                                    <i className={`fas ${item.icon} text-blue-500 text-lg`}></i>
                                </div>
                                <div>
                                    <div className="text-[16px] font-semibold text-blue-500 mb-1">{item.title}</div>
                                    <div className="text-sm text-gray-500">{item.desc}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Card 2 - Environment */}
                <div className="bg-white rounded-2xl p-[25px] shadow-md hover:-translate-y-1 hover:shadow-xl transition">
                    <div className="flex items-center mb-5">
                        <div className="w-[50px] h-[50px] rounded-xl bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center mr-[15px]">
                            <i className="fas fa-server text-green-500 text-2xl"></i>
                        </div>
                        <h3 className="text-[20px] font-semibold text-green-500">Environment Setup</h3>
                    </div>

                    <div className="flex flex-col gap-[15px]">
                        {[
                            { icon: "fa-code-branch", title: "Development Environment", desc: "Local development with Docker containers" },
                            { icon: "fa-flask", title: "Staging Environment", desc: "Mirror of production for testing" },
                        ].map((item, idx) => (
                            <div key={idx} className="flex items-start bg-gray-50 rounded-xl p-[15px] hover:translate-x-1 transition">
                                <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-green-100 mr-3">
                                    <i className={`fas ${item.icon} text-green-500 text-lg`}></i>
                                </div>
                                <div>
                                    <div className="text-[16px] font-semibold text-green-500 mb-1">{item.title}</div>
                                    <div className="text-sm text-gray-500">{item.desc}</div>
                                </div>
                            </div>
                        ))}

                        {/* Production Environment */}
                        <div className="flex flex-col bg-gray-50 rounded-xl p-[15px] hover:translate-x-1 transition">
                            <div className="flex items-start">
                                <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-green-100 mr-3">
                                    <i className="fas fa-globe text-green-500 text-lg"></i>
                                </div>
                                <div>
                                    <div className="text-[16px] font-semibold text-green-500 mb-1">Production Environment</div>
                                    <div className="text-sm text-gray-500">High availability with load balancing</div>
                                    <div className="flex flex-wrap gap-2 mt-2">
                                        {["AWS", "EC2", "S3"].map((tag) => (
                                            <span key={tag} className="bg-white rounded-full px-3 py-1 text-xs font-medium text-gray-700 shadow-sm">{tag}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Card 3 - Pipeline */}
                <div className="bg-white rounded-2xl p-[25px] shadow-md hover:-translate-y-1 hover:shadow-xl transition">
                    <div className="flex items-center mb-5">
                        <div className="w-[50px] h-[50px] rounded-xl bg-gradient-to-br from-yellow-100 to-yellow-200 flex items-center justify-center mr-[15px]">
                            <i className="fas fa-sync-alt text-yellow-500 text-2xl"></i>
                        </div>
                        <h3 className="text-[20px] font-semibold text-yellow-500">CI/CD Pipeline</h3>
                    </div>

                    {/* Pipeline Flow */}
                    <div className="flex justify-between mt-3 relative">
                        <div className="absolute top-[20px] left-[40px] right-[40px] h-[2px] bg-gray-200"></div>
                        {["Commit", "Build", "Test", "Deploy"].map((step, idx) => (
                            <div key={idx} className="relative z-10 flex flex-col items-center w-20">
                                <div className="w-10 h-10 rounded-full border-2 border-yellow-500 flex items-center justify-center text-yellow-500 font-bold">
                                    {idx + 1}
                                </div>
                                <div className="text-xs font-medium text-gray-700 mt-2">{step}</div>
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-col gap-[15px] mt-5">
                        {[
                            { icon: "fa-code", title: "Automated Workflows", desc: "GitHub Actions for CI/CD pipeline" },
                            { icon: "fa-box", title: "Containerization", desc: "Docker for consistent environments" },
                        ].map((item, idx) => (
                            <div key={idx} className="flex items-start bg-gray-50 rounded-xl p-[15px] hover:translate-x-1 transition">
                                <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-yellow-100 mr-3">
                                    <i className={`fas ${item.icon} text-yellow-500 text-lg`}></i>
                                </div>
                                <div>
                                    <div className="text-[16px] font-semibold text-yellow-500 mb-1">{item.title}</div>
                                    <div className="text-sm text-gray-500">{item.desc}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Card 4 - Monitoring */}
                <div className="bg-white rounded-2xl p-[25px] shadow-md hover:-translate-y-1 hover:shadow-xl transition">
                    <div className="flex items-center mb-5">
                        <div className="w-[50px] h-[50px] rounded-xl bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center mr-[15px]">
                            <i className="fas fa-chart-line text-purple-500 text-2xl"></i>
                        </div>
                        <h3 className="text-[20px] font-semibold text-purple-500">Monitoring & Maintenance</h3>
                    </div>

                    <div className="flex flex-col gap-[15px]">
                        {[
                            { icon: "fa-heartbeat", title: "Health Monitoring", desc: "Real-time system status tracking" },
                            { icon: "fa-bug", title: "Error Tracking", desc: "Automated error detection and alerting" },
                            { icon: "fa-sync", title: "Update Strategy", desc: "Rolling updates with zero downtime" },
                        ].map((item, idx) => (
                            <div key={idx} className="flex items-start bg-gray-50 rounded-xl p-[15px] hover:translate-x-1 transition">
                                <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-purple-100 mr-3">
                                    <i className={`fas ${item.icon} text-purple-500 text-lg`}></i>
                                </div>
                                <div>
                                    <div className="text-[16px] font-semibold text-purple-500 mb-1">{item.title}</div>
                                    <div className="text-sm text-gray-500">{item.desc}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Note */}
            <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl p-5 mt-6 flex items-center">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white/50 mr-4">
                    <i className="fas fa-lightbulb text-blue-500 text-lg"></i>
                </div>
                <p className="text-blue-900 font-medium text-[16px]">
                    Deployment strategy focuses on reliability, scalability, and security to ensure the ATS-Friendly Resume Maker is always available and performing optimally.
                </p>
            </div>

            {/* Accent Circle */}
            <div className="absolute w-[300px] h-[300px] rounded-full bg-gradient-to-br from-blue-100/50 to-blue-200/30 bottom-[-150px] right-[-100px]"></div>
        </div>
    );
};

export default DeploymentContent;
