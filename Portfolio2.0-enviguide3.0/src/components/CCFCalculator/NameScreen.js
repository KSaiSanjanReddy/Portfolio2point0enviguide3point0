import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCarbonFootprint } from '../../context/CarbonFootprintContext';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Lottie from 'lottie-react';

const NameScreen = () => {
    const navigate = useNavigate();
    const { updateCarbonData } = useCarbonFootprint();
    const [organizationName, setOrganizationName] = useState('');
    const [windyAnimation, setWindyAnimation] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
        AOS.init();
        // Load animation dynamically
        fetch('/assets/animations/Weather-windy.json')
            .then(res => res.json())
            .then(data => setWindyAnimation(data))
            .catch(err => console.log('Animation load error:', err));
    }, []);

    const handleContinue = () => {
        if (!organizationName.trim()) {
            alert('Please enter the name of your organization before continuing.');
            return;
        }
        updateCarbonData('nameOfOrg', organizationName);
        navigate('/CCF-Calculator/activity');
    };

    return (
        <div className="ccf-business-screen-container">
            {windyAnimation && (
                <div className="ccf-business-background-animation">
                    <Lottie
                        animationData={windyAnimation}
                        loop
                        autoplay
                        style={{
                            width: Math.min(window.innerWidth * 0.8, 400),
                            height: Math.min(window.innerHeight * 0.3, 200),
                            opacity: 1
                        }}
                    />
                </div>
            )}
            <div className="ccf-business-content-container">
                <h2 className="ccf-business-question-text" data-aos="fade-up" data-aos-duration="800">
                    What is the name of your organization?
                </h2>
                <input
                    type="text"
                    className="ccf-business-input"
                    placeholder="Organization Name"
                    value={organizationName}
                    onChange={(e) => setOrganizationName(e.target.value)}
                    onKeyPress={(e) => {
                        if (e.key === 'Enter') {
                            handleContinue();
                        }
                    }}
                    data-aos="fade-up" data-aos-duration="800" data-aos-delay="100"
                />
                <div className="ccf-business-button-container" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
                    <button className="ccf-business-continue-btn" onClick={handleContinue}>
                        Continue
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NameScreen;
