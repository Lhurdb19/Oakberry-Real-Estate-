import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { CiMenuKebab } from "react-icons/ci";
import "./Navbar.css";

const Navbar = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);

    const handleToggleMenu = () => {
        setIsMobile(!isMobile);
    };

    const toggleDropdown = (dropdown) => {
        setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
    };

    const closeDropdown = () => {
        setActiveDropdown(null);
    };

    return (
        <nav>
            <NavLink to="/">Oakberry</NavLink>
            <div className={`nav-link ${isMobile ? "mobile active" : ""}`}>
                <li className="dropdown" onClick={() => toggleDropdown("home")}>
                    <h4>About ▼</h4>
                    {activeDropdown === "home" && (
                        <ul className="dropdown-menu">
                            <Link to="/aboutus" onClick={closeDropdown}>About Us</Link>
                            <Link to="/ouragent" onClick={closeDropdown}>Our Agents</Link>
                            <Link to="/survey1" onClick={closeDropdown}></Link>
                        </ul>
                    )}
                </li>
                <li className="dropdown" onClick={() => toggleDropdown("suite")}>
                    <h4>Properties ▼</h4>
                    {activeDropdown === "suite" && (
                        <ul className="dropdown-menu">
                            <Link to="/rentproperty" onClick={closeDropdown}>Rent Property</Link>
                            <Link to="/saleproperty" onClick={closeDropdown}>Sale Property</Link>
                            <Link to="/survey1" onClick={closeDropdown}></Link>
                        </ul>
                    )}
                </li>
                <li className="dropdown" onClick={() => toggleDropdown("room")}>
                    <h4>Our rooms ▼</h4>
                    {activeDropdown === "room" && (
                        <ul className="dropdown-menu">
                            <Link to="/services" onClick={closeDropdown}>Services</Link>
                            <Link to="/survey" onClick={closeDropdown}>Ques</Link>
                            <Link to="/survey1" onClick={closeDropdown}>Qu</Link>
                        </ul>
                    )}
                </li>
                <Link to="/" onClick={closeDropdown}>Blog</Link>
                <Link to="/contact" onClick={() => setIsMobile(false)}>Contact</Link>
            </div>
            <div className="toggle-menu" onClick={handleToggleMenu}>
                <CiMenuKebab />
            </div>
        </nav>
    );
};

export default Navbar;
