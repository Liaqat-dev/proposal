import React from "react";

const GanttContent= () => {
    return (
        <div className="flex flex-col flex-1 px-14 py-12 relative">
            {/* Header */}
            <div className="mb-8">
                <h1 className="text-[42px] font-bold text-blue-900 mb-2">
                    Project Timeline
                </h1>
                <p className="text-lg text-gray-500 font-normal">
                    Gantt chart showing project phases, tasks, and milestones
                </p>
            </div>

            {/* Gantt Container */}
            <div className="flex flex-col flex-grow bg-white rounded-2xl p-6 shadow-md">
                {/* Gantt Header */}
                <div className="flex justify-between mb-5">
                    <div className="text-xl font-semibold text-blue-900">
                        ATS-Friendly Resume Maker Project Schedule
                    </div>
                    <div className="flex gap-4">
                        {[
                            { color: "bg-blue-500", label: "Planning" },
                            { color: "bg-green-500", label: "Design" },
                            { color: "bg-yellow-500", label: "Development" },
                            { color: "bg-purple-500", label: "Testing" },
                            { color: "bg-red-500", label: "Deployment" },
                        ].map((item, idx) => (
                            <div key={idx} className="flex items-center text-sm text-gray-700">
                                <div
                                    className={`w-4 h-4 rounded-sm mr-2 ${item.color}`}
                                ></div>
                                {item.label}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Timeline */}
                <div className="flex mb-3 pl-44">
                    {["Month 1", "Month 2", "Month 3", "Month 4", "Month 5", "Month 6"].map(
                        (m, i) => (
                            <div
                                key={i}
                                className="flex-1 text-center text-sm font-semibold text-gray-700"
                            >
                                {m}
                            </div>
                        )
                    )}
                </div>

                {/* Tasks */}
                <div className="flex flex-col gap-3 flex-grow">
                    {/* Example Task Row */}
                    {[
                        {
                            name: "Requirements Analysis",
                            type: "bar",
                            color: "bg-blue-500",
                            left: "left-[0%]",
                            width: "w-1/6",
                            label: "M1",
                        },
                        {
                            name: "System Design",
                            type: "bar",
                            color: "bg-green-500",
                            left: "left-[16.66%]",
                            width: "w-1/6",
                            label: "M2",
                        },
                        {
                            name: "UI/UX Design",
                            type: "bar",
                            color: "bg-green-500",
                            left: "left-[16.66%]",
                            width: "w-1/3",
                            label: "M2-M3",
                        },
                        {
                            name: "Frontend Development",
                            type: "bar",
                            color: "bg-yellow-500",
                            left: "left-[33.33%]",
                            width: "w-1/3",
                            label: "M3-M4",
                        },
                        {
                            name: "Backend Development",
                            type: "bar",
                            color: "bg-yellow-500",
                            left: "left-[33.33%]",
                            width: "w-1/3",
                            label: "M3-M4",
                        },
                        {
                            name: "ATS Engine Development",
                            type: "bar",
                            color: "bg-yellow-500",
                            left: "left-[50%]",
                            width: "w-1/6",
                            label: "M4",
                        },
                        {
                            name: "Integration",
                            type: "bar",
                            color: "bg-yellow-500",
                            left: "left-[66.66%]",
                            width: "w-1/6",
                            label: "M5",
                        },
                        {
                            name: "Testing",
                            type: "bar",
                            color: "bg-purple-500",
                            left: "left-[66.66%]",
                            width: "w-1/6",
                            label: "M5",
                        },
                        {
                            name: "User Acceptance Testing",
                            type: "bar",
                            color: "bg-purple-500",
                            left: "left-[83.33%]",
                            width: "w-[8.33%]",
                            label: "M6",
                        },
                        {
                            name: "Deployment",
                            type: "bar",
                            color: "bg-red-500",
                            left: "left-[91.66%]",
                            width: "w-[8.33%]",
                            label: "M6",
                        },
                        { name: "Project Kickoff", type: "milestone", left: "left-[0%]", label: "K" },
                        { name: "Design Review", type: "milestone", left: "left-[33.33%]", label: "R" },
                        { name: "Beta Release", type: "milestone", left: "left-[83.33%]", label: "B" },
                        { name: "Project Completion", type: "milestone", left: "left-[100%]", label: "C" },
                    ].map((task, idx) => (
                        <div key={idx} className="flex items-center h-10">
                            <div className="w-44 pr-4 text-right text-sm font-medium text-gray-700">
                                {task.name}
                            </div>
                            <div className="flex-grow h-full relative bg-gray-50 rounded-md">
                                {task.type === "bar" ? (
                                    <div
                                        className={`absolute top-2 h-6 rounded-md flex items-center justify-center text-white text-xs font-semibold ${task.color} ${task.left} ${task.width}`}
                                    >
                                        {task.label}
                                    </div>
                                ) : (
                                    <div
                                        className={`absolute top-2 w-6 h-6 rounded-full bg-red-500 flex items-center justify-center text-white text-xs font-bold ${task.left}`}
                                    >
                                        {task.label}
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Note Card */}
            <div className="bg-gradient-to-r from-blue-100 to-blue-200 rounded-2xl p-5 mt-8 flex items-center shadow relative z-10">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white/60 mr-4">
                    <i className="fas fa-info-circle text-blue-500"></i>
                </div>
                <p className="text-blue-800 font-medium">
                    Project timeline includes buffer periods for potential delays. Critical
                    path: Requirements → Design → Development → Testing → Deployment
                </p>
            </div>

            {/* Accent Circle */}
            <div className="absolute w-[300px] h-[300px] rounded-full bg-gradient-to-br from-blue-100/50 to-blue-200/30 bottom-[-150px] right-[-100px]"></div>
        </div>
    );
};

export default GanttContent;
