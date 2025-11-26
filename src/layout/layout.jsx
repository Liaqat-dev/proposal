// import React from 'react';
// import Aside from "../components/shared/aside.jsx";
// import {Outlet} from "react-router-dom";
//
// function Layout() {
//     function scaleSlide() {
//         const slide = document.querySelector(".slide");
//         if (!slide) return;
//
//         const scaleX = window.innerWidth / 1920;
//         const scaleY = window.innerHeight / 1080;
//
//         // pick the smaller so whole slide fits inside viewport
//         const scale = Math.min(scaleX, scaleY);
//
//         slide.style.transform = `scale(${scale})`;
//     }
//
//     window.addEventListener("resize", scaleSlide);
//     window.addEventListener("load", scaleSlide);
//
//     return (
//         <div className={'wrapper slide'}>
//
//             <div
//                 className={'slide '}>
//                 <Aside/>
//                 <Outlet/>
//                 <div
//                     className="absolute bottom-[-150px] right-[-100px] w-[300px] h-[300px] rounded-full bg-gradient-to-br from-gray-100 to-gray-200 z-[-1]"></div>
//             </div>
//         </div>
//     );
// }
//
// export default Layout;


import React, { useEffect, useRef } from "react";
import Aside from "../components/shared/aside.jsx";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { routes } from "../routes.jsx";

function Layout() {
    const location = useLocation();
    const navigate = useNavigate();
    const locationRef = useRef(location.pathname);

    // keep latest path in ref
    useEffect(() => {
        locationRef.current = location.pathname;
    }, [location.pathname]);

    // ----- SCALE (keeps your .slide class intact) -----
    useEffect(() => {
        function scaleSlide() {
            const slide = document.querySelector(".slide");
            if (!slide) return;

            const scaleX = window.innerWidth / 1920;
            const scaleY = window.innerHeight / 1080;
            const scale = Math.min(scaleX, scaleY);

            slide.style.transformOrigin = "top left";
            slide.style.transform = `scale(${scale})`;
        }

        scaleSlide();
        window.addEventListener("resize", scaleSlide);
        return () => window.removeEventListener("resize", scaleSlide);
    }, []);

    // ----- ARROW KEY NAVIGATION (LEFT/RIGHT + UP/DOWN) -----
    useEffect(() => {
        // normalize route paths to always have leading slash
        const ordered = routes.map(r =>
            r.path.startsWith("/") ? r.path : "/" + r.path
        );

        function handleKey(e) {
            // ignore when user types in form fields
            const tag = e.target?.tagName;
            if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT" || e.target?.isContentEditable) return;

            // only arrow keys
            if (!["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"].includes(e.key)) return;

            const current = locationRef.current || window.location.pathname;
            const index = ordered.indexOf(current);
            if (index === -1) return;

            let target = null;

            // next slide
            if (e.key === "ArrowRight" || e.key === "ArrowDown") {
                target = ordered[index + 1];
            }

            // previous slide
            if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
                target = ordered[index - 1];
            }

            if (target !== undefined && target !== null) {
                navigate(target);
            }
        }

        window.addEventListener("keydown", handleKey);
        return () => window.removeEventListener("keydown", handleKey);
    }, [navigate]);

    return (
        <div className="wrapper slide">
            <div className="slide">
                <Aside />
                <Outlet />

                <div className="absolute bottom-[-150px] right-[-100px] w-[300px] h-[300px] rounded-full bg-gradient-to-br from-gray-100 to-gray-200 z-[-1]" />
            </div>
        </div>
    );
}

export default Layout;
