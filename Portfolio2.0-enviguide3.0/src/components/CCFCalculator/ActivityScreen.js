import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCarbonFootprint } from '../../context/CarbonFootprintContext';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Lottie from 'lottie-react';

const ActivityScreen = () => {
    const navigate = useNavigate();
    const { updateCarbonData } = useCarbonFootprint();
    const [selectedOption, setSelectedOption] = useState('');
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

    const options = [
        { label: 'Manufacturing', value: 'Manufacturing' },
        { label: 'Food Processing ', value: 'Food Processing ' },
        { label: 'Power Generation ', value: 'Power Generation ' },
        { label: 'Construction & Real-estate ', value: 'Construction & Real-estate ' },
        { label: 'Technology development & Services (IT) ', value: 'Technology development & Services (IT) ' },
        { label: 'Others', value: 'Others' },
    ];

    const handleContinue = () => {
        if (!selectedOption) {
            alert('Please select your core business activity before continuing.');
            return;
        }
        updateCarbonData('activityType', selectedOption);
        navigate('/CCF-Calculator/designation');
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
                    What is your core businesses activity?
                </h2>
                <div className="ccf-business-radio-group" data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
                    {options.map((option) => (
                        <div
                            key={option.value}
                            className={`ccf-business-radio-box ${selectedOption === option.value ? 'ccf-business-radio-box-selected' : ''}`}
                            onClick={() => setSelectedOption(option.value)}
                        >
                            <input
                                type="radio"
                                name="activity"
                                value={option.value}
                                checked={selectedOption === option.value}
                                onChange={() => setSelectedOption(option.value)}
                                className="ccf-business-radio-input"
                            />
                            <label className="ccf-business-radio-label">{option.label}</label>
                        </div>
                    ))}
                </div>
                <div className="ccf-business-button-container" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
                    <button className="ccf-business-continue-btn" onClick={handleContinue}>
                        Continue
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ActivityScreen;
