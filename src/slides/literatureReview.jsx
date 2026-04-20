import React from "react";
import SlideHeader from "../components/shared/slideHeader.jsx";
import NoteCard from "../components/noteCard.jsx";

function LiteratureReview() {
    const competitors = [
        {feature: "AI Resume Generation",      resucraft: true,  canva: false, rezi: "partial", jobscan: false, novoresume: "partial"},
        {feature: "ATS Scoring",               resucraft: true,  canva: false, rezi: true,       jobscan: true,  novoresume: false},
        {feature: "Job Description Parsing",   resucraft: true,  canva: false, rezi: true,       jobscan: true,  novoresume: false},
        {feature: "Drag-and-Drop Builder",     resucraft: true,  canva: true,  rezi: false,      jobscan: false, novoresume: false},
        {feature: "Community Marketplace",     resucraft: true,  canva: true,  rezi: false,      jobscan: false, novoresume: false},
        {feature: "Live Mock Interview",        resucraft: true,  canva: false, rezi: false,      jobscan: false, novoresume: false},
        {feature: "Speech-to-Text Input",      resucraft: true,  canva: false, rezi: false,      jobscan: false, novoresume: false},
        {feature: "Free to Use",               resucraft: true,  canva: "freemium", rezi: "freemium", jobscan: "freemium", novoresume: "freemium"},
        {feature: "Profile-Based Generation",  resucraft: true,  canva: false, rezi: false,      jobscan: false, novoresume: false},
        {feature: "Mobile Companion App",      resucraft: true,  canva: false, rezi: false,      jobscan: false, novoresume: false},
    ];

    const platforms = ["ResuCraft", "Canva", "Rezi", "Jobscan", "Novoresume"];

    const renderCell = (val, isResucraft) => {
        if (val === true)        return <span className={`flex items-center justify-center w-6 h-6 rounded-full mx-auto ${isResucraft ? "bg-green-500" : "bg-green-400"}`}><i className="fas fa-check text-white text-xs"></i></span>;
        if (val === false)       return <span className="flex items-center justify-center w-6 h-6 rounded-full mx-auto bg-red-100"><i className="fas fa-times text-red-400 text-xs"></i></span>;
        if (val === "partial")   return <span className="flex items-center justify-center w-6 h-6 rounded-full mx-auto bg-yellow-100"><i className="fas fa-minus text-yellow-500 text-xs"></i></span>;
        if (val === "freemium")  return <span className="text-xs text-orange-500 font-semibold">Free*</span>;
        return <span className="text-xs text-slate-400">—</span>;
    };

    const researchGaps = [
        {icon: "fa-robot",       color: "blue",   title: "LLMs mature enough for resume generation", desc: "No commercial tool uses full semantic pipeline: JD parse → profile match → ATS-scored output"},
        {icon: "fa-paint-brush", color: "green",  title: "Design tools vs ATS compliance", desc: "Visual appeal and machine-readability remain entirely separate product categories"},
        {icon: "fa-microphone",  color: "purple", title: "Interview prep isolated from resume building", desc: "No data sharing between the two activities despite using the same job description"},
        ];

    const colorMap = {blue: "text-blue-500 bg-blue-100", green: "text-green-500 bg-green-100", purple: "text-purple-500 bg-purple-100", orange: "text-orange-500 bg-orange-100"};

    return (
        <div className="content">
            <SlideHeader
                title={"Literature Review & Competitive Analysis"}
                subtitle={"ResuCraft vs existing platforms — identifying the six market gaps"}
            />

            <div className="flex gap-6 flex-grow">
                {/* Comparison Table */}
                <div className="flex-[3] bg-white rounded-2xl p-5 shadow-md overflow-auto">
                    <h3 className="text-base font-bold text-slate-700 mb-3 flex items-center">
                        <i className="fas fa-table mr-2 text-[#827c76]"></i>
                        Feature Comparison Matrix
                    </h3>
                    <table className="w-full text-sm">
                        <thead>
                            <tr className="border-b-2 border-slate-200">
                                <th className="text-left py-2 pr-3 text-slate-600 font-semibold text-xs w-[40%]">Feature</th>
                                {platforms.map((p, i) => (
                                    <th key={i} className={`text-center py-2 px-2 text-xs font-bold ${i === 0 ? "text-green-600 bg-green-50 rounded-t-lg" : "text-slate-500"}`}>
                                        {p}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {competitors.map((row, idx) => (
                                <tr key={idx} className={`border-b border-slate-100 ${idx % 2 === 0 ? "bg-slate-50/50" : ""}`}>
                                    <td className="py-2 pr-3 text-xs text-slate-600 font-medium">{row.feature}</td>
                                    <td className="py-2 px-2 text-center bg-green-50/40">{renderCell(row.resucraft, true)}</td>
                                    <td className="py-2 px-2 text-center">{renderCell(row.canva, false)}</td>
                                    <td className="py-2 px-2 text-center">{renderCell(row.rezi, false)}</td>
                                    <td className="py-2 px-2 text-center">{renderCell(row.jobscan, false)}</td>
                                    <td className="py-2 px-2 text-center">{renderCell(row.novoresume, false)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="flex gap-4 mt-3 text-xs text-slate-500">
                        <span className="flex items-center gap-1"><span className="w-4 h-4 rounded-full bg-green-400 flex items-center justify-center"><i className="fas fa-check text-white" style={{fontSize:8}}></i></span> Full</span>
                        <span className="flex items-center gap-1"><span className="w-4 h-4 rounded-full bg-yellow-100 flex items-center justify-center"><i className="fas fa-minus text-yellow-500" style={{fontSize:8}}></i></span> Partial</span>
                        <span className="flex items-center gap-1"><span className="w-4 h-4 rounded-full bg-red-100 flex items-center justify-center"><i className="fas fa-times text-red-400" style={{fontSize:8}}></i></span> Absent</span>
                        <span>* Free = Freemium model</span>
                    </div>
                </div>

                {/* Research Gaps */}
                <div className="flex-[2] flex flex-col gap-4">
                    <h3 className="text-base font-bold text-slate-700 flex items-center">
                        <i className="fas fa-search mr-2 text-[#827c76]"></i>
                        Key Research Gaps Identified
                    </h3>
                    {researchGaps.map((gap, idx) => (
                        <div key={idx} className="bg-white rounded-2xl p-4 shadow-md hover:shadow-xl hover:-translate-y-0.5 transition flex items-start gap-3">
                            <div className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 ${colorMap[gap.color]}`}>
                                <i className={`fas ${gap.icon} text-sm`}></i>
                            </div>
                            <div>
                                <p className="text-sm font-semibold text-slate-700 mb-0.5">{gap.title}</p>
                                <p className="text-xs text-slate-500 leading-relaxed">{gap.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <NoteCard
                icon="fa-search"
                note="ResuCraft is the only platform with a full checkmark in all 11 feature dimensions — particularly unique in combining Live Mock Interview, Speech-to-Text accessibility, and community marketplace within an ATS-optimised resume builder."
            />
        </div>
    );
}

export default LiteratureReview;
