import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const LandingPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
        AOS.init();
    }, []);

    return (
        <div className="ccf-landing-page">
            <div className="ccf-landing-container">
                <h1 className="ccf-landing-title" data-aos="fade-up" data-aos-duration="800">
                    Let's Calculate Your Carbon Footprint
                </h1>
                <p className="ccf-landing-subtitle" data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
                    Answer a few simple questions about your lifestyle and activities to see your impact on the environment. It only takes a few minutes to get insights and start making a difference!
                </p>
                <div className="ccf-landing-buttons" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
                    <button
                        className="ccf-landing-btn ccf-landing-btn-individual"
                        onClick={() => navigate('/CCF-Calculator/modules')}
                    >
                        I'm an Individual
                    </button>
                    <button
                        className="ccf-landing-btn ccf-landing-btn-business"
                        onClick={() => navigate('/CCF-Calculator/name')}
                    >
                        for Businesses
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
