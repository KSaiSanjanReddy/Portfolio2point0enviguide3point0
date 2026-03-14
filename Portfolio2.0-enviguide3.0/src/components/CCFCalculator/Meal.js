import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCarbonFootprint } from '../../context/CarbonFootprintContext';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Meal = () => {
    const navigate = useNavigate();
    const { updateCarbonData } = useCarbonFootprint();
    const [selectedOption, setSelectedOption] = useState('');

    useEffect(() => {
        window.scrollTo(0, 0);
        AOS.init();
    }, []);

    const options = [
        { label: 'Vegan', value: 'vegan' },
        { label: 'Vegetarian', value: 'vegetarian' },
        { label: 'Non-Vegetarian (Mostly)', value: 'non-veg-mostly' },
        { label: 'Non-Vegetarian (Sometimes)', value: 'non-veg-sometimes' },
        { label: 'Non-Vegetarian (Rarely)', value: 'non-veg-rarely' },
    ];

    const handleContinue = () => {
        if (selectedOption) {
            updateCarbonData('mealPreference', selectedOption);
        }
        navigate('/CCF-Calculator/individual-results');
    };

    const handleSkip = () => {
        navigate('/CCF-Calculator/individual-results');
    };

    return (
        <div className="ccf-individual-screen-container">
            <div className="ccf-individual-progress-bar-container">
                <div className="ccf-individual-progress-bar"></div>
            </div>
            <div className="ccf-individual-screen-content">
                <h2 className="ccf-individual-question-text" data-aos="fade-up" data-aos-duration="800">
                    What's your meal preference for the year?
                </h2>
                <div className="ccf-individual-radio-group" data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
                    {options.map((option) => (
                        <div
                            key={option.value}
                            className={`ccf-individual-radio-box ${selectedOption === option.value ? 'ccf-individual-radio-box-selected' : ''}`}
                            onClick={() => setSelectedOption(option.value)}
                        >
                            <input
                                type="radio"
                                name="meal"
                                value={option.value}
                                checked={selectedOption === option.value}
                                onChange={() => setSelectedOption(option.value)}
                                className="ccf-individual-radio-input"
                            />
                            <label className="ccf-individual-radio-label">{option.label}</label>
                        </div>
                    ))}
                </div>
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

export default Meal;
