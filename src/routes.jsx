import Home from "./slides/home.jsx";
import Development from "./slides/development.jsx";
import Abstract from "./slides/abstract.jsx";
import DesignPhase from "./slides/design.jsx";
import Methodology from "./slides/methodology.jsx";
import Introduction from "./slides/introduction.jsx";
import Objectives from "./slides/objectives.jsx";
import ProblemStatement from "./slides/problemStatement.jsx";
import Scope from "./slides/scope.jsx";
import Requirements from "./slides/requirements.jsx";
import Testing from "./slides/testing.jsx";
import Deployment from "./slides/deployment.jsx";
import ResultsAchievements from "./slides/expectedOutcomes.jsx";
import GanttChart from "./slides/ganttChart.jsx";
import Conclusion from "./slides/conclusion.jsx";
import LiteratureReview from "./slides/literatureReview.jsx";
import TechStack from "./slides/techStack.jsx";

export const routes = [
    {name: "Home",               icon: "fas fa-home",              path: "/home",              component: <Home/>},
    {name: "Abstract",           icon: "fas fa-file-alt",          path: "/abstract",          component: <Abstract/>},
    {name: "Introduction",       icon: "fas fa-info-circle",       path: "/introduction",      component: <Introduction/>},
    {name: "Literature Review",  icon: "fas fa-book-open",         path: "/literature-review", component: <LiteratureReview/>},
    {name: "Problem Statement",  icon: "fas fa-exclamation-triangle", path: "/problem-statement", component: <ProblemStatement/>},
    {name: "Scope",              icon: "fas fa-bullseye",          path: "/scope",             component: <Scope/>},
    {name: "Objectives",         icon: "fas fa-tasks",             path: "/objectives",        component: <Objectives/>},
    {name: "Methodology",        icon: "fas fa-project-diagram",   path: "/methodology",       component: <Methodology/>},
    {name: "Requirements",       icon: "fas fa-clipboard-list",    path: "/requirements",      component: <Requirements/>},
    {name: "System Design",      icon: "fas fa-paint-brush",       path: "/design-phase",      component: <DesignPhase/>},
    {name: "Tech Stack",         icon: "fas fa-layer-group",       path: "/tech-stack",        component: <TechStack/>},
    {name: "Development",        icon: "fas fa-code",              path: "/development",       component: <Development/>},
    // {name: "Testing",            icon: "fas fa-vial",              path: "/testing",           component: <Testing/>},
    // {name: "Deployment",         icon: "fas fa-rocket",            path: "/deployment",        component: <Deployment/>},
    {name: "Results",             icon: "fas fa-chart-line",        path: "/outcomes",          component: <ResultsAchievements/>},
    {name: "Gantt Chart",        icon: "fas fa-chart-gantt",       path: "/gantt-chart",       component: <GanttChart/>},
    {name: "Conclusion",         icon: "fas fa-flag-checkered",    path: "/conclusion",        component: <Conclusion/>},
];
