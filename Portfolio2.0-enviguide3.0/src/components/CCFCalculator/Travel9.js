import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCarbonFootprint } from '../../context/CarbonFootprintContext';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Travel9 = () => {
    const navigate = useNavigate();
    const { updateCarbonData } = useCarbonFootprint();
    const [diesel, setDiesel] = useState('');

    useEffect(() => {
        window.scrollTo(0, 0);
        AOS.init();
    }, []);

    const handleNumericInput = (text) => {
        if (/^\d*\.?\d*$/.test(text)) {
            setDiesel(text);
        }
    };

    const handleContinue = () => {
        if (!diesel || isNaN(parseFloat(diesel)) || parseFloat(diesel) <= 0) {
            alert('Please enter a valid diesel consumption in liters.');
            return;
        }
        updateCarbonData('Diesel', parseFloat(diesel));
        navigate('/CCF-Calculator/meal');
    };

    const handleSkip = () => {
        navigate('/CCF-Calculator/meal');
    };

    return (
        <div className="ccf-individual-screen-container">
            <div className="ccf-individual-progress-bar-container">
                <div className="ccf-individual-progress-bar"></div>
            </div>
            <div className="ccf-individual-screen-content">
                <h2 className="ccf-individual-question-text" data-aos="fade-up" data-aos-duration="800">
                    Approximate liters of diesel consumed in a year?
                </h2>
                <input
                    type="text"
                    className="ccf-individual-input"
                    placeholder="in liters"
                    value={diesel}
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

export default Travel9;
