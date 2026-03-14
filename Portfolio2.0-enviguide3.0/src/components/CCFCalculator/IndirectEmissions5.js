import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCarbonFootprint } from '../../context/CarbonFootprintContext';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Lottie from 'lottie-react';
import cityAnimation from '../../assets/animations/Wind-turbines-solar-panels.json';

const METRIC_OPTIONS = [
    { label: 'KWh', value: 'KWh' },
    { label: 'MWh', value: 'MWh' },
];

const IndirectEmissions5 = () => {
    const navigate = useNavigate();
    const { updateCarbonData } = useCarbonFootprint();
    const [hasRenewable, setHasRenewable] = useState('');
    const [quantity, setQuantity] = useState('');
    const [metric, setMetric] = useState('');

    useEffect(() => {
        window.scrollTo(0, 0);
        AOS.init();
    }, []);

    const handleNumericInput = (text, setter) => {
        if (text === '' || /^\d*\.?\d*$/.test(text)) {
            setter(text);
        }
    };

    const handleContinue = () => {
        if (hasRenewable === 'Yes') {
            if (!quantity.trim()) {
                alert('Please enter the quantity for self-generated renewable energy.');
                return;
            }
            if (!metric) {
                alert('Please select a metric for self-generated renewable energy.');
                return;
            }
        }
        updateCarbonData('capacityForRenewable', hasRenewable === 'Yes' ? parseFloat(quantity) : 0);
        updateCarbonData('metricForRenewable', hasRenewable === 'Yes' ? metric : '');
        navigate('/CCF-Calculator/IndirectEmissions6');
    };

    const handleSkip = () => {
        navigate('/CCF-Calculator/IndirectEmissions6');
    };

    const progress = (8 / 18) * 100;

    return (
        <div className="ccf-screen-container ccf-direct-emissions-container">
            <div className="ccf-direct-emissions-animation" style={{ opacity: 1, paddingTop: '200px' }}>
                <Lottie
                    animationData={cityAnimation}
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
                <span className="ccf-progress-text">8 of 18</span>
            </div>
            <div className="ccf-screen-content ccf-direct-emissions-content">
                <h2 className="ccf-question-text ccf-direct-emissions-question" data-aos="fade-up" data-aos-duration="800">
                    Does your company have consumption of self-generated non-fuel renewable energy?
                </h2>
                <div className="ccf-radio-group ccf-direct-emissions-radio-group" data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
                    {['Yes', 'No'].map((option) => (
                        <div
                            key={option}
                            className={`ccf-radio-box ccf-direct-emissions-radio-box ${hasRenewable === option ? 'ccf-direct-emissions-radio-box-selected' : ''}`}
                            onClick={() => setHasRenewable(option)}
                        >
                            <input
                                type="radio"
                                name="hasRenewable"
                                value={option}
                                checked={hasRenewable === option}
                                onChange={() => setHasRenewable(option)}
                                className="ccf-radio-input ccf-direct-emissions-radio-input"
                            />
                            <label className="ccf-radio-label ccf-direct-emissions-radio-label">{option}</label>
                        </div>
                    ))}
                </div>
                {hasRenewable === 'Yes' && (
                    <div className="ccf-refrigerant-section" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
                        <h3 className="ccf-direct-emissions-question" style={{ fontSize: '20px', marginTop: '20px', marginBottom: '10px' }}>
                            Please write the consumption of self-generated non-fuel renewable energy.
                        </h3>
                        <input
                            type="text"
                            className="ccf-input ccf-input-quantity-direct"
                            placeholder="Quantity"
                            value={quantity}
                            onChange={(e) => handleNumericInput(e.target.value, setQuantity)}
                            style={{ width: '40%', marginBottom: '20px' }}
                        />
                        <select
                            className="ccf-select ccf-select-direct"
                            value={metric}
                            onChange={(e) => setMetric(e.target.value)}
                            style={{ width: '40%', marginBottom: '20px' }}
                        >
                            <option value="">metric</option>
                            {METRIC_OPTIONS.map(opt => (
                                <option key={opt.value} value={opt.value}>{opt.label}</option>
                            ))}
                        </select>
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

export default IndirectEmissions5;
