import React from "react";
import AnimatedCounter from "../components/animatedCounter.jsx";
import SlideHeader from "../components/shared/slideHeader.jsx";

function Introduction() {
    return (
        <main className="content">
            <SlideHeader title={'Understanding ATS Systems'} subtitle={'How applicant tracking systems work and why they matter'}/>

            {/* Stats */}
            <section className="flex gap-6 mb-10">
                {[
                    {number: 98,unit:"%", label: "Fortune 500 companies use ATS"},
                    {number: 75,unit:"%", label: "Resumes rejected by ATS"},
                    {number: 6,unit:"s", label: "Average recruiter review time"},
                ].map((stat, idx) => (
                    <div
                        key={idx}
                        className="flex-1 bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition flex flex-col items-center justify-center"
                    >
                        <div
                            className="text-5xl font-extrabold bg-gradient-to-r from-[#827c76] to-[#8D7F76] bg-clip-text text-transparent mb-2">
                            {AnimatedCounter({start:0,end:stat.number})}{stat.unit}
                        </div>
                        <p className="text-slate-500 font-medium text-center">
                            {stat.label}
                        </p>
                    </div>
                ))}
            </section>

            {/* Info Cards */}
            <section className="flex gap-6 flex-grow ">
                {/* How ATS Works */}
                <div className="flex-1 bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition flex flex-col h-fit">
                    <div className="flex items-center mb-6">
                        <div
                            className="w-12 h-12 rounded-xl flex items-center justify-center mr-4 bg-gradient-to-br from-blue-100 to-blue-200">
                            <i className="fas fa-cogs text-blue-500 text-2xl"></i>
                        </div>
                        <h3 className="text-xl font-semibold text-blue-700">How ATS Works</h3>
                    </div>
                    <div className="flex flex-col gap-4">
                        {[
                            {text: "Scans resumes for keywords"},
                            {text: "Parses content into structured data"},
                            {text: "Ranks candidates by relevance"},
                            {text: "Filters out non-qualified applicants"},
                        ].map((item, idx) => (
                            <div key={idx} className="flex items-start">
                                <i className="fas fa-check-circle text-blue-500 mt-1 mr-3"></i>
                                <span className="text-slate-600">
                  <span className="text-blue-700 font-semibold">
                    {item.text.split(" ")[0]}
                  </span>{" "}
                                    {item.text.split(" ").slice(1).join(" ")}
                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* The Growing Need */}
                <div className="flex-1 bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition flex flex-col h-fit">
                    <div className="flex items-center mb-6">
                        <div
                            className="w-12 h-12 rounded-xl flex items-center justify-center mr-4 bg-gradient-to-br from-blue-100 to-blue-200">
                            <i className="fas fa-chart-line text-blue-500 text-2xl"></i>
                        </div>
                        <h3 className="text-xl font-semibold text-blue-700">
                            The Growing Need
                        </h3>
                    </div>
                    <div className="flex flex-col gap-4">
                        {[
                            "Increased competition in job market",
                            "Digital first recruitment process",
                            "Efficiency demands from employers",
                            "Skill matching automation",
                        ].map((item, idx) => (
                            <div key={idx} className="flex items-start">
                                <i className="fas fa-check-circle text-blue-500 mt-1 mr-3"></i>
                                <span className="text-slate-600">
                  <span className="text-blue-700 font-semibold">
                    {item.split(" ")[0]}
                  </span>{" "}
                                    {item.split(" ").slice(1).join(" ")}
                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </main>
    );
}

export default Introduction;
