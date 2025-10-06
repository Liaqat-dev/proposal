import React from "react";
import SlideHeader from "../components/shared/slideHeader.jsx";

function Abstract() {
    return (
        <main className="content">
            <SlideHeader title={'Project Abstract'} subtitle={'A concise overview of the ATS-Friendly Resume Maker web application'} />

            {/* Cards */}
            <section className="cards-container flex flex-wrap gap-6 flex-grow">
                {/* Purpose */}
                <div className="card bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition flex-1 min-w-[45%]">
                    <div className="flex items-center mb-4">
                        <div
                            className="card-icon w-12 h-12 rounded-xl flex items-center justify-center mr-4 bg-gradient-to-br from-blue-100 to-blue-200">
                            <i className="fas fa-bullseye text-blue-500 text-xl"></i>
                        </div>
                        <h3 className="card-title text-xl font-semibold text-blue-800">
                            Purpose
                        </h3>
                    </div>
                    <div className="flex flex-col gap-3">
                        <div className="flex items-center text-slate-600">
                            <i className="fas fa-check-circle text-blue-500 mr-2"></i>
                            <span>ATS-optimized resumes</span>
                        </div>
                        <div className="flex items-center text-slate-600">
                            <i className="fas fa-check-circle text-blue-500 mr-2"></i>
                            <span>Keyword analysis</span>
                        </div>
                        <div className="flex items-center text-slate-600">
                            <i className="fas fa-check-circle text-blue-500 mr-2"></i>
                            <span>Professional templates</span>
                        </div>
                        <div className="flex items-center text-slate-600">
                            <i className="fas fa-check-circle text-blue-500 mr-2"></i>
                            <span>Real-time feedback</span>
                        </div>
                    </div>
                </div>

                {/* Approach */}
                <div className="card bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition flex-1 min-w-[45%]">
                    <div className="flex items-center mb-4">
                        <div
                            className="card-icon w-12 h-12 rounded-xl flex items-center justify-center mr-4 bg-gradient-to-br from-blue-100 to-blue-200">
                            <i className="fas fa-cogs text-blue-500 text-xl"></i>
                        </div>
                        <h3 className="card-title text-xl font-semibold text-blue-800">
                            Approach
                        </h3>
                    </div>
                    <div className="flex flex-col gap-3">
                        <div className="flex items-center text-slate-600">
                            <i className="fas fa-check-circle text-blue-500 mr-2"></i>
                            <span>User-friendly interface</span>
                        </div>
                        <div className="flex items-center text-slate-600">
                            <i className="fas fa-check-circle text-blue-500 mr-2"></i>
                            <span>Job description integration</span>
                        </div>
                        <div className="flex items-center text-slate-600">
                            <i className="fas fa-check-circle text-blue-500 mr-2"></i>
                            <span>ATS compatibility scoring</span>
                        </div>
                        <div className="flex items-center text-slate-600">
                            <i className="fas fa-check-circle text-blue-500 mr-2"></i>
                            <span>Multi-format export</span>
                        </div>
                    </div>
                </div>

                {/* Expected Outcome */}
                <div className="card bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition flex-1 min-w-[45%]">
                    <div className="flex items-center mb-4">
                        <div
                            className="card-icon w-12 h-12 rounded-xl flex items-center justify-center mr-4 bg-gradient-to-br from-blue-100 to-blue-200">
                            <i className="fas fa-chart-line text-blue-500 text-xl"></i>
                        </div>
                        <h3 className="card-title text-xl font-semibold text-blue-800">
                            Expected Outcome
                        </h3>
                    </div>
                    <div className="flex flex-col gap-3">
                        <div className="flex items-center text-slate-600">
                            <i className="fas fa-check-circle text-blue-500 mr-2"></i>
                            <span>Higher interview rates</span>
                        </div>
                        <div className="flex items-center text-slate-600">
                            <i className="fas fa-check-circle text-blue-500 mr-2"></i>
                            <span>Time-efficient process</span>
                        </div>
                        <div className="flex items-center text-slate-600">
                            <i className="fas fa-check-circle text-blue-500 mr-2"></i>
                            <span>Professional appearance</span>
                        </div>
                        <div className="flex items-center text-slate-600">
                            <i className="fas fa-check-circle text-blue-500 mr-2"></i>
                            <span>ATS compatibility</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Key Features */}
            <div className="bg-white rounded-2xl p-6 shadow-md mt-8 relative z-10">
                <h3 className="text-xl font-semibold text-blue-800 mb-4 flex items-center">
                    <i className="fas fa-star text-blue-500 mr-2"></i>
                    Key Features
                </h3>
                <div className="flex flex-wrap gap-3">
                    <div
                        className="feature-tag bg-gradient-to-r from-blue-100 to-blue-200 rounded-full px-4 py-2 text-blue-700 font-medium flex items-center">
                        <i className="fas fa-check-circle mr-2 text-sm"></i> ATS Optimization
                    </div>
                    <div
                        className="feature-tag bg-gradient-to-r from-blue-100 to-blue-200 rounded-full px-4 py-2 text-blue-700 font-medium flex items-center">
                        <i className="fas fa-check-circle mr-2 text-sm"></i> Keyword Analysis
                    </div>
                    <div
                        className="feature-tag bg-gradient-to-r from-blue-100 to-blue-200 rounded-full px-4 py-2 text-blue-700 font-medium flex items-center">
                        <i className="fas fa-check-circle mr-2 text-sm"></i> Template Library
                    </div>
                    <div
                        className="feature-tag bg-gradient-to-r from-blue-100 to-blue-200 rounded-full px-4 py-2 text-blue-700 font-medium flex items-center">
                        <i className="fas fa-check-circle mr-2 text-sm"></i> Real-time Feedback
                    </div>
                    <div
                        className="feature-tag bg-gradient-to-r from-blue-100 to-blue-200 rounded-full px-4 py-2 text-blue-700 font-medium flex items-center">
                        <i className="fas fa-check-circle mr-2 text-sm"></i> Multi-format Export
                    </div>
                    <div
                        className="feature-tag bg-gradient-to-r from-blue-100 to-blue-200 rounded-full px-4 py-2 text-blue-700 font-medium flex items-center">
                        <i className="fas fa-check-circle mr-2 text-sm"></i> Job Description Integration
                    </div>
                </div>
            </div>

        </main>
    );
}

export default Abstract;
