import "./footer.css";
import { FiTwitter, FiLinkedin } from 'react-icons/fi';
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {

    const currentYear = new Date().getFullYear(); // Get the current year

    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">Montaser Mballo</h1>
                <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">About</a>
                    </li>
                    <li>
                        <a href="#portfolio" className="footer__link">Projects</a>
                    </li>
                    {/* <li>
                        <a href="#testimonials" className="footer__link">Testimonials</a>
                    </li> */}
                </ul>
                <div className="footer__social">
                    <a href="https://twitter.com" className="home__social-icon" target="_blank" rel="noreferrer">
                        <FiTwitter />
                    </a>
                    <a href="https://wa.me/971502716697" className="home__social-icon" target="_blank" rel="noreferrer">
                        <FaWhatsapp />
                    </a>
                    <a href="https://www.linkedin.com/in/montaser-mballo/" className="home__social-icon" target="_blank" rel="noreferrer" >
                        <FiLinkedin />
                    </a>
                </div>
                <p className="copyright">Copyright &#169; {currentYear} Montaser Mballo. All Rights Reserved.</p>
                <span className="footer__copy"></span>
            </div>

        </footer>
    );
}

export default Footer;