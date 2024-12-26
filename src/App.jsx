import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';  // Update this line
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
// import Services from './components/services/Services';
import Portfolio from './components/projects/Portfolio';
import Qualification from './components/qualification/Qualification';
// import Certificates from './components/certificates/Certificates';
// import Testimonials from './components/testimonials/Testimonials';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import ScrollUp from './components/scrollup/ScrollUp';
import Project_Page_1 from './pages/project_1/Project_Page_1';
import Project_Page_2 from './pages/project_2/Project_Page_2';
import Project_Page_3 from './pages/project_3/Project_Page_3';

const App = () => {
  return (
    <Router> {/* Use HashRouter here */}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Home />
              <About />
              <Skills />
              {/* <Services /> */}
              <Portfolio />
              <Qualification />
              {/* <Certificates /> */}
              {/* <Testimonials /> */}
              <Contact />
              <Footer />
            </>
          }
        />
        <Route path="/project/1" element={<Project_Page_1 />} />
        <Route path="/project/2" element={<Project_Page_2 />} />
        <Route path="/project/3" element={<Project_Page_3 />} />
      </Routes>

      <ScrollUp />
    </Router>
  );
}

export default App;
