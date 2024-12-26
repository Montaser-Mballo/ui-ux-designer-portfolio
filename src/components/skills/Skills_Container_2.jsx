import { BiLogoFigma } from "react-icons/bi";
import { SiAdobexd } from "react-icons/si";
import { SiAdobeillustrator } from "react-icons/si";
import { SiCanva } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";

const Skills_Container_2 = () => {
    return (
        <div className="skills__content">
            <h3 className="skills__title">Tools</h3>
            <div className="skills__box">
                <div className="skills__group">
                    <div className="skills__data">
                        <BiLogoFigma />
                        <div>
                            <h3 className="skills__name">Figma</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>
                    <div className="skills__data">
                        <SiAdobexd />
                        <div>
                            <h3 className="skills__name">Adobe XD</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>
                    <div className="skills__data">
                        <SiAdobeillustrator />
                        <div>
                            <h3 className="skills__name">Adobe Illustrator</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>
                </div>
                <div className="skills__group">
                    <div className="skills__data">
                        <SiCanva />
                        <div>
                            <h3 className="skills__name">Canva</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>
                    <div className="skills__data">
                        <FaHtml5 />
                        <div>
                            <h3 className="skills__name">HTML</h3>
                            <span className="skills__level">Basic</span>
                        </div>
                    </div>
                    <div className="skills__data">
                        <IoLogoCss3 />
                        <div>
                            <h3 className="skills__name">CSS</h3>
                            <span className="skills__level">Basic</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills_Container_2;
