import "../project_page.css";
import { useEffect } from "react";
import Navbar_V2 from "../../components/navbarV2/Navbar_V2";
import Footer from "../../components/footer/Footer";
import ProjectImg from "../../assets/Dashboard screenshot.png";
import PersonIcon from "../../assets/person-icon.png";
import AnalyticsIcon from "../../assets/analytic-icon.png";
import Miro from "../../assets/miro-icon.png";
import Figma from "../../assets/figma-icon.png";
import Notion from "../../assets/notion-icon.png";
import Project_Screenshots from './Project_Screenshots_1';


const Project_Page_1 = () => {
  // Scroll to the top when the page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div id="project__page">
      <Navbar_V2 />

      <div className="project-header">
        <h1>Dashboard Interface</h1>
        <p className="project-subtitle">User-friendly dashboard</p>
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
            The project involved creating a dashboard that serves as the central hub for Polio users.
          </p>

          <h2>Key Skills Used</h2>

          <p>
            User-Centered Design, Responsive Design, Prototyping and Testing
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

      <div className="project_body">
        <div className="project_card">
          <img src={PersonIcon} alt="Person Icon" />

          <h2>Role</h2>


          <p>I led the design process for the dashboard, focusing on:</p>

          <article>
            <ul>
              <li>
                Developing wireframes to define the structure and flow of the dashboard.
              </li>
              <li>
                Designing a high-fidelity prototype with interactive elements for testing.
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
                A 40% reduction in task completion time due to improved navigation and workflow optimization.
              </li>

              <li>
                Positive client feedback on the dashboard&apos;s modern look and enhanced functionality, making it a core selling point of the platform.
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
          href="https://www.figma.com/proto/mUsAlUiC75kaEQfxE1ZbVN/Polio-CRM?page-id=1165%3A7067&node-id=1165-7068&viewport=201%2C190%2C0.35&t=VQbgiJMRaItVMuOd-1&scaling=scale-down-width&content-scaling=fixed"
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

export default Project_Page_1;
