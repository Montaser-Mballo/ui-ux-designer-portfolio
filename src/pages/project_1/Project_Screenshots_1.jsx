import { useState } from 'react';
import '../project_screenshots.css';
import Screenshot4Img from '../../assets/Dashboard Thumbnail.png';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Project_ScreenshotsData = [
    {
        id: 1,
        image: Screenshot4Img,
        title: 'Homepage Preview',
        // description: 'Designed a visually appealing and user-friendly homepage that reflects Polio\'s modern and approachable brand identity while effectively communicating its core offerings.',
        viewLink: 'https://www.figma.com/proto/mUsAlUiC75kaEQfxE1ZbVN/Polio-CRM?page-id=1165%3A7067&node-id=1165-7068&viewport=201%2C190%2C0.35&t=VQbgiJMRaItVMuOd-1&scaling=scale-down-width&content-scaling=fixed',
    },

];

const Project_Screenshots_1 = () => {

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

    const [selectedProject_Screenshots, setSelectedProject_Screenshots] = useState(null);

    const openPreview = (Project_Screenshots) => {
        setSelectedProject_Screenshots(Project_Screenshots);
    };

    const closePreview = () => {
        setSelectedProject_Screenshots(null);
    };

    // Function to handle closing modal when clicking outside modal content
    const handleClickOutside = (event) => {
        if (event.target.classList.contains('project_screenshots__modal')) {
            closePreview();
        }
    };

    return (
        <section className="project_screenshots" id="project_screenshots">

            <span className="section__title"><h3>Works</h3></span>
            <span className="section__subtitle">My Achievements</span>

            <div className="project_screenshots__container">
                {Project_ScreenshotsData.map((Project_Screenshots) => (
                    <div key={Project_Screenshots.id} className="project_screenshots__content" onClick={() => openPreview(Project_Screenshots)}>
                        <img src={Project_Screenshots.image} alt={Project_Screenshots.title} className="project_screenshots__image" />
                        <h3 className="project_screenshots__title">{Project_Screenshots.title}</h3>
                    </div>
                ))}
            </div>

            {selectedProject_Screenshots && (
                <div className="project_screenshots__modal active-modal" onClick={handleClickOutside}>
                    <div className="project_screenshots__modal-content">
                        <span onClick={closePreview} className="project_screenshots__modal-close">&times;</span>
                        <h3 className="project_screenshots__modal-title">{selectedProject_Screenshots.title}</h3>
                        <img src={selectedProject_Screenshots.image} alt={selectedProject_Screenshots.title} className="project_screenshots__modal-image" />
                        <p className="project_screenshots__modal-description">{selectedProject_Screenshots.description}</p>
                        <a href={selectedProject_Screenshots.viewLink} target="_blank" rel="noopener noreferrer" className="view__project_screenshots-button">
                            View Content
                        </a>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Project_Screenshots_1;
