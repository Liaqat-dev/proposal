import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Layout from "./layout/layout.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./slides/home.jsx";
import {routes} from "./routes.jsx";

createRoot(document.getElementById('root')).render(
    <BrowserRouter>   {/* 👈 FIX */}
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                {routes.map((route) => (
                    <Route
                        key={route.path}
                        path={route.path}
                        element={route.component}
                    />
                ))}
            </Route>
        </Routes>
    </BrowserRouter>
)
