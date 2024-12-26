import "../project_page.css";
import { useEffect } from "react";
import Navbar_V2 from "../../components/navbarV2/Navbar_V2";
import Footer from "../../components/footer/Footer";
import ProjectImg from "../../assets/coffee app screenshot 2.png";
import PersonIcon from "../../assets/person-icon.png";
import AnalyticsIcon from "../../assets/analytic-icon.png";
import Miro from "../../assets/miro-icon.png";
import Figma from "../../assets/figma-icon.png";
import Notion from "../../assets/notion-icon.png";
import Project_Screenshots from './Project_Screenshots_3';

const Project_Page_3 = () => {
  // Scroll to the top when the page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div id="project__page">
      <Navbar_V2 />

      <div className="project-header">
        <h1>Coffee app product menu</h1>
        <p className="project-subtitle">User-friendly product menu</p>
      </div>

      <div className="project_intro">
        <div className="project_img_container">
          <img src={ProjectImg} alt="Course Curation Project" />
        </div>

        <div className="project_overview">

          <h2>Client Description</h2>

          <p>
            Brewly is a coffee delivery app that caters to coffee enthusiasts by providing an extensive menu of specialty coffee drinks and snacks.
          </p>

          <h2>Project Description</h2>

          <p>
            The project involved creating a product menu for Brewly&apos;s mobile app
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


          <p>I spearheaded the design process, which included:</p>

          <article>
            <ul>
              <li>
                Designing an intuitive menu layout that emphasized product visuals and descriptions.
              </li>
              <li>
                Creating a smooth customization flow for users to personalize their orders.
              </li>
            </ul>
          </article>
        </div>

        <div className="project_card">
          <img src={AnalyticsIcon} alt="Analytics Icon" />

          <h2>Outcome</h2>

          <p>
            <strong>The redesigned product menu achieved the following results:</strong>
          </p>

          <article>
            <ul>
              <li>
                A 35% increase in order completion rates due to a simplified and engaging menu layout.
              </li>

              <li>
                A 20% boost in customer satisfaction, as reflected in app reviews praising the intuitive customization process.
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
          href="https://www.figma.com/proto/6n7cSNGaweDO0KkjqW9n3T/coffee-app?page-id=4709%3A6&node-id=4721-513&viewport=729%2C252%2C0.18&t=RLo8TJiknnZMxGeF-1&scaling=scale-down&content-scaling=fixed"
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

export default Project_Page_3;
