import React, {useEffect, useState} from "react";
import AnimatedCounter from "../components/animatedCounter.jsx";
import NoteCard from "../components/noteCard.jsx";

const ExpectedOutcomesContent = () => {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        // Trigger animation after mount
        setTimeout(() => setAnimate(true), 100);
    }, []);


    const tangible = [
        {
            icon: "fa-user-tie",
            title: "Increased Interview Rates",
            metric: {pre: "+", value: 75, post: "%"},
            progress: 75
        },
        {
            icon: "fa-clock",
            title: "Reduced Time to Create Resume",
            metric: {pre: "-", value: 60, post: "%"},
            progress: 60
        },
        {icon: "fa-users", title: "User Adoption", metric: {pre: " ", value: 10, post: "K+"}, progress: 85},
        {
            icon: "fa-percentage",
            title: "ATS Compatibility Score",
            metric: {pre: " ", value: 90, post: "%"},
            progress: 95
        },
    ];
    const intangible = [
        {
            icon: "fa-smile",
            title: "Improved Job Search Experience",
            metric: "High",
            progress: 90
        },
        {
            icon: "fa-brain",
            title: "Reduced ATS Frustration",
            metric: "High",
            progress: 80
        },
        {
            icon: "fa-graduation-cap",
            title: "Increased ATS Knowledge",
            metric: "Medium",
            progress: 70
        },
        {
            icon: "fa-award",
            title: "Enhanced Professional Image",
            metric: "High",
            progress: 85
        },
    ];
    return (
        <div className="flex flex-col relative flex-1 px-[60px] py-[50px]">
            {/* Header */}
            <div className="mb-8">
                <h1 className="text-[42px] font-bold text-blue-900 mb-2">
                    Expected Outcomes
                </h1>
                <p className="text-lg text-gray-500 font-normal">
                    Anticipated results and benefits of the ATS-Friendly Resume Maker
                </p>
            </div>

            {/* Outcomes Grid */}
            <div className="grid grid-cols-2 gap-6 flex-grow">
                {/* Tangible Outcomes */}
                <div
                    className="card card-blue h-fit">
                    <div className="card-header">
                        <div
                            className="card-header-icon">
                            <i className="fas fa-chart-bar"></i>
                        </div>
                        <h3 className="card-header-title">
                            Tangible Outcomes
                        </h3>
                    </div>

                    <div className="card-body">
                        {tangible.map((item, idx) => (
                            <div
                                key={idx}
                                className="card-item"
                            >
                                <div className="card-item-icon">
                                    <i className={`fas ${item.icon} `}></i>
                                </div>
                                <div className="flex-1">
                                    <div className="flex justify-between items-center card-item-title">
                                        {item.title}
                                        <span
                                            className=" card-item-title bg-blue-100 text-xs mb-0 px-3 py-1 rounded-full">
                {item.metric.pre}{<AnimatedCounter start={0} end={item.metric.value}
                                                   duration={3000}/>}{item.metric.post}
              </span>
                                    </div>
                                    <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
                                        <div
                                            className="h-full bg-gradient-to-r from-blue-500 to-blue-400 transition-all duration-[3000ms]"
                                            style={{
                                                width: animate ? `${item.progress}%` : "0%",
                                            }}
                                        ></div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Intangible Outcomes */}
                <div
                    className="card card-green h-fit">
                    <div className="card-header">
                        <div
                            className="card-header-icon">
                            <i className="fas fa-lightbulb "></i>
                        </div>
                        <h3 className="card-header-title">
                            Intangible Outcomes
                        </h3>
                    </div>

                    <div className="card-body">
                        {intangible.map((item, idx) => (
                            <div
                                key={idx}
                                className="card-item"
                            >
                                <div className="card-item-icon">
                                    <i className={`fas ${item.icon} `}></i>
                                </div>
                                <div className="flex-1">
                                    <div
                                        className="flex justify-between items-center card-item-title">
                                        {item.title}
                                        <span
                                            className="card-item-title bg-green-100 text-xs mb-0 px-3 py-1 rounded-full">{item.metric}</span>
                                    </div>
                                    <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
                                        <div
                                            className="h-full bg-gradient-to-r from-green-500 to-green-400 transition-all duration-[3000ms]"
                                            style={{
                                                width: animate ? `${item.progress}%` : "0%",
                                            }}
                                        ></div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <NoteCard
                icon={'fa-info-circle'}
                title={"Title here"}
                note={`Success metrics will be tracked through user feedback, application
                    analytics, and post-launch surveys to measure the impact on job
                    seekers' success rates.`}/>

        </div>
    );
};

export default ExpectedOutcomesContent;
