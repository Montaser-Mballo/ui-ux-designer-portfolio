import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
    HiOutlineClipboardList,
    HiOutlineArrowSmRight,
    HiOutlineCheckCircle,
    HiX,
} from "react-icons/hi";
import "./services.css";
import SeoBackgroundImg from "../../assets/SEO-bg-img.jpg";
import ContentCreationBackgroundImg from "../../assets/content-writing-bg-img.jpg";
import EmailMarketingBackgroundImg from "../../assets/email-marketing-bg-img.jpg";
import GoogleAdsBackgroundImg from "../../assets/google-ads-bg-img.png";


const Services = () => {
    const { hash } = useLocation();

    useEffect(() => {
        if (hash) {
            const section = document.getElementById(hash.substring(1));
            if (section) {
                section.scrollIntoView({ behavior: "smooth" });
            }
        }
    }, [hash]);

    const [toggleState, setToggleState] = useState(null);
    const [itemToggle, setItemToggle] = useState(Array(20).fill(false)); // Array with 10 false values

    const toggleTab = (index) => {
        setToggleState((prevIndex) => (prevIndex === index ? null : index));
    };

    const handleClickOutside = (event) => {
        if (event.target.classList.contains("services__modal")) {
            setToggleState(null);
        }
    };

    const toggleItemText = (index) => {
        setItemToggle((prevToggles) =>
            prevToggles.map((toggled, i) => (i === index ? !toggled : toggled))
        );
    };

    return (
        <section className="services section" id="services">
            <span className="section__title">
                <h3>Services</h3>
            </span>
            <span className="section__subtitle">What I Offer</span>

            <div className="services__container container grid">
                {/* First Service */}
                <div className="services__content">
                    <img
                        className="services__content-img"
                        src={SeoBackgroundImg}
                        alt="SEO Icon"
                    />
                    <div className="services__content-block">
                        <div>
                            <HiOutlineClipboardList className="services__icon" />
                            <h3 className="services__title">SEO</h3>
                        </div>
                        <span className="services__button" onClick={() => toggleTab(1)}>
                            View More
                            <HiOutlineArrowSmRight className="services__button-icon" />
                        </span>
                        <div
                            className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}
                            onClick={handleClickOutside}
                        >
                            <div className={`services__modal-content ${toggleState === 1 ? "active" : ""}`}>
                                <HiX
                                    onClick={() => toggleTab(null)}
                                    className="services__modal-close"
                                />
                                <h3 className="services__modal-title">Search Engine Optimization</h3>
                                <p className="services__modal-description">
                                    Increase organic traffic, improve search rankings, and drive brand visibility with a strategic approach to SEO.
                                </p>
                                <ul className="services__modal-services grid">
                                    <li className="services__modal-service">
                                        <div className="services__modal-item" onClick={() => toggleItemText(0)}>
                                            <HiOutlineCheckCircle className="services__modal-icon" />
                                            <p className="services__modal-info"><strong>Keyword Research & Analysis</strong></p>
                                            <HiOutlineArrowSmRight className={`services__toggle-icon ${itemToggle[0] ? "rotated" : ""}`} />
                                        </div>
                                        {itemToggle[0] && (
                                            <div className="services__additional-info">
                                                <p>
                                                    Identify high-traffic, relevant keywords to increase site visibility and match user intent. This includes competitor keyword analysis and identifying long-tail keywords that bring highly engaged traffic to your site.
                                                </p>
                                            </div>
                                        )}
                                    </li>

                                    <li className="services__modal-service">
                                        <div className="services__modal-item" onClick={() => toggleItemText(1)}>
                                            <HiOutlineCheckCircle className="services__modal-icon" />
                                            <p className="services__modal-info"><strong>On-Page Optimization</strong></p>
                                            <HiOutlineArrowSmRight className={`services__toggle-icon ${itemToggle[0] ? "rotated" : ""}`} />
                                        </div>
                                        {itemToggle[1] && (
                                            <div className="services__additional-info">
                                                <p>
                                                    Optimize meta tags, headers, images, and internal links to improve content relevance and user experience. I&apos;ll also ensure content aligns with SEO best practices, enhancing both readability and ranking.
                                                </p>
                                            </div>
                                        )}
                                    </li>

                                    <li className="services__modal-service">
                                        <div className="services__modal-item" onClick={() => toggleItemText(2)}>
                                            <HiOutlineCheckCircle className="services__modal-icon" />
                                            <p className="services__modal-info"><strong>Off-Page SEO & Link-Building</strong></p>
                                            <HiOutlineArrowSmRight className={`services__toggle-icon ${itemToggle[0] ? "rotated" : ""}`} />
                                        </div>
                                        {itemToggle[2] && (
                                            <div className="services__additional-info">
                                                <p>
                                                    Implement a sustainable link-building strategy by securing quality backlinks from reputable sources to boost your site&apos;s domain authority and organic ranking.
                                                </p>
                                            </div>
                                        )}
                                    </li>

                                    <li className="services__modal-service">
                                        <div className="services__modal-item" onClick={() => toggleItemText(3)}>
                                            <HiOutlineCheckCircle className="services__modal-icon" />
                                            <p className="services__modal-info"><strong>Technical SEO & Site Audits</strong></p>
                                            <HiOutlineArrowSmRight className={`services__toggle-icon ${itemToggle[0] ? "rotated" : ""}`} />
                                        </div>
                                        {itemToggle[3] && (
                                            <div className="services__additional-info">
                                                <p>
                                                    Conduct in-depth audits to identify and resolve issues affecting site speed, mobile usability, crawl errors, and indexability. I&apos;ll ensure search engines and users can navigate your website seamlessly.
                                                </p>
                                            </div>
                                        )}
                                    </li>

                                    <li className="services__modal-service">
                                        <div className="services__modal-item" onClick={() => toggleItemText(4)}>
                                            <HiOutlineCheckCircle className="services__modal-icon" />
                                            <p className="services__modal-info"><strong>Local SEO for Geo-Targeted Reach</strong></p>
                                            <HiOutlineArrowSmRight className={`services__toggle-icon ${itemToggle[0] ? "rotated" : ""}`} />
                                        </div>
                                        {itemToggle[4] && (
                                            <div className="services__additional-info">
                                                <p>
                                                    Optimize your Google My Business profile, local keywords, and citations to help customers in your area find you faster, perfect for brick-and-mortar businesses aiming to capture local leads.
                                                </p>
                                            </div>
                                        )}
                                    </li>

                                    {/* Add more items similarly */}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ---------------------------------------------------------------------------------- */}

                {/* Second Service - New Service Example */}
                <div className="services__content">
                    <img
                        className="services__content-img"
                        src={ContentCreationBackgroundImg}
                        alt="SEO Icon"
                    />
                    <div className="services__content-block">
                        <div>
                            <HiOutlineClipboardList className="services__icon" />
                            <h3 className="services__title">Content Creation</h3>
                        </div>
                        <span className="services__button" onClick={() => toggleTab(2)}>
                            View More
                            <HiOutlineArrowSmRight className="services__button-icon" />
                        </span>
                        <div
                            className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}
                            onClick={handleClickOutside}
                        >
                            <div className={`services__modal-content ${toggleState === 2 ? "active" : ""}`}>
                                <HiX
                                    onClick={() => toggleTab(null)}
                                    className="services__modal-close"
                                />
                                <h3 className="services__modal-title">Content Creation</h3>
                                <p className="services__modal-description">
                                    Create meaningful connections with your audience through well-crafted, strategic content that informs, engages, and converts.
                                </p>
                                <ul className="services__modal-services grid">
                                    <li className="services__modal-service">
                                        <div className="services__modal-item" onClick={() => toggleItemText(5)}>
                                            <HiOutlineCheckCircle className="services__modal-icon" />
                                            <p className="services__modal-info"><strong>Blog Writing</strong></p>
                                            <HiOutlineArrowSmRight className={`services__toggle-icon ${itemToggle[0] ? "rotated" : ""}`} />
                                        </div>
                                        {itemToggle[5] && (
                                            <div className="services__additional-info">
                                                <p>
                                                    Develop informative, SEO-friendly blog content to establish your brand as an authority and drive organic traffic. Content is tailored to audience interests and industry trends, delivering valuable information while subtly guiding readers toward your offerings.
                                                </p>
                                            </div>
                                        )}
                                    </li>

                                    <li className="services__modal-service">
                                        <div className="services__modal-item" onClick={() => toggleItemText(6)}>
                                            <HiOutlineCheckCircle className="services__modal-icon" />
                                            <p className="services__modal-info"><strong>Copywriting for Web & Landing Pages</strong></p>
                                            <HiOutlineArrowSmRight className={`services__toggle-icon ${itemToggle[0] ? "rotated" : ""}`} />
                                        </div>
                                        {itemToggle[6] && (
                                            <div className="services__additional-info">
                                                <p>
                                                    Write persuasive, conversion-focused copy for websites, landing pages, and product descriptions that reflect your brand voice, communicate your unique value, and encourage action.
                                                </p>
                                            </div>
                                        )}
                                    </li>

                                    <li className="services__modal-service">
                                        <div className="services__modal-item" onClick={() => toggleItemText(7)}>
                                            <HiOutlineCheckCircle className="services__modal-icon" />
                                            <p className="services__modal-info"><strong>Social Media Content & Ad Creatives</strong></p>
                                            <HiOutlineArrowSmRight className={`services__toggle-icon ${itemToggle[0] ? "rotated" : ""}`} />
                                        </div>
                                        {itemToggle[7] && (
                                            <div className="services__additional-info">
                                                <p>
                                                    Design high-engagement ad creatives and organic social media posts. Each piece aligns with platform-specific best practices, grabbing user attention with eye-catching visuals and concise messaging that resonates with your audience.
                                                </p>
                                            </div>
                                        )}
                                    </li>

                                    <li className="services__modal-service">
                                        <div className="services__modal-item" onClick={() => toggleItemText(8)}>
                                            <HiOutlineCheckCircle className="services__modal-icon" />
                                            <p className="services__modal-info"><strong>Content Strategy & Planning</strong></p>
                                            <HiOutlineArrowSmRight className={`services__toggle-icon ${itemToggle[0] ? "rotated" : ""}`} />
                                        </div>
                                        {itemToggle[8] && (
                                            <div className="services__additional-info">
                                                <p>
                                                    Develop a tailored content calendar and strategy that aligns with business goals, supports SEO objectives, and addresses different stages of the customer journey.
                                                </p>
                                            </div>
                                        )}
                                    </li>

                                    {/* Add more items similarly */}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ----------------------------------------------------------------------------------- */}

                {/* Third Service - New Service Example */}
                <div className="services__content">
                    <img
                        className="services__content-img"
                        src={EmailMarketingBackgroundImg}
                        alt="SEO Icon"
                    />
                    <div className="services__content-block">
                        <div>
                            <HiOutlineClipboardList className="services__icon" />
                            <h3 className="services__title">Email Marketing</h3>
                        </div>
                        <span className="services__button" onClick={() => toggleTab(3)}>
                            View More
                            <HiOutlineArrowSmRight className="services__button-icon" />
                        </span>
                        <div
                            className={toggleState === 3 ? "services__modal active-modal" : "services__modal"}
                            onClick={handleClickOutside}
                        >
                            <div className={`services__modal-content ${toggleState === 3 ? "active" : ""}`}>
                                <HiX
                                    onClick={() => toggleTab(null)}
                                    className="services__modal-close"
                                />
                                <h3 className="services__modal-title">Email Marketing</h3>
                                <p className="services__modal-description">
                                    Build and nurture relationships through personalized, data-driven email marketing that keeps customers engaged and drives conversions.
                                </p>
                                <ul className="services__modal-services grid">
                                    <li className="services__modal-service">
                                        <div className="services__modal-item" onClick={() => toggleItemText(9)}>
                                            <HiOutlineCheckCircle className="services__modal-icon" />
                                            <p className="services__modal-info"><strong>Strategic Campaign Development</strong></p>
                                            <HiOutlineArrowSmRight className={`services__toggle-icon ${itemToggle[0] ? "rotated" : ""}`} />
                                        </div>
                                        {itemToggle[9] && (
                                            <div className="services__additional-info">
                                                <p>
                                                    Craft end-to-end email campaigns, from concept to execution. This includes welcome sequences, product announcements, newsletters, and drip campaigns that nurture leads and promote brand loyalty.
                                                </p>
                                            </div>
                                        )}
                                    </li>

                                    <li className="services__modal-service">
                                        <div className="services__modal-item" onClick={() => toggleItemText(10)}>
                                            <HiOutlineCheckCircle className="services__modal-icon" />
                                            <p className="services__modal-info"><strong>List Segmentation & Targeting</strong></p>
                                            <HiOutlineArrowSmRight className={`services__toggle-icon ${itemToggle[0] ? "rotated" : ""}`} />
                                        </div>
                                        {itemToggle[10] && (
                                            <div className="services__additional-info">
                                                <p>
                                                    Maximize campaign relevance and open rates through precise audience segmentation. I tailor content for each audience segment to ensure messages are relevant, valuable, and impactful.
                                                </p>
                                            </div>
                                        )}
                                    </li>

                                    <li className="services__modal-service">
                                        <div className="services__modal-item" onClick={() => toggleItemText(11)}>
                                            <HiOutlineCheckCircle className="services__modal-icon" />
                                            <p className="services__modal-info"><strong>Automated Workflows & Drip Campaigns</strong></p>
                                            <HiOutlineArrowSmRight className={`services__toggle-icon ${itemToggle[0] ? "rotated" : ""}`} />
                                        </div>
                                        {itemToggle[11] && (
                                            <div className="services__additional-info">
                                                <p>
                                                    Set up and manage automated workflows for timely, relevant communication with subscribers. This includes trigger-based emails that follow user actions, creating a personalized customer journey.
                                                </p>
                                            </div>
                                        )}
                                    </li>

                                    <li className="services__modal-service">
                                        <div className="services__modal-item" onClick={() => toggleItemText(12)}>
                                            <HiOutlineCheckCircle className="services__modal-icon" />
                                            <p className="services__modal-info"><strong>Engagement Tracking & Analytics</strong></p>
                                            <HiOutlineArrowSmRight className={`services__toggle-icon ${itemToggle[0] ? "rotated" : ""}`} />
                                        </div>
                                        {itemToggle[12] && (
                                            <div className="services__additional-info">
                                                <p>
                                                    Use data to monitor key metrics—open rates, click-through rates, conversions, and more. I provide insights and optimization recommendations to improve future campaigns and maximize ROI.
                                                </p>
                                            </div>
                                        )}
                                    </li>

                                    <li className="services__modal-service">
                                        <div className="services__modal-item" onClick={() => toggleItemText(13)}>
                                            <HiOutlineCheckCircle className="services__modal-icon" />
                                            <p className="services__modal-info"><strong>A/B Testing for Continuous Improvement</strong></p>
                                            <HiOutlineArrowSmRight className={`services__toggle-icon ${itemToggle[0] ? "rotated" : ""}`} />
                                        </div>
                                        {itemToggle[13] && (
                                            <div className="services__additional-info">
                                                <p>
                                                    Experiment with subject lines, content variations, and calls-to-action to discover the most effective tactics. Regular testing and analysis ensure each campaign is continuously refined for optimal performance.
                                                </p>
                                            </div>
                                        )}
                                    </li>

                                    {/* Add more items similarly */}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ----------------------------------------------------------------------------------- */}

                {/* Fourth Service - New Service Example */}
                <div className="services__content">
                    <img
                        className="services__content-img"
                        src={GoogleAdsBackgroundImg}
                        alt="SEO Icon"
                    />
                    <div className="services__content-block">
                        <div>
                            <HiOutlineClipboardList className="services__icon" />
                            <h3 className="services__title">Google Ads</h3>
                        </div>
                        <span className="services__button" onClick={() => toggleTab(4)}>
                            View More
                            <HiOutlineArrowSmRight className="services__button-icon" />
                        </span>
                        <div
                            className={toggleState === 4 ? "services__modal active-modal" : "services__modal"}
                            onClick={handleClickOutside}
                        >
                            <div className={`services__modal-content ${toggleState === 4 ? "active" : ""}`}>
                                <HiX
                                    onClick={() => toggleTab(null)}
                                    className="services__modal-close"
                                />
                                <h3 className="services__modal-title">Google Ads Management</h3>
                                <p className="services__modal-description">
                                    Drive targeted traffic and achieve measurable results with expertly managed Google Ads campaigns.
                                </p>
                                <ul className="services__modal-services grid">
                                    <li className="services__modal-service">
                                        <div className="services__modal-item" onClick={() => toggleItemText(14)}>
                                            <HiOutlineCheckCircle className="services__modal-icon" />
                                            <p className="services__modal-info"><strong>Keyword Research & Ad Group Structuring</strong></p>
                                            <HiOutlineArrowSmRight className={`services__toggle-icon ${itemToggle[0] ? "rotated" : ""}`} />
                                        </div>
                                        {itemToggle[14] && (
                                            <div className="services__additional-info">
                                                <p>
                                                    Conduct thorough keyword research to identify the most effective terms for your business. Organize them into targeted ad groups to optimize ad relevance and quality scores.
                                                </p>
                                            </div>
                                        )}
                                    </li>

                                    <li className="services__modal-service">
                                        <div className="services__modal-item" onClick={() => toggleItemText(15)}>
                                            <HiOutlineCheckCircle className="services__modal-icon" />
                                            <p className="services__modal-info"><strong>Compelling Ad Copywriting</strong></p>
                                            <HiOutlineArrowSmRight className={`services__toggle-icon ${itemToggle[0] ? "rotated" : ""}`} />
                                        </div>
                                        {itemToggle[15] && (
                                            <div className="services__additional-info">
                                                <p>
                                                    Create engaging, click-worthy ad copy that captures your audience&apos;s attention and encourages them to take action, tailored for various campaign types (search, display, shopping).
                                                </p>
                                            </div>
                                        )}
                                    </li>

                                    <li className="services__modal-service">
                                        <div className="services__modal-item" onClick={() => toggleItemText(16)}>
                                            <HiOutlineCheckCircle className="services__modal-icon" />
                                            <p className="services__modal-info"><strong>Campaign Setup & Management</strong></p>
                                            <HiOutlineArrowSmRight className={`services__toggle-icon ${itemToggle[0] ? "rotated" : ""}`} />
                                        </div>
                                        {itemToggle[16] && (
                                            <div className="services__additional-info">
                                                <p>
                                                    Set up and manage Google Ads campaigns, including budget allocation, bidding strategies, and targeting options (demographics, location, and interests) to maximize reach and conversions.
                                                </p>
                                            </div>
                                        )}
                                    </li>

                                    <li className="services__modal-service">
                                        <div className="services__modal-item" onClick={() => toggleItemText(17)}>
                                            <HiOutlineCheckCircle className="services__modal-icon" />
                                            <p className="services__modal-info"><strong>Remarketing Strategies</strong></p>
                                            <HiOutlineArrowSmRight className={`services__toggle-icon ${itemToggle[0] ? "rotated" : ""}`} />
                                        </div>
                                        {itemToggle[17] && (
                                            <div className="services__additional-info">
                                                <p>
                                                    Implement remarketing campaigns to re-engage users who have previously interacted with your site. Tailor ads to remind them of their interest and encourage return visits.
                                                </p>
                                            </div>
                                        )}
                                    </li>

                                    <li className="services__modal-service">
                                        <div className="services__modal-item" onClick={() => toggleItemText(18)}>
                                            <HiOutlineCheckCircle className="services__modal-icon" />
                                            <p className="services__modal-info"><strong>Performance Tracking & Reporting</strong></p>
                                            <HiOutlineArrowSmRight className={`services__toggle-icon ${itemToggle[0] ? "rotated" : ""}`} />
                                        </div>
                                        {itemToggle[18] && (
                                            <div className="services__additional-info">
                                                <p>
                                                    Monitor campaign performance closely, analyzing key metrics like CTR, CPC, conversion rates, and ROI. Provide detailed reports and insights for continuous optimization and strategy adjustments.
                                                </p>
                                            </div>
                                        )}
                                    </li>

                                    <li className="services__modal-service">
                                        <div className="services__modal-item" onClick={() => toggleItemText(19)}>
                                            <HiOutlineCheckCircle className="services__modal-icon" />
                                            <p className="services__modal-info"><strong>A/B Testing for Ads</strong></p>
                                            <HiOutlineArrowSmRight className={`services__toggle-icon ${itemToggle[0] ? "rotated" : ""}`} />
                                        </div>
                                        {itemToggle[19] && (
                                            <div className="services__additional-info">
                                                <p>
                                                    Continuously test ad variations (copy, visuals, and calls-to-action) to determine the best-performing combinations and maximize campaign effectiveness.
                                                </p>
                                            </div>
                                        )}
                                    </li>

                                    {/* Add more items similarly */}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Add additional services similarly, ensuring to manage toggle states appropriately */}
            </div>
        </section>
    );
};

export default Services;
