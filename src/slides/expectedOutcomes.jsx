import React from "react";

const ExpectedOutcomesContent= () => {
    return (
        <div className="flex flex-col relative flex-1 px-[60px] py-[50px]">
            {/* Header */}
            <div className="mb-8">
                <h1 className="text-[42px] font-bold text-blue-900 mb-2">
                    Expected Outcomes
                </h1>
                <p className="text-lg text-gray-500 font-normal">
                    Anticipated results and benefits of the ATS-Friendly Resume Maker
                </p>
            </div>

            {/* Outcomes Grid */}
            <div className="grid grid-cols-2 gap-6 flex-grow">
                {/* Tangible Outcomes */}
                <div className="bg-white rounded-2xl p-6 shadow-md hover:-translate-y-1 hover:shadow-xl transition">
                    <div className="flex items-center mb-6">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center mr-4">
                            <i className="fas fa-chart-bar text-blue-500 text-2xl"></i>
                        </div>
                        <h3 className="text-xl font-semibold text-blue-500">
                            Tangible Outcomes
                        </h3>
                    </div>

                    <div className="flex flex-col gap-4">
                        {[
                            { icon: "fa-user-tie", title: "Increased Interview Rates", metric: "+75%", progress: "w-[75%]" },
                            { icon: "fa-clock", title: "Reduced Time to Create Resume", metric: "-60%", progress: "w-[60%]" },
                            { icon: "fa-users", title: "User Adoption", metric: "10K+", progress: "w-[85%]" },
                            { icon: "fa-percentage", title: "ATS Compatibility Score", metric: "95%", progress: "w-[95%]" },
                        ].map((item, idx) => (
                            <div
                                key={idx}
                                className="flex items-start bg-gray-50 rounded-xl p-4 hover:translate-x-1 transition"
                            >
                                <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-blue-100 mr-3">
                                    <i className={`fas ${item.icon} text-blue-500 text-lg`}></i>
                                </div>
                                <div className="flex-1">
                                    <div className="flex justify-between items-center text-blue-500 font-semibold text-base mb-1">
                                        {item.title}
                                        <span className="bg-blue-100 text-blue-500 text-xs font-semibold px-3 py-1 rounded-full">
                      {item.metric}
                    </span>
                                    </div>
                                    <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
                                        <div className={`h-full bg-gradient-to-r from-blue-500 to-blue-400 ${item.progress}`}></div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Intangible Outcomes */}
                <div className="bg-white rounded-2xl p-6 shadow-md hover:-translate-y-1 hover:shadow-xl transition">
                    <div className="flex items-center mb-6">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center mr-4">
                            <i className="fas fa-lightbulb text-green-500 text-2xl"></i>
                        </div>
                        <h3 className="text-xl font-semibold text-green-500">
                            Intangible Outcomes
                        </h3>
                    </div>

                    <div className="flex flex-col gap-4">
                        {[
                            { icon: "fa-smile", title: "Improved Job Search Experience", metric: "High", progress: "w-[90%]" },
                            { icon: "fa-brain", title: "Reduced ATS Frustration", metric: "High", progress: "w-[80%]" },
                            { icon: "fa-graduation-cap", title: "Increased ATS Knowledge", metric: "Medium", progress: "w-[70%]" },
                            { icon: "fa-award", title: "Enhanced Professional Image", metric: "High", progress: "w-[85%]" },
                        ].map((item, idx) => (
                            <div
                                key={idx}
                                className="flex items-start bg-gray-50 rounded-xl p-4 hover:translate-x-1 transition"
                            >
                                <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-green-100 mr-3">
                                    <i className={`fas ${item.icon} text-green-500 text-lg`}></i>
                                </div>
                                <div className="flex-1">
                                    <div className="flex justify-between items-center text-green-500 font-semibold text-base mb-1">
                                        {item.title}
                                        <span className="bg-green-100 text-green-500 text-xs font-semibold px-3 py-1 rounded-full">
                      {item.metric}
                    </span>
                                    </div>
                                    <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
                                        <div className={`h-full bg-gradient-to-r from-green-500 to-green-400 ${item.progress}`}></div>
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
                    <i className="fas fa-info-circle text-blue-500 text-lg"></i>
                </div>
                <p className="text-blue-900 font-medium text-[16px]">
                    Success metrics will be tracked through user feedback, application
                    analytics, and post-launch surveys to measure the impact on job
                    seekers' success rates.
                </p>
            </div>

            {/* Accent Circle */}
            <div className="absolute w-[300px] h-[300px] rounded-full bg-gradient-to-br from-blue-100/50 to-blue-200/30 bottom-[-150px] right-[-100px]"></div>
        </div>
    );
};

export default ExpectedOutcomesContent;
