import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCarbonFootprint } from '../../context/CarbonFootprintContext';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Lottie from 'lottie-react';
import windmillAnimation from '../../assets/animations/Windmills-Green.json';

const FUEL_TYPES = [
    "Motor Gasoline/Petrol",
    "On-Road Diesel Fuel",
    "Residual Fuel Oil",
    "Liquefied Petroleum Gases (LPG)",
    "Compressed Natural Gas (CNG)",
    "Aviation Gasoline",
    "Motor Gasoline",
    "Diesel Fuel",
    "Residual Fuel Oil²",
    "Liquefied Natural Gas (LNG)",
    "E85 Ethanol/Gasoline",
    "Natural gas (100% mineral blend)",
    "B20 Biodiesel/Diesel",
];

const METRIC_OPTIONS = [
    { label: 'Litres', value: 'litres' },
    { label: 'm³', value: 'm3' },
    { label: 'kg', value: 'kg' },
    { label: 'Gallons', value: 'gallons' },
];

const DirectEmissions = () => {
    const navigate = useNavigate();
    const { carbonData, updateCarbonData } = useCarbonFootprint();
    const [selectedFuels, setSelectedFuels] = useState(carbonData.selectedFuelTypes || []);
    const [fuelDetails, setFuelDetails] = useState(carbonData.fuelDetails || {});

    useEffect(() => {
        window.scrollTo(0, 0);
        AOS.init();
        
        // Initialize fuelDetails for selected fuels
        const updated = { ...fuelDetails };
        selectedFuels.forEach(fuel => {
            if (!updated[fuel]) {
                updated[fuel] = { quantity: '', metric: '' };
            }
        });
        Object.keys(updated).forEach(fuel => {
            if (!selectedFuels.includes(fuel)) {
                delete updated[fuel];
            }
        });
        setFuelDetails(updated);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleToggleFuel = (fuel) => {
        setSelectedFuels(prev => {
            if (prev.includes(fuel)) {
                const newSelected = prev.filter(f => f !== fuel);
                setFuelDetails(prevDetails => {
                    const updated = { ...prevDetails };
                    delete updated[fuel];
                    return updated;
                });
                return newSelected;
            } else {
                setFuelDetails(prevDetails => ({
                    ...prevDetails,
                    [fuel]: { quantity: '', metric: '' }
                }));
                return [...prev, fuel];
            }
        });
    };

    const handleQuantityChange = (fuel, value) => {
        const numericValue = value.replace(/[^0-9.]/g, '');
        setFuelDetails(prev => ({
            ...prev,
            [fuel]: { ...prev[fuel], quantity: numericValue }
        }));
    };

    const handleMetricChange = (fuel, value) => {
        setFuelDetails(prev => ({
            ...prev,
            [fuel]: { ...prev[fuel], metric: value }
        }));
    };

    const handleContinue = () => {
        if (selectedFuels.length === 0) {
            alert('Please select at least one fuel type.');
            return;
        }
        for (const fuel of selectedFuels) {
            const details = fuelDetails[fuel];
            if (!details || !details.quantity) {
                alert(`Please enter quantity for "${fuel}".`);
                return;
            }
            if (!details.metric) {
                alert(`Please select a metric for "${fuel}".`);
                return;
            }
        }
        updateCarbonData('selectedFuelTypes', selectedFuels);
        updateCarbonData('fuelDetails', fuelDetails);
        navigate('/CCF-Calculator/DirectEmissions3');
    };

    const handleSkip = () => {
        navigate('/CCF-Calculator/DirectEmissions3');
    };

    const progress = (1 / 18) * 100;

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
                <span className="ccf-progress-text">1 of 18</span>
            </div>
            <div className="ccf-screen-content ccf-direct-emissions-content">
                <h2 className="ccf-question-text ccf-direct-emissions-question" data-aos="fade-up" data-aos-duration="800">
                    What type of fuels does your company use for energy generation?
                </h2>
                <div className="ccf-checkbox-group ccf-direct-emissions-checkbox-group" data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
                    {FUEL_TYPES.map(fuel => (
                        <label key={fuel} className="ccf-checkbox-item ccf-direct-emissions-checkbox">
                            <input
                                type="checkbox"
                                checked={selectedFuels.includes(fuel)}
                                onChange={() => handleToggleFuel(fuel)}
                                className="ccf-checkbox-input-direct"
                            />
                            <span className={`ccf-checkbox-custom-direct ${selectedFuels.includes(fuel) ? 'ccf-checkbox-checked' : ''}`}>
                                {selectedFuels.includes(fuel) && <span className="ccf-checkmark">✓</span>}
                            </span>
                            <span className="ccf-checkbox-label-text-direct">{fuel}</span>
                        </label>
                    ))}
                </div>
                {selectedFuels.length > 0 && (
                    <div className="ccf-fuel-details-section" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
                        {selectedFuels.map(fuel => (
                            <div key={fuel} className="ccf-fuel-detail-item">
                                <h4 className="ccf-fuel-detail-title">{fuel}</h4>
                                <div className="ccf-fuel-detail-inputs">
                                    <input
                                        type="text"
                                        className="ccf-input ccf-input-quantity-direct"
                                        placeholder="Quantity"
                                        value={fuelDetails[fuel]?.quantity || ''}
                                        onChange={(e) => handleQuantityChange(fuel, e.target.value)}
                                    />
                                    <select
                                        className="ccf-select ccf-select-direct"
                                        value={fuelDetails[fuel]?.metric || ''}
                                        onChange={(e) => handleMetricChange(fuel, e.target.value)}
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
                <div className="ccf-button-container ccf-direct-emissions-buttons" data-aos="fade-up" data-aos-duration="800" data-aos-delay="300">
                    <button className="ccf-skip-btn ccf-skip-btn-direct" onClick={handleSkip}>
                        Skip
                    </button>
                    <button
                        className={`ccf-continue-btn ccf-continue-btn-direct ${selectedFuels.length === 0 ? 'ccf-btn-disabled' : ''}`}
                        onClick={handleContinue}
                        disabled={selectedFuels.length === 0}
                    >
                        Continue
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DirectEmissions;
