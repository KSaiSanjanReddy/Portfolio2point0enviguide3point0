import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { NavLink } from "react-router-dom";

const Solutions = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
        AOS.init();
    }, []);
    return (
        <>
            <div className="Solutions-mainsection">
                <div className="Solutions-section1">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-9">
                                <h2 className="Solutions-mainhead" data-aos="fade-up" data-aos-duration="800" data-aos-delay="30">Solutions | Enviguide</h2>
                                <h3 className="Solutions-subhead" data-aos="fade-up" data-aos-duration="800" data-aos-delay="30">Empowering Climate Action Across the Automotive Value Chain</h3>
                                <p className="Solutions-content">At Enviguide, we offer an end-to-end digital sustainability solution designed to help automotive and mobility businesses transform regulatory pressure into a strategic advantage. Whether you're an OEM, Tier 1 supplier or fleet operator; our unified platform supports your entire emissions journey from data collection to reduction strategy and compliance.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="Solutions-section3">
                    <div className="container">
                        <h3 className="Solutions-section2Head">Our Core Solution Offerings</h3>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="Solutions-section3-left">
                                    <img data-aos="flip-right" data-aos-duration="800" data-aos-delay="300" className="Solutions-section3leftim" src="../assets/images/image222.png" alt="Product Carbon Footprint" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="Solutions-section3-right">
                                    <h3 className="Solutions-section3rightHead" data-aos="fade-up" data-aos-duration="800" data-aos-delay="30">Product Carbon Footprint (PCF) </h3>
                                    <h3 className="Solutions-section3rightsubHead" data-aos="fade-up" data-aos-duration="800" data-aos-delay="30">Quantify and disclose product level emissions for eco-design and verified green claims.</h3>
                                    <p className="Solutions-section3rightcontent">From raw material sourcing to end-of-life disposal, Enviguide helps you analyze the complete lifecycle of your products. Support your sustainability claims with transparent product specific carbon data.</p>
                                    <p className="Solutions-section3rightsu">Lifecycle Assessment (LCA) based</p>
                                    <p className="Solutions-section3rightsu">Supports green labeling & EU eco design rules</p>
                                    <p className="Solutions-section3rightsu">QR-code enabled insights per product</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="Solutions-section5">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="Solutions-section5rightSec">
                                    <h3 className="Solutions-section5rightHead" data-aos="fade-up" data-aos-duration="800" data-aos-delay="30">Supply Chain Transparency</h3>
                                    <h3 className="Solutions-section5rightsubHead" data-aos="fade-up" data-aos-duration="800" data-aos-delay="30">Engage your value chain, build trust, and comply with upcoming regulations.</h3>
                                    <p className="Solutions-section5rightcontent">Bring traceability into your supply chain with Scope 3 data collection, supplier onboarding workflows, and Digital Product Passports (DPP). Enable seamless collaboration and ensure regulatory readiness from factory to final product.</p>
                                    <p className="Solutions-section5rightsu">Supplier portals with compliance workflows</p>
                                    <p className="Solutions-section5rightsu">EU Digital Product Passport (DPP) ready</p>
                                    <p className="Solutions-section5rightsu">QR code product traceability</p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="Solutions-section5Sec">
                                    <img data-aos="flip-right" data-aos-duration="800" data-aos-delay="300" className="Solutions-section5leftim" src="../assets/images/image555.png" alt="Supply Chain Transparency" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="Solutions-section2">
                    <div className="container">
                        {/* <h3 className="Solutions-section2Head">Our Core Solution Offerings</h3> */}
                        <div className="row">
                            <div className="col-md-6">
                                <div className="Solutions-section2Left">
                                    <h3 className="Solutions-section2LeftHead" data-aos="fade-up" data-aos-duration="800" data-aos-delay="10">Corporate Carbon Footprint (CCF) Accounting & Reporting</h3>
                                    <h3 className="Solutions-section2LeftsubHead" data-aos="fade-up" data-aos-duration="800" data-aos-delay="30">Track Scope 1, 2 & 3 emissions across your entire operation.</h3>
                                    <p className="Solutions-section2Leftcontent">Gain full visibility over your corporate carbon footprint, including operational facilities, logistics, and value chain activities. Enviguide streamlines your GHG accounting and offers real-time dashboards, performance insights, and automated reporting aligned with global protocols.  </p>
                                    <p className="Solutions-section2Leftsu">GHG Protocol compliant</p>
                                    <p className="Solutions-section2Leftsu">Real time dashboards</p>
                                    <p className="Solutions-section2Leftsu">Multi-site & multi-region support</p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="Solutions-section2right">
                                    <img data-aos="flip-right" data-aos-duration="800" data-aos-delay="300" className="Solutions-section2rightim" src="../assets/images/Image111.png" alt="Our Core Solution Offerings" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                <div className="Solutions-section4">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="Solutions-section4Left">
                                    <h3 className="Solutions-section4LeftHead" data-aos="fade-up" data-aos-duration="800" data-aos-delay="30">Sustainability Reporting & Compliance</h3>
                                    <h3 className="Solutions-section4LeftsubHead" data-aos="fade-up" data-aos-duration="800" data-aos-delay="30">Automate your ESG disclosures without the spreadsheet chaos.</h3>
                                    <p className="Solutions-section4Leftcontent">Stay ahead of the curve with preconfigured, audit-ready reports for CSRD, CDP, GRI, BRSR and other evolving standards. With intelligent workflows and built-in validations, Enviguide makes complex compliance simple.</p>
                                    <p className="Solutions-section4Leftsu">Fully aligned with CSRD, CDP, GRI, BRSR & More</p>
                                    <p className="Solutions-section4Leftsu">Audit-ready formats</p>
                                    <p className="Solutions-section4Leftsu">Time saving automations</p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="Solutions-section4Right">
                                    <img data-aos="flip-right" data-aos-duration="800" data-aos-delay="300" className="Solutions-section4Rightim" src="../assets/images/image333.png" alt="Sustainability Reporting & Compliance" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="Solutions-section5 Solutions-section52">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="Solutions-section5Sec">
                                    <img data-aos="flip-right" data-aos-duration="800" data-aos-delay="300" className="Solutions-section5leftim" src="../assets/images/image444.png" alt="Sustainability Consulting & Strategy" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="Solutions-section5rightSec">
                                    <h3 className="Solutions-section5rightHead" data-aos="fade-up" data-aos-duration="800" data-aos-delay="30">Sustainability Consulting & Strategy</h3>
                                    <h3 className="Solutions-section5rightsubHead" data-aos="fade-up" data-aos-duration="800" data-aos-delay="30">Tap into expert support to turn emissions data into measurable outcomes.</h3>
                                    <p className="Solutions-section5rightcontent">Our in-house sustainability team helps you design and execute carbon strategies including reduction roadmaps, LCA interpretation, supplier engagement plans, and policy alignment.</p>
                                    <p className="Solutions-section5rightsu">Net-zero target setting & tracking</p>
                                    <p className="Solutions-section5rightsu">LCA modeling & impact forecasting</p>
                                    <p className="Solutions-section5rightsu">Strategic workshops & advisory</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="Solutions-section6">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-8">
                                <h2 className="Solutions-section6Head" data-aos="fade-up" data-aos-duration="800" data-aos-delay="30">Why Businesses Choose Enviguide Solutions</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                                <div className="Solutions-section6Box">
                                    <img data-aos="flip-right" data-aos-duration="800" data-aos-delay="300" className="Solutions-section6Boxim" src="../assets/images/Iocn12121.png" alt="Tailored for automotive and mobility" />
                                    <p className="Solutions-section6Boxtxt" data-aos="fade-up" data-aos-duration="800" data-aos-delay="30">Tailored for Automotive Industry.</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="Solutions-section6Box">
                                    <img data-aos="flip-right" data-aos-duration="800" data-aos-delay="300" className="Solutions-section6Boxim" src="../assets/images/Iocn12121.png" alt="Aligned with international standards" />
                                    <p className="Solutions-section6Boxtxt" data-aos="fade-up" data-aos-duration="800" data-aos-delay="30">Aligned with international standards.</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="Solutions-section6Box">
                                    <img data-aos="flip-right" data-aos-duration="800" data-aos-delay="300" className="Solutions-section6Boxim" src="../assets/images/Iocn12121.png" alt="Seamless data-to-compliance flow" />
                                    <p className="Solutions-section6Boxtxt" data-aos="fade-up" data-aos-duration="800" data-aos-delay="30">Seamless data-to-compliance flow.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-md-4">
                                <div className="Solutions-section6Box">
                                    <img data-aos="flip-right" data-aos-duration="800" data-aos-delay="300" className="Solutions-section6Boxim" src="../assets/images/Iocn12121.png" alt="Scalable from pilot to enterprise level" />
                                    <p className="Solutions-section6Boxtxt" data-aos="fade-up" data-aos-duration="800" data-aos-delay="30">Scalable from pilot to enterprise level.</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="Solutions-section6Box">
                                    <img data-aos="flip-right" data-aos-duration="800" data-aos-delay="300" className="Solutions-section6Boxim" src="../assets/images/Iocn12121.png" alt="Backed by experts in climate and ESG" />
                                    <p className="Solutions-section6Boxtxt" data-aos="fade-up" data-aos-duration="800" data-aos-delay="30">Backed by experts in climate and ESG. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="Solutions-section7">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-8">
                                <h2 className="Solutions-section7-mainhead" data-aos="fade-up" data-aos-duration="800" data-aos-delay="30">Not Sure Where to Start?</h2>
                                <p className="Solutions-section7-subhead">Let us guide you</p>
                                <p className="Solutions-section7-content">Whether you're preparing for CSRD, calculating Scope 3 emissions, or building a netzero roadmap, our team is here to help</p>
                                <div className="Solutions-section7sec">
                                    <NavLink className="bt1" to={'/Contact-Us'}>Book A Demo</NavLink>
                                    {/* <button className="bt1 bt2">book-demo</button> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Solutions;