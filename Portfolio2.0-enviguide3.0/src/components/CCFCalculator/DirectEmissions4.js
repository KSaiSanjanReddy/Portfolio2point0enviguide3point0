import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCarbonFootprint } from '../../context/CarbonFootprintContext';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Lottie from 'lottie-react';
import windmillAnimation from '../../assets/animations/Windmills-Green.json';

const GHG_TYPES = [
    "Carbon dioxide (CO₂)",
    "Methane (CH₄)",
    "Water vapor (H₂O)",
    "Perfluorocarbons (PFCs)",
    "Sulfur hexafluoride (SF₆)",
    "Hydrofluorocarbons (HFCs)",
    "Nitrous oxide (N₂O)",
    "Others"
];

const METRIC_OPTIONS = [
    { label: 'kg', value: 'kg' },
    { label: 'g', value: 'g' },
    { label: 'lbs', value: 'lbs' },
];

const DirectEmissions4 = () => {
    const navigate = useNavigate();
    const { carbonData, updateCarbonData } = useCarbonFootprint();
    const [ghgEmission, setGhgEmission] = useState('');
    const [GHGtype, setGHGtype] = useState(carbonData.GHGtype || []);
    const [GHGdetails, setGHGDetails] = useState(carbonData.GHGdetails || {});

    useEffect(() => {
        window.scrollTo(0, 0);
        AOS.init();
    }, []);

    const handleToggleGHG = (GHG) => {
        setGHGtype(prev => {
            if (prev.includes(GHG)) {
                const newSelected = prev.filter(g => g !== GHG);
                setGHGDetails(prevDetails => {
                    const updated = { ...prevDetails };
                    delete updated[GHG];
                    return updated;
                });
                return newSelected;
            } else {
                setGHGDetails(prevDetails => ({
                    ...prevDetails,
                    [GHG]: { quantity: '', metric: '' }
                }));
                return [...prev, GHG];
            }
        });
    };

    const handleQuantityChange = (GHG, value) => {
        const numericValue = value.replace(/[^0-9.]/g, '');
        setGHGDetails(prev => ({
            ...prev,
            [GHG]: { ...prev[GHG], quantity: numericValue }
        }));
    };

    const handleMetricChange = (GHG, value) => {
        setGHGDetails(prev => ({
            ...prev,
            [GHG]: { ...prev[GHG], metric: value }
        }));
    };

    const handleContinue = () => {
        if (ghgEmission === 'Yes') {
            if (GHGtype.length === 0) {
                alert('Please select at least one GHG type.');
                return;
            }
            for (const gas of GHGtype) {
                const details = GHGdetails[gas];
                if (!details || !details.quantity) {
                    alert(`Please enter quantity for "${gas}".`);
                    return;
                }
                if (!details.metric) {
                    alert(`Please select a metric for "${gas}".`);
                    return;
                }
            }
        }
        updateCarbonData('ghgEmission', ghgEmission === 'Yes');
        updateCarbonData('GHGtype', ghgEmission === 'Yes' ? GHGtype : []);
        updateCarbonData('GHGdetails', ghgEmission === 'Yes' ? GHGdetails : {});
        navigate('/CCF-Calculator/IndirectEmissions');
    };

    const handleSkip = () => {
        navigate('/CCF-Calculator/IndirectEmissions');
    };

    const progress = (3 / 18) * 100;

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
                <span className="ccf-progress-text">3 of 18</span>
            </div>
            <div className="ccf-screen-content ccf-direct-emissions-content">
                <h2 className="ccf-question-text ccf-direct-emissions-question" data-aos="fade-up" data-aos-duration="800">
                    Are there emissions from industrial processes?
                </h2>
                <div className="ccf-radio-group ccf-direct-emissions-radio-group" data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
                    {['Yes', 'No'].map((option) => (
                        <div
                            key={option}
                            className={`ccf-radio-box ccf-direct-emissions-radio-box ${ghgEmission === option ? 'ccf-direct-emissions-radio-box-selected' : ''}`}
                            onClick={() => setGhgEmission(option)}
                        >
                            <input
                                type="radio"
                                name="ghgEmission"
                                value={option}
                                checked={ghgEmission === option}
                                onChange={() => setGhgEmission(option)}
                                className="ccf-radio-input ccf-direct-emissions-radio-input"
                            />
                            <label className="ccf-radio-label ccf-direct-emissions-radio-label">{option}</label>
                        </div>
                    ))}
                </div>
                {ghgEmission === 'Yes' && (
                    <div className="ccf-refrigerant-section" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
                        <h3 className="ccf-direct-emissions-question" style={{ fontSize: '20px', marginTop: '30px', marginBottom: '20px' }}>
                            What are the types of gasses and quantity emitted?
                        </h3>
                        <div className="ccf-direct-emissions-checkbox-group">
                            {GHG_TYPES.map(GHG => (
                                <label key={GHG} className="ccf-direct-emissions-checkbox">
                                    <input
                                        type="checkbox"
                                        checked={GHGtype.includes(GHG)}
                                        onChange={() => handleToggleGHG(GHG)}
                                        className="ccf-checkbox-input-direct"
                                    />
                                    <span className={`ccf-checkbox-custom-direct ${GHGtype.includes(GHG) ? 'ccf-checkbox-checked' : ''}`}>
                                        {GHGtype.includes(GHG) && <span className="ccf-checkmark">✓</span>}
                                    </span>
                                    <span className="ccf-checkbox-label-text-direct">{GHG}</span>
                                </label>
                            ))}
                        </div>
                        {GHGtype.length > 0 && (
                            <div className="ccf-fuel-details-section">
                                {GHGtype.map(GHG => (
                                    <div key={GHG} className="ccf-fuel-detail-item">
                                        <h4 className="ccf-fuel-detail-title">{GHG} details</h4>
                                        <div className="ccf-fuel-detail-inputs">
                                            <input
                                                type="text"
                                                className="ccf-input ccf-input-quantity-direct"
                                                placeholder="Quantity"
                                                value={GHGdetails[GHG]?.quantity || ''}
                                                onChange={(e) => handleQuantityChange(GHG, e.target.value)}
                                            />
                                            <select
                                                className="ccf-select ccf-select-direct"
                                                value={GHGdetails[GHG]?.metric || ''}
                                                onChange={(e) => handleMetricChange(GHG, e.target.value)}
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
                        className={`ccf-continue-btn ccf-continue-btn-direct ${(ghgEmission === 'Yes' && GHGtype.length === 0) ? 'ccf-btn-disabled' : ''}`}
                        onClick={handleContinue}
                        disabled={ghgEmission === 'Yes' && GHGtype.length === 0}
                    >
                        Continue
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DirectEmissions4;
