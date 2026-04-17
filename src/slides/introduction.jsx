import React from "react";
import AnimatedCounter from "../components/animatedCounter.jsx";
import SlideHeader from "../components/shared/slideHeader.jsx";

function Introduction() {
    const stats = [
        {number: 98, unit: "%", label: "Fortune 500 companies use ATS"},
        {number: 75, unit: "%", label: "Resumes rejected before human review"},
        {number: 14, unit: "%", label: "Job seekers who know how to optimise for ATS"},
        {number: 7, unit: "s", label: "Average recruiter review time per resume"},
    ];

    const howAtsWorks = [
        {text: "Document Parsing — converts PDF/DOCX to structured data"},
        {text: "Keyword Matching — lexical & semantic matching against JD"},
        {text: "Scoring & Ranking — numeric ATS score gates human review"},
        {text: "Section Recognition — identifies Experience, Education, Skills"},
    ];

    const growingNeed = [
        "98% Fortune 500 companies use cloud-based ATS software",
        "43% of visually formatted resumes fail ATS parsing tests",
        "Systematic disadvantage for first-gen graduates & career changers",
        "Single tool gap: resume building + interview prep not integrated",
    ];

    return (
        <main className="content">
            <SlideHeader
                title={"Understanding ATS Systems"}
                subtitle={"How applicant tracking systems work and why they create a critical knowledge gap"}
            />

            {/* Stats row */}
            <section className="flex gap-5 mb-8">
                {stats.map((stat, idx) => (
                    <div
                        key={idx}
                        className="flex-1 bg-white rounded-2xl p-5 shadow-md hover:shadow-xl transition flex flex-col items-center justify-center"
                    >
                        <div className="text-4xl font-extrabold bg-gradient-to-r from-[#827c76] to-[#8D7F76] bg-clip-text text-transparent mb-1">
                            <AnimatedCounter start={0} end={stat.number}/>{stat.unit}
                        </div>
                        <p className="text-slate-500 font-medium text-center text-sm">{stat.label}</p>
                    </div>
                ))}
            </section>

            {/* Info cards */}
            <section className="flex gap-6 ">
                {/* How ATS Works */}
                <div className="flex-1 bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition flex flex-col">
                    <div className="flex items-center mb-5">
                        <div className="w-12 h-12 rounded-xl flex items-center justify-center mr-4 bg-gradient-to-br from-blue-100 to-blue-200">
                            <i className="fas fa-cogs text-blue-500 text-2xl"></i>
                        </div>
                        <h3 className="text-xl font-semibold text-blue-700">How ATS Works</h3>
                    </div>
                    <div className="flex flex-col gap-4">
                        {howAtsWorks.map((item, idx) => (
                            <div key={idx} className="flex items-start">
                                <i className="fas fa-check-circle text-blue-500 mt-1 mr-3 flex-shrink-0"></i>
                                <span className="text-slate-600">
                                    <span className="text-blue-700 font-semibold">{item.text.split("—")[0].trim()}</span>
                                    {item.text.includes("—") ? ` — ${item.text.split("—")[1].trim()}` : ""}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* The Problem */}
                <div className="flex-1 bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition flex flex-col">
                    <div className="flex items-center mb-5">
                        <div className="w-12 h-12 rounded-xl flex items-center justify-center mr-4 bg-gradient-to-br from-red-100 to-red-200">
                            <i className="fas fa-exclamation-triangle text-red-500 text-2xl"></i>
                        </div>
                        <h3 className="text-xl font-semibold text-red-700">The Knowledge Gap Problem</h3>
                    </div>
                    <div className="flex flex-col gap-4">
                        {growingNeed.map((item, idx) => (
                            <div key={idx} className="flex items-start">
                                <i className="fas fa-times-circle text-red-400 mt-1 mr-3 flex-shrink-0"></i>
                                <span className="text-slate-600">{item}</span>
                            </div>
                        ))}
                    </div>

                    <div className="mt-auto pt-4 bg-gradient-to-r from-red-50 to-orange-50 rounded-xl p-4">
                        <p className="text-sm font-medium text-red-800">
                            <i className="fas fa-lightbulb mr-2 text-orange-500"></i>
                            72% of job seekers know ATS exists — but only <strong>14%</strong> know how to optimise for it.
                            <span className="text-slate-500"> (TopResume, 2021)</span>
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Introduction;
