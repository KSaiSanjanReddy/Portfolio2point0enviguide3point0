import React, { useEffect, useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { NavLink } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Aos from "aos";

const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
        AOS.init();
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const [isVisible, setIsVisible] = useState(false);

    // Show button when page is scrolled down
    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Scroll to top smoothly
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    const handleSlideChange = () => {
        setTimeout(() => {
            Aos.refresh(); // refresh AOS after slide change
        }, 100000000);
    };

    return (
        <>
            <div className="container">
                <div className="slider-mainsection">
                    <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                            delay: 4500,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        loop={true}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="mySwiper custom-swiper"
                        onSlideChange={handleSlideChange}
                    >
                        <SwiperSlide>
                            <div className='sliderSection sliderSection2'>
                                <div className="container">
                                    <img className="slider-logo" src="../assets/images/EnviGuide_green.png" alt="arrow" />
                                    <p className="slider1-txt">Driving automotive sustainability through intelligent emissions management</p>
                                    <h1 className="slider1-head">Your Trusted Partner for Automotive Sustainability</h1>
                                    <p className="slider1-txt2">Transform your automotive operations with our integrated approach to measuring, reporting, and reducing carbon emissions across your entire fleet.</p>
                                    <div className="row justify-content-center">
                                        <div className="col-md-3">
                                            <div className="sliderbox">
                                                <img className="sliderbox-im" src="../assets/images/slideric1.png" alt="arrow" />
                                                <h3 className="sliderbox-imtxt">Measure</h3>
                                                <p className="sliderbox-imtxt2">Real-time emissions tracking and fleet performance monitoring</p>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="sliderbox">
                                                <img className="sliderbox-im" src="../assets/images/slideric2.png" alt="arrow" />
                                                <h3 className="sliderbox-imtxt">Report</h3>
                                                <p className="sliderbox-imtxt2">Comprehensive compliance reporting and sustainability analytics</p>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="sliderbox">
                                                <img className="sliderbox-im" src="../assets/images/slideric3.png" alt="arrow" />
                                                <h3 className="sliderbox-imtxt">Reduce</h3>
                                                <p className="sliderbox-imtxt2">Strategic emission reduction and sustainable mobility solutions</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='sliderSection'>
                                <div className='row'>
                                    <div className="col-md-6">
                                        <div className="slider-leftsection">
                                            <h1 className="mainheading">Product Carbon Footprint (PCF)</h1>
                                            <h3 className="mainheadingSub">Every product leaves a footprint; measure it to manage it.</h3>
                                            <p className="slideTxt">Enviguide is your intelligent sustainability co-pilot; a unified platform built for the automotive industry to measure, manage, and reduce emissions across your entire value chain.</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="slider-rightsection">
                                            <img className="slideim" src="../assets/images/slider1Image.png" alt="arrow" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='sliderSection'>
                                <div className='row'>
                                    <div className="col-md-6">
                                        <div className="slider-leftsection">
                                            <h1 className="mainheading">Sustainability Reporting & Consulting</h1>
                                            <h3 className="mainheadingSub">Empower Your Business with strategic Sustainability Consulting & Reporting.</h3>
                                            <p className="slideTxt">Your trusted, technology driven partner for Sustainability Reporting, Carbon Footprint Assessments and Digitalizing circularity Solutions. Build transparency. Ensure compliance. Drive real climate impact.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="slider-rightsection">
                                            <img src="../assets/images/image.png" alt="arrow" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                    </Swiper>
                </div>
            </div>

            <div className="homepage-mainsection">
                <div className="container">
                    <div>
                        {/* <h1 className="section2-Header" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">What is Enviguide?</h1> */}
                        <h1 className="section2-Header">What is Enviguide?</h1>
                        <h3 className="section2-subHeader">"Measure impact. Accelerate transformation."</h3>
                        <p className="section2-content">Enviguide is your intelligent sustainability co pilot  a unified platform designed for the automotive industry to measure, manage, and reduce emissions across your entire value chain.</p>
                    </div>
                    <img className="section2-mainimage" src="../assets/images/image.svg" alt="dashboard" />
                    <div className="row justify-content-center">
                        <div className="col-md-3">
                            <div className="section2-subsection">
                                <p className="section2subsectiontxt">Track Scope 1, 2 & 3 emissions</p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="section2-subsection">
                                <p className="section2subsectiontxt">Generate CSRD ready reports.</p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="section2-subsection">
                                <p className="section2subsectiontxt">Build traceable and transparent supply chains.</p>
                            </div>
                        </div>
                    </div>

                    <div className="section3-main">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="section3-leftsection">
                                        <h3 className="section3-mainheader" data-aos="fade-up" data-aos-duration="800" data-aos-delay="300">Why Sustainability Intelligence Matters </h3>
                                        <p className="section3-subheader">"What gets measured, gets improved."</p>
                                        <p className="section3-content">The automotive sector faces intensifying pressure from regulators, investors, and consumers to deliver on sustainability promises  but fragmented data and complex reporting make action difficult.</p>

                                        <p className="section3-content section3-content3">Enviguide brings clarity to:</p>
                                        <p className="section3-content2">Scope 3 blind spots</p>
                                        <p className="section3-content2">Product level emissions</p>
                                        <p className="section3-content2">CSRD/ ESRS, BRSR & Global Reporting Mandates</p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="section3-rightsection">
                                        <img data-aos="flip-right" data-aos-duration="800" data-aos-delay="300" className="section3-im" src="../assets/images/section3im.png" alt="Why Sustainability Intelligence Matters" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="section4-main">
                        <div className="container">
                            <div className="row column-md-reverse">
                                <div className="col-md-6 order-2 order-md-1">
                                    <div className="section4-leftsection">
                                        <img data-aos="flip-left" data-aos-duration="800" data-aos-delay="400" className="section4-im" src="../assets/images/section4.png" alt="How AI Powers Your Sustainability Journey" />
                                    </div>
                                </div>
                                <div className="col-md-6 order-1 order-md-2">
                                    <div className="section4-rightsection">
                                        <h2 className="section4-mainhead" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">How AI Powers Your Sustainability Journey</h2>
                                        <p className="section4-subhead">"Let AI simplify material mapping & linking correct emission factors." </p>
                                        <p className="section4-content">Enviguide learns from your operational and supplier data to surface instant insights, recommend next steps, and auto generate compliance documents  all tailored to your footprint.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section5-main">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-7">
                                {/* <h2 className="section5-mainheader" data-aos="fade-up" data-aos-duration="800" data-aos-delay="300">Smart Onboarding for <span> Automotive Businesses Seamless</span> Setup Flow</h2> */}
                                <h2 className="section5-mainheader" data-aos="fade-up" data-aos-duration="800" data-aos-delay="300">Smart Onboarding for <span>Automotive Businesses</span></h2>
                            </div>
                        </div>
                        <div className="section5-secondsec">
                            <img className="section5-arrow1" src="../assets/images/Union.png" alt="arrow" />
                            <img className="section5-arrow2" src="../assets/images/Union1.png" alt="arrow" />
                            <img className="section5-arrow3" src="../assets/images/Union2.png" alt="arrow" />
                            <div className="row">
                                <div className="col-md-3">
                                    <div className="section5-box">
                                        <img data-aos="zoom-in-down" data-aos-duration="800" data-aos-delay="300" className="section5-boxim1" src="../assets/images/Icon.png" alt="Sign in with business email or enterprise SSO" />
                                        <p className="section5-boxtxt">Sign in with business email or enterprise SSO</p>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="section5-box">
                                        <img className="mobileLineim" src="../assets/images/mobileline1.png" alt="line" />
                                        <img data-aos="zoom-in-down" data-aos-duration="800" data-aos-delay="300" className="section5-boxim1 section5-boxim2" src="../assets/images/Icon1.png" alt="Select key goals: CSRD, Net Zero, Scope 3" />
                                        <p className="section5-boxtxt">Select key goals: CSRD, Net Zero, Scope 3</p>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="section5-box">
                                        <img className="mobileLineim" src="../assets/images/mobileline2.png" alt="line" />
                                        <img data-aos="zoom-in-down" data-aos-duration="800" data-aos-delay="300" className="section5-boxim1 section5-boxim3" src="../assets/images/Icon2.png" alt="Upload emissions data (operational or supplier-level)" />
                                        <p className="section5-boxtxt">Upload emissions data (operational or supplier level)</p>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="section5-box">
                                        <img className="mobileLineim" src="../assets/images/mobileline3.png" alt="line" />
                                        <img data-aos="zoom-in-down" data-aos-duration="800" data-aos-delay="300" className="section5-boxim1 section5-boxim4" src="../assets/images/Icon3.png" alt="Get your personalized ESG dashboard in minutes" />
                                        <p className="section5-boxtxt">Get your personalized ESG dashboard in minutes</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>


                <div className="section6-main">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="section6-leftsection">
                                    <h2 className="section6-mainheader" data-aos="fade-up" data-aos-duration="800" data-aos-delay="30">ESG Intelligence Dashboard Your Command Center for Sustainability</h2>
                                    <div className="d-flex section6-box">
                                        <div className="flex-shrink-0">
                                            <img className="section6-boxicon" src="../assets/images/Ellipse1229.png" alt="Live Emissions Overview" />
                                        </div>
                                        <div className="flex-grow-1 ms-3">
                                            <h3 className="section6-boxhead" data-aos="fade-right" data-aos-offset="40" data-aos-easing="ease-in-sine">Live Emissions Overview</h3>
                                            <p className="section6-boxsubhead">Track Scope 1, 2, and 3 emissions across sites, fleets, and suppliers in real time.</p>
                                        </div>
                                    </div>

                                    <div className="d-flex section6-box">
                                        <div className="flex-shrink-0">
                                            <img className="section6-boxicon" src="../assets/images/Ellipse1229.png" alt="Live Emissions Overview" />
                                        </div>
                                        <div className="flex-grow-1 ms-3">
                                            <h3 className="section6-boxhead" data-aos="fade-right" data-aos-offset="40" data-aos-easing="ease-in-sine">AI Powered Recommendations</h3>
                                            <p className="section6-boxsubhead">Receive actionable suggestions to optimize emissions reduction strategies.</p>
                                        </div>
                                    </div>

                                    <div className="d-flex section6-box">
                                        <div className="flex-shrink-0">
                                            <img className="section6-boxicon" src="../assets/images/Ellipse1229.png" alt="Live Emissions Overview" />
                                        </div>
                                        <div className="flex-grow-1 ms-3">
                                            <h3 className="section6-boxhead" data-aos="fade-right" data-aos-offset="40" data-aos-easing="ease-in-sine">Automated Compliance Reporting</h3>
                                            <p className="section6-boxsubhead">Generate audit ready reports aligned with CSRD, CBAM, ESRS, BRSR, GRI and More.</p>
                                        </div>
                                    </div>

                                    <div className="d-flex section6-box">
                                        <div className="flex-shrink-0">
                                            <img className="section6-boxicon" src="../assets/images/Ellipse1229.png" alt="Live Emissions Overview" />
                                        </div>
                                        <div className="flex-grow-1 ms-3">
                                            <h3 className="section6-boxhead" data-aos="fade-right" data-aos-offset="40" data-aos-easing="ease-in-sine">Sustainability Progress Tracker</h3>
                                            <p className="section6-boxsubhead">Based on SBTi, we track your reduction milestones.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="section6-rightsection">
                                    <img data-aos="flip-right" data-aos-duration="800" data-aos-delay="300" className="section6-im" src="../assets/images/section6.png" alt="How AI Powers Your Sustainability Journey" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="section7-main">
                        <div className="row justify-content-center">
                            <div className="col-md-7">
                                <h2 className="section7-mainhead" data-aos="fade-up" data-aos-duration="800" data-aos-delay="30">Product Level Sustainability

                                </h2>
                                <h2 className="section7-mainhead">Understand Impact.</h2>
                                <h2 className="section7-mainhead">Design Better.</h2>
                            </div>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="section7-box">
                                        <img className="section7-boxim" src="../assets/images/qr.png" alt="" />
                                        <p className="section7-boximtxt" data-aos="fade-up" data-aos-duration="800" data-aos-delay="30">Quantify lifecycle emissions per product or SKU.</p>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="section7-box">
                                        <img className="section7-boxim" src="../assets/images/qr.png" alt="" />
                                        <p className="section7-boximtxt" data-aos="fade-up" data-aos-duration="800" data-aos-delay="30">Compare components & supplier emission for sustainability impact.</p>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="section7-box">
                                        <img className="section7-boxim" src="../assets/images/qr.png" alt="" />
                                        <p className="section7-boximtxt" data-aos="fade-up" data-aos-duration="800" data-aos-delay="30">Enable verified green claims and eco labeling support.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="section8-main">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-9">
                                <h2 className="section8-mainhead" data-aos="fade-up" data-aos-duration="800" data-aos-delay="30">Supply Chain Transparency Tools Drive Collaboration. Build Trust. Ensure Compliance.</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="section8-leftsection">
                                    <img className="section8-im" src="../assets/images/section8.png" alt="" data-aos="flip-right" data-aos-duration="800" data-aos-delay="300" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="section8-rightsection">
                                    <p className="section8-content" data-aos="fade-up" data-aos-duration="800" data-aos-delay="30">Supplier onboarding automations</p>
                                    <p className="section8-content" data-aos="fade-up" data-aos-duration="800" data-aos-delay="30">Scope 3 data collection workflows</p>
                                    <p className="section8-content mb-0" data-aos="fade-up" data-aos-duration="800" data-aos-delay="30">Digital Product Passports</p>
                                    <p className="section8-content" data-aos="fade-up" data-aos-duration="800" data-aos-delay="30">(EU DPP ready)</p>
                                    <p className="section8-content section8-content2" data-aos="fade-up" data-aos-duration="800" data-aos-delay="30">Geographic supplier map with compliance readiness scores</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="section9-main">
                        <div className="row justify-content-center">
                            <div className="col-md-7">
                                <h2 className="section9-mainhead section9-mainhead2" data-aos="fade-up" data-aos-duration="800" data-aos-delay="30">Resources that accelerate impact insights</h2>
                                <h2 className="section9-mainhead" data-aos="fade-up" data-aos-duration="800" data-aos-delay="30">That turn awareness into actions</h2>
                            </div>
                        </div>

                        <div className="row justify-content-center">
                            <div className="col-md-3">
                                <div className="section9-box">
                                    <img data-aos="flip-right" data-aos-duration="800" data-aos-delay="300" className="section9-boxim" src="../assets/images/section9im1.png" alt="" />
                                    <p className="section9-boximtxt">Automotive Sustainability Playbooks.</p>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="section9-box">
                                    <img data-aos="flip-right" data-aos-duration="800" data-aos-delay="300" className="section9-boxim" src="../assets/images/section9im2.png" alt="" />
                                    <p className="section9-boximtxt">Live webinars & on demand ESG strategy sessions.</p>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="section9-box">
                                    <img data-aos="flip-right" data-aos-duration="800" data-aos-delay="300" className="section9-boxim" src="../assets/images/section9im3.png" alt="" />
                                    <p className="section9-boximtxt">Tools for material mapping, PCF calculations & Digitalization.</p>
                                </div>
                            </div>
                        </div>
                        <div className="text-center">
                            <NavLink className="section9-bt" to={'/Contact-Us'}>Book A Demo</NavLink>
                        </div>
                    </div>
                </div>

                <div className="section10-main">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-10">
                                <h2 className="section10-mainhead" data-aos="fade-up" data-aos-duration="800" data-aos-delay="30">Why Automotive Leaders Trust Enviguide Purpose Built for Performance & Planet</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-3">
                                <div className="section10-box">
                                    <img data-aos="flip-right" data-aos-duration="800" data-aos-delay="300" className="section10-boxim" src="../assets/images/section10im1.png" alt="Deep industry knowledge in automotive supply chains" />
                                    <p className="section10-boximtxt" data-aos="fade-up" data-aos-duration="800" data-aos-delay="30">Deep industry knowledge in automotive supply chains.</p>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="section10-box">
                                    <img data-aos="flip-right" data-aos-duration="800" data-aos-delay="300" className="section10-boxim" src="../assets/images/section10im2.png" alt="AI-powered compliance & reduction tracking" />
                                    <p className="section10-boximtxt" data-aos="fade-up" data-aos-duration="800" data-aos-delay="30">AI powered compliance & reduction tracking.</p>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="section10-box">
                                    <img data-aos="flip-right" data-aos-duration="800" data-aos-delay="300" className="section10-boxim" src="../assets/images/section10im3.png" alt="Verified alignment with CSRD, GRI, BRSR standards" />
                                    <p className="section10-boximtxt" data-aos="fade-up" data-aos-duration="800" data-aos-delay="30">Verified alignment with CSRD, ESRS, CBAM, BRSR & GRI Standards.</p>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="section10-box">
                                    <img data-aos="flip-right" data-aos-duration="800" data-aos-delay="300" className="section10-boxim" src="../assets/images/section10im4.png" alt="Strategic advisory baked into every plan" />
                                    <p className="section10-boximtxt" data-aos="fade-up" data-aos-duration="800" data-aos-delay="30">Strategic advisory incorporated into every plan.</p>
                                </div>
                            </div>
                        </div>
                        {/* <p className="section10-content">“Enviguide turned sustainability reporting into a growth lever for our supply chain.”</p>
                        <p className="section10-content2">Head of Sustainability, Tier 1 Automotive Supplier</p> */}
                        <div className="Supported-section">
                            <p className="Supported-name">Our Partners</p>
                            <p style={{ fontFamily: 'Poppins-Regular', fontSize: '18px', color: '#000000', margin: '0px 0px 45px 0px' }}>
                                Accelerated and supported by premier global innovation and startup ecosystems in Germany and India
                            </p>
                            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '45px 65px' }}>
                                <img data-aos="fade-up" data-aos-duration="800" src="../assets/images/ZukunftGruenden.png" alt="Zukunft.Gründen"
                                    style={{ height: '88px', width: 'auto', objectFit: 'contain', backgroundColor: '#000000', padding: '10px 16px', borderRadius: '8px' }} />
                                <img data-aos="fade-up" data-aos-duration="800" data-aos-delay="100" src="../assets/images/partners/aic-thub.png" alt="Atal Incubation Center and t-hub"
                                    style={{ height: '75px', width: 'auto', maxWidth: '230px', objectFit: 'contain' }} />
                                <img data-aos="fade-up" data-aos-duration="800" data-aos-delay="200" src="../assets/images/partners/sparkle.png" alt="Sparkle - An AIC T-Hub Program"
                                    style={{ height: '62px', width: 'auto', maxWidth: '230px', objectFit: 'contain' }} />
                                <img data-aos="fade-up" data-aos-duration="800" data-aos-delay="300" src="../assets/images/partners/niti-aayog.png" alt="NITI Aayog"
                                    style={{ height: '88px', width: 'auto', maxWidth: '200px', objectFit: 'contain' }} />
                                <img data-aos="fade-up" data-aos-duration="800" data-aos-delay="400" src="../assets/images/partners/aim.jpg" alt="Atal Innovation Mission"
                                    style={{ height: '78px', width: 'auto', maxWidth: '220px', objectFit: 'contain' }} />
                                <img data-aos="fade-up" data-aos-duration="800" data-aos-delay="500" src="../assets/images/partners/g20.jpg" alt="G20 2023 India"
                                    style={{ height: '82px', width: 'auto', maxWidth: '190px', objectFit: 'contain' }} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="section11-main">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-10">
                                <h2 className="section11-mainhead" data-aos="fade-up" data-aos-duration="800" data-aos-delay="30">Ready to Make Sustainability Your Business Advantage?</h2>
                                <p className="section11-subhead" >Take the next step with intelligent ESG automation.</p>
                                <p className="section11-subhead">Book your personalized walkthrough of the Enviguide platform today.</p>
                                <div className="text-center">
                                    <NavLink className="section11-bt1" to={'/Contact-Us'}>Book a Demo</NavLink>
                                    {/* <button className="section11-bt1 section11-bt2">See Platform Capabilities</button> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {
                    isVisible && (
                        <button
                            onClick={scrollToTop}
                            // style={{
                            //     position: 'fixed',
                            //     bottom: '40px',
                            //     right: '40px',
                            //     padding: '10px 15px',
                            //     fontSize: '18px',
                            //     borderRadius: '50%',
                            //     backgroundColor: '#333',
                            //     color: '#fff',
                            //     border: 'none',
                            //     cursor: 'pointer',
                            //     zIndex: 1000,
                            // }}
                            className="taptotop"
                        >
                            <img className="top-im" src="../assets/images/top-arrow.png" alt="top" />
                        </button>
                    )
                }

            </div>
        </>
    )
}

export default Home;