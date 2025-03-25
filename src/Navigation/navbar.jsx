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
            <NavLink to="/">Creativity</NavLink>
            <div className={`nav-link ${isMobile ? "mobile active" : ""}`} >
                <li className="dropdown" onClick={() => toggleDropdown("home")} >
                    <h4>About ▼</h4>
                    {activeDropdown === "home" && (
                        <ul className="dropdown-menu-box">
                            <Link to="/aboutus" onClick={() => setIsMobile(false)}>About Us</Link>
                            <Link to="/ouragent" onClick={() => setIsMobile(false)}>Our Agents</Link>
                            <Link to="/survey1" onClick={closeDropdown}></Link>
                        </ul>
                    )}
                </li>
                <li className="dropdown" onClick={() => toggleDropdown("suite")}>
                    <h4>Properties ▼</h4>
                    {activeDropdown === "suite" && (
                        <ul className="dropdown-menu-box">
                            <Link to="/rentproperty" onClick={() => setIsMobile(false)}>Rent Property</Link>
                            <Link to="/saleproperty" onClick={() => setIsMobile(false)}>Sale Property</Link>
                        </ul>
                    )}
                </li>
                <li className="dropdown" onClick={() => toggleDropdown("room")}>
                    <h4>Services ▼</h4>
                    {activeDropdown === "room" && (
                        <ul className="dropdown-menu-box">
                            <Link to="/services" onClick={() => setIsMobile(false)}> Our Services</Link>
                            <Link to="/architecturalPlanning" onClick={() => setIsMobile(false)}>Architectural Planning</Link>
                            <Link to="/consultancy" onClick={() => setIsMobile(false)}>Consultancy</Link>
                            <Link to="/interiordesign" onClick={() => setIsMobile(false)}>Interior Design</Link>
                            <Link to="/propertydevelopment" onClick={() => setIsMobile(false)}>Property Development</Link>
                            <Link to="/generalbuildingsuppliers" onClick={() => setIsMobile(false)}> Building Suppliers</Link>
                        </ul>
                    )}
                </li>
                <Link to="/realestateblogs" onClick={() => setIsMobile(false)}>Blog</Link>
                <Link to="/contact" onClick={() => setIsMobile(false)}>Contact</Link>
            </div>
            <div className="toggle-menu" onClick={handleToggleMenu}>
                <CiMenuKebab />
            </div>
        </nav>
    );
};

export default Navbar;
