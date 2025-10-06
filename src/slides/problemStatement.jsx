import React from "react";
import AnimatedCounter from "../components/animatedCounter.jsx";
import SlideHeader from "../components/shared/slideHeader.jsx";

const ProblemStatement = () => {
    return (
        <div className="content">
            <SlideHeader title={'Problem Statement'} subtitle={'Key challenges in creating ATS-compatible resumes'}/>

            {/* Main Content */}
            <div className="main-content flex gap-8 flex-grow">
                {/* Left Panel */}
                <div className="left-panel flex-3 flex flex-col gap-6">
                    {/* ATS Rejection Factors */}
                    <div className="card bg-white rounded-2xl p-6 shadow hover:shadow-lg transition-all">
                        <div className="card-header flex items-center mb-4">
                            <div
                                className="card-icon w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-200 mr-4">
                                <i className="fas fa-filter text-blue-500 text-xl"></i>
                            </div>
                            <h3 className="card-title text-xl font-semibold text-blue-900">
                                ATS Rejection Factors
                            </h3>
                        </div>

                        <div className="rejection-factors grid grid-cols-2 gap-4">
                            <div
                                className="factor flex items-center bg-gray-50 rounded-xl p-3 border-l-4 border-red-500">
                                <div
                                    className="factor-icon w-10 h-10 flex items-center justify-center rounded-lg bg-red-100 mr-3">
                                    <i className="fas fa-table text-red-500"></i>
                                </div>
                                <div className="factor-text font-medium text-gray-700">
                                    Complex formatting
                                </div>
                            </div>
                            <div
                                className="factor flex items-center bg-gray-50 rounded-xl p-3 border-l-4 border-red-500">
                                <div
                                    className="factor-icon w-10 h-10 flex items-center justify-center rounded-lg bg-red-100 mr-3">
                                    <i className="fas fa-search text-red-500"></i>
                                </div>
                                <div className="factor-text font-medium text-gray-700">
                                    Missing keywords
                                </div>
                            </div>
                            <div
                                className="factor flex items-center bg-gray-50 rounded-xl p-3 border-l-4 border-red-500">
                                <div
                                    className="factor-icon w-10 h-10 flex items-center justify-center rounded-lg bg-red-100 mr-3">
                                    <i className="fas fa-font text-red-500"></i>
                                </div>
                                <div className="factor-text font-medium text-gray-700">
                                    Unconventional fonts
                                </div>
                            </div>
                            <div
                                className="factor flex items-center bg-gray-50 rounded-xl p-3 border-l-4 border-red-500">
                                <div
                                    className="factor-icon w-10 h-10 flex items-center justify-center rounded-lg bg-red-100 mr-3">
                                    <i className="fas fa-tags text-red-500"></i>
                                </div>
                                <div className="factor-text font-medium text-gray-700">
                                    Improper section labels
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Key Statistics */}
                    <div className="card bg-white rounded-2xl p-6 shadow hover:shadow-lg transition-all">
                        <div className="card-header flex items-center mb-4">
                            <div
                                className="card-icon w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-200 mr-4">
                                <i className="fas fa-chart-line text-blue-500 text-xl"></i>
                            </div>
                            <h3 className="card-title text-xl font-semibold text-blue-900">
                                Key Statistics
                            </h3>
                        </div>

                        <div className="stats flex flex-col gap-4">
                            <div
                                className="stat flex items-center bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl p-5">
                                <div className="stat-number text-3xl font-bold text-blue-900 mr-4">
                                    {AnimatedCounter({start:0,end:75})}%
                                </div>
                                <div className="stat-text font-medium text-gray-700">
                                    Resumes rejected by ATS before human review
                                </div>
                            </div>
                            <div
                                className="stat flex items-center bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl p-5">
                                <div className="stat-number text-3xl font-bold text-blue-900 mr-4">
                                    {AnimatedCounter({start:0,end:10})}s
                                </div>
                                <div className="stat-text font-medium text-gray-700">
                                    Average time ATS scans a resume
                                </div>
                            </div>
                            <div
                                className="stat flex items-center bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl p-5">
                                <div className="stat-number text-3xl font-bold text-blue-900 mr-4">
                                    {AnimatedCounter({start:0,end:3})}x
                                </div>
                                <div className="stat-text font-medium text-gray-700">
                                    Higher interview rates with ATS-optimized resumes
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Panel */}
                <div className="right-panel flex-2 flex flex-col gap-6 h-fit">
                    <div className="gap-card bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl p-6 flex-grow">
                        <div className="gap-title flex items-center text-xl font-semibold text-blue-900 mb-4">
                            <i className="fas fa-puzzle-piece text-blue-500 mr-2"></i>
                            Gap in Current Solutions
                        </div>
                        <div className="gap-list flex flex-col gap-3">
                            <div className="gap-item flex items-center">
                                <i className="fas fa-times-circle text-blue-500 mr-2"></i>
                                <span className="text-gray-700 font-medium">
                  Resume builders focus on{" "}
                                    <span className="highlight font-semibold text-blue-900">
                    visual appeal
                  </span>{" "}
                                    over ATS compatibility
                </span>
                            </div>
                            <div className="gap-item flex items-center">
                                <i className="fas fa-times-circle text-blue-500 mr-2"></i>
                                <span className="text-gray-700 font-medium">
                  Lack of{" "}
                                    <span className="highlight font-semibold text-blue-900">
                    job description analysis
                  </span>{" "}
                                    for keyword optimization
                </span>
                            </div>
                            <div className="gap-item flex items-center">
                                <i className="fas fa-times-circle text-blue-500 mr-2"></i>
                                <span className="text-gray-700 font-medium">
                  No{" "}
                                    <span className="highlight font-semibold text-blue-900">
                    real-time feedback
                  </span>{" "}
                                    on ATS compatibility
                </span>
                            </div>
                            <div className="gap-item flex items-center">
                                <i className="fas fa-times-circle text-blue-500 mr-2"></i>
                                <span className="text-gray-700 font-medium">
                  Limited{" "}
                                    <span className="highlight font-semibold text-blue-900">
                    education
                  </span>{" "}
                                    on ATS requirements
                </span>
                            </div>
                            <div className="gap-item flex items-center">
                                <i className="fas fa-times-circle text-blue-500 mr-2"></i>
                                <span className="text-gray-700 font-medium">
                  Templates not{" "}
                                    <span className="highlight font-semibold text-blue-900">
                    tested
                  </span>{" "}
                                    against actual ATS systems
                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProblemStatement;
