import { BsWindowFullscreen } from "react-icons/bs";
import { GrUserExpert } from "react-icons/gr";
import { SlMagnifier } from "react-icons/sl";
import { BsLayoutSidebarInsetReverse } from "react-icons/bs";
import { VscFileMedia } from "react-icons/vsc";
import { IoCodeSharp } from "react-icons/io5";

const Skills_Container_1 = () => {
    return (
        <div className="skills__content">
            <h3 className="skills__title">Design Skills</h3>
            <div className="skills__box">
                <div className="skills__group">
                    <div className="skills__data">
                        <BsWindowFullscreen />
                        <div>
                            <h3 className="skills__name">UI Design</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>
                    <div className="skills__data">
                        <GrUserExpert />
                        <div>
                            <h3 className="skills__name">UX Design</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>
                    <div className="skills__data">
                        <SlMagnifier />
                        <div>
                            <h3 className="skills__name">User Research</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>
                </div>
                <div className="skills__group">
                    <div className="skills__data">
                        <BsLayoutSidebarInsetReverse />
                        <div>
                            <h3 className="skills__name">Interactive Design</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>
                    <div className="skills__data">
                        <VscFileMedia />
                        <div>
                            <h3 className="skills__name">Content Creation</h3>
                            <span className="skills__level">Basic</span>
                        </div>
                    </div>
                    <div className="skills__data">
                        <IoCodeSharp />
                        <div>
                            <h3 className="skills__name">Basic Coding</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills_Container_1;