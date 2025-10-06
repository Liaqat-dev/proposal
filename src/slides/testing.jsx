import React from "react";

const Testing = () => {
    return (
        <div className="flex flex-col relative flex-1 px-[60px] py-[50px]">
            {/* Header */}
            <div className="mb-[30px]">
                <h1 className="text-[42px] font-bold text-blue-900 mb-[10px]">
                    Testing Strategy
                </h1>
                <p className="text-[18px] text-gray-500 font-normal">
                    Comprehensive testing approach for the ATS-Friendly Resume Maker
                </p>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-2 gap-[25px] flex-grow">
                {/* Card 1 - Strategy */}
                <div className="card card-blue">
                    <div className="card-header ">
                        <div className="card-header-icon">
                            <i className="fas fa-chess "></i>
                        </div>
                        <h3 className="card-header-title">Testing Strategy</h3>
                    </div>

                    <div className="card-body">
                        {[
                            {
                                icon: "fa-sitemap",
                                title: "Test-Driven Development",
                                desc: "Write tests before code implementation"
                            },
                            {
                                icon: "fa-sync-alt",
                                title: "Continuous Testing",
                                desc: "Automated tests with each code commit"
                            },
                            {
                                icon: "fa-users",
                                title: "User Feedback Integration",
                                desc: "Real user testing throughout development"
                            },
                        ].map((item, idx) => (
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

                {/* Card 3 - Tools */}
                <div
                    className="card card-yellow">
                    <div className="card-header ">
                        <div
                            className="card-header-icon">
                            <i className="fas fa-tools"></i>
                        </div>
                        <h3 className="card-header-title">Testing Tools</h3>
                    </div>

                    <div className="card-body">
                        {[
                            {icon: "fa-vial", title: "Jest", desc: "JavaScript testing framework"},
                            {icon: "fa-spider", title: "Cypress", desc: "End-to-end testing framework"},
                            {
                                icon: "fa-chart-line",
                                title: "Performance Testing",
                                desc: "Load and stress testing tools"
                            },
                        ].map((item, idx) => (
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
                {/* Card 2 - Types */}
                <div
                    className="card card-green">
                    <div className="card-header ">
                        <div
                            className="card-header-icon">
                            <i className="fas fa-list-ul "></i>
                        </div>
                        <h3 className="card-header-title">Testing Types</h3>
                    </div>

                    <div className="card-body">
                        {[
                            {icon: "fa-cube", title: "Unit Testing", desc: "Individual component validation"},
                            {icon: "fa-plug", title: "Integration Testing", desc: "Component interaction validation"},
                            {icon: "fa-desktop", title: "System Testing", desc: "End-to-end application validation"},
                            {
                                icon: "fa-user-check",
                                title: "User Acceptance Testing",
                                desc: "Real-world ATS compatibility testing"
                            },
                        ].map((item, idx) => (
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


                {/* Card 4 - Metrics */}
                <div
                    className="card card-purple ">
                    <div className="card-header ">
                        <div
                            className="card-header-icon">
                            <i className="fas fa-chart-bar "></i>
                        </div>
                        <h3 className="card-header-title">Quality Metrics</h3>
                    </div>

                    <div className="card-body">
                        {[
                            {
                                icon: "fa-check-circle",
                                title: "Test Coverage",
                                value: "90%+",
                                desc: "Code coverage target"
                            },
                            {
                                icon: "fa-tachometer-alt",
                                title: "Performance",
                                value: "< 2s",
                                desc: "Response time target"
                            },
                            {icon: "fa-robot", title: "ATS Compatibility", value: "95%", desc: "ATS pass rate target"},
                        ].map((item, idx) => (
                            <div
                                key={idx}
                                className="card-item"
                            >
                                <div className="card-item-icon">
                                    <i className={`fas ${item.icon} `}></i>
                                </div>
                                <div className="flex-1">
                                    <div className="card-item-title">{item.title}</div>
                                    <div
                                        className="card-item-subtitle flex">
                                        <div className="text-md font-bold text-purple-500 mr-2">{item.value}</div>
                                        <div className="text-sm text-gray-700 leading-tight">{item.desc}</div>
                                    </div>
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
                    Testing focuses on ATS compatibility, user experience, and performance to ensure the resume maker
                    meets all requirements and delivers value to job seekers.
                </p>
            </div>
        </div>
    );
};

export default Testing;
