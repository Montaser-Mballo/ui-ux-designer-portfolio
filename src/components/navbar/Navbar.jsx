import { useState, useEffect, useRef } from "react";
import './navbar.css';
import { HiOutlineHome, HiOutlineUser, HiOutlineBadgeCheck, HiOutlinePhotograph, HiOutlineMail, HiX, HiOutlineMenu } from "react-icons/hi";
// import { HiOutlineClipboardList } from "react-icons/hi";
// import { GrGroup, GrCertificate } from "react-icons/gr";
import { NavLink } from 'react-router-dom';

// Define nav items with specific IDs for scrolling
const navItems = [
    { id: "home", icon: <HiOutlineHome className="nav__icon" />, label: "Home", className: "nav__item-1" },
    { id: "about", icon: <HiOutlineUser className="nav__icon" />, label: "About", className: "nav__item-2" },
    { id: "skills", icon: <HiOutlineBadgeCheck className="nav__icon" />, label: "Skills", className: "nav__item-3" },
    // { id: "services", icon: <HiOutlineClipboardList className="nav__icon" />, label: "Services", className: "nav__item-4" },
    { id: "portfolio", icon: <HiOutlinePhotograph className="nav__icon" />, label: "Projects", className: "nav__item-5" },
    { id: "contact", icon: <HiOutlineMail className="nav__icon" />, label: "Contact", className: "nav__item-6" },
    // { id: "testimonials", icon: <GrGroup className="nav__icon" />, label: "Testimonials", className: "nav__item-7" },
    // { id: "certificates", icon: <GrCertificate className="nav__icon" />, label: "Certificates", className: "nav__item-8" },
];

const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    const [activeNav, setActiveNav] = useState("#home");
    const menuRef = useRef(null); // Create a ref for the menu

    useEffect(() => {
        const handleScroll = () => {
            const header = document.querySelector(".header");
            if (window.scrollY >= 80) header.classList.add("scroll-header");
            else header.classList.remove("scroll-header");
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll); // Clean up the event listener
    }, []);

    useEffect(() => {
        const handleClickOutside = (event) => {
            // Close the menu if the click is outside the menu and toggle is true
            if (toggle && menuRef.current && !menuRef.current.contains(event.target)) {
                setToggle(false);
            }
        };

        // Attach event listener to the document
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [toggle]); // Re-run this effect whenever toggle changes

    const handleScrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
        setActiveNav(id);
        setToggle(false);
    };

    return (
        <header className="header">
            <nav className="nav container">
                <NavLink to="/" className="nav__logo"> <strong>Montaser Mballo</strong></NavLink>
                <div className={toggle ? "nav__menu show-menu" : "nav__menu"} ref={menuRef}> {/* Attach ref here */}
                    <ul className="nav__list grid">
                        {navItems.map(item => (
                            <li className={item.className} key={item.id}>
                                <NavLink
                                    to={`#${item.id}`}
                                    onClick={() => handleScrollToSection(item.id)}
                                    className={`nav__link ${activeNav === item.id ? "active-link" : ""}`}
                                >
                                    {item.icon} {item.label}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                    <HiX className="nav__close-icon" onClick={() => setToggle(!toggle)} />
                </div>
                <div className="nav__toggle-icon" onClick={() => setToggle(!toggle)}>
                    <HiOutlineMenu />
                </div>
            </nav>
        </header>
    );
}

export default Navbar;
