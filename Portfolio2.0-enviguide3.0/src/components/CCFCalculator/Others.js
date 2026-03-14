import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCarbonFootprint } from '../../context/CarbonFootprintContext';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Lottie from 'lottie-react';
import shippingAnimation from '../../assets/animations/cold-chain-logistics.json';

const TRANSPORT_OPTIONS = [
    { label: 'Road (Truck)', value: 'Road (Truck)' },
    { label: 'Rail', value: 'Rail' },
    { label: 'Air Freight', value: 'Air Freight' },
    { label: 'Sea Freight', value: 'Sea Freight' },
    { label: 'Inland Waterways', value: 'Inland Waterways' },
];

const Others = () => {
    const navigate = useNavigate();
    const { carbonData, updateCarbonData } = useCarbonFootprint();
    const [selectedOptions, setSelectedOptions] = useState(carbonData.keyTransportation || []);

    useEffect(() => {
        window.scrollTo(0, 0);
        AOS.init();
    }, []);

    const handleToggleOption = (value) => {
        setSelectedOptions(prev =>
            prev.includes(value)
                ? prev.filter(v => v !== value)
                : [...prev, value]
        );
    };

    const handleContinue = () => {
        if (selectedOptions.length === 0) {
            alert('Please select at least one transportation mode.');
            return;
        }
        updateCarbonData('keyTransportation', selectedOptions);
        navigate('/CCF-Calculator/others4');
    };

    const handleSkip = () => {
        navigate('/CCF-Calculator/others4');
    };

    const progress = (10 / 18) * 100;

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
                <span className="ccf-progress-text">10 of 18</span>
            </div>
            <div className="ccf-screen-content ccf-direct-emissions-content">
                <h2 className="ccf-question-text ccf-direct-emissions-question" data-aos="fade-up" data-aos-duration="800">
                    What are the key transportation modes used in your supply chain?
                </h2>
                <div className="ccf-direct-emissions-checkbox-group" data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
                    {TRANSPORT_OPTIONS.map(option => (
                        <label key={option.value} className="ccf-direct-emissions-checkbox">
                            <input
                                type="checkbox"
                                checked={selectedOptions.includes(option.value)}
                                onChange={() => handleToggleOption(option.value)}
                                className="ccf-checkbox-input-direct"
                            />
                            <span className={`ccf-checkbox-custom-direct ${selectedOptions.includes(option.value) ? 'ccf-checkbox-checked' : ''}`}>
                                {selectedOptions.includes(option.value) && <span className="ccf-checkmark">✓</span>}
                            </span>
                            <span className="ccf-checkbox-label-text-direct">{option.label}</span>
                        </label>
                    ))}
                </div>
                <div className="ccf-button-container ccf-direct-emissions-buttons" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
                    <button className="ccf-skip-btn ccf-skip-btn-direct" onClick={handleSkip}>
                        Skip
                    </button>
                    <button
                        className={`ccf-continue-btn ccf-continue-btn-direct ${selectedOptions.length === 0 ? 'ccf-btn-disabled' : ''}`}
                        onClick={handleContinue}
                        disabled={selectedOptions.length === 0}
                    >
                        Continue
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Others;
