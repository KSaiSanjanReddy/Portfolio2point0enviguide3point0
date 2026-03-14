import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { NavLink } from "react-router-dom";

const Blog = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
        AOS.init();
    }, []);
    return (
        <>
            <div className="blogs-mainsection">
                <div className="blogs-section1">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-9">
                                <h2 className="blogs-mainhead" data-aos="fade-up" data-aos-duration="800" data-aos-delay="30">Blog</h2>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="blogssection-main">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <NavLink to={'/BlogOne'} style={{textDecoration: 'none'}}>
                                    <div className="blogssec">
                                        <img className="blogimagemain" src="../assets/images/blogImage.png" alt="blog" />
                                        <h2 className="blogimagemain-Head">What is Corporate Sustainability Reporting Directive (CSRD) ?</h2>
                                        <p className="blogimagesubtext">Sustainability Is No Longer a Choice  It’s a Responsibility As the world is at a turning point. Climate change, resource depletion, and environmental degradation are no longer distant threats, they are challenges we face today. As businesses, we have the power to drive change and shape a future where sustainability isn’t just an option but a way of life. </p>
                                        <div className="blogdetails-sec">
                                            <img className="blogtxtim" src="../assets/images/Images.png" alt="blog" />
                                            <p className="blogtxtimtxt">C K Sivaprasad.</p>
                                        </div>
                                    </div>
                                </NavLink>
                            </div>
                            <div className="col-md-6">
                                <NavLink to={'/BlogTwo'} style={{textDecoration: 'none'}}>
                                    <div className="blogssec">
                                        <img className="blogimagemain" src="../assets/images/blog1.png" alt="blog" />
                                        <h2 className="blogimagemain-Head">What is LCA & EPD?</h2>
                                        <p className="blogimagesubtext">LCA is a comprehensive method used to evaluate the environmental impacts of a product from its inception to disposal. It covers all the stages, including raw material extraction, manufacturing, use, and end of life scenarios. LCAs help identify areas where environmental improvements can be addressed, leading to more sustainable product design and carbon/energy efficient manufacturing processes.</p>
                                        <div className="blogdetails-sec">
                                            <img className="blogtxtim" src="../assets/images/Images.png" alt="blog" />
                                            <p className="blogtxtimtxt">C K Sivaprasad.</p>
                                        </div>
                                    </div>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Blog;