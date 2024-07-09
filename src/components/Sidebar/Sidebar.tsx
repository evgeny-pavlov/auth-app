import React from "react";
import { NavLink } from "react-router-dom";
import Profile from "../Profile/Profile";
import './style.css'

const Sidebar: React.FC = () => {
    return (
        <div className="sidebar">
            <div><NavLink to="/tasks">Tasks</NavLink></div>
            <div><NavLink to="/notes">Notes</NavLink></div>
            <div><Profile /></div>
        </div>
    )
}

export default Sidebar;
