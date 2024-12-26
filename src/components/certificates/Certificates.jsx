import { useState, useEffect } from 'react';
import './certificates.css';
import exCerImg from '../../assets/experienc-certificate-img.jpg';
import googleCertImg from '../../assets/google-digital-marketing-certificate-img.jpg';
import mediaCerImg from '../../assets/basics-of-media-certidicate-img.jpg';
import exCerDoc from '../../assets/Experience Certificate.pdf';
import goCerDoc from '../../assets/Google digital marketing & E-commerce.pdf';
import baCerDoc from '../../assets/Basics of media certificate.pdf';
import { useLocation } from 'react-router-dom';

const certificatesData = [
    {
        id: 1,
        image: exCerImg,
        title: 'Experience Certificate',
        viewLink: exCerDoc,
    },
    {
        id: 2,
        image: googleCertImg,
        title: 'Google digital marketing & E-commerce Certificate',
        viewLink: goCerDoc,
    },
    {
        id: 3,
        image: mediaCerImg,
        title: 'Basics of media certificate',
        viewLink: baCerDoc,
    },
];

const Certificates = () => {
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

    const [selectedCertificate, setSelectedCertificate] = useState(null);

    const openPreview = (certificate) => {
        setSelectedCertificate(certificate);
    };

    const closePreview = () => {
        setSelectedCertificate(null);
    };

    const handleClickOutside = (event) => {
        if (event.target.classList.contains('certificate__modal')) {
            closePreview();
        }
    };

    return (
        <section className="certificates section" id="certificates">
            <span className="section__title"><h3>Certificates</h3></span>
            <span className="section__subtitle">My Achievements</span>

            <div className="certificates__container container grid">
                {certificatesData.map((certificate) => (
                    <div key={certificate.id} className="certificate__content" onClick={() => openPreview(certificate)}>
                        <img src={certificate.image} alt={certificate.title} className="certificate__image" />
                        <h3 className="certificate__title">{certificate.title}</h3>
                    </div>
                ))}
            </div>

            {selectedCertificate && (
                <div className="certificate__modal active-modal" onClick={handleClickOutside}>
                    <div className="certificate__modal-content">
                        <span onClick={closePreview} className="certificate__modal-close">&times;</span>
                        <h3 className="certificate__modal-title">{selectedCertificate.title}</h3>
                        <img src={selectedCertificate.image} alt={selectedCertificate.title} className="certificate__modal-image" />
                        <a href={selectedCertificate.viewLink} target="_blank" rel="noopener noreferrer" className="view__certificate-button">
                            View Certificate
                        </a>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Certificates;
