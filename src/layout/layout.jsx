import React from 'react';
import Aside from "../components/shared/aside.jsx";
import {Outlet} from "react-router-dom";

function Layout() {
    function scaleSlide() {
        const slide = document.querySelector(".slide");
        if (!slide) return;

        const scaleX = window.innerWidth / 1920;
        const scaleY = window.innerHeight / 1080;

        // pick the smaller so whole slide fits inside viewport
        const scale = Math.min(scaleX, scaleY);

        slide.style.transform = `scale(${scale})`;
    }

    window.addEventListener("resize", scaleSlide);
    window.addEventListener("load", scaleSlide);

    return (
        <div className={'wrapper'}>

            <div
                className={'slide '}>
                <Aside/>
                <Outlet/>
                <div
                    className="absolute bottom-[-150px] right-[-100px] w-[300px] h-[300px] rounded-full bg-gradient-to-br from-gray-100 to-gray-200 z-[-1]"></div>
            </div>
        </div>
    );
}

export default Layout;