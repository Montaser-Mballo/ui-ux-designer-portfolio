import Projects from './Projects';
import "./projects.css";
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Portfolio = () => {

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
    <section className="portfolio section" id="portfolio">
      <span className="section__title"><h3>Projects</h3></span>
      <span className="section__subtitle">Recent Projects</span>

      <Projects />
    </section>
  );
}

export default Portfolio;