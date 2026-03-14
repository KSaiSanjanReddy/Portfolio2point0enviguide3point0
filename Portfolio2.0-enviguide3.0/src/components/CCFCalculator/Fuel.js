import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCarbonFootprint } from '../../context/CarbonFootprintContext';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Fuel = () => {
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
        navigate('/CCF-Calculator/fuel2');
    };

    const handleSkip = () => {
        navigate('/CCF-Calculator/fuel2');
    };

    return (
        <div className="ccf-individual-screen-container">
            <div className="ccf-individual-progress-bar-container">
                <div className="ccf-individual-progress-bar"></div>
            </div>
            <div className="ccf-individual-screen-content">
                <h2 className="ccf-individual-question-text" data-aos="fade-up" data-aos-duration="800">
                    What's the total LPG/CNG consumption per year?
                </h2>
                <input
                    type="text"
                    className="ccf-individual-input"
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

export default Fuel;
