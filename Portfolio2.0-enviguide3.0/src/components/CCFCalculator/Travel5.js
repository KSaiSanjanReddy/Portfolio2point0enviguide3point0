import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCarbonFootprint } from '../../context/CarbonFootprintContext';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Travel5 = () => {
    const navigate = useNavigate();
    const { updateCarbonData } = useCarbonFootprint();
    const [cabTravel, setCabTravel] = useState('');

    useEffect(() => {
        window.scrollTo(0, 0);
        AOS.init();
    }, []);

    const handleNumericInput = (text) => {
        if (/^\d*\.?\d*$/.test(text)) {
            setCabTravel(text);
        }
    };

    const handleContinue = () => {
        if (!cabTravel || isNaN(parseFloat(cabTravel)) || parseFloat(cabTravel) <= 0) {
            alert('Please enter a valid taxi travel distance in kms.');
            return;
        }
        updateCarbonData('cabTravel', parseFloat(cabTravel));
        navigate('/CCF-Calculator/travel6');
    };

    const handleSkip = () => {
        navigate('/CCF-Calculator/travel6');
    };

    return (
        <div className="ccf-individual-screen-container">
            <div className="ccf-individual-progress-bar-container">
                <div className="ccf-individual-progress-bar"></div>
            </div>
            <div className="ccf-individual-screen-content">
                <h2 className="ccf-individual-question-text" data-aos="fade-up" data-aos-duration="800">
                    Approximate distance traveled via cab/taxi in a year?
                </h2>
                <input
                    type="text"
                    className="ccf-individual-input"
                    placeholder="in kms"
                    value={cabTravel}
                    onChange={(e) => handleNumericInput(e.target.value)}
                    onKeyPress={(e) => {
                        if (e.key === 'Enter') {
                            handleContinue();
                        }
                    }}
                    data-aos="fade-up" data-aos-duration="800" data-aos-delay="100"
                />
                <div className="ccf-individual-button-container" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
                    <button className="ccf-individual-skip-btn" onClick={handleSkip}>
                        Skip
                    </button>
                    <button className="ccf-individual-continue-btn" onClick={handleContinue}>
                        Continue
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Travel5;
