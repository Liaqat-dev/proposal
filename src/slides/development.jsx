import React from 'react';

function Development() {
    return (
        <main className="content flex-1 flex flex-col px-14 py-12 relative">
            {/* Header */}
            <header className="mb-8">
                <h1 className="text-4xl font-extrabold text-blue-900 mb-2">
                    Development Phase
                </h1>
                <p className="text-lg text-slate-500">
                    Implementation process, standards, testing, and deployment
                </p>
            </header>

            {/* Grid with 4 cards */}
            <section className="grid grid-cols-2 gap-6 flex-grow">
                {/* Implementation Process */}
                <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition hover:-translate-y-1">
                    <div className="flex items-center mb-5">
                        <div
                            className="w-12 h-12 rounded-xl flex items-center justify-center mr-4 bg-gradient-to-br from-blue-100 to-blue-200">
                            <i className="fas fa-code text-blue-500 text-xl"></i>
                        </div>
                        <h3 className="text-xl font-semibold text-blue-600">Implementation Process</h3>
                    </div>
                    <div className="flex flex-col gap-4">
                        <div className="flex items-start bg-slate-50 rounded-xl p-4 hover:translate-x-1 transition">
                            <div className="w-9 h-9 rounded-lg flex items-center justify-center mr-3 bg-blue-100">
                                <i className="fas fa-puzzle-piece text-blue-500 text-sm"></i>
                            </div>
                            <div className="text-sm font-semibold text-blue-600">Modular Development</div>
                        </div>
                        <div className="flex items-start bg-slate-50 rounded-xl p-4 hover:translate-x-1 transition">
                            <div className="w-9 h-9 rounded-lg flex items-center justify-center mr-3 bg-blue-100">
                                <i className="fas fa-calendar-alt text-blue-500 text-sm"></i>
                            </div>
                            <div className="text-sm font-semibold text-blue-600">Feature Sprints (2-week cycles)</div>
                        </div>
                        <div className="flex items-start bg-slate-50 rounded-xl p-4 hover:translate-x-1 transition">
                            <div className="w-9 h-9 rounded-lg flex items-center justify-center mr-3 bg-blue-100">
                                <i className="fas fa-star text-blue-500 text-sm"></i>
                            </div>
                            <div className="text-sm font-semibold text-blue-600">Core Features First</div>
                        </div>
                    </div>
                </div>

                {/* Coding Standards */}
                <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition hover:-translate-y-1">
                    <div className="flex items-center mb-5">
                        <div
                            className="w-12 h-12 rounded-xl flex items-center justify-center mr-4 bg-gradient-to-br from-green-100 to-green-200">
                            <i className="fas fa-book text-green-500 text-xl"></i>
                        </div>
                        <h3 className="text-xl font-semibold text-green-600">Coding Standards</h3>
                    </div>
                    <div className="flex flex-col gap-4">
                        <div className="flex items-start bg-slate-50 rounded-xl p-4 hover:translate-x-1 transition">
                            <div className="w-9 h-9 rounded-lg flex items-center justify-center mr-3 bg-green-100">
                                <i className="fas fa-check-double text-green-500 text-sm"></i>
                            </div>
                            <div className="text-sm font-semibold text-green-600">ESLint for JavaScript</div>
                        </div>
                        <div className="flex items-start bg-slate-50 rounded-xl p-4 hover:translate-x-1 transition">
                            <div className="w-9 h-9 rounded-lg flex items-center justify-center mr-3 bg-green-100">
                                <i className="fas fa-file-alt text-green-500 text-sm"></i>
                            </div>
                            <div className="text-sm font-semibold text-green-600">Documentation Standards</div>
                        </div>
                        <div className="flex items-start bg-slate-50 rounded-xl p-4 hover:translate-x-1 transition">
                            <div className="w-9 h-9 rounded-lg flex items-center justify-center mr-3 bg-green-100">
                                <i className="fas fa-users text-green-500 text-sm"></i>
                            </div>
                            <div className="text-sm font-semibold text-green-600">Code Reviews</div>
                        </div>
                    </div>
                </div>

                {/* Testing & QA */}
                <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition hover:-translate-y-1">
                    <div className="flex items-center mb-5">
                        <div
                            className="w-12 h-12 rounded-xl flex items-center justify-center mr-4 bg-gradient-to-br from-purple-100 to-purple-200">
                            <i className="fas fa-vial text-purple-500 text-xl"></i>
                        </div>
                        <h3 className="text-xl font-semibold text-purple-600">Testing & QA</h3>
                    </div>
                    <div className="flex flex-col gap-4">
                        <div className="flex items-start bg-slate-50 rounded-xl p-4 hover:translate-x-1 transition">
                            <div className="w-9 h-9 rounded-lg flex items-center justify-center mr-3 bg-purple-100">
                                <i className="fas fa-bug text-purple-500 text-sm"></i>
                            </div>
                            <div className="text-sm font-semibold text-purple-600">Unit Testing with Jest</div>
                        </div>
                        <div className="flex items-start bg-slate-50 rounded-xl p-4 hover:translate-x-1 transition">
                            <div className="w-9 h-9 rounded-lg flex items-center justify-center mr-3 bg-purple-100">
                                <i className="fas fa-cubes text-purple-500 text-sm"></i>
                            </div>
                            <div className="text-sm font-semibold text-purple-600">Integration Testing</div>
                        </div>
                        <div className="flex items-start bg-slate-50 rounded-xl p-4 hover:translate-x-1 transition">
                            <div className="w-9 h-9 rounded-lg flex items-center justify-center mr-3 bg-purple-100">
                                <i className="fas fa-clipboard-check text-purple-500 text-sm"></i>
                            </div>
                            <div className="text-sm font-semibold text-purple-600">Automated QA</div>
                        </div>
                    </div>
                </div>

                {/* Deployment */}
                <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition hover:-translate-y-1">
                    <div className="flex items-center mb-5">
                        <div
                            className="w-12 h-12 rounded-xl flex items-center justify-center mr-4 bg-gradient-to-br from-orange-100 to-orange-200">
                            <i className="fas fa-rocket text-orange-500 text-xl"></i>
                        </div>
                        <h3 className="text-xl font-semibold text-orange-600">Deployment</h3>
                    </div>
                    <div className="flex flex-col gap-4">
                        <div className="flex items-start bg-slate-50 rounded-xl p-4 hover:translate-x-1 transition">
                            <div className="w-9 h-9 rounded-lg flex items-center justify-center mr-3 bg-orange-100">
                                <i className="fas fa-server text-orange-500 text-sm"></i>
                            </div>
                            <div className="text-sm font-semibold text-orange-600">CI/CD Pipeline</div>
                        </div>
                        <div className="flex items-start bg-slate-50 rounded-xl p-4 hover:translate-x-1 transition">
                            <div className="w-9 h-9 rounded-lg flex items-center justify-center mr-3 bg-orange-100">
                                <i className="fas fa-cloud text-orange-500 text-sm"></i>
                            </div>
                            <div className="text-sm font-semibold text-orange-600">Cloud Deployment</div>
                        </div>
                        <div className="flex items-start bg-slate-50 rounded-xl p-4 hover:translate-x-1 transition">
                            <div className="w-9 h-9 rounded-lg flex items-center justify-center mr-3 bg-orange-100">
                                <i className="fas fa-lock text-orange-500 text-sm"></i>
                            </div>
                            <div className="text-sm font-semibold text-orange-600">Security Checks</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Tools */}
            <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl p-6 mt-8">
                <div className="text-lg font-semibold text-blue-800 mb-4 flex items-center">
                    <i className="fas fa-tools text-blue-500 mr-2"></i>
                    Development Tools
                </div>
                <div className="flex flex-wrap gap-3">
                    <div
                        className="bg-white rounded-lg px-4 py-2 text-sm font-medium text-blue-800 shadow flex items-center">
                        <i className="fab fa-git-alt text-blue-500 mr-2"></i> Git
                    </div>
                    <div
                        className="bg-white rounded-lg px-4 py-2 text-sm font-medium text-blue-800 shadow flex items-center">
                        <i className="fab fa-js text-blue-500 mr-2"></i> React
                    </div>
                    <div
                        className="bg-white rounded-lg px-4 py-2 text-sm font-medium text-blue-800 shadow flex items-center">
                        <i className="fab fa-node-js text-blue-500 mr-2"></i> Node.js
                    </div>
                    <div
                        className="bg-white rounded-lg px-4 py-2 text-sm font-medium text-blue-800 shadow flex items-center">
                        <i className="fas fa-database text-blue-500 mr-2"></i> MongoDB
                    </div>
                </div>
            </div>
        </main>


    );
}

export default Development;