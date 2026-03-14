import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCarbonFootprint } from '../../context/CarbonFootprintContext';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Lottie from 'lottie-react';

const RevenueScreen = () => {
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
        { label: '$ 1  Million or less ', value: 1000000 },
        { label: '$ 1  Million to $ 2 Million', value: 1800000 },
        { label: '$ 2 Million to $ 3 Million', value: 2800000 },
        { label: '$ 3 Million to $ 4 Million', value: 3800000 },
        { label: '$ 4 Million to $ 5 Million', value: 4800000 },
        { label: '$ 5 Million or more', value: 5000000 },
        { label: 'Prefer not to say', value: 0 },
    ];

    const handleContinue = () => {
        if (!selectedOption) {
            alert('Please select your organization\'s annual revenue before continuing.');
            return;
        }
        updateCarbonData('revenue', Number(selectedOption));
        navigate('/CCF-Calculator/report');
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
                    What is your organization's annual revenue?
                </h2>
                <div className="ccf-business-radio-group" data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
                    {options.map((option) => (
                        <div
                            key={option.value}
                            className={`ccf-business-radio-box ${selectedOption === String(option.value) ? 'ccf-business-radio-box-selected' : ''}`}
                            onClick={() => setSelectedOption(String(option.value))}
                        >
                            <input
                                type="radio"
                                name="revenue"
                                value={option.value}
                                checked={selectedOption === String(option.value)}
                                onChange={() => setSelectedOption(String(option.value))}
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

export default RevenueScreen;
