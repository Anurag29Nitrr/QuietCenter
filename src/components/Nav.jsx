import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import "./Nav.css"
import logo from './logo.png'
import logoForDark from './logo.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faHandHoldingHeart, faHeadphones, faHome, faPhone, faUsers } from '@fortawesome/free-solid-svg-icons';
const Nav = () => {

    let initialTheme = localStorage.getItem("theme");

    // If theme is not set in localStorage, default to "light"
    if (!initialTheme) {
        initialTheme = "light";
        localStorage.setItem("theme", initialTheme);
    }


    const location = useLocation().pathname;
    const theme = (location === "/music" ? "dark" : initialTheme);

    const isChecked = (theme === "light");

    const handleToggle = () => {
        const newTheme = isChecked ? "dark" : "light";

        localStorage.setItem("theme", newTheme);
        window.location.reload();
        // Reload the current URL
    };

    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    const [scrolling, setScrolling] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScrolling(true);
            } else {
                setScrolling(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <nav style={{ position: "fixed", padding: '0px 20px' }} className={theme + " navbar"}>
                <div className={theme + " navbar__logo"} style={{ opacity: scrolling ? 0 : 1 }}>
                    <NavLink to="/">
                        <img src={theme === "dark" ? logoForDark : logo} alt="" />
                    </NavLink>
                </div>

                <ul style={{ marginBottom: "0px", paddingLeft: "0" }} className={theme + " navbar__list"}>
                    <li>
                        <NavLink className={location === "/" ? theme + " activeNav" : ""} to="/"><FontAwesomeIcon className='navBarIcons' icon={faHome} /> Home</NavLink>
                    </li>
                    <li>
                        <NavLink className={location === "/music" ? theme + " activeNav" : ""} to="/music"><FontAwesomeIcon className='navBarIcons' icon={faHeadphones} /> Music</NavLink>
                    </li>
                    <li>
                        <NavLink className={location === "/community" ? theme + " activeNav" : ""} to="/community"> <FontAwesomeIcon className='navBarIcons' icon={faUsers} />Community</NavLink>
                    </li>
                    <li>
                        <NavLink className={location === "/education" ? theme + " activeNav" : ""} to="/education"><FontAwesomeIcon className='navBarIcons' icon={faBook} /> Education</NavLink>
                    </li>

                    <li>
                        <NavLink className={location === "/helplines" ? theme + " activeNav" : ""} to="/helplines"><FontAwesomeIcon className='navBarIcons' icon={faPhone} /> Helplines</NavLink>
                    </li>
                    <li>
                        <NavLink className={location === "/contact" ? theme + " activeNav" : ""} to="/contact"><FontAwesomeIcon className='navBarIcons' icon={faHandHoldingHeart} /> Contact us</NavLink>
                    </li>
                </ul>

                {
                    location !== "/music" ?
                        <div className='extraNavs' style={{ opacity: scrolling ? 0 : 1 }}>
                            <label className={`switch ${isChecked ? 'checked' : ''}`}>
                                <input type="checkbox" checked={isChecked} onChange={handleToggle} />
                                <span className="slider"></span>
                            </label>
                        </div>
                        :
                        <div style={{ width: "30px" }}>

                        </div>
                }

                <div className={theme + " navbar__menu"} onClick={handleClick}>
                    <div className={open ? theme + " navbar__menu-icon open" : theme + " navbar__menu-icon"}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div className={theme + ' mobile_Navs ' + (open ? "opened" : "")}>

                        <li>
                            <NavLink className={location === "/" ? theme + " activeNav" : ""} to="/"><FontAwesomeIcon className='navBarIcons' icon={faHome} /> Home</NavLink>
                        </li>
                        <li>
                            <NavLink className={location === "/community" ? theme + " activeNav" : ""} to="/community"> <FontAwesomeIcon className='navBarIcons' icon={faUsers} />Community</NavLink>
                        </li>
                        <li>
                            <NavLink className={location === "/music" ? theme + " activeNav" : ""} to="/music"><FontAwesomeIcon className='navBarIcons' icon={faHeadphones} /> Music</NavLink>
                        </li>
                        <li>
                            <NavLink className={location === "/education" ? theme + " activeNav" : ""} to="/education"><FontAwesomeIcon className='navBarIcons' icon={faBook} /> Education</NavLink>
                        </li>

                        <li>
                            <NavLink className={location === "/helplines" ? theme + " activeNav" : ""} to="/helplines"><FontAwesomeIcon className='navBarIcons' icon={faPhone} /> Helplines</NavLink>
                        </li>
                        <li>
                            <NavLink className={location === "/contact" ? theme + " activeNav" : ""} to="/contact"><FontAwesomeIcon className='navBarIcons' icon={faHandHoldingHeart} /> Contact us</NavLink>
                        </li>
                    </div>

                </div>

            </nav>
        </>
    )
}

export default Nav;
