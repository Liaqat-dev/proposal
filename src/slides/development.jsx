import React from 'react';
import SlideHeader from "../components/shared/slideHeader.jsx";

function Development() {
    const implementationTopics = [
        { icon: "fa-puzzle-piece", label: "Modular Development" },
        { icon: "fa-calendar-alt", label: "Feature Sprints (2-week cycles)" },
        { icon: "fa-star", label: "Core Features First" },
    ];
    const testingTopics = [
        {icon: "fa-bug", label: "Unit Testing with Jest"},
        {icon: "fa-cubes", label: "Integration Testing"},
        {icon: "fa-clipboard-check", label: "Automated QA"},
    ];

    const deploymentTopics = [
        {icon: "fa-server", label: "CI/CD Pipeline"},
        {icon: "fa-cloud", label: "Cloud Deployment"},
        {icon: "fa-lock", label: "Security Checks"},
    ];
    const qualityCodeTopics = [
        {icon: "fa-check-double", label: "ESLint for JavaScript"},
        {icon: "fa-file-alt", label: "Documentation Standards"},
        {icon: "fa-users", label: "Code Reviews"},
    ];
    return (
        <main className="content">
            <SlideHeader title={'Development Phase'} subtitle={'Implementation process, standards, testing, and deployment'}/>

            {/* Grid with 4 cards */}
            <section className="grid grid-cols-2 gap-6 flex-grow">
                {/* Implementation Process */}
                <div className="card card-blue">
                    <div className="card-header">
                        <div
                            className="card-header-icon">
                            <i className="fas fa-code text-blue-500 text-xl"></i>
                        </div>
                        <h3 className="card-header-title">Implementation Process</h3>
                    </div>
                    <div className="flex flex-col gap-4">
                        {implementationTopics.map((topic, i) => (
                            <div key={i} className="card-item">
                                <div className="card-item-icon ">
                                    <i className={`fas ${topic.icon} `}></i>
                                </div>
                                <div className="card-item-title my-auto ">
                                    {topic.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Coding Standards */}
                <div className="card card-green">
                    <div className="card-header">
                        <div
                            className="card-header-icon">
                            <i className="fas fa-book "></i>
                        </div>
                        <h3 className="card-header-title">Coding Standards</h3>
                    </div>
                    <div className="card-body">
                        {qualityCodeTopics.map((topic, i) => (
                            <div key={i} className="card-item">
                                <div className="card-item-icon">
                                    <i className={`fas ${topic.icon} `}></i>
                                </div>
                                <div className="card-item-title my-auto">
                                    {topic.label}
                                </div>
                            </div>
                        ))}

                    </div>
                </div>

                {/* Testing & QA */}
                <div className="card card-purple">
                    <div className="card-header">
                        <div
                            className="card-header-icon">
                            <i className="fas fa-vial text-purple-500 text-xl"></i>
                        </div>
                        <h3 className="card-header-title">Testing & QA</h3>
                    </div>
                    <div className="card-body">
                        {testingTopics.map((topic, i) => (
                            <div
                                key={i}
                                className="card-item"
                            >
                                <div className="card-item-icon">
                                    <i className={`fas ${topic.icon} text-purple-500 text-sm`}></i>
                                </div>
                                <div className="card-item-title my-auto">
                                    {topic.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Deployment */}
                <div className="card card-orange">
                    <div className="card-header">
                        <div
                            className="card-header-icon">
                            <i className="fas fa-rocket "></i>
                        </div>
                        <h3 className="card-header-title">Deployment</h3>
                    </div>
                    <div className="card-body">
                        {deploymentTopics.map((topic, i) => (
                            <div
                                key={i}
                                className="card-item"
                            >
                                <div className="card-item-icon">
                                    <i className={`fas ${topic.icon} `}></i>
                                </div>
                                <div className="card-item-title my-auto">
                                    {topic.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Tools */}
            <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl p-4 mt-6">
                <div className="text-lg font-semibold text-blue-800 mb-2 flex items-center">
                    <i className="fas fa-tools text-blue-500 mr-2"></i>
                    Development Tools
                </div>
                <div className="flex flex-wrap gap-3">
                    <div
                        className="bg-white rounded-lg px-4 py-1 text-sm font-medium text-blue-800 shadow flex items-center">
                        <i className="fab fa-git-alt text-blue-500 mr-2"></i> Git
                    </div>
                    <div
                        className="bg-white rounded-lg px-4 py-1 text-sm font-medium text-blue-800 shadow flex items-center">
                        <i className="fab fa-js text-blue-500 mr-2"></i> React
                    </div>
                    <div
                        className="bg-white rounded-lg px-4 py-1 text-sm font-medium text-blue-800 shadow flex items-center">
                        <i className="fab fa-node-js text-blue-500 mr-2"></i> Node.js
                    </div>
                    <div
                        className="bg-white rounded-lg px-3 py-1 text-sm font-medium text-blue-800 shadow flex items-center">
                        <i className="fas fa-database text-blue-500 mr-2"></i> MongoDB
                    </div>
                </div>
            </div>
        </main>


    );
}

export default Development;