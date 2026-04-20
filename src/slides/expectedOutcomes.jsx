import React, {useEffect, useState} from "react";
import AnimatedCounter from "../components/animatedCounter.jsx";
import NoteCard from "../components/noteCard.jsx";
import SlideHeader from "../components/shared/slideHeader.jsx";

const ResultsAchievements = () => {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        setTimeout(() => setAnimate(true), 100);
    }, []);

    const tangible = [
        {icon: "fa-clock",         title: "Resume Creation Time",   metric: {pre: "≈ −", value: 60, post: "%"}, progress: 60,  note: "vs manual writing"},
        {icon: "fa-tachometer-alt",title: "ATS Compatibility Score", metric: {pre: "~",  value: 95, post: "%"}, progress: 65,  note: "on generated resumes"},
        {icon: "fa-user-tie",      title: "Interview Call Rates",   metric: {pre: "3",   value: 0,  post: "×"}, progress: 75,  note: "increase expected"},
        {icon: "fa-stopwatch",     title: "Time to First Resume",   metric: {pre: "< ",  value: 10, post: " min"}, progress: 85, note: "from registration"},
    ];

    const compliance = [
        {icon: "fa-shield-alt",       title: "GDPR & CCPA Compliance",   status: "Achieved", color: "green"},
        {icon: "fa-file-alt",         title: "IEEE 830-1998 SRS",        status: "Followed", color: "blue"},
        {icon: "fa-lock",             title: "JWT + bcrypt Security",    status: "Implemented", color: "blue"},
        {icon: "fa-bolt",             title: "< 2s Response Time",       status: "Met",      color: "green"},
        {icon: "fa-users",            title: "100+ Concurrent Users",   status: "Designed for", color: "yellow"},
    ];

    const modules = [
        {icon: "fa-robot",           label: "AI Resume Generator",    done: true},
        {icon: "fa-paint-brush",     label: "Drag-and-Drop Builder",  done: true},
        {icon: "fa-store",           label: "Community Marketplace",  done: true},
        {icon: "fa-microphone",      label: "Live Mock Interview",    done: true},
        {icon: "fa-mobile-alt",      label: "iOS & Android App",      done: true},
        {icon: "fa-universal-access",label: "Speech-to-Text Input",  done: true},
    ];

    const statusColor = {green: "bg-green-100 text-green-700", blue: "bg-blue-100 text-blue-700", yellow: "bg-yellow-100 text-yellow-700"};

    return (
        <div className="content">
            <SlideHeader
                title={"Results & Achievements"}
                subtitle={"What ResuCraft delivered — measured outcomes, compliance status, and completed modules"}
            />

            <div className="grid grid-cols-3 gap-5 flex-grow">
                {/* Metrics */}
                <div className="card card-blue h-fit">
                    <div className="card-header">
                        <div className="card-header-icon"><i className="fas fa-chart-bar"></i></div>
                        <h3 className="card-header-title">Key Metrics</h3>
                    </div>
                    <div className="card-body">
                        {tangible.map((item, idx) => (
                            <div key={idx} className="card-item">
                                <div className="card-item-icon"><i className={`fas ${item.icon}`}></i></div>
                                <div className="flex-1">
                                    <div className="flex justify-between items-center card-item-title">
                                        {item.title}
                                        <span className="card-item-title bg-blue-100 text-xs mb-0 px-3 py-1 rounded-full font-bold">
                                            {item.metric.pre}<AnimatedCounter start={0} end={item.metric.value} duration={2000}/>{item.metric.post}
                                        </span>
                                    </div>
                                    <div className="text-xs text-slate-400 mb-1">{item.note}</div>
                                    <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
                                        <div
                                            className="h-full bg-gradient-to-r from-blue-500 to-blue-400 transition-all duration-[2500ms]"
                                            style={{width: animate ? `${item.progress}%` : "0%"}}
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Compliance */}
                <div className="card card-green h-fit">
                    <div className="card-header">
                        <div className="card-header-icon"><i className="fas fa-check-double"></i></div>
                        <h3 className="card-header-title">Standards & Compliance</h3>
                    </div>
                    <div className="card-body">
                        {compliance.map((item, idx) => (
                            <div key={idx} className="card-item">
                                <div className="card-item-icon"><i className={`fas ${item.icon}`}></i></div>
                                <div className="flex-1 flex justify-between items-center">
                                    <span className="card-item-title mb-0">{item.title}</span>
                                    <span className={`text-xs font-semibold px-2 py-1 rounded-full ${statusColor[item.color]}`}>{item.status}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Modules Completed */}
                <div className="card card-purple h-fit">
                    <div className="card-header">
                        <div className="card-header-icon"><i className="fas fa-tasks"></i></div>
                        <h3 className="card-header-title">Modules Completed</h3>
                    </div>
                    <div className="card-body">
                        {modules.map((item, idx) => (
                            <div key={idx} className="card-item">
                                <div className="card-item-icon"><i className={`fas ${item.icon}`}></i></div>
                                <div className="flex-1 flex justify-between items-center">
                                    <span className="card-item-title mb-0">{item.label}</span>
                                    <span className="bg-green-100 text-green-600 text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1">
                                        <i className="fas fa-check text-[10px]"></i> Done
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <NoteCard
                icon="fa-trophy"
                variant="green"
                note="All 7 planned modules were fully implemented. System complies with IEEE standards, WCAG 2.1 AA accessibility guidelines, GDPR & CCPA data protection regulations — delivering a scalable, secure, production-ready application."
            />
        </div>
    );
};

export default ResultsAchievements;
