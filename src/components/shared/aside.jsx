import React from 'react';
import {routes} from "../../routes.jsx";
import {NavLink} from "react-router-dom";

function Aside() {
    return (
        <div className="sidebar">
            <h2 className="sidebar-title">ResuCraft</h2>
            <ul className="sidebar-nav">
                {routes.map((route, index) => (
                    <li key={index}>
                        <NavLink
                            className={({isActive}) =>
                                `sidebar-nav-item ${isActive ? "active" : ""}`
                            } to={route.path}>
                            <i className={route.icon}></i>
                            <span>{route.name}</span>
                        </NavLink>
                    </li>
                ))}
            </ul>

        </div>
    );
}

export default Aside;