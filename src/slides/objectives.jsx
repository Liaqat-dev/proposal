import React from "react";
import NoteCard from "../components/noteCard.jsx";
import SlideHeader from "../components/shared/slideHeader.jsx";

const Objectives = () => {
    return (
        <div className="content">
            <SlideHeader title={'Project Objectives'} subtitle={'Primary and secondary goals with measurable outcomes'}/>

            {/* Objectives Container */}
            <div className="objectives-container flex gap-8 flex-grow">
                {/* Primary Objectives */}
                <div className="objectives-column flex flex-col gap-5 flex-1">
                    <div
                        className="objectives-card bg-white rounded-2xl p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition">
                        <div className="card-header flex items-center mb-5">
                            <div
                                className="card-icon w-16 h-16 rounded-full flex justify-center items-center mr-4 bg-gradient-to-br from-blue-100 to-blue-200">
                                <i className="fas fa-bullseye text-blue-500 text-2xl"></i>
                            </div>
                            <h2 className="card-title text-2xl font-bold text-blue-500">
                                Primary Objectives
                            </h2>
                        </div>

                        <div className="objectives-list flex flex-col gap-4 flex-grow">
                            {/* Objective 1 */}
                            <div
                                className="objective-item flex items-start bg-gray-50 rounded-xl p-4 hover:translate-x-1 transition">
                                <div
                                    className="objective-icon w-10 h-10 flex justify-center items-center mr-4 rounded-lg bg-blue-100">
                                    <i className="fas fa-file-alt text-blue-500 text-lg"></i>
                                </div>
                                <div className="objective-content flex-grow">
                                    <h3 className="objective-title text-lg font-semibold text-blue-900 mb-1">
                                        ATS-Optimized Resume Builder
                                    </h3>
                                    <p className="objective-desc text-sm text-gray-500 mb-2">
                                        Create web application generating ATS-friendly resumes
                                    </p>
                                    <div
                                        className="metric inline-flex items-center bg-gradient-to-br from-blue-100 to-blue-200 text-blue-900 font-semibold px-3 py-1 rounded-full text-sm">
                                        <i className="fas fa-chart-line mr-1 text-xs"></i>
                                        Target: 95% ATS compatibility
                                    </div>
                                </div>
                            </div>

                            {/* Objective 2 */}
                            <div
                                className="objective-item flex items-start bg-gray-50 rounded-xl p-4 hover:translate-x-1 transition">
                                <div
                                    className="objective-icon w-10 h-10 flex justify-center items-center mr-4 rounded-lg bg-blue-100">
                                    <i className="fas fa-search text-blue-500 text-lg"></i>
                                </div>
                                <div className="objective-content flex-grow">
                                    <h3 className="objective-title text-lg font-semibold text-blue-900 mb-1">
                                        Keyword Analysis
                                    </h3>
                                    <p className="objective-desc text-sm text-gray-500 mb-2">
                                        Extract and recommend relevant keywords from job descriptions
                                    </p>
                                    <div
                                        className="metric inline-flex items-center bg-gradient-to-br from-blue-100 to-blue-200 text-blue-900 font-semibold px-3 py-1 rounded-full text-sm">
                                        <i className="fas fa-chart-line mr-1 text-xs"></i>
                                        Target: 90% keyword match rate
                                    </div>
                                </div>
                            </div>

                            {/* Objective 3 */}
                            <div
                                className="objective-item flex items-start bg-gray-50 rounded-xl p-4 hover:translate-x-1 transition">
                                <div
                                    className="objective-icon w-10 h-10 flex justify-center items-center mr-4 rounded-lg bg-blue-100">
                                    <i className="fas fa-chart-line text-blue-500 text-lg"></i>
                                </div>
                                <div className="objective-content flex-grow">
                                    <h3 className="objective-title text-lg font-semibold text-blue-900 mb-1">
                                        Increase Interview Rates
                                    </h3>
                                    <p className="objective-desc text-sm text-gray-500 mb-2">
                                        Help users secure more interviews with optimized resumes
                                    </p>
                                    <div
                                        className="metric inline-flex items-center bg-gradient-to-br from-blue-100 to-blue-200 text-blue-900 font-semibold px-3 py-1 rounded-full text-sm">
                                        <i className="fas fa-chart-line mr-1 text-xs"></i>
                                        Target: 3x increase in interviews
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Secondary Objectives */}
                <div className="objectives-column flex flex-col gap-5 flex-1">
                    <div
                        className="objectives-card bg-white rounded-2xl p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition">
                        <div className="card-header flex items-center mb-5">
                            <div
                                className="card-icon w-16 h-16 rounded-full flex justify-center items-center mr-4 bg-gradient-to-br from-purple-100 to-purple-200">
                                <i className="fas fa-star text-purple-500 text-2xl"></i>
                            </div>
                            <h2 className="card-title text-2xl font-bold text-purple-500">
                                Secondary Objectives
                            </h2>
                        </div>

                        <div className="objectives-list flex flex-col gap-4 flex-grow">
                            {/* Objective 1 */}
                            <div
                                className="objective-item flex items-start bg-gray-50 rounded-xl p-4 hover:translate-x-1 transition">
                                <div
                                    className="objective-icon w-10 h-10 flex justify-center items-center mr-4 rounded-lg bg-purple-100">
                                    <i className="fas fa-palette text-purple-500 text-lg"></i>
                                </div>
                                <div className="objective-content flex-grow">
                                    <h3 className="objective-title text-lg font-semibold text-purple-700 mb-1">
                                        Template Library
                                    </h3>
                                    <p className="objective-desc text-sm text-gray-500 mb-2">
                                        Collection of professional, ATS-friendly templates
                                    </p>
                                    <div
                                        className="metric inline-flex items-center bg-gradient-to-br from-purple-100 to-purple-200 text-purple-700 font-semibold px-3 py-1 rounded-full text-sm">
                                        <i className="fas fa-chart-line mr-1 text-xs"></i>
                                        Target: 10+ templates
                                    </div>
                                </div>
                            </div>

                            {/* Objective 2 */}
                            <div
                                className="objective-item flex items-start bg-gray-50 rounded-xl p-4 hover:translate-x-1 transition">
                                <div
                                    className="objective-icon w-10 h-10 flex justify-center items-center mr-4 rounded-lg bg-purple-100">
                                    <i className="fas fa-user-friends text-purple-500 text-lg"></i>
                                </div>
                                <div className="objective-content flex-grow">
                                    <h3 className="objective-title text-lg font-semibold text-purple-700 mb-1">
                                        User Experience
                                    </h3>
                                    <p className="objective-desc text-sm text-gray-500 mb-2">
                                        Intuitive interface simplifying resume creation
                                    </p>
                                    <div
                                        className="metric inline-flex items-center bg-gradient-to-br from-purple-100 to-purple-200 text-purple-700 font-semibold px-3 py-1 rounded-full text-sm">
                                        <i className="fas fa-chart-line mr-1 text-xs"></i>
                                        Target: &lt; 5 min to create resume
                                    </div>
                                </div>
                            </div>

                            {/* Objective 3 */}
                            <div
                                className="objective-item flex items-start bg-gray-50 rounded-xl p-4 hover:translate-x-1 transition">
                                <div
                                    className="objective-icon w-10 h-10 flex justify-center items-center mr-4 rounded-lg bg-purple-100">
                                    <i className="fas fa-download text-purple-500 text-lg"></i>
                                </div>
                                <div className="objective-content flex-grow">
                                    <h3 className="objective-title text-lg font-semibold text-purple-700 mb-1">
                                        Multi-format Export
                                    </h3>
                                    <p className="objective-desc text-sm text-gray-500 mb-2">
                                        Enable downloading resumes in various formats
                                    </p>
                                    <div
                                        className="metric inline-flex items-center bg-gradient-to-br from-purple-100 to-purple-200 text-purple-700 font-semibold px-3 py-1 rounded-full text-sm">
                                        <i className="fas fa-chart-line mr-1 text-xs"></i>
                                        Target: PDF, Word, TXT formats
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <NoteCard
                icon={"fa-info-circle"}
                title={"Measurable Outcomes"}
                note={"Success measured through user testing, ATS compatibility scores and post-launch metrics including adoption rates and interview success."}/>
        </div>
    );
};

export default Objectives;
