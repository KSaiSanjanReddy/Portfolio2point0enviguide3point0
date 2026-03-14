import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCarbonFootprint } from '../../context/CarbonFootprintContext';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Electricity2 = () => {
    const navigate = useNavigate();
    const { updateCarbonData } = useCarbonFootprint();
    const [renewablePercentage, setRenewablePercentage] = useState('');

    useEffect(() => {
        window.scrollTo(0, 0);
        AOS.init();
    }, []);

    const handleNumericInput = (text) => {
        if (/^\d*\.?\d*$/.test(text)) {
            const numericValue = parseFloat(text);
            if (text === '' || (numericValue >= 0 && numericValue <= 100)) {
                setRenewablePercentage(text);
            }
        }
    };

    const handleContinue = () => {
        if (
            !renewablePercentage ||
            isNaN(parseFloat(renewablePercentage)) ||
            parseFloat(renewablePercentage) < 0 ||
            parseFloat(renewablePercentage) > 100
        ) {
            alert('Please enter a valid percentage between 0 and 100.');
            return;
        }
        updateCarbonData('renewableElectricity', parseFloat(renewablePercentage));
        navigate('/CCF-Calculator/fuel');
    };

    const handleSkip = () => {
        navigate('/CCF-Calculator/fuel');
    };

    return (
        <div className="ccf-individual-screen-container">
            <div className="ccf-individual-progress-bar-container">
                <div className="ccf-individual-progress-bar"></div>
            </div>
            <div className="ccf-individual-screen-content">
                <h2 className="ccf-individual-question-text" data-aos="fade-up" data-aos-duration="800">
                    What percentage of your electricity consumption is from renewable sources like rooftop solar?
                </h2>
                <input
                    type="text"
                    className="ccf-individual-input"
                    placeholder="in %"
                    value={renewablePercentage}
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

export default Electricity2;
