import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCarbonFootprint } from '../../context/CarbonFootprintContext';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Lottie from 'lottie-react';
import shippingAnimation from '../../assets/animations/cold-chain-logistics.json';

const Others4 = () => {
    const navigate = useNavigate();
    const { updateCarbonData } = useCarbonFootprint();
    const [trackEmissions, setTrackEmissions] = useState('');
    const [estimatedEmissions, setEstimatedEmissions] = useState('');
    const [needsHelp, setNeedsHelp] = useState('');
    const [helpText, setHelpText] = useState('');

    useEffect(() => {
        window.scrollTo(0, 0);
        AOS.init();
    }, []);

    const handleNumericInput = (text) => {
        if (text === '' || /^\d*\.?\d*$/.test(text)) {
            setEstimatedEmissions(text);
        }
    };

    const handleContinue = () => {
        updateCarbonData('trackEmissionsTransportation', trackEmissions === 'Yes');
        updateCarbonData('estimatedEmissionsTransportation', trackEmissions === 'Yes' ? parseFloat(estimatedEmissions) || 0 : 0);
        updateCarbonData('needsHelpToCalculate', needsHelp === 'Yes');
        updateCarbonData('supplyChainHelpText', needsHelp === 'Yes' ? helpText : '');
        navigate('/CCF-Calculator/others5');
    };

    const handleSkip = () => {
        navigate('/CCF-Calculator/others5');
    };

    const progress = (11 / 18) * 100;

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
                <span className="ccf-progress-text">11 of 18</span>
            </div>
            <div className="ccf-screen-content ccf-direct-emissions-content">
                <h2 className="ccf-question-text ccf-direct-emissions-question" data-aos="fade-up" data-aos-duration="800">
                    Do you track emissions from transporting raw materials to your facilities?
                </h2>
                <div className="ccf-radio-group ccf-direct-emissions-radio-group" data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
                    {['Yes', 'No'].map((option) => (
                        <div
                            key={option}
                            className={`ccf-radio-box ccf-direct-emissions-radio-box ${trackEmissions === option ? 'ccf-direct-emissions-radio-box-selected' : ''}`}
                            onClick={() => setTrackEmissions(option)}
                        >
                            <input
                                type="radio"
                                name="trackEmissions"
                                value={option}
                                checked={trackEmissions === option}
                                onChange={() => setTrackEmissions(option)}
                                className="ccf-radio-input ccf-direct-emissions-radio-input"
                            />
                            <label className="ccf-radio-label ccf-direct-emissions-radio-label">{option}</label>
                        </div>
                    ))}
                </div>
                {trackEmissions === 'Yes' && (
                    <div className="ccf-refrigerant-section" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
                        <h3 className="ccf-direct-emissions-question" style={{ fontSize: '20px', marginTop: '20px', marginBottom: '10px' }}>
                            Please provide the estimated CO₂ emissions?
                        </h3>
                        <input
                            type="text"
                            className="ccf-input ccf-input-quantity-direct"
                            placeholder="in Metric tonnes CO₂e"
                            value={estimatedEmissions}
                            onChange={(e) => handleNumericInput(e.target.value)}
                            style={{ width: '40%', marginBottom: '20px' }}
                        />
                        <h3 className="ccf-direct-emissions-question" style={{ fontSize: '20px', marginTop: '20px', marginBottom: '10px' }}>
                            Do you need our team help to calculate your supply chain emissions?
                        </h3>
                        <div className="ccf-radio-group ccf-direct-emissions-radio-group">
                            {['Yes', 'No'].map((option) => (
                                <div
                                    key={option}
                                    className={`ccf-radio-box ccf-direct-emissions-radio-box ${needsHelp === option ? 'ccf-direct-emissions-radio-box-selected' : ''}`}
                                    onClick={() => setNeedsHelp(option)}
                                >
                                    <input
                                        type="radio"
                                        name="needsHelp"
                                        value={option}
                                        checked={needsHelp === option}
                                        onChange={() => setNeedsHelp(option)}
                                        className="ccf-radio-input ccf-direct-emissions-radio-input"
                                    />
                                    <label className="ccf-radio-label ccf-direct-emissions-radio-label">{option}</label>
                                </div>
                            ))}
                        </div>
                        {needsHelp === 'Yes' && (
                            <div>
                                <h3 className="ccf-direct-emissions-question" style={{ fontSize: '20px', marginTop: '20px', marginBottom: '10px' }}>
                                    Please specify or explain your requirement below:
                                </h3>
                                <textarea
                                    className="ccf-input ccf-input-quantity-direct"
                                    placeholder="Your text goes here..."
                                    value={helpText}
                                    onChange={(e) => {
                                        if (e.target.value.length <= 500) {
                                            setHelpText(e.target.value);
                                        }
                                    }}
                                    rows="8"
                                    style={{ width: '100%', maxWidth: '600px', marginBottom: '10px', padding: '15px', minHeight: '150px' }}
                                />
                                <p className="ccf-char-count" style={{ fontSize: '14px', color: '#666' }}>{helpText.length}/500 characters</p>
                            </div>
                        )}
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

export default Others4;
