import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import "./Nav.css"
import logo from './logo.png'
const Nav = () => {

    const [open, setOpen] = useState(false);
    const handleClick = () => {
        setOpen(!open);
    };
    return (
        <>
            <nav style={{padding : '0px 20px'}} className="navbar">
                <div className="navbar__logo">
                    <NavLink to="/">
                        <img src={logo} alt="" />
                    </NavLink>
                </div>
                <ul style={{marginBottom : "0px", paddingLeft : "0px"}} className={open ? "navbar__list active" : "navbar__list"}>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/community">Community</NavLink>
                    </li>
                    <li>
                        <NavLink to="/music">Music</NavLink>
                    </li>
                    <li>
                        <NavLink to="/education">Education</NavLink>
                    </li>
                    
                    <li>
                        <NavLink to="/helplines">Helplines</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact">Contact us</NavLink>
                    </li>
                </ul>
                <div className="navbar__menu" onClick={handleClick}>
                    <div className={open ? "navbar__menu-icon open" : "navbar__menu-icon"}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Nav
