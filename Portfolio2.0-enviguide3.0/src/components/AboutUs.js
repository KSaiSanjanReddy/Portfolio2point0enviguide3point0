import React, { useEffect, useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { NavLink } from "react-router-dom";

const AboutUs = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
        AOS.init();
    }, []);

    const [openIndex, setOpenIndex] = useState(null);
    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <>
            <div className="aboutus-mainsection">
                <div className="aboutus-section1">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-10">
                                <h2 className="aboutsection1-mainhead" data-aos="fade-up" data-aos-duration="800" data-aos-delay="30">About Us | Enviguide</h2>
                                <h3 className="aboutsection1-subhead" data-aos="fade-up" data-aos-duration="800" data-aos-delay="30">Driving Sustainable Transformation for Automotive Businesses</h3>
                                <p className="aboutsection1-content">At <span> Enviguide</span>, we support automotive and mobility focused companies in achieving their sustainability transformation. Our platform empowers businesses to measure carbon emissions, report with verified carbon footprints, and turn compliance into a competitive edge  all through a unified digital ecosystem.  </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="aboutus-section2">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="aboutus-section2left aboutus-section2left2">
                                    <h2 className="aboutus-section2leftHead" data-aos="fade-up" data-aos-duration="800" data-aos-delay="30">Our Vision</h2>
                                    <p className="aboutus-section2leftsubHead">To become a global leader in sustainability solutions.  </p>
                                    <p className="aboutus-section2leftcontent">We envision a future where sustainability is embedded at the core of Business, fostering long term environmental impact, resilient supply chains, and a greener planet, while driving sustainable economic growth.</p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="aboutus-section2left">
                                    <h2 className="aboutus-section2leftHead" data-aos="fade-up" data-aos-duration="800" data-aos-delay="30">Our Mission</h2>
                                    <p className="aboutus-section2leftsubHead">We transform sustainability into a competitive advantage.</p>
                                    <p className="aboutus-section2leftcontent">Enviguide empowers businesses with data driven insights, advanced digital solutions, and strategic expertise to:  </p>
                                    <div className="d-flex aboutus-section2me">
                                        <div className="flex-shrink-0">
                                            <img className="aboutus-section2meim" src="../assets/images/Ellipse1229.png" alt="icon" />
                                        </div>
                                        <div className="flex-grow-1 ms-3">
                                            <p className="aboutus-section2metext" data-aos="fade-up" data-aos-duration="800" data-aos-delay="10">Enhance Supply Chain Transparency.</p>
                                        </div>
                                    </div>
                                    <div className="d-flex aboutus-section2me">
                                        <div className="flex-shrink-0">
                                            <img className="aboutus-section2meim" src="../assets/images/Ellipse1229.png" alt="icon" />
                                        </div>
                                        <div className="flex-grow-1 ms-3">
                                            <p className="aboutus-section2metext" data-aos="fade-up" data-aos-duration="800" data-aos-delay="10">Drive measurable impact</p>
                                        </div>
                                    </div>
                                    <div className="d-flex aboutus-section2me">
                                        <div className="flex-shrink-0">
                                            <img className="aboutus-section2meim" src="../assets/images/Ellipse1229.png" alt="icon" />
                                        </div>
                                        <div className="flex-grow-1 ms-3">
                                            <p className="aboutus-section2metext" data-aos="fade-up" data-aos-duration="800" data-aos-delay="10">Achieve sustainability goals efficiently</p>
                                        </div>
                                    </div>
                                    <div className="d-flex aboutus-section2me">
                                        <div className="flex-shrink-0">
                                            <img className="aboutus-section2meim" src="../assets/images/Ellipse1229.png" alt="icon" />
                                        </div>
                                        <div className="flex-grow-1 ms-3">
                                            <p className="aboutus-section2metext" data-aos="fade-up" data-aos-duration="800" data-aos-delay="10">Simplify compliance with evolving global standards</p>
                                        </div>
                                    </div>
                                    <p className="aboutus-section2metext2" data-aos="fade-up" data-aos-duration="800" data-aos-delay="10">Through cutting edge technology and consulting, we help automotive businesses lead with purpose and perform with precision.</p>
                                    <NavLink to={'/Solutions'} style={{textDecoration: 'none', color: '#9afb00'}}>Read More...</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="aboutus-section3">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="about-section3-leftsection">
                                    <img data-aos="flip-right" data-aos-duration="800" data-aos-delay="300" className="about-section3-leftsectionim" src="../assets/images/Images.png" alt="icon" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="about-section3-rightsection">
                                    <h2 className="about-section3-rightsectionhead" data-aos="fade-up" data-aos-duration="800" data-aos-delay="30">Founder’s Message</h2>
                                    <p className="about-section3-rightsectioncontent">“Sustainability is no longer an optional commitment it is essential for businesses to thrive in a changing world. At Enviguide, we bridge the gap between ambition and action, providing companies with the expertise they need to build a greener future. Together, we can turn sustainability goals into real world impact.”</p>
                                    <h3 className="about-section3-rightsectionsub">C K Sivaprasad, Founder & CEO</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="aboutus-section4">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-7">
                                <h2 className="aboutus-section4-mainhead" data-aos="fade-up" data-aos-duration="800" data-aos-delay="30">What We Deliver</h2>
                                <p className="aboutus-section4-content" data-aos="fade-up" data-aos-duration="800" data-aos-delay="30">Enviguide provides <span> end to end sustainability management</span> for automotive and mobility focused organizations through a <span> unified digital platform </span>supported by expert advisory.</p>
                                <h3 className="aboutus-section4-sub">Our Core Capabilities</h3>
                            </div>
                        </div>

                        <div className="row justify-content-center">
                            <div className="col-md-3">
                                <div className="aboutus-section4box">
                                    <img data-aos="flip-right" data-aos-duration="800" data-aos-delay="300" className="aboutus-section4boxim" src="../assets/images/001.jpg" alt="correct" />
                                    <h3 className="aboutus-section4boxhead" data-aos="fade-up" data-aos-duration="800" data-aos-delay="30">Product Carbon Footprint (PCF)</h3>
                                    <p className="aboutus-section4boxtxt">Lifecycle-level emissions data per SKU</p>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="aboutus-section4box">
                                    {/* <img data-aos="flip-right" data-aos-duration="800" data-aos-delay="300" className="aboutus-section4boxim" src="../assets/images/Iocn12121.png" alt="correct" /> */}
                                    <img data-aos="flip-right" data-aos-duration="800" data-aos-delay="300" className="aboutus-section4boxim" src="../assets/images/002.jpg" alt="correct" />
                                    <h3 className="aboutus-section4boxhead" data-aos="fade-up" data-aos-duration="800" data-aos-delay="30">Supply Chain Transparency</h3>
                                    <p className="aboutus-section4boxtxt">Digital Product Passports & supplier tools</p>
                                </div>
                            </div>


                        </div>
                        <div className="row justify-content-center">
                            <div className="col-md-3">
                                <div className="aboutus-section4box">
                                    {/* <img data-aos="flip-right" data-aos-duration="800" data-aos-delay="300" className="aboutus-section4boxim" src="../assets/images/Iocn12121.png" alt="correct" /> */}
                                    <img data-aos="flip-right" data-aos-duration="800" data-aos-delay="300" className="aboutus-section4boxim" src="../assets/images/003.jpg" alt="correct" />
                                    <h3 className="aboutus-section4boxhead" data-aos="fade-up" data-aos-duration="800" data-aos-delay="30">Corporate Carbon Footprint (CCF)</h3>
                                    <p className="aboutus-section4boxtxt">Scope 1, 2, 3 tracking.</p>
                                </div>
                            </div>

                            <div className="col-md-3">
                                <div className="aboutus-section4box">
                                    {/* <img data-aos="flip-right" data-aos-duration="800" data-aos-delay="300" className="aboutus-section4boxim" src="../assets/images/Iocn12121.png" alt="correct" /> */}
                                    <img data-aos="flip-right" data-aos-duration="800" data-aos-delay="300" className="aboutus-section4boxim" src="../assets/images/004.jpg" alt="correct" />
                                    <h3 className="aboutus-section4boxhead" data-aos="fade-up" data-aos-duration="800" data-aos-delay="30">Sustainability Reporting & Compliance</h3>
                                    <p className="aboutus-section4boxtxt">CSRD, ESRS, CBAM, CDP, GRI, BRSR and beyond</p>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="aboutus-section4box">
                                    {/* <img data-aos="flip-right" data-aos-duration="800" data-aos-delay="300" className="aboutus-section4boxim" src="../assets/images/Iocn12121.png" alt="correct" /> */}
                                    <img data-aos="flip-right" data-aos-duration="800" data-aos-delay="300" className="aboutus-section4boxim" src="../assets/images/005.jpg" alt="correct" />
                                    <h3 className="aboutus-section4boxhead aboutus-section4boxhead2" data-aos="fade-up" data-aos-duration="800" data-aos-delay="30">Sustainability Consulting</h3>
                                    <p className="aboutus-section4boxtxt">LCA strategy and implementation support.</p>
                                </div>
                            </div>
                        </div>

                        <div className="text-center mt-5">
                            <NavLink className="aboutus-section4bt" to={'/Contact-Us'}>Explore Our Solutions</NavLink>
                        </div>
                    </div>
                </div>



                <div className="faq-mainsection">
                    <div className="container">
                        <h2 className="faq-mainhead" data-aos="fade-up" data-aos-duration="800" data-aos-delay="30">Let's Answer some Questions</h2>
                        <div className="row">
                            <div className="col-md-4">
                                <div className="faq-leftsection">
                                    <div className="nav flex-column nav-pills " id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                        <button className="nav-link custmfaqbt active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">Sustainability</button>
                                        <button className="nav-link custmfaqbt" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">Services</button>
                                        <button className="nav-link custmfaqbt" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">Greenwashing & Transparency</button>
                                        <img className="faqim" src="../assets/images/FAQs-amico.png" alt="FAQ" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-8">
                                <div className="faq-rightsection">
                                    <div className="tab-content" id="v-pills-tabContent">
                                        <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                                            <div>
                                                <div className="nav flex-row nav-pills justify-content-center" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                                    <button className="nav-link custmfaqbt2 active" id="v-pills-Scope1-tab" data-bs-toggle="pill" data-bs-target="#v-pills-Scope1" type="button" role="tab" aria-controls="v-pills-Scope1" aria-selected="true">Scope 1</button>
                                                    <button className="nav-link custmfaqbt2 custmfaqbt3" id="v-pills-Scope2-tab" data-bs-toggle="pill" data-bs-target="#v-pills-Scope2" type="button" role="tab" aria-controls="v-pills-Scope2" aria-selected="false">Scope 2</button>
                                                    <button className="nav-link custmfaqbt2" id="v-pills-Scope3-tab" data-bs-toggle="pill" data-bs-target="#v-pills-Scope3" type="button" role="tab" aria-controls="v-pills-Scope3" aria-selected="false">Scope 3</button>
                                                </div>
                                                <div className="tab-content" id="v-pills-tabContent">
                                                    <div className="tab-pane fade show active" id="v-pills-Scope1" role="tabpanel" aria-labelledby="v-pills-Scope1-tab">
                                                        <div className="faq-section">
                                                            {/* FAQ 9 */}
                                                            <div className={`faq-container ${openIndex === 9 ? 'open' : ''}`}>
                                                                <div className="faq-header" onClick={() => toggleFAQ(9)}>
                                                                    <h3 className="faq-headertxt">What is Scope 1 emissions?</h3>
                                                                    <span className={`icon ${openIndex === 9 ? 'rotate' : ''}`}>
                                                                        {openIndex === 0 ? '×' : '+'}
                                                                    </span>
                                                                </div>
                                                                <div className={`faq-body ${openIndex === 9 ? 'expanded' : ''}`}>
                                                                    <p className="faq-anstxt">
                                                                        These are direct greenhouse gas (GHG) emissions from sources that a company owns or controls, like company vehicles, fuel combustion, and industrial operations.
                                                                    </p>
                                                                    <p className="faq-anstxt2">🌱 How Enviguide Helps:</p>
                                                                    <ul className="faq-styl">
                                                                        <li className="faq-points">We provide carbon tracking tools to measure direct emissions.</li>
                                                                        <li className="faq-points">We suggest ways to switch to cleaner energy sources and efficient fuel use.</li>
                                                                        <li className="faq-points">We assist businesses in compliance with sustainability regulations.</li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            {/* FAQ 10 */}
                                                            <div className={`faq-container ${openIndex === 10 ? 'open' : ''}`}>
                                                                <div className="faq-header" onClick={() => toggleFAQ(10)}>
                                                                    <h3 className="faq-headertxt">What are some examples of Scope 1 emissions?</h3>
                                                                    <span className={`icon ${openIndex === 10 ? 'rotate' : ''}`}>
                                                                        {openIndex === 10 ? '×' : '+'}
                                                                    </span>
                                                                </div>
                                                                <div className={`faq-body ${openIndex === 10 ? 'expanded' : ''}`}>
                                                                    <p className="faq-anstxt2">Common sources include:</p>
                                                                    <ul className="faq-styl">
                                                                        <li className="faq-points">Company-owned vehicles (gasoline, diesel fleet).</li>
                                                                        <li className="faq-points">On-site fuel combustion (boilers, furnaces, generators).</li>
                                                                        <li className="faq-points">Industrial processes (cement, chemical manufacturing).</li>
                                                                        <li className="faq-points">Fugitive emissions (refrigerant leaks from air conditioning or cooling systems).</li>
                                                                    </ul>

                                                                    <p className="faq-anstxt2">🌱 How Enviguide Helps:</p>
                                                                    <ul className="faq-styl">
                                                                        <li className="faq-points">We conduct energy audits to identify emission sources.</li>
                                                                        <li className="faq-points">We recommend fuel-efficient and low carbon alternatives.</li>
                                                                        <li className="faq-points"> We help businesses implement cleaner manufacturing processes.</li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            {/* FAQ 11 */}
                                                            <div className={`faq-container ${openIndex === 11 ? 'open' : ''}`}>
                                                                <div className="faq-header" onClick={() => toggleFAQ(11)}>
                                                                    <h3 className="faq-headertxt">How do Scope 1 emissions differ from Scope 2 and Scope 3?</h3>
                                                                    <span className={`icon ${openIndex === 11 ? 'rotate' : ''}`}>
                                                                        {openIndex === 11 ? '×' : '+'}
                                                                    </span>
                                                                </div>
                                                                <div className={`faq-body ${openIndex === 11 ? 'expanded' : ''}`}>
                                                                    <p className="faq-anstxt">
                                                                        Scope 1: Direct emissions from owned/controlled sources.
                                                                    </p>
                                                                    <p className="faq-anstxt">
                                                                        Scope 2: Indirect emissions from purchased electricity, heating, or cooling.
                                                                    </p>
                                                                    <p className="faq-anstxt">
                                                                        Scope 3: Indirect emissions from the supply chain, product use, business travel, and more.
                                                                    </p>
                                                                    <p className="faq-anstxt2">🌱 How Enviguide Helps:</p>
                                                                    <ul className="faq-styl">
                                                                        <li className="faq-points">We develop customized emission reduction strategies covering all three scopes.</li>
                                                                        <li className="faq-points">We provide end to end carbon footprint assessments.</li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            {/* FAQ 12 */}
                                                            <div className={`faq-container ${openIndex === 12 ? 'open' : ''}`}>
                                                                <div className="faq-header" onClick={() => toggleFAQ(12)}>
                                                                    <h3 className="faq-headertxt">Why are Scope 1 emissions important to track?</h3>
                                                                    <span className={`icon ${openIndex === 12 ? 'rotate' : ''}`}>
                                                                        {openIndex === 12 ? '×' : '+'}
                                                                    </span>
                                                                </div>
                                                                <div className={`faq-body ${openIndex === 12 ? 'expanded' : ''}`}>
                                                                    <p className="faq-anstxt">
                                                                        It helps identify major pollution sources.
                                                                    </p>
                                                                    <p className="faq-anstxt">
                                                                        Reduces operational costs through energy efficiency.
                                                                    </p>
                                                                    <p className="faq-anstxt">
                                                                        Ensures compliance with environmental laws and sustainability frameworks.
                                                                    </p>
                                                                    <p className="faq-anstxt">
                                                                        Builds brand trust by showcasing real sustainability actions.
                                                                    </p>
                                                                    <p className="faq-anstxt2">🌱 How Enviguide Helps:</p>
                                                                    <ul className="faq-styl">
                                                                        <li className="faq-points">We offer real time tracking and GHG accounting solutions.</li>
                                                                        <li className="faq-points">We assist in reporting emissions for sustainability certifications.</li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            {/* FAQ 13 */}
                                                            <div className={`faq-container ${openIndex === 13 ? 'open' : ''}`}>
                                                                <div className="faq-header" onClick={() => toggleFAQ(13)}>
                                                                    <h3 className="faq-headertxt">How can companies measure their Scope 1 emissions?</h3>
                                                                    <span className={`icon ${openIndex === 13 ? 'rotate' : ''}`}>
                                                                        {openIndex === 13 ? '×' : '+'}
                                                                    </span>
                                                                </div>
                                                                <div className={`faq-body ${openIndex === 13 ? 'expanded' : ''}`}>

                                                                    <p className="faq-anstxt2">🌱 How Enviguide Helps:</p>
                                                                    <ul className="faq-styl">
                                                                        <li className="faq-points">We provide automated carbon footprint tracking software.</li>
                                                                        <li className="faq-points">We train teams on best practices for emissions monitoring.</li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="tab-pane fade" id="v-pills-Scope2" role="tabpanel" aria-labelledby="v-pills-Scope2-tab">
                                                        <div className="faq-section">
                                                            {/* FAQ 14 */}
                                                            <div className={`faq-container ${openIndex === 14 ? 'open' : ''}`}>
                                                                <div className="faq-header" onClick={() => toggleFAQ(14)}>
                                                                    <h3 className="faq-headertxt">What is Scope 2 emissions?</h3>
                                                                    <span className={`icon ${openIndex === 14 ? 'rotate' : ''}`}>
                                                                        {openIndex === 14 ? '×' : '+'}
                                                                    </span>
                                                                </div>
                                                                <div className={`faq-body ${openIndex === 14 ? 'expanded' : ''}`}>
                                                                    <p className="faq-anstxt">
                                                                        Scope 2 emissions are indirect greenhouse gas (GHG) emissions from the electricity, steam, heating, and cooling that a company purchases. These emissions occur at the power plant or supplier level but are attributed to the company using the energy.
                                                                    </p>

                                                                    <p className="faq-anstxt2">🌱 How Enviguide Helps:</p>
                                                                    <ul className="faq-styl">
                                                                        <li className="faq-points">We help businesses track and measure their energy related emissions.</li>
                                                                        <li className="faq-points">We provide strategies to switch to clean energy sources and reduce electricity consumption.</li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            {/* FAQ 15 */}
                                                            <div className={`faq-container ${openIndex === 15 ? 'open' : ''}`}>
                                                                <div className="faq-header" onClick={() => toggleFAQ(15)}>
                                                                    <h3 className="faq-headertxt">Why is tracking Scope 2 emissions important?</h3>
                                                                    <span className={`icon ${openIndex === 15 ? 'rotate' : ''}`}>
                                                                        {openIndex === 15 ? '×' : '+'}
                                                                    </span>
                                                                </div>
                                                                <div className={`faq-body ${openIndex === 15 ? 'expanded' : ''}`}>
                                                                    <p className="faq-anstxt">
                                                                        Helps businesses understand their carbon footprint.
                                                                    </p>
                                                                    <p className="faq-anstxt">
                                                                        Required by many sustainability regulations and reporting frameworks.
                                                                    </p>
                                                                    <p className="faq-anstxt">
                                                                        Investors and customers expect companies to reduce energy related emissions.
                                                                    </p>
                                                                    <p className="faq-anstxt">
                                                                        Lowering Scope 2 emissions can reduce energy costs and improve efficiency.
                                                                    </p>

                                                                    <p className="faq-anstxt2">🌱 How Enviguide Helps:</p>
                                                                    <ul className="faq-styl">
                                                                        <li className="faq-points">We assist in corporate sustainability reporting (CDP, GHG Protocol, SBTi).</li>
                                                                        <li className="faq-points">We help businesses implement renewable energy procurement strategies.</li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            {/* FAQ 16 */}
                                                            <div className={`faq-container ${openIndex === 16 ? 'open' : ''}`}>
                                                                <div className="faq-header" onClick={() => toggleFAQ(16)}>
                                                                    <h3 className="faq-headertxt">How does reducing Scope 2 emissions support net zero goals?</h3>
                                                                    <span className={`icon ${openIndex === 16 ? 'rotate' : ''}`}>
                                                                        {openIndex === 16 ? '×' : '+'}
                                                                    </span>
                                                                </div>
                                                                <div className={`faq-body ${openIndex === 16 ? 'expanded' : ''}`}>
                                                                    <p className="faq-anstxt">
                                                                        Many companies are committing to 100% renewable energy to eliminate Scope 2 emissions.
                                                                    </p>


                                                                    <p className="faq-anstxt2">🌱 How Enviguide Helps:</p>
                                                                    <ul className="faq-styl">
                                                                        <li className="faq-points">We develop roadmaps for transitioning to net zero energy consumption.</li>
                                                                        <li className="faq-points">We connect businesses with carbon offset and clean energy projects.</li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            {/* FAQ 17 */}
                                                            <div className={`faq-container ${openIndex === 17 ? 'open' : ''}`}>
                                                                <div className="faq-header" onClick={() => toggleFAQ(17)}>
                                                                    <h3 className="faq-headertxt">How do companies measure Scope 2 emissions?</h3>
                                                                    <span className={`icon ${openIndex === 17 ? 'rotate' : ''}`}>
                                                                        {openIndex === 17 ? '×' : '+'}
                                                                    </span>
                                                                </div>
                                                                <div className={`faq-body ${openIndex === 17 ? 'expanded' : ''}`}>
                                                                    <p className="faq-anstxt">
                                                                        Companies measure their emissions depending upon their usage and type of their outputs.
                                                                    </p>


                                                                    <p className="faq-anstxt2">🌱 How Enviguide Helps:</p>
                                                                    <ul className="faq-styl">
                                                                        <li className="faq-points">We offer automated energy tracking solutions.</li>
                                                                        <li className="faq-points">We provide expert GHG emissions calculations based on industry standards.</li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="tab-pane fade" id="v-pills-Scope3" role="tabpanel" aria-labelledby="v-pills-Scope3-tab">
                                                        <div className="faq-section">
                                                            {/* FAQ 18 */}
                                                            <div className={`faq-container ${openIndex === 18 ? 'open' : ''}`}>
                                                                <div className="faq-header" onClick={() => toggleFAQ(18)}>
                                                                    <h3 className="faq-headertxt">What is Scope 3 emissions?</h3>
                                                                    <span className={`icon ${openIndex === 18 ? 'rotate' : ''}`}>
                                                                        {openIndex === 18 ? '×' : '+'}
                                                                    </span>
                                                                </div>
                                                                <div className={`faq-body ${openIndex === 18 ? 'expanded' : ''}`}>
                                                                    <p className="faq-anstxt">
                                                                        Scope 3 emissions are indirect greenhouse gas (GHG) emissions that occur in a company’s value chain but are not directly owned or controlled by the company. These emissions come from both upstream (supply chain) and downstream (product use, disposal, etc.) activities.
                                                                    </p>
                                                                    <p className="faq-anstxt2">🌱 How Enviguide Helps:</p>
                                                                    <ul className="faq-styl">
                                                                        <li className="faq-points">We help companies track and analyze their full value chain emissions.</li>
                                                                        <li className="faq-points">We offer carbon accounting solutions to measure Scope 3 emissions accurately.</li>
                                                                        <li className="faq-points">We provide strategies to engage suppliers and reduce supply chain emissions.</li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            {/* FAQ 19 */}
                                                            <div className={`faq-container ${openIndex === 19 ? 'open' : ''}`}>
                                                                <div className="faq-header" onClick={() => toggleFAQ(19)}>
                                                                    <h3 className="faq-headertxt">What are examples of Scope 3 emissions?</h3>
                                                                    <span className={`icon ${openIndex === 19 ? 'rotate' : ''}`}>
                                                                        {openIndex === 19 ? '×' : '+'}
                                                                    </span>
                                                                </div>
                                                                <div className={`faq-body ${openIndex === 19 ? 'expanded' : ''}`}>
                                                                    <p className="faq-anstxt">
                                                                        Scope 3 emissions are categorized into upstream (before a product reaches the company) and downstream (after the product leaves the company) emissions.
                                                                    </p>
                                                                    <p className="faq-anstxt">
                                                                        <span>🔼</span> Upstream Emissions (Supply Chain)
                                                                    </p>
                                                                    <p className="faq-anstxt">
                                                                        Purchased goods & services (e.g., raw materials, office supplies).
                                                                    </p>
                                                                    <p className="faq-anstxt">
                                                                        Capital goods (e.g., machinery, equipment, infrastructure).
                                                                    </p>
                                                                    <p className="faq-anstxt">
                                                                        Business travel (e.g., flights, hotels, transport).
                                                                    </p>
                                                                    <p className="faq-anstxt">
                                                                        Employee commuting (e.g., cars, public transit, remote work impact).
                                                                    </p>
                                                                    <p className="faq-anstxt">Fuel & energy-related activities (e.g., emissions from producing purchased fuel/electricity).</p>
                                                                    <p className="faq-anstxt">
                                                                        <span>🔼</span> Downstream Emissions (Product Use & Disposal)
                                                                    </p>
                                                                    <p className="faq-anstxt">
                                                                        Transportation & distribution (e.g., shipping to customers, retailers).
                                                                    </p>
                                                                    <p className="faq-anstxt">
                                                                        Use of sold products (e.g., energy use by electronics, appliances).
                                                                    </p>
                                                                    <p className="faq-anstxt">
                                                                        End of life treatment of sold products (e.g., recycling, landfill emissions).
                                                                    </p>

                                                                    <p className="faq-anstxt2">🌱 How Enviguide Helps:</p>
                                                                    <ul className="faq-styl">
                                                                        <li className="faq-points">We develop low carbon supply chain strategies for businesses.</li>
                                                                        <li className="faq-points">We offer employee commuting and travel emission reduction plans.</li>
                                                                        <li className="faq-points">We guide companies on circular economy practices to reduce waste.</li>
                                                                    </ul>
                                                                </div>
                                                            </div>

                                                            {/* FAQ 20 */}
                                                            <div className={`faq-container ${openIndex === 20 ? 'open' : ''}`}>
                                                                <div className="faq-header" onClick={() => toggleFAQ(20)}>
                                                                    <h3 className="faq-headertxt">Why are Scope 3 emissions important?</h3>
                                                                    <span className={`icon ${openIndex === 20 ? 'rotate' : ''}`}>
                                                                        {openIndex === 20 ? '×' : '+'}
                                                                    </span>
                                                                </div>
                                                                <div className={`faq-body ${openIndex === 20 ? 'expanded' : ''}`}>
                                                                    <p className="faq-anstxt">
                                                                        They make up 70-90% of a company’s total carbon footprint.
                                                                    </p>
                                                                    <p className="faq-anstxt">
                                                                        Reducing Scope 3 emissions lowers environmental impact and improves sustainability.
                                                                    </p>
                                                                    <p className="faq-anstxt">
                                                                        Investors, customers, and regulations are demanding transparent emission reporting.
                                                                    </p>
                                                                    <p className="faq-anstxt">
                                                                        Sustainable supply chains lead to cost savings and efficiency improvements.
                                                                    </p>
                                                                    <p className="faq-anstxt2">🌱 How Enviguide Helps:</p>
                                                                    <ul className="faq-styl">
                                                                        <li className="faq-points">We work with suppliers to reduce emissions in manufacturing and logistics.</li>
                                                                        <li className="faq-points">We develop low-carbon transportation and distribution plans.</li>
                                                                        <li className="faq-points">We help businesses set science-based targets for carbon reduction.</li>
                                                                    </ul>
                                                                </div>
                                                            </div>

                                                            {/* FAQ 21 */}
                                                            <div className={`faq-container ${openIndex === 21 ? 'open' : ''}`}>
                                                                <div className="faq-header" onClick={() => toggleFAQ(21)}>
                                                                    <h3 className="faq-headertxt">How can companies measure Scope 3 emissions?</h3>
                                                                    <span className={`icon ${openIndex === 21 ? 'rotate' : ''}`}>
                                                                        {openIndex === 21 ? '×' : '+'}
                                                                    </span>
                                                                </div>
                                                                <div className={`faq-body ${openIndex === 21 ? 'expanded' : ''}`}>

                                                                    <p className="faq-anstxt2">🌱 How Enviguide Helps:</p>
                                                                    <ul className="faq-styl">
                                                                        <li className="faq-points">We provide carbon accounting software to track Scope 3 emissions.</li>
                                                                        <li className="faq-points">We assist in supplier engagement programs to improve data quality.</li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            {/* FAQ 22 */}
                                                            <div className={`faq-container ${openIndex === 22 ? 'open' : ''}`}>
                                                                <div className="faq-header" onClick={() => toggleFAQ(22)}>
                                                                    <h3 className="faq-headertxt">How can companies reduce Scope 3 emissions?</h3>
                                                                    <span className={`icon ${openIndex === 22 ? 'rotate' : ''}`}>
                                                                        {openIndex === 22 ? '×' : '+'}
                                                                    </span>
                                                                </div>
                                                                <div className={`faq-body ${openIndex === 22 ? 'expanded' : ''}`}>

                                                                    <p className="faq-anstxt2">🌱 How Enviguide Helps:</p>
                                                                    <ul className="faq-styl">
                                                                        <li className="faq-points">We provide best practices, training, and data driven approaches to lower emissions across the entire supply chain.</li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                                            <div className="faq-section">
                                                {/* FAQ 0 */}
                                                <div className={`faq-container ${openIndex === 0 ? 'open' : ''}`}>
                                                    <div className="faq-header" onClick={() => toggleFAQ(0)}>
                                                        <h3 className="faq-headertxt">What services does Enviguide offer?</h3>
                                                        <span className={`icon ${openIndex === 0 ? 'rotate' : ''}`}>
                                                            {openIndex === 0 ? '×' : '+'}
                                                        </span>
                                                    </div>
                                                    <div className={`faq-body ${openIndex === 0 ? 'expanded' : ''}`}>
                                                        <p className="faq-anstxt">
                                                            What services does Enviguide offer?
                                                        </p>
                                                        {/* <p  className="faq-anstxt2">🌱 How Enviguide Helps:</p> */}
                                                        <ul className="faq-styl">
                                                            <li className="faq-points">Carbon Footprint Measurement (Organization & Product level, Supply Chain).</li>
                                                            <li className="faq-points">Lifecycle Assessment (LCA) with database selections.</li>
                                                            <li className="faq-points">Sustainability Reporting.</li>
                                                            <li className="faq-points">Training & Engagement Programs.</li>
                                                            <li className="faq-points">Circular Economy Consulting.</li>
                                                        </ul>
                                                    </div>
                                                </div>

                                                {/* FAQ 1 */}
                                                <div className={`faq-container ${openIndex === 1 ? 'open' : ''}`}>
                                                    <div className="faq-header" onClick={() => toggleFAQ(1)}>
                                                        <h3 className="faq-headertxt">How does Enviguide ensure compliance with global sustainability frameworks?</h3>
                                                        <span className={`icon ${openIndex === 1 ? 'rotate' : ''}`}>
                                                            {openIndex === 1 ? '×' : '+'}
                                                        </span>
                                                    </div>
                                                    <div className={`faq-body ${openIndex === 1 ? 'expanded' : ''}`}>
                                                        <p className="faq-anstxt">
                                                            Our solutions align with major standards like GHG Protocol, CDP, GRI, UN SDGs, CBAM, SBTi, CSRD, and TCFD, ensuring businesses meet sustainability and regulatory requirements.
                                                        </p>
                                                    </div>
                                                </div>

                                                {/* FAQ 2 */}
                                                <div className={`faq-container ${openIndex === 2 ? 'open' : ''}`}>
                                                    <div className="faq-header" onClick={() => toggleFAQ(2)}>
                                                        <h3 className="faq-headertxt">Can small businesses use Enviguide’s services?</h3>
                                                        <span className={`icon ${openIndex === 2 ? 'rotate' : ''}`}>
                                                            {openIndex === 2 ? '×' : '+'}
                                                        </span>
                                                    </div>
                                                    <div className={`faq-body ${openIndex === 2 ? 'expanded' : ''}`}>
                                                        <p className="faq-anstxt">
                                                            Yes! Our solutions are scalable and designed to support businesses of all sizes, from startups to multinational corporations.
                                                        </p>
                                                    </div>
                                                </div>

                                                {/* FAQ 3 (Manual) */}
                                                <div className={`faq-container ${openIndex === 3 ? 'open' : ''}`}>
                                                    <div className="faq-header" onClick={() => toggleFAQ(3)}>
                                                        <h3 className="faq-headertxt">How does Enviguide differ from other sustainability consulting firms?</h3>
                                                        <span className={`icon ${openIndex === 3 ? 'rotate' : ''}`}>
                                                            {openIndex === 3 ? '×' : '+'}
                                                        </span>
                                                    </div>
                                                    <div className={`faq-body ${openIndex === 3 ? 'expanded' : ''}`}>
                                                        <p className="faq-anstxt">
                                                            We combine technology, expert consulting, and data driven insights to deliver practical, measurable, and industry specific sustainability solutions.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
                                            <div className="faq-section">
                                                {/* FAQ 4 */}
                                                <div className={`faq-container ${openIndex === 4 ? 'open' : ''}`}>
                                                    <div className="faq-header" onClick={() => toggleFAQ(4)}>
                                                        <h3 className="faq-headertxt">What is Greenwashing?</h3>
                                                        <span className={`icon ${openIndex === 4 ? 'rotate' : ''}`}>
                                                            {openIndex === 0 ? '×' : '+'}
                                                        </span>
                                                    </div>
                                                    <div className={`faq-body ${openIndex === 4 ? 'expanded' : ''}`}>
                                                        <p className="faq-anstxt">
                                                            Greenwashing occurs when a company misleads consumers, investors, or stakeholders by making false, exaggerated, or unverified claims about its environmental efforts. This creates the illusion of sustainability without actual impact.
                                                        </p>
                                                        <p className="faq-anstxt2">🌱 How Enviguide Helps:</p>
                                                        <ul className="faq-styl">
                                                            <li className="faq-points">We help businesses develop credible sustainability strategies.</li>
                                                            <li className="faq-points">We provide data backed sustainability reporting to ensure transparency.</li>
                                                            {/* <li className="faq-points">Sustainability Reporting.</li>
                                                            <li className="faq-points">Training & Engagement Programs.</li>
                                                            <li className="faq-points">Circular Economy Consulting.</li> */}
                                                        </ul>
                                                    </div>
                                                </div>

                                                {/* FAQ 5 */}
                                                <div className={`faq-container ${openIndex === 5 ? 'open' : ''}`}>
                                                    <div className="faq-header" onClick={() => toggleFAQ(5)}>
                                                        <h3 className="faq-headertxt">What are the risks of Greenwashing?</h3>
                                                        <span className={`icon ${openIndex === 5 ? 'rotate' : ''}`}>
                                                            {openIndex === 5 ? '×' : '+'}
                                                        </span>
                                                    </div>
                                                    <div className={`faq-body ${openIndex === 5 ? 'expanded' : ''}`}>
                                                        <p className="faq-anstxt">
                                                            <span>❌</span> Loss of Consumer Trust Customers move to truly sustainable brands.
                                                        </p>
                                                        <p className="faq-anstxt">
                                                            <span>❌</span> Regulatory Fines & Lawsuits Governments (EU, US, UK) are cracking down on false green claims.
                                                        </p>
                                                        <p className="faq-anstxt">
                                                            <span>❌</span> Investor Backlash  ESG focused investors avoid misleading companies.
                                                        </p>
                                                        <p className="faq-anstxt">
                                                            <span>❌</span> Reputation Damage  Social media & watchdog groups expose greenwashing quickly.
                                                        </p>
                                                        <p className="faq-anstxt2">🌱 How Enviguide Helps:</p>
                                                        <ul className="faq-styl">
                                                            <li className="faq-points">We provide transparent ESG (Environmental, Social, and Governance) reporting.</li>
                                                            <li className="faq-points">We help businesses align with global sustainability frameworks (CDP, GRI, SBTi).</li>
                                                        </ul>
                                                    </div>
                                                </div>

                                                {/* FAQ 6 */}
                                                <div className={`faq-container ${openIndex === 6 ? 'open' : ''}`}>
                                                    <div className="faq-header" onClick={() => toggleFAQ(6)}>
                                                        <h3 className="faq-headertxt">What is Transparency in Sustainability?</h3>
                                                        <span className={`icon ${openIndex === 6 ? 'rotate' : ''}`}>
                                                            {openIndex === 6 ? '×' : '+'}
                                                        </span>
                                                    </div>
                                                    <div className={`faq-body ${openIndex === 6 ? 'expanded' : ''}`}>
                                                        <p className="faq-anstxt">
                                                            Transparency means openly and honestly reporting on sustainability practices, including successes and challenges. It includes:
                                                        </p>
                                                        <ul className="faq-styl">
                                                            <li className="faq-points">Accurate emissions reporting (Scope 1, 2, and 3).</li>
                                                            <li className="faq-points">Clear labelling and certifications.</li>
                                                            <li className="faq-points">Third party audits and verifications.</li>
                                                        </ul>
                                                        <p className="faq-anstxt2">🌱 How Enviguide Helps:</p>
                                                        <ul className="faq-styl">
                                                            <li className="faq-points">We provide end to end sustainability tracking tools.</li>
                                                            <li className="faq-points">We help businesses communicate clear, truthful environmental claims.</li>
                                                        </ul>
                                                        <p className="faq-anstxt">
                                                            Yes! Our solutions are scalable and designed to support businesses of all sizes, from startups to multinational corporations.
                                                        </p>
                                                    </div>
                                                </div>

                                                {/* FAQ 7 (Manual) */}
                                                <div className={`faq-container ${openIndex === 7 ? 'open' : ''}`}>
                                                    <div className="faq-header" onClick={() => toggleFAQ(7)}>
                                                        <h3 className="faq-headertxt">How can companies ensure transparency in sustainability?</h3>
                                                        <span className={`icon ${openIndex === 7 ? 'rotate' : ''}`}>
                                                            {openIndex === 7 ? '×' : '+'}
                                                        </span>
                                                    </div>
                                                    <div className={`faq-body ${openIndex === 7 ? 'expanded' : ''}`}>
                                                        <p className="faq-anstxt">
                                                            <sapn>✅</sapn> Use Clear, Data Backed Claims
                                                        </p>
                                                        <p className="faq-anstxt">
                                                            Provide actual figures on carbon emissions and reductions.
                                                        </p>
                                                        <p className="faq-anstxt">
                                                            Example: Instead of “We reduced emissions”, say “We cut emissions by 30% in 2023”.
                                                        </p>
                                                        <p className="faq-anstxt">
                                                            <sapn>✅</sapn> Report Scope 1, 2, and 3 Emissions
                                                        </p>
                                                        <p className="faq-anstxt">
                                                            Companies should disclose all emission sources, not just direct ones.
                                                        </p>
                                                        <p className="faq-anstxt">
                                                            Example: A fashion brand should include emissions from suppliers, transportation, and product disposal.
                                                        </p>
                                                        <p className="faq-anstxt">
                                                            <sapn>✅</sapn> Get Third Party Certifications
                                                        </p>
                                                        <p className="faq-anstxt">
                                                            Work with credible environmental organizations.
                                                        </p>
                                                        <p className="faq-anstxt">
                                                            Examples: FSC (Forests), Fair Trade (Ethical sourcing), B Corp (Sustainable business).
                                                        </p>
                                                        <p className="faq-anstxt">
                                                            <sapn>✅</sapn> Prioritize Real Carbon Reduction Over Offsets
                                                        </p>
                                                        <p className="faq-anstxt">
                                                            Focus on cutting emissions first before buying carbon offsets.
                                                        </p>
                                                        <p className="faq-anstxt">
                                                            Example: A tech company should switch to renewable energy instead of just offsetting emissions.
                                                        </p>
                                                        <p className="faq-anstxt2">🌱 How Enviguide Helps:</p>
                                                        <p className="faq-anstxt">- We assist in ESG reporting and third party audits.</p>
                                                        <p className="faq-anstxt">- We help businesses adopt sustainable strategies beyond marketing gimmicks.</p>
                                                    </div>
                                                </div>

                                                {/* FAQ 8 */}
                                                <div className={`faq-container ${openIndex === 8 ? 'open' : ''}`}>
                                                    <div className="faq-header" onClick={() => toggleFAQ(8)}>
                                                        <h3 className="faq-headertxt">Example of a Company Practicing Transparency</h3>
                                                        <span className={`icon ${openIndex === 8 ? 'rotate' : ''}`}>
                                                            {openIndex === 8 ? '×' : '+'}
                                                        </span>
                                                    </div>
                                                    <div className={`faq-body ${openIndex === 8 ? 'expanded' : ''}`}>
                                                        <p className="faq-anstxt">
                                                            Example: Patagonia
                                                        </p>
                                                        <ul className="faq-styl">
                                                            <li className="faq-points">Publicly shares its environmental impact (good and bad).</li>
                                                            <li className="faq-points">Uses verified third party certifications (Fair Trade, Blue sign).</li>
                                                            <li className="faq-points">Reports its supply chain emissions (Scope 3 transparency)</li>
                                                        </ul>
                                                        <p className="faq-anstxt2">🌱 How Enviguide Helps:</p>

                                                        <p className="faq-anstxt">
                                                            We help companies follow Patagonia’s model of open sustainability reporting.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="aboutus-section5">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-7">
                                <h2 className="aboutus-section5-mainhead" data-aos="fade-up" data-aos-duration="800" data-aos-delay="30">Ready to Take Action?</h2>
                                <p className="aboutus-section5-content">Join the growing network of automotive leaders turning sustainability goals into operational advantage.</p>
                                <div className="text-center">
                                    <NavLink className="aboutus-section5bt" to={'/Contact-Us'}>Get Started with Enviguide</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutUs;