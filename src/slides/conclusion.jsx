import React from "react";
import NoteCard from "../components/noteCard.jsx";

const ConclusionContent = () => {
    return (
        <div className="flex flex-col relative flex-1 px-[60px] py-[50px]">
            {/* Header */}
            <div className="mb-8">
                <h1 className="text-[42px] font-bold text-blue-900 mb-2">
                    Project Conclusion
                </h1>
                <p className="text-lg text-gray-500 font-normal">
                    Key takeaways and future potential of the ATS-Friendly Resume Maker
                </p>
            </div>

            {/* Conclusion Grid */}
            <div className="grid grid-cols-2 gap-6 flex-grow">
                {/* Problem Recap */}
                <div
                    className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition transform hover:-translate-y-1">
                    <div className="flex items-center mb-4">
                        <div
                            className="w-12 h-12 rounded-xl flex items-center justify-center mr-4 bg-gradient-to-br from-blue-100 to-blue-200">
                            <i className="fas fa-exclamation-triangle text-blue-500 text-2xl"></i>
                        </div>
                        <h3 className="text-xl font-semibold text-blue-500">Problem Recap</h3>
                    </div>

                    <div className="flex flex-col gap-4">
                        {[
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
                        ].map((item, idx) => (
                            <div
                                key={idx}
                                className="flex items-start bg-gray-50 rounded-xl p-4 hover:translate-x-1 transition"
                            >
                                <div className="w-9 h-9 flex items-center justify-center rounded-md mr-3 bg-blue-100">
                                    <i className={`fas ${item.icon} text-blue-500`}></i>
                                </div>
                                <div>
                                    <div className="font-semibold text-blue-500">{item.title}</div>
                                    <div className="text-sm text-gray-600">{item.desc}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Our Solution */}
                <div
                    className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition transform hover:-translate-y-1">
                    <div className="flex items-center mb-4">
                        <div
                            className="w-12 h-12 rounded-xl flex items-center justify-center mr-4 bg-gradient-to-br from-green-100 to-green-200">
                            <i className="fas fa-lightbulb text-green-500 text-2xl"></i>
                        </div>
                        <h3 className="text-xl font-semibold text-green-500">Our Solution</h3>
                    </div>

                    <div className="flex flex-col gap-4">
                        {[
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
                        ].map((item, idx) => (
                            <div
                                key={idx}
                                className="flex items-start bg-gray-50 rounded-xl p-4 hover:translate-x-1 transition"
                            >
                                <div className="w-9 h-9 flex items-center justify-center rounded-md mr-3 bg-green-100">
                                    <i className={`fas ${item.icon} text-green-500`}></i>
                                </div>
                                <div>
                                    <div className="font-semibold text-green-500">{item.title}</div>
                                    <div className="text-sm text-gray-600">{item.desc}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Key Benefits */}
                <div
                    className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition transform hover:-translate-y-1">
                    <div className="flex items-center mb-4">
                        <div
                            className="w-12 h-12 rounded-xl flex items-center justify-center mr-4 bg-gradient-to-br from-yellow-100 to-yellow-200">
                            <i className="fas fa-star text-yellow-500 text-2xl"></i>
                        </div>
                        <h3 className="text-xl font-semibold text-yellow-500">Key Benefits</h3>
                    </div>

                    <div className="flex flex-col gap-4">
                        {[
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
                        ].map((item, idx) => (
                            <div
                                key={idx}
                                className="flex items-start bg-gray-50 rounded-xl p-4 hover:translate-x-1 transition"
                            >
                                <div className="w-9 h-9 flex items-center justify-center rounded-md mr-3 bg-yellow-100">
                                    <i className={`fas ${item.icon} text-yellow-500`}></i>
                                </div>
                                <div>
                                    <div className="font-semibold text-yellow-500">{item.title}</div>
                                    <div className="text-sm text-gray-600">{item.desc}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Future Potential */}
                <div
                    className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition transform hover:-translate-y-1">
                    <div className="flex items-center mb-4">
                        <div
                            className="w-12 h-12 rounded-xl flex items-center justify-center mr-4 bg-gradient-to-br from-purple-100 to-purple-200">
                            <i className="fas fa-rocket text-purple-500 text-2xl"></i>
                        </div>
                        <h3 className="text-xl font-semibold text-purple-500">
                            Future Potential
                        </h3>
                    </div>

                    <div className="flex flex-col gap-4">
                        {[
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
                        ].map((item, idx) => (
                            <div
                                key={idx}
                                className="flex items-start bg-gray-50 rounded-xl p-4 hover:translate-x-1 transition"
                            >
                                <div className="w-9 h-9 flex items-center justify-center rounded-md mr-3 bg-purple-100">
                                    <i className={`fas ${item.icon} text-purple-500`}></i>
                                </div>
                                <div>
                                    <div className="font-semibold text-purple-500">{item.title}</div>
                                    <div className="text-sm text-gray-600">{item.desc}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <NoteCard
                icon={'fa-trophy'}
                note={"The ATS-Friendly Resume Maker bridges the gap between qualified candidates and employers by ensuring resumes pass through automated screening systems,empowering job seekers to showcase their skills effectively in the modern job market."}
            />
        </div>
    );
};

export default ConclusionContent;
