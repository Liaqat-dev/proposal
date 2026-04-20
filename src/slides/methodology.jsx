import React from "react";
import NoteCard from "../components/noteCard.jsx";
import SlideHeader from "../components/shared/slideHeader.jsx";

function Methodology() {
    return (
        <main
            className="content">

            <SlideHeader title={'Methodology'}
                         subtitle={'Agile development process, research methods, and evaluation strategy followed during development'}/>

            {/* Methodology Grid */}
            <section className="grid grid-cols-2 gap-6 ">
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
                        "Followed Agile methodology with 2-week sprints",
                        "Gathered feedback from job seekers throughout development",
                        "Iterated continuously with testing at each sprint",
                        "Delivered core MVP first, then expanded all features",
                    ].map((item, idx) => (
                        <div key={idx} className="flex items-start mb-3">
                            <i className="fas fa-check-circle text-blue-500 mt-1 mr-3"></i>
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
            </section>

        {/*    <NoteCard*/}
        {/*        icon={'fa-lightbulb'}*/}
        {/*        note={"Success was measured through ATS compatibility scores, usability testing feedback, and performance benchmarks — all targets were met or exceeded."}/>*/}
        </main>
    );
}

export default Methodology;
