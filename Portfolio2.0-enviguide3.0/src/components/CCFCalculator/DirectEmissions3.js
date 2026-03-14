import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCarbonFootprint } from '../../context/CarbonFootprintContext';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Lottie from 'lottie-react';
import windmillAnimation from '../../assets/animations/Windmills-Green.json';

const REFRIGERANT_TYPES = [
    "R-134a",
    "R-404A",
    "R-410A",
    "R-125",
    "R-32",
    "R-22",
    "CO₂",
    "Others"
];

const METRIC_OPTIONS = [
    { label: 'kg', value: 'kg' },
    { label: 'g', value: 'g' },
    { label: 'lbs', value: 'lbs' },
];

const DirectEmissions3 = () => {
    const navigate = useNavigate();
    const { carbonData, updateCarbonData } = useCarbonFootprint();
    const [usedRefrigerants, setUsedRefrigerants] = useState('');
    const [selectedRefrigerants, setSelectedRefrigerants] = useState(carbonData.selectedRefrigerants || []);
    const [refrigerantDetails, setRefrigerantDetails] = useState(carbonData.refrigerantDetails || {});

    useEffect(() => {
        window.scrollTo(0, 0);
        AOS.init();
    }, []);

    const handleToggleRefrigerant = (refrigerant) => {
        setSelectedRefrigerants(prev => {
            if (prev.includes(refrigerant)) {
                const newSelected = prev.filter(r => r !== refrigerant);
                setRefrigerantDetails(prevDetails => {
                    const updated = { ...prevDetails };
                    delete updated[refrigerant];
                    return updated;
                });
                return newSelected;
            } else {
                setRefrigerantDetails(prevDetails => ({
                    ...prevDetails,
                    [refrigerant]: { quantity: '', metric: '' }
                }));
                return [...prev, refrigerant];
            }
        });
    };

    const handleQuantityChange = (refrigerant, value) => {
        const numericValue = value.replace(/[^0-9.]/g, '');
        setRefrigerantDetails(prev => ({
            ...prev,
            [refrigerant]: { ...prev[refrigerant], quantity: numericValue }
        }));
    };

    const handleMetricChange = (refrigerant, value) => {
        setRefrigerantDetails(prev => ({
            ...prev,
            [refrigerant]: { ...prev[refrigerant], metric: value }
        }));
    };

    const handleContinue = () => {
        if (usedRefrigerants === 'Yes') {
            if (selectedRefrigerants.length === 0) {
                alert('Please select at least one refrigerant type.');
                return;
            }
            for (const refrigerant of selectedRefrigerants) {
                const details = refrigerantDetails[refrigerant];
                if (!details || !details.quantity) {
                    alert(`Please enter quantity for "${refrigerant}".`);
                    return;
                }
                if (!details.metric) {
                    alert(`Please select a metric for "${refrigerant}".`);
                    return;
                }
            }
        }
        updateCarbonData('usedRefrigerants', usedRefrigerants === 'Yes');
        updateCarbonData('selectedRefrigerants', usedRefrigerants === 'Yes' ? selectedRefrigerants : []);
        updateCarbonData('refrigerantDetails', usedRefrigerants === 'Yes' ? refrigerantDetails : {});
        navigate('/CCF-Calculator/DirectEmissions4');
    };

    const handleSkip = () => {
        navigate('/CCF-Calculator/DirectEmissions4');
    };

    const progress = (2 / 18) * 100;

    return (
        <div className="ccf-screen-container ccf-direct-emissions-container">
            <div className="ccf-direct-emissions-animation">
                <Lottie
                    animationData={windmillAnimation}
                    loop={true}
                    autoplay={true}
                    style={{ width: '100%', height: '100%', opacity: 1 }}
                />
            </div>
            <div className="ccf-progress-wrapper">
                <div className="ccf-progress-bar-container">
                    <div className="ccf-progress-bar">
                        <div className="ccf-progress-filled" style={{ width: `${progress}%` }}></div>
                    </div>
                </div>
                <span className="ccf-progress-text">2 of 18</span>
            </div>
            <div className="ccf-screen-content ccf-direct-emissions-content">
                <h2 className="ccf-question-text ccf-direct-emissions-question" data-aos="fade-up" data-aos-duration="800">
                    Have you used any refrigerants for air conditioning, refrigeration, or fire suppression systems?
                </h2>
                <div className="ccf-radio-group ccf-direct-emissions-radio-group" data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
                    {['Yes', 'No'].map((option) => (
                        <div
                            key={option}
                            className={`ccf-radio-box ccf-direct-emissions-radio-box ${usedRefrigerants === option ? 'ccf-direct-emissions-radio-box-selected' : ''}`}
                            onClick={() => setUsedRefrigerants(option)}
                        >
                            <input
                                type="radio"
                                name="refrigerants"
                                value={option}
                                checked={usedRefrigerants === option}
                                onChange={() => setUsedRefrigerants(option)}
                                className="ccf-radio-input ccf-direct-emissions-radio-input"
                            />
                            <label className="ccf-radio-label ccf-direct-emissions-radio-label">{option}</label>
                        </div>
                    ))}
                </div>
                {usedRefrigerants === 'Yes' && (
                    <div className="ccf-refrigerant-section" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
                        <h3 className="ccf-direct-emissions-question" style={{ fontSize: '20px', marginTop: '30px', marginBottom: '20px' }}>
                            Select the refrigerants used:
                        </h3>
                        <div className="ccf-direct-emissions-checkbox-group">
                            {REFRIGERANT_TYPES.map(refrigerant => (
                                <label key={refrigerant} className="ccf-direct-emissions-checkbox">
                                    <input
                                        type="checkbox"
                                        checked={selectedRefrigerants.includes(refrigerant)}
                                        onChange={() => handleToggleRefrigerant(refrigerant)}
                                        className="ccf-checkbox-input-direct"
                                    />
                                    <span className={`ccf-checkbox-custom-direct ${selectedRefrigerants.includes(refrigerant) ? 'ccf-checkbox-checked' : ''}`}>
                                        {selectedRefrigerants.includes(refrigerant) && <span className="ccf-checkmark">✓</span>}
                                    </span>
                                    <span className="ccf-checkbox-label-text-direct">{refrigerant}</span>
                                </label>
                            ))}
                        </div>
                        {selectedRefrigerants.length > 0 && (
                            <div className="ccf-fuel-details-section">
                                {selectedRefrigerants.map(refrigerant => (
                                    <div key={refrigerant} className="ccf-fuel-detail-item">
                                        <h4 className="ccf-fuel-detail-title">{refrigerant} details</h4>
                                        <div className="ccf-fuel-detail-inputs">
                                            <input
                                                type="text"
                                                className="ccf-input ccf-input-quantity-direct"
                                                placeholder="Quantity"
                                                value={refrigerantDetails[refrigerant]?.quantity || ''}
                                                onChange={(e) => handleQuantityChange(refrigerant, e.target.value)}
                                            />
                                            <select
                                                className="ccf-select ccf-select-direct"
                                                value={refrigerantDetails[refrigerant]?.metric || ''}
                                                onChange={(e) => handleMetricChange(refrigerant, e.target.value)}
                                            >
                                                <option value="">Metric</option>
                                                {METRIC_OPTIONS.map(opt => (
                                                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                )}
                <div className="ccf-button-container ccf-direct-emissions-buttons" data-aos="fade-up" data-aos-duration="800" data-aos-delay="300">
                    <button className="ccf-skip-btn ccf-skip-btn-direct" onClick={handleSkip}>
                        Skip
                    </button>
                    <button
                        className={`ccf-continue-btn ccf-continue-btn-direct ${(usedRefrigerants === 'Yes' && selectedRefrigerants.length === 0) ? 'ccf-btn-disabled' : ''}`}
                        onClick={handleContinue}
                        disabled={usedRefrigerants === 'Yes' && selectedRefrigerants.length === 0}
                    >
                        Continue
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DirectEmissions3;
