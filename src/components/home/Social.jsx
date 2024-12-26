import { FiTwitter, FiLinkedin } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

const Social = () => {
    return (
        <div className="home__social">
            <a href="https://twitter.com" className="home__social-icon" target="_blank" rel="noopener noreferrer">
                <FiTwitter />
            </a>
            <a href="https://wa.me/971502716697" className="home__social-icon" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp />
            </a>
            <a href="https://www.linkedin.com/in/montaser-mballo/" className="home__social-icon" target="_blank" rel="noopener noreferrer">
                <FiLinkedin />
            </a>
        </div> 
    ); 
}

export default Social;
