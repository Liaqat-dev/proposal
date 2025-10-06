import React from "react";
import NoteCard from "../components/noteCard.jsx";
import SlideHeader from "../components/shared/slideHeader.jsx";

function DesignPhase() {
    return (<main className="content">
        <SlideHeader title={'Design Phase'} subtitle={'System architecture, UI/UX design, and database structure'}/>

        {/* Design Grid */}
        <section className="design-grid grid grid-cols-1 md:grid-cols-3 gap-6 flex-grow ">
            {/* System Architecture */}
            <div
                className="design-card bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition flex flex-col">
                <div className="flex items-center mb-6">
                    <div
                        className="card-icon w-12 h-12 rounded-xl flex items-center justify-center mr-4 bg-gradient-to-br from-blue-100 to-blue-200">
                        <i className="fas fa-sitemap text-blue-500 text-2xl"></i>
                    </div>
                    <h3 className="text-xl font-semibold text-blue-600">
                        System Architecture
                    </h3>
                </div>
                <div className="flex flex-col gap-4">
                    {[{
                        icon: "fas fa-desktop",
                        title: "Client Layer",
                        tech: "Web Browser",
                        color: "text-blue-500 bg-blue-100/40",
                    }, {
                        icon: "fas fa-code",
                        title: "Frontend Layer",
                        tech: "React.js, Tailwind CSS",
                        color: "text-green-500 bg-green-100/40",
                    }, {
                        icon: "fas fa-server",
                        title: "Backend Layer",
                        tech: "Node.js, Express, REST API",
                        color: "text-purple-500 bg-purple-100/40",
                    }, {
                        icon: "fas fa-database",
                        title: "Data Layer",
                        tech: "MongoDB, File Storage",
                        color: "text-yellow-500 bg-yellow-100/40",
                    },].map((layer, idx) => (<div
                        key={idx}
                        className="flex items-center bg-slate-50 rounded-xl p-3 hover:translate-x-2 transition"
                    >
                        <div
                            className={`w-10 h-10 flex items-center justify-center rounded-lg mr-3 ${layer.color}`}
                        >
                            <i className={`${layer.icon} text-lg`}></i>
                        </div>
                        <div>
                            <p className="font-semibold">{layer.title}</p>
                            <p className="text-sm text-slate-500">{layer.tech}</p>
                        </div>
                    </div>))}
                </div>
            </div>

            {/* UI/UX Design */}
            <div
                className="design-card bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition flex flex-col">
                <div className="flex items-center mb-6">
                    <div
                        className="card-icon w-12 h-12 rounded-xl flex items-center justify-center mr-4 bg-gradient-to-br from-green-100 to-green-200">
                        <i className="fas fa-paint-brush text-green-500 text-2xl"></i>
                    </div>
                    <h3 className="text-xl font-semibold text-green-600">UI/UX Design</h3>
                </div>
                <div className="flex flex-col gap-6">
                    {["Dashboard", "Resume Builder", "Template Selection"].map((mockup, idx) => (<div
                        key={idx}
                        className="mockup bg-slate-50 rounded-xl p-4 flex flex-col gap-3 hover:-translate-y-1 transition"
                    >
                        <div className="flex justify-between items-center border-b pb-2 border-slate-200">
                            <p className="text-green-600 font-semibold text-sm">
                                {mockup}
                            </p>
                            <div className="flex gap-1">
                                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="h-2 rounded bg-slate-200 w-full"></div>
                            <div className="h-2 rounded bg-slate-200 w-4/5"></div>
                            <div className="h-2 rounded bg-slate-200 w-3/5"></div>
                        </div>
                    </div>))}
                </div>
            </div>

            {/* Database Design */}
            <div
                className="design-card bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition flex flex-col">
                <div className="flex items-center mb-6">
                    <div
                        className="card-icon w-12 h-12 rounded-xl flex items-center justify-center mr-4 bg-gradient-to-br from-yellow-100 to-yellow-200">
                        <i className="fas fa-database text-yellow-500 text-2xl"></i>
                    </div>
                    <h3 className="text-xl font-semibold text-yellow-600">
                        Database Design
                    </h3>
                </div>
                <div className="flex flex-col gap-4">
                    {[{
                        title: "Users Collection",
                        fields: ["_id", "email", "password", "name", "created_at"],
                        pk: ["_id"],
                    }, {
                        title: "Resumes Collection",
                        fields: ["_id", "user_id", "title", "content", "template_id", "ats_score",],
                        pk: ["_id"],
                        fk: ["user_id"],
                    }, {
                        title: "Templates Collection",
                        fields: ["_id", "name", "structure", "category"],
                        pk: ["_id"],
                    },].map((table, idx) => (<div
                        key={idx}
                        className="bg-slate-50 rounded-xl p-4 hover:-translate-y-1 transition"
                    >
                        <div className="flex items-center border-b pb-2 mb-2 border-slate-200">
                            <i className="fas fa-table text-yellow-500 mr-2"></i>
                            <p className="text-sm font-semibold text-yellow-600">
                                {table.title}
                            </p>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {table.fields.map((field, fIdx) => {
                                let extra = "";
                                if (table.pk?.includes(field)) extra = "bg-blue-100 text-blue-600"; else if (table.fk?.includes(field)) extra = "bg-purple-100 text-purple-600"; else extra = "bg-white text-slate-700";

                                return (<span
                                    key={fIdx}
                                    className={`px-3 py-1 rounded-lg text-sm font-medium shadow ${extra}`}
                                >
                        {field}
                      </span>);
                            })}
                        </div>
                    </div>))}
                </div>
            </div>
        </section>

        <NoteCard
            note={"Design prioritizes user experience, ATS compatibility, and system scalability with modular architecture for future enhancements."}/>
    </main>);
}

export default DesignPhase;
