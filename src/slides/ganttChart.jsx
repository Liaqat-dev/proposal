import React, {useEffect, useState} from "react";
import NoteCard from "../components/noteCard.jsx";
import SlideHeader from "../components/shared/slideHeader.jsx";

const GanttContent = () => {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        // trigger animation on mount
        const t = setTimeout(() => setAnimate(true), 100);
        return () => clearTimeout(t);
    }, []);

    const tasks = [
        {name: "Requirements Analysis", color: "bg-blue-500", left: "0%", width: "16.66%", label: "M1"},
        {name: "System Design", color: "bg-green-500", left: "16.66%", width: "16.66%", label: "M2"},
        {name: "UI/UX Design", color: "bg-green-500", left: "16.66%", width: "33.33%", label: "M2-M3"},
        {name: "Frontend", color: "bg-yellow-500", left: "33.33%", width: "33.33%", label: "M3-M4"},
        {name: "Backend", color: "bg-yellow-500", left: "33.33%", width: "33.33%", label: "M3-M4"},
        {name: "ATS Engine Development", color: "bg-yellow-500", left: "50%", width: "16.66%", label: "M4"},
        {name: "Integration", color: "bg-yellow-500", left: "66.66%", width: "16.66%", label: "M5"},
        {name: "Testing", color: "bg-purple-500", left: "66.66%", width: "16.66%", label: "M5"},
        {name: "UA Testing", color: "bg-purple-500", left: "83.33%", width: "8.33%", label: "M6"},
        {name: "Deployment", color: "bg-red-500", left: "91.66%", width: "8.33%", label: "M6"},
    ];

    return (
        <div className="content">
            <SlideHeader title={'Project Timeline'} subtitle={'Gantt chart showing project phases, tasks, and milestones'}/>

            <div className="flex justify-between mb-5">
                <div className="text-xl font-semibold"> Project Schedule</div>
                <div className="flex gap-4"> {[{color: "bg-blue-500", label: "Planning"}, {
                    color: "bg-green-500",
                    label: "Design"
                }, {color: "bg-yellow-500", label: "Development"}, {
                    color: "bg-purple-500",
                    label: "Testing"
                }, {color: "bg-red-500", label: "Deployment"},].map((item, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-700">
                        <div className={`w-4 h-4 rounded-sm mr-2 ${item.color}`}></div>
                        {item.label} </div>))} </div>
            </div>

            {/* Gantt Container */}
            <div className="flex flex-col flex-grow bg-white rounded-2xl p-6 shadow-md">
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
                    {tasks.map((task, idx) => (
                        <div key={idx} className="flex items-center h-10">
                            <div className="w-44 pr-4 text-right text-sm font-medium text-gray-700">
                                {task.name}
                            </div>
                            <div className="flex-grow h-full relative bg-gray-50 rounded-md">
                                <div
                                    className={`absolute top-2 h-6 rounded-md flex items-center justify-center text-white text-xs font-semibold ${task.color}
                    transition-[width] duration-1000 ease-out`}
                                    style={{
                                        left: task.left,
                                        width: animate ? task.width : "0%",
                                    }}
                                >
                                    {task.label}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <NoteCard
                icon={"fa-info-circle"}
                note={
                    "Project timeline includes buffer periods for potential delays. Critical path: Requirements → Design → Development → Testing → Deployment"
                }
            />
        </div>
    );
};


export default GanttContent;
// { name: "Project Kickoff", type: "milestone", left: "left-[0%]", label: "K" },
// { name: "Design Review", type: "milestone", left: "left-[33.33%]", label: "R" },
// { name: "Beta Release", type: "milestone", left: "left-[83.33%]", label: "B" },
// { name: "Project Completion", type: "milestone", left: "left-[100%]", label: "C" },
