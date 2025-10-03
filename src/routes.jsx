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
import ExpectedOutcomes from "./slides/expectedOutcomes.jsx";
import GanttChart from "./slides/ganttChart.jsx";
import Conclusion from "./slides/conclusion.jsx";

export const routes = [
    {name: "Home", icon: "fas fa-home", path: "/home", component: <Home/>},
    {name: "Abstract", icon: "fas fa-file-alt", path: "/abstract", component: <Abstract/>},
    {name: "Introduction", icon: "fas fa-info-circle", path: "/introduction", component: <Introduction/>},
    {
        name: "Problem Statement",
        icon: "fas fa-exclamation-triangle",
        path: "/problem-statement",
        component: <ProblemStatement/>
    },
    {name: "Scope", icon: "fas fa-bullseye", path: "/scope", component: <Scope/>},
    {name: "Objectives", icon: "fas fa-tasks", path: "/objectives", component: <Objectives/>},
    {name: "Methodology", icon: "fas fa-project-diagram", path: "/methodology", component: <Methodology/>},
    {name: "Requirements", icon: "fas fa-clipboard-list", path: "/requirements", component: <Requirements/>},
    {name: "Design Phase", icon: "fas fa-paint-brush", path: "/design-phase", component: <DesignPhase/>},
    {name: "Development", icon: "fas fa-code", path: "/development", component: <Development/>},
    {name: "Testing", icon: "fas fa-vial", path: "/testing", component: <Testing/>},
    {name: "Deployment", icon: "fas fa-rocket", path: "/deployment", component: <Deployment/>},
    {name: "Expected Outcomes", icon: "fas fa-chart-line", path: "/outcomes", component: <ExpectedOutcomes/>},
    {name: "Gantt Chart", icon: "fas fa-chart-gantt", path: "/gantt-chart", component: <GanttChart/>},
    {name: "Conclusion", icon: "fas fa-flag-checkered", path: "/conclusion", component: <Conclusion/>},
];

