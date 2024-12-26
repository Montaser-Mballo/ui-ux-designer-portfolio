import "./about.css";
import Info from "./Info";
// import Scroll from "./Scroll";
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const About = () => {

  const { hash } = useLocation();

  useEffect(() => {
    // Scroll to the section when the component mounts or when the hash changes
    if (hash) {
      const section = document.getElementById(hash.substring(1)); // Remove the '#' character
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]);
  return (
    <section className="about section" id="about">
      <span className="section__title"><h3>About Me</h3></span>
      <span className="section__subtitle">A short introduction</span>
      <div className="about__container container grid">
        <div className="about__data">
          <Info />
          <p className="about__description">

            I&apos;m Montaser Mballo, a dedicated UI-UX Designer with a passion for transforming ideas into user-friendly digital experiences. My journey began with a love for problem-solving and design, which has grown into crafting seamless interfaces that blend functionality with creativity. By focusing on user-centric principles and leveraging modern tools, I aim to create designs that engage users and drive impactful results. Let&apos;s connect and bring your vision to life!

          </p>
          {/* <Scroll /> */}
        </div>


      </div>

    </section>
  );
}

export default About;