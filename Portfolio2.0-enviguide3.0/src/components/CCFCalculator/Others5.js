import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCarbonFootprint } from '../../context/CarbonFootprintContext';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Lottie from 'lottie-react';
import shippingAnimation from '../../assets/animations/cold-chain-logistics.json';

const COMMUTE_OPTIONS = [
    { label: 'Personal Car', value: 'Car' },
    { label: 'Carpooling', value: 'Carpooling' },
    { label: 'Public Transport', value: 'Public Transport' },
    { label: 'Cycling', value: 'Cycling' },
    { label: 'Walking', value: 'Walking' },
    { label: 'Electric Vehicles', value: 'Electric Vehicles' },
];

const Others5 = () => {
    const navigate = useNavigate();
    const { carbonData, updateCarbonData } = useCarbonFootprint();
    const [selectedOptions, setSelectedOptions] = useState(carbonData.primaryCommute || []);
    const [commuteDetails, setCommuteDetails] = useState(carbonData.commuteDetails || {});

    useEffect(() => {
        window.scrollTo(0, 0);
        AOS.init();
        
        const newDetails = { ...commuteDetails };
        selectedOptions.forEach(option => {
            if (!newDetails[option]) {
                newDetails[option] = { employees: '', distance: '' };
            }
        });
        Object.keys(newDetails).forEach(option => {
            if (!selectedOptions.includes(option)) {
                delete newDetails[option];
            }
        });
        setCommuteDetails(newDetails);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleToggleOption = (value) => {
        setSelectedOptions(prev =>
            prev.includes(value)
                ? prev.filter(v => v !== value)
                : [...prev, value]
        );
    };

    const handleDetailChange = (option, field, value) => {
        const numericValue = value.replace(/[^0-9]/g, '');
        setCommuteDetails(prev => ({
            ...prev,
            [option]: { ...prev[option], [field]: numericValue }
        }));
    };

    const handleContinue = () => {
        if (selectedOptions.length === 0) {
            alert('Please select at least one commute option.');
            return;
        }
        for (const option of selectedOptions) {
            const details = commuteDetails[option];
            if (!details || !details.employees) {
                alert(`Please enter the number of employees for "${option}".`);
                return;
            }
            if (!details.distance) {
                alert(`Please enter the average distance for "${option}".`);
                return;
            }
        }
        updateCarbonData('primaryCommute', selectedOptions);
        updateCarbonData('commuteDetails', commuteDetails);
        navigate('/CCF-Calculator/others6');
    };

    const handleSkip = () => {
        navigate('/CCF-Calculator/others6');
    };

    const progress = (12 / 18) * 100;

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
                <span className="ccf-progress-text">12 of 18</span>
            </div>
            <div className="ccf-screen-content ccf-direct-emissions-content">
                <h2 className="ccf-question-text ccf-direct-emissions-question" data-aos="fade-up" data-aos-duration="800">
                    How do employees primarily commute to work?
                </h2>
                <div className="ccf-direct-emissions-checkbox-group" data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
                    {COMMUTE_OPTIONS.map(option => (
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
                {selectedOptions.length > 0 && (
                    <div className="ccf-fuel-details-section" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
                        {selectedOptions.map(option => (
                            <div key={option} className="ccf-fuel-detail-item">
                                <h4 className="ccf-fuel-detail-title">{option}</h4>
                                <div className="ccf-fuel-detail-inputs">
                                    <input
                                        type="text"
                                        className="ccf-input ccf-input-quantity-direct"
                                        placeholder="No. of employees"
                                        value={commuteDetails[option]?.employees || ''}
                                        onChange={(e) => handleDetailChange(option, 'employees', e.target.value)}
                                    />
                                    <input
                                        type="text"
                                        className="ccf-input ccf-input-quantity-direct"
                                        placeholder="Average distance (km)"
                                        value={commuteDetails[option]?.distance || ''}
                                        onChange={(e) => handleDetailChange(option, 'distance', e.target.value)}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                )}
                <div className="ccf-button-container ccf-direct-emissions-buttons" data-aos="fade-up" data-aos-duration="800" data-aos-delay="300">
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

export default Others5;
