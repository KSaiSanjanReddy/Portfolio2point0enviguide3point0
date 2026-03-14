import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCarbonFootprint } from '../../context/CarbonFootprintContext';
import AOS from 'aos';
import 'aos/dist/aos.css';

const FuelScreen = () => {
    const navigate = useNavigate();
    const { updateCarbonData } = useCarbonFootprint();
    const [fuelAmount, setFuelAmount] = useState('');

    useEffect(() => {
        window.scrollTo(0, 0);
        AOS.init();
    }, []);

    const handleNumericInput = (text) => {
        if (/^\d*\.?\d*$/.test(text)) {
            setFuelAmount(text);
        }
    };

    const handleContinue = () => {
        if (fuelAmount) {
            updateCarbonData('fuelAmount', parseFloat(fuelAmount));
        }
        // For demo purposes, navigate directly to results
        // In full implementation, this would go through more screens
        navigate('/CCF-Calculator/results');
    };

    const handleSkip = () => {
        navigate('/CCF-Calculator/results');
    };

    return (
        <div className="ccf-screen-container">
            <div className="ccf-screen-content">
                <h2 className="ccf-question-text" data-aos="fade-up" data-aos-duration="800">
                    What's the total LPG/CNG consumption per year?
                </h2>
                <input
                    type="number"
                    className="ccf-input"
                    placeholder="in kg"
                    value={fuelAmount}
                    onChange={(e) => handleNumericInput(e.target.value)}
                    onKeyPress={(e) => {
                        if (e.key === 'Enter') {
                            handleContinue();
                        }
                    }}
                    data-aos="fade-up" data-aos-duration="800" data-aos-delay="100"
                />
                <div className="ccf-button-container" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
                    <button className="ccf-skip-btn" onClick={handleSkip}>
                        Skip
                    </button>
                    <button className="ccf-continue-btn" onClick={handleContinue}>
                        Continue
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FuelScreen;
