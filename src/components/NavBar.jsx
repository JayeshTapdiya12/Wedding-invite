import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../style/Navbar.css";

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;

            // If the menu is OPEN, don't hide the navbar on scroll
            if (isOpen) {
                setVisible(true);
                return;
            }

            setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [prevScrollPos, isOpen]); // Added isOpen as dependency

    const isActive = (path) => location.pathname === path ? "active" : "";

    // Function to close the menu
    const closeMenu = () => setIsOpen(false);

    return (
        <nav className={`wedding-navbar ${visible ? "nav-visible" : "nav-hidden"}`}>
            <div className="nav-logo">
                <Link to="/" className={isActive("/")} onClick={closeMenu}>
                    <img src="https://res.cloudinary.com/dwsv6ggaa/image/upload/v1772955161/logo_wvouwk.png" alt="Logo" className="logo-img" />

                </Link>
            </div>

            {/* The Hamburger / X Toggle */}
            <div
                className={`hamburger ${isOpen ? "open" : ""}`}
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>

            <ul className={`nav-links ${isOpen ? "show" : ""}`}>
                <li><Link to="/" className={isActive("/")} onClick={closeMenu}>Home</Link></li>
                <li><Link to="/schedule" className={isActive("/schedule")} onClick={closeMenu}>Celebration </Link></li>
                <li><Link to="/venue" className={isActive("/venue")} onClick={closeMenu}>Venue</Link></li>
                <li><Link to="/wardrobe" className={isActive("/wardrobe")} onClick={closeMenu}>Style Guide</Link></li>
                <li><Link to="/explore" className={isActive("/explore")} onClick={closeMenu}>Explore The Cities</Link></li>
                <li><Link to="/guide" className={isActive("/guide")} onClick={closeMenu}>Travelling Guide</Link></li>
                <li><Link to="/gallery" className={isActive("/gallery")} onClick={closeMenu}>Gallery</Link></li>
                <li><Link to="/blessing" className={isActive("/blessing")} onClick={closeMenu}>Blessings</Link></li>


            </ul>
        </nav>
    );
};

export default NavBar;