import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCarbonFootprint } from '../../context/CarbonFootprintContext';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Electricity = () => {
    const navigate = useNavigate();
    const { updateCarbonData } = useCarbonFootprint();
    const [kwh, setKwh] = useState('');

    useEffect(() => {
        window.scrollTo(0, 0);
        AOS.init();
    }, []);

    const handleNumericInput = (text) => {
        if (/^\d*\.?\d*$/.test(text)) {
            setKwh(text);
        }
    };

    const handleContinue = () => {
        if (!kwh || isNaN(parseFloat(kwh)) || parseFloat(kwh) <= 0) {
            alert('Please enter a valid electricity consumption in kWh.');
            return;
        }
        updateCarbonData('electricityConsumption', parseFloat(kwh));
        navigate('/CCF-Calculator/electricity2');
    };

    const handleSkip = () => {
        navigate('/CCF-Calculator/electricity2');
    };

    return (
        <div className="ccf-individual-screen-container">
            <div className="ccf-individual-progress-bar-container">
                <div className="ccf-individual-progress-bar"></div>
            </div>
            <div className="ccf-individual-screen-content">
                <h2 className="ccf-individual-question-text" data-aos="fade-up" data-aos-duration="800">
                    What is your annual electricity consumption in kWh?
                </h2>
                <input
                    type="text"
                    className="ccf-individual-input"
                    placeholder="Enter kWh"
                    value={kwh}
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

export default Electricity;
