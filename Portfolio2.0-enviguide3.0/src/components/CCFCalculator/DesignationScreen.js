import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCarbonFootprint } from '../../context/CarbonFootprintContext';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Lottie from 'lottie-react';

const DesignationScreen = () => {
    const navigate = useNavigate();
    const { updateCarbonData } = useCarbonFootprint();
    const [designation, setDesignation] = useState('');
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
        if (!designation.trim()) {
            alert('Please enter your Designation before continuing.');
            return;
        }
        updateCarbonData('Designation', designation);
        navigate('/CCF-Calculator/email');
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
                            width: 400,
                            height: 200,
                            opacity: 1
                        }}
                    />
                </div>
            )}
            <div className="ccf-business-content-container">
                <h2 className="ccf-business-question-text" data-aos="fade-up" data-aos-duration="800">
                    Please enter your Designation
                </h2>
                <input
                    type="text"
                    className="ccf-business-input"
                    placeholder="Designation"
                    value={designation}
                    onChange={(e) => setDesignation(e.target.value)}
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

export default DesignationScreen;
