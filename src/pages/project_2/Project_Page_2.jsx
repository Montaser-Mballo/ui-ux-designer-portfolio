import "../project_page.css";
import { useEffect } from "react";
import Navbar_V2 from "../../components/navbarV2/Navbar_V2";
import Footer from "../../components/footer/Footer";
import ProjectImg from "../../assets/hp-thumbnail.png";
import PersonIcon from "../../assets/person-icon.png";
import AnalyticsIcon from "../../assets/analytic-icon.png";
import Miro from "../../assets/miro-icon.png";
import Figma from "../../assets/figma-icon.png";
import Notion from "../../assets/notion-icon.png";
import Project_Screenshots from './Project_Screenshots_2';

const Project_Page_2 = () => {
  // Scroll to the top when the page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div id="project__page">
      <Navbar_V2 />

      <div className="project-header">
        <h1>CRM Homepage</h1>
        <p className="project-subtitle">User-friendly homepage</p>
      </div>

      <div className="project_intro">
        <div className="project_img_container">
          <img src={ProjectImg} alt="Course Curation Project" />
        </div>

        <div className="project_overview">

          <h2>Client Description</h2>

          <p>
            Polio is an emerging CRM (Customer Relationship Management) company that specializes in providing intuitive, cloud-based solutions for small and medium-sized businesses.
          </p>

          <h2>Project Description</h2>

          <p>
            Designed a visually appealing and user-friendly homepage that reflects Polio&apos;s modern and approachable brand identity while effectively communicating its core offerings.
          </p>

          <h2>Key Skills Used</h2>

          <p>
            User-Centered Design, Responsive Design, Prototyping and Testing
          </p>

          <h2>Problem</h2>

          <p>
            Polio CRM&apos;s homepage lacked a clear and engaging structure to effectively communicate its value proposition to potential users. The design was visually outdated, resulting in low user engagement. The company needed a modern, user-friendly homepage that aligned with its brand identity.
          </p>

          <h2>Duration</h2>

          <p>
            1 week
          </p>

          <h2>Team</h2>

          <p>
            Independant
          </p>

          <h2>Tools Used</h2>

          <p>

            <div className="tools_icons">

              <div className="icon_item">
                <img src={Figma} alt="Google Sheets Icon" />
                <p>Figma</p>
              </div>

              <div className="icon_item">
                <img src={Miro} alt="SEMrush Icon" />
                <p>Miro</p>
              </div>

              <div className="icon_item">
                <img src={Notion} alt="Statista Icon" />
                <p>Notion</p>
              </div>
            </div>
          </p>
        </div>
      </div>

      <div className="btn_container">
        <a
          href="https://www.figma.com/proto/mUsAlUiC75kaEQfxE1ZbVN/Polio-CRM?page-id=1149%3A165&node-id=1159-3362&viewport=-98%2C1665%2C0.27&t=kxMLSVWVBjQ0gw67-1&scaling=scale-down-width&content-scaling=fixed"
          target="_blank"
          rel="noopener noreferrer"
          className="button button--flex">
          View Project
        </a>
      </div>

      <div className="project_body">
        <div className="project_card">
          <img src={PersonIcon} alt="Person Icon" />

          <h2>Role</h2>


          <p>I took the design process, from initial brainstorming and wireframing to delivering the final prototype.</p>

          <p>
            <strong>My responsibilities included:</strong>
          </p>

          <article>
            <ul>
              <li>
                Conducting competitor analysis to benchmark industry standards.
              </li>
              <li>
                Collaborating with the client to refine the homepage content and layout.
              </li>
              <li>
                Designing and iterating based on feedback.
              </li>
              <li>
                Preparing design assets for the development team.
              </li>
            </ul>
          </article>
        </div>

        <div className="project_card">
          <img src={AnalyticsIcon} alt="Analytics Icon" />

          <h2>Outcome</h2>

          <p>
            <strong>The redesigned homepage resulted in:</strong>
          </p>

          <article>
            <ul>
              <li>
                A 30% increase in user engagement due to improved aesthetics and usability.
              </li>

              <li>
                A 20% boost in lead conversions through strategic placement of CTAs and compelling design.
              </li>
              <li>
                Positive client feedback highlighting the homepage&apos;s ability to communicate their brand effectively.
              </li>
            </ul>
          </article>
        </div>
      </div>

      <div className="project_body">

        <Project_Screenshots />

      </div>

      <div className="btn_container">
        <a
          href="https://www.figma.com/proto/mUsAlUiC75kaEQfxE1ZbVN/Polio-CRM?page-id=1149%3A165&node-id=1159-3362&viewport=-98%2C1665%2C0.27&t=kxMLSVWVBjQ0gw67-1&scaling=scale-down-width&content-scaling=fixed"
          target="_blank"
          rel="noopener noreferrer"
          className="button button--flex">
          View Project
        </a>
      </div>
      <Footer />
    </div>
  );
};

export default Project_Page_2;
