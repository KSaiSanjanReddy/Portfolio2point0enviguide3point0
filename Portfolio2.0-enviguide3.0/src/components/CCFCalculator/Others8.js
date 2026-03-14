import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCarbonFootprint } from '../../context/CarbonFootprintContext';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Lottie from 'lottie-react';
import shippingAnimation from '../../assets/animations/cold-chain-logistics.json';

const Others8 = () => {
    const navigate = useNavigate();
    const { updateCarbonData } = useCarbonFootprint();
    const [usesPlastics, setUsesPlastics] = useState('');
    const [recyclePercentage, setRecyclePercentage] = useState('');

    useEffect(() => {
        window.scrollTo(0, 0);
        AOS.init();
    }, []);

    const handleNumericInput = (text) => {
        if (text === '' || /^\d*\.?\d*$/.test(text)) {
            setRecyclePercentage(text);
        }
    };

    const handleContinue = () => {
        if (usesPlastics === 'Yes') {
            if (!recyclePercentage.trim()) {
                alert('Please enter the percentage of recycled plastics.');
                return;
            }
            const percentage = parseFloat(recyclePercentage);
            if (isNaN(percentage) || percentage < 0 || percentage > 100) {
                alert('Please enter a percentage between 0 and 100.');
                return;
            }
        }
        updateCarbonData('usesRecycledPlastics', usesPlastics === 'Yes');
        updateCarbonData('recyclePercentage', usesPlastics === 'Yes' ? parseFloat(recyclePercentage) || 0 : 0);
        navigate('/CCF-Calculator/others9');
    };

    const handleSkip = () => {
        navigate('/CCF-Calculator/others9');
    };

    const progress = (14 / 18) * 100;

    return (
        <div className="ccf-screen-container ccf-direct-emissions-container">
            <div className="ccf-direct-emissions-animation" style={{ opacity: 1, paddingTop: '200px' }}>
                <Lottie
                    animationData={shippingAnimation}
                    loop={true}
                    autoplay={true}
                    style={{ width: '100%', height: '100%' }}
                />
            </div>
            <div className="ccf-progress-wrapper">
                <div className="ccf-progress-bar-container">
                    <div className="ccf-progress-bar">
                        <div className="ccf-progress-filled" style={{ width: `${progress}%` }}></div>
                    </div>
                </div>
                <span className="ccf-progress-text">14 of 18</span>
            </div>
            <div className="ccf-screen-content ccf-direct-emissions-content">
                <h2 className="ccf-question-text ccf-direct-emissions-question" data-aos="fade-up" data-aos-duration="800">
                    Does your company have consumption of recycled plastics (thermoplastic, filler and fiber) used in your products?
                </h2>
                <div className="ccf-radio-group ccf-direct-emissions-radio-group" data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
                    {['Yes', 'No'].map((option) => (
                        <div
                            key={option}
                            className={`ccf-radio-box ccf-direct-emissions-radio-box ${usesPlastics === option ? 'ccf-direct-emissions-radio-box-selected' : ''}`}
                            onClick={() => setUsesPlastics(option)}
                        >
                            <input
                                type="radio"
                                name="usesPlastics"
                                value={option}
                                checked={usesPlastics === option}
                                onChange={() => setUsesPlastics(option)}
                                className="ccf-radio-input ccf-direct-emissions-radio-input"
                            />
                            <label className="ccf-radio-label ccf-direct-emissions-radio-label">{option}</label>
                        </div>
                    ))}
                </div>
                {usesPlastics === 'Yes' && (
                    <div className="ccf-refrigerant-section" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
                        <h3 className="ccf-direct-emissions-question" style={{ fontSize: '20px', marginTop: '20px', marginBottom: '10px' }}>
                            Please write the percentage of total recycled plastics content used into your production process?
                        </h3>
                        <input
                            type="text"
                            className="ccf-input ccf-input-quantity-direct"
                            placeholder="Percentage (%)"
                            value={recyclePercentage}
                            onChange={(e) => handleNumericInput(e.target.value)}
                            style={{ width: '40%', marginBottom: '20px' }}
                        />
                    </div>
                )}
                <div className="ccf-button-container ccf-direct-emissions-buttons" data-aos="fade-up" data-aos-duration="800" data-aos-delay="300">
                    <button className="ccf-skip-btn ccf-skip-btn-direct" onClick={handleSkip}>
                        Skip
                    </button>
                    <button className="ccf-continue-btn ccf-continue-btn-direct" onClick={handleContinue}>
                        Continue
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Others8;
