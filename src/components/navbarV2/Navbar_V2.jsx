import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import {
    HiOutlineHome,
    HiOutlineUser,
    HiOutlineBadgeCheck,
    HiOutlinePhotograph,
    HiOutlineMail,
    HiX,
    HiOutlineMenu,
} from "react-icons/hi";
// import { HiOutlineClipboardList } from "react-icons/hi";
// import { GrGroup, GrCertificate } from "react-icons/gr";
import "./navbar_v2.css";

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

const Navbar_V2 = () => {
    const [toggle, setToggle] = useState(false);
    const [activeNav, setActiveNav] = useState("#home");
    const menuRef = useRef(null);
    const location = useLocation();

    // Smoothly scroll to the section based on hash in the URL
    useEffect(() => {
        if (location.hash) {
            const section = document.getElementById(location.hash.substring(1));
            if (section) {
                section.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        }
    }, [location]);

    useEffect(() => {
        const handleScroll = () => {
            const header = document.querySelector(".header");
            if (window.scrollY >= 80) header.classList.add("scroll-header");
            else header.classList.remove("scroll-header");
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (toggle && menuRef.current && !menuRef.current.contains(event.target)) {
                setToggle(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [toggle]);

    const handleNavClick = (id) => {
        setActiveNav(id);
        setToggle(false); // Close the menu if open
    };

    return (
        <header className="header">
            <nav className="nav container">
                <Link to="/" className="nav__logo">
                    <strong>Montaser Mballo</strong>
                </Link>
                <div className={toggle ? "nav__menu show-menu" : "nav__menu"} ref={menuRef}>
                    <ul className="nav__list grid">
                        {navItems.map((item) => (
                            <li className={item.className} key={item.id}>
                                <Link
                                    to={`/#${item.id}`} // Links to the hash
                                    className={`nav__link ${activeNav === item.id ? "active-link" : ""}`}
                                    onClick={() => handleNavClick(item.id)}
                                >
                                    {item.icon} {item.label}
                                </Link>
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
};

export default Navbar_V2;
