import React from 'react';
import Aside from "../components/shared/aside.jsx";
import {Outlet} from "react-router-dom";

function Layout() {
    return (
        <div
            className={'slide'}>
            <Aside/>
            <Outlet/>
            <div className="absolute bottom-[-150px] right-[-100px] w-[300px] h-[300px] rounded-full bg-gradient-to-br from-blue-100/50 to-blue-200/30 z-0"></div>
        </div>
    );
}

export default Layout;