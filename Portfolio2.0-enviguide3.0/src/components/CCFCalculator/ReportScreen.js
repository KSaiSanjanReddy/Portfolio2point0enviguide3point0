import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCarbonFootprint } from '../../context/CarbonFootprintContext';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Lottie from 'lottie-react';

const ReportScreen = () => {
    const navigate = useNavigate();
    const { updateCarbonData } = useCarbonFootprint();
    const [reportingPrd, setReportingPrd] = useState('');
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
        if (!reportingPrd.trim()) {
            alert('Please enter the organizational annual reporting period before continuing.');
            return;
        }
        updateCarbonData('reportingPeriod', reportingPrd);
        navigate('/CCF-Calculator/eligibility');
    };

    const handleNumericInput = (text) => {
        const numeric = text.replace(/[^0-9]/g, '').slice(0, 4);
        setReportingPrd(numeric);
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
                    Please enter the organizational annual reporting period?
                </h2>
                <input
                    type="text"
                    className="ccf-business-input"
                    placeholder="Number"
                    value={reportingPrd}
                    onChange={(e) => handleNumericInput(e.target.value)}
                    onKeyPress={(e) => {
                        if (e.key === 'Enter') {
                            handleContinue();
                        }
                    }}
                    maxLength={4}
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

export default ReportScreen;
