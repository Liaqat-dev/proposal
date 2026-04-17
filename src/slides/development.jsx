import React from 'react';
import SlideHeader from "../components/shared/slideHeader.jsx";
import NoteCard from "../components/noteCard.jsx";

function Development() {
    const implementationTopics = [
        {icon: "fa-puzzle-piece", label: "Modular Architecture", sub: "Feature-based folder structure"},
        {icon: "fa-calendar-alt", label: "Agile Sprints (2-week)", sub: "Core-first, iterative delivery"},
        {icon: "fa-star",         label: "AI Pipeline First",     sub: "Gemini integration as core module"},
    ];
    const codingStandards = [
        {icon: "fa-check-double",   label: "ESLint + Prettier",      sub: "Consistent JS/JSX formatting"},
        {icon: "fa-file-alt",       label: "JSDoc / API Docs",        sub: "OpenAPI 3.0 spec for REST endpoints"},
        {icon: "fa-users",          label: "GitHub Code Reviews",     sub: "PR-based merge workflow"},
    ];
    const testingTopics = [
        {icon: "fa-bug",            label: "Jest Unit Testing",        sub: "Service & utility layer coverage"},
        {icon: "fa-cubes",          label: "Supertest Integration",    sub: "REST API endpoint testing"},
        {icon: "fa-desktop",        label: "Cypress E2E",              sub: "Critical user flows automation"},
    ];
    const deploymentTopics = [
        {icon: "fa-code-branch",    label: "GitHub Actions CI/CD",     sub: "Commit → Build → Test → Deploy"},
        {icon: "fa-box",            label: "Docker Containers",        sub: "Consistent dev/prod environments"},
        {icon: "fa-cloud",          label: "AWS EC2 + S3 + MongoDB Atlas", sub: "Cloud-native production stack"},
    ];

    const tools = [
        {icon: "fab fa-git-alt",   label: "Git / GitHub"},
        {icon: "fab fa-react",     label: "React 19"},
        {icon: "fab fa-node-js",   label: "Node.js 18+"},
        {icon: "fas fa-database",  label: "MongoDB Atlas"},
        {icon: "fas fa-brain",     label: "Google Gemini API"},
        {icon: "fas fa-file-pdf",  label: "Puppeteer"},
        {icon: "fas fa-mobile-alt","label": "Expo / React Native"},
        {icon: "fas fa-envelope",  label: "Nodemailer / Gmail SMTP"},
        {icon: "fas fa-image",     label: "imgbb API"},
        {icon: "fas fa-lock",      label: "JWT + bcrypt"},
    ];

    const cards = [
        {title: "Implementation Process", color: "card-blue",   icon: "fa-code",           items: implementationTopics},
        {title: "Coding Standards",       color: "card-green",  icon: "fa-book",           items: codingStandards},
        {title: "Testing & QA",           color: "card-purple", icon: "fa-vial",           items: testingTopics},
        {title: "Deployment",             color: "card-orange", icon: "fa-rocket",         items: deploymentTopics},
    ];

    return (
        <main className="content">
            <SlideHeader title={"Development"} subtitle={"How ResuCraft was built — implementation process, coding standards, testing pipeline, and deployment"}/>

            <section className="grid grid-cols-2 gap-5 flex-grow">
                {cards.map((card, ci) => (
                    <div key={ci} className={`card ${card.color}`}>
                        <div className="card-header">
                            <div className="card-header-icon">
                                <i className={`fas ${card.icon}`}></i>
                            </div>
                            <h3 className="card-header-title">{card.title}</h3>
                        </div>
                        <div className="card-body">
                            {card.items.map((topic, i) => (
                                <div key={i} className="card-item">
                                    <div className="card-item-icon">
                                        <i className={`fas ${topic.icon}`}></i>
                                    </div>
                                    <div>
                                        <div className="card-item-title">{topic.label}</div>
                                        <div className="card-item-subtitle">{topic.sub}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </section>

            {/* Tools */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-4 mt-5">
                <div className="text-base font-semibold text-blue-800 mb-3 flex items-center">
                    <i className="fas fa-tools text-blue-500 mr-2"></i>
                    Full Technology Stack
                </div>
                <div className="flex flex-wrap gap-2">
                    {tools.map((t, i) => (
                        <div key={i} className="bg-white rounded-lg px-3 py-1.5 text-sm font-medium text-blue-800 shadow flex items-center">
                            <i className={`${t.icon} text-blue-500 mr-2`}></i>
                            {t.label}
                        </div>
                    ))}
                </div>
            </div>

            <NoteCard
                icon="fa-lightbulb"
                note="Google Gemini API integration is the core differentiator — handles NLP job description parsing, contextual resume content generation, and Gemini Live manages real-time WebSocket voice interview sessions."
            />
        </main>
    );
}

export default Development;
