import React from "react";
import NoteCard from "../components/noteCard.jsx";
import AnimatedCounter from "../components/animatedCounter.jsx";
import SlideHeader from "../components/shared/slideHeader.jsx";

function Methodology() {
    return (
        <main
            className="content">

            <SlideHeader title={'Methodology'} subtitle={'Development approach and processes for the ATS-Friendly Resume Maker'}/>

            {/* Methodology Grid */}
            <section className="grid grid-cols-2 gap-6 flex-grow">
                {/* Development Approach */}
                <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition flex flex-col">
                    <div className="flex items-center mb-6">
                        <div
                            className="w-12 h-12 rounded-xl flex items-center justify-center mr-4 bg-gradient-to-br from-blue-100 to-blue-200">
                            <i className="fas fa-project-diagram text-blue-500 text-2xl"></i>
                        </div>
                        <h3 className="text-xl font-semibold text-blue-700">
                            Development Approach
                        </h3>
                    </div>
                    {[
                        "Agile methodology with 2-week sprints",
                        "User-centered design with job seeker feedback",
                        "Iterative development with continuous testing",
                        "MVP first approach with feature expansion",
                    ].map((item, idx) => (
                        <div key={idx} className="flex items-start mb-3">
                            <i className="fas fa-check-circle text-blue-500 mt-1 mr-3"></i>
                            <span className="text-slate-600 font-medium">{item}</span>
                        </div>
                    ))}
                </div>

                {/* Research Methods */}
                <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition flex flex-col">
                    <div className="flex items-center mb-6">
                        <div
                            className="w-12 h-12 rounded-xl flex items-center justify-center mr-4 bg-gradient-to-br from-green-100 to-green-200">
                            <i className="fas fa-flask text-green-500 text-2xl"></i>
                        </div>
                        <h3 className="text-xl font-semibold text-green-700">
                            Research Methods
                        </h3>
                    </div>
                    {[
                        "ATS analysis of existing systems",
                        "User interviews with job seekers",
                        "Competitor analysis of resume builders",
                        "Industry research on recruitment trends",
                    ].map((item, idx) => (
                        <div key={idx} className="flex items-start mb-3">
                            <i className="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                            <span className="text-slate-600 font-medium">{item}</span>
                        </div>
                    ))}
                </div>

                {/* Development Process */}
                <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition flex flex-col">
                    <div className="flex items-center mb-6">
                        <div
                            className="w-12 h-12 rounded-xl flex items-center justify-center mr-4 bg-gradient-to-br from-yellow-100 to-yellow-200">
                            <i className="fas fa-tasks text-yellow-500 text-2xl"></i>
                        </div>
                        <h3 className="text-xl font-semibold text-yellow-700">
                            Development Process
                        </h3>
                    </div>

                    {/* Steps */}
                    <div className="flex justify-between mb-4 relative">
                        <div className="absolute top-[20px] left-[40px] right-[40px] h-[2px] z-0 bg-gray-200 "></div>
                        {["Planning", "Design", "Develop", "Test"].map((step, idx) => (
                            <div key={idx} className="flex flex-col items-center">
                                <div
                                    className="w-10 h-10 rounded-full flex z-10 items-center justify-center bg-gradient-to-br from-yellow-100 to-yellow-200 text-yellow-700 font-semibold mb-2">
                                    {idx + 1}
                                </div>
                                <span className="text-xs font-medium text-slate-600 ">
                  {step}
                </span>
                            </div>
                        ))}
                    </div>

                    {[
                        "Requirements gathering and prioritization",
                        "UI/UX design with wireframes and prototypes",
                    ].map((item, idx) => (
                        <div key={idx} className="flex items-start mb-3">
                            <i className="fas fa-check-circle text-yellow-500 mt-1 mr-3"></i>
                            <span className="text-slate-600 font-medium">{item}</span>
                        </div>
                    ))}
                </div>

                {/* Testing & Evaluation */}
                <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition flex flex-col">
                    <div className="flex items-center mb-6">
                        <div
                            className="w-12 h-12 rounded-xl flex items-center justify-center mr-4 bg-gradient-to-br from-purple-100 to-purple-200">
                            <i className="fas fa-clipboard-check text-purple-500 text-2xl"></i>
                        </div>
                        <h3 className="text-xl font-semibold text-purple-700">
                            Testing & Evaluation
                        </h3>
                    </div>
                    {[
                        "ATS compatibility testing with real systems",
                        "Usability testing with target users",
                        "Performance testing under various loads",
                    ].map((item, idx) => (
                        <div key={idx} className="flex items-start mb-3">
                            <i className="fas fa-check-circle text-purple-500 mt-1 mr-3"></i>
                            <span className="text-slate-600 font-medium">{item}</span>
                        </div>
                    ))}

                    {/* Metrics */}
                    <div className="flex gap-3 mt-4">
                        {[
                            {pre: " ", value: 95, unit: "%", label: "ATS Pass Rate"},
                            {pre: "4.", value: 5 , unit: "/5", label: "User Satisfaction"},
                            {pre: "<", value: 2, unit: "s", label: "Response Time"},
                        ].map((metric, idx) => (
                            <div
                                key={idx}
                                className="flex-1 rounded-lg bg-gradient-to-br from-purple-100 to-purple-200 p-3 text-center"
                            >
                                <div className="text-lg font-bold text-purple-700">
                                    {/*{metric.value}*/}
                                    {metric.pre}{AnimatedCounter({start: 0, end: metric.value})}{metric.unit}
                                </div>
                                <div className="text-xs text-slate-600">{metric.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <NoteCard
                icon={'fa-lightbulb'}
                note={"Success will be measured by ATS compatibility scores, user adoption rates, and feedback from both job seekers and recruitment professionals."}/>
        </main>
    );
}

export default Methodology;
