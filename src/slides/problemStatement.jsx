import React from "react";
import SlideHeader from "../components/shared/slideHeader.jsx";
import NoteCard from "../components/noteCard.jsx";

const ProblemStatement = () => {
    const subProblems = [
        {
            icon: "fa-filter",
            color: "red",
            title: "ATS Invisible Barrier",
            desc: "75% of resumes rejected by ATS before human review. 43% of visually formatted resumes suffer serious parsing degradation.",
        },
        {
            icon: "fa-file-alt",
            color: "orange",
            title: "Generic Resume Content",
            desc: "Existing AI tools produce non-contextualised text not tailored to specific job descriptions — low semantic depth.",
        },
        {
            icon: "fa-paint-brush",
            color: "yellow",
            title: "Design–ATS Conflict",
            desc: "General design tools (Canva, Word) create visually appealing resumes with zero ATS compliance awareness.",
        },
        {
            icon: "fa-puzzle-piece",
            color: "blue",
            title: "Fragmented Pipeline",
            desc: "No unified tool connects resume building, ATS scoring, and interview preparation around the same job description.",
        },
        {
            icon: "fa-store",
            color: "green",
            title: "No Community Templates",
            desc: "No resume-specific community template ecosystem with ATS-aware validation — templates are either proprietary or design-only.",
        },
    ];

    const colorMap = {
        red:    {bg: "bg-red-100",    icon: "text-red-500",    border: "border-red-400",    badge: "bg-red-50 text-red-700"},
        orange: {bg: "bg-orange-100", icon: "text-orange-500", border: "border-orange-400", badge: "bg-orange-50 text-orange-700"},
        yellow: {bg: "bg-yellow-100", icon: "text-yellow-600", border: "border-yellow-400", badge: "bg-yellow-50 text-yellow-700"},
        blue:   {bg: "bg-blue-100",   icon: "text-blue-500",   border: "border-blue-400",   badge: "bg-blue-50 text-blue-700"},
        purple: {bg: "bg-purple-100", icon: "text-purple-500", border: "border-purple-400", badge: "bg-purple-50 text-purple-700"},
        green:  {bg: "bg-green-100",  icon: "text-green-500",  border: "border-green-400",  badge: "bg-green-50 text-green-700"},
    };

    return (
        <div className="content">
            <SlideHeader
                title={"Problem Statement"}
                subtitle={"Six interconnected sub-problems ResuCraft is designed to solve"}
            />

            <div className="grid grid-cols-3 gap-5 ">
                {subProblems.map((p, idx) => {
                    const c = colorMap[p.color];
                    return (
                        <div
                            key={idx}
                            className={`bg-white rounded-2xl p-5 shadow-md hover:shadow-xl hover:-translate-y-1 transition flex flex-col border-l-4 ${c.border}`}
                        >
                            <div className="flex items-center mb-3">
                                <div className={`w-10 h-10 rounded-lg flex items-center justify-center mr-3 ${c.bg}`}>
                                    <i className={`fas ${p.icon} ${c.icon}`}></i>
                                </div>
                                <span className={`text-xs font-bold px-2 py-1 rounded-full ${c.badge}`}>
                                    SP-{idx + 1}
                                </span>
                            </div>
                            <h3 className={`text-base font-semibold mb-2 ${c.icon}`}>{p.title}</h3>
                            <p className="text-sm text-slate-500 leading-relaxed">{p.desc}</p>
                        </div>
                    );
                })}
            </div>

            <NoteCard
                icon="fa-exclamation-circle"
                variant="red"
                note="All five sub-problems are interconnected — no single existing platform addresses more than two simultaneously. ResuCraft is the first to tackle all six in one unified interface."
            />
        </div>
    );
};

export default ProblemStatement;
