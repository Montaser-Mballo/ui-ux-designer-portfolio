import "./skills.css";
import Skills_Container_1 from './Skills_Container_1';
import Skills_Container_2 from './Skills_Container_2';
// import Scroll from "./Scroll";

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <span className="section__title"><h3>Skills</h3></span>
      <span className="section__subtitle">Technical Lvl</span>
      <div className="skills__container container grid">
        <Skills_Container_1 />
        <Skills_Container_2 />
        {/* <Scroll /> */}
      </div>

    </section>
  );
}

export default Skills;