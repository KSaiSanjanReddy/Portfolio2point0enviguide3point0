import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCarbonFootprint } from '../../context/CarbonFootprintContext';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Lottie from 'lottie-react';
import cityAnimation from '../../assets/animations/Wind-turbines-solar-panels.json';

const IndirectEmissions6 = () => {
    const navigate = useNavigate();
    const { updateCarbonData } = useCarbonFootprint();
    const [hasCertificate, setHasCertificate] = useState('');
    const [certificateName, setCertificateName] = useState('');
    const [procurementMechanism, setProcurementMechanism] = useState('');
    const [serialId, setSerialId] = useState('');
    const [generatorId, setGeneratorId] = useState('');
    const [generatorName, setGeneratorName] = useState('');
    const [generatorLocation, setGeneratorLocation] = useState('');
    const [generationDate, setGenerationDate] = useState('');
    const [issuanceDate, setIssuanceDate] = useState('');

    useEffect(() => {
        window.scrollTo(0, 0);
        AOS.init();
    }, []);

    const handleContinue = () => {
        if (hasCertificate === 'Yes') {
            if (!certificateName.trim()) {
                alert('Please enter the certificate name.');
                return;
            }
            if (!procurementMechanism.trim()) {
                alert('Please enter the procurement mechanism.');
                return;
            }
            if (!serialId.trim()) {
                alert('Please enter the Serial ID.');
                return;
            }
            if (!generatorId.trim()) {
                alert('Please enter the Generator ID.');
                return;
            }
            if (!generatorName.trim()) {
                alert('Please enter the Generator Name.');
                return;
            }
            if (!generatorLocation.trim()) {
                alert('Please enter the Generator Location.');
                return;
            }
            if (!generationDate.trim()) {
                alert('Please enter the Date of Generation.');
                return;
            }
            if (!issuanceDate.trim()) {
                alert('Please enter the Issuance Date.');
                return;
            }
        }
        updateCarbonData('hasCertificate', hasCertificate === 'Yes');
        updateCarbonData('certificateName', certificateName);
        updateCarbonData('procurementMechanism', procurementMechanism);
        updateCarbonData('serialId', serialId);
        updateCarbonData('generatorId', generatorId);
        updateCarbonData('generatorName', generatorName);
        updateCarbonData('generatorLocation', generatorLocation);
        updateCarbonData('generationDate', generationDate);
        updateCarbonData('issuanceDate', issuanceDate);
        navigate('/CCF-Calculator/others');
    };

    const handleSkip = () => {
        navigate('/CCF-Calculator/others');
    };

    const progress = (9 / 18) * 100;

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
                <span className="ccf-progress-text">9 of 18</span>
            </div>
            <div className="ccf-screen-content ccf-direct-emissions-content">
                <h2 className="ccf-question-text ccf-direct-emissions-question" data-aos="fade-up" data-aos-duration="800">
                    Do you acquire any standardized certificate related to RE?
                </h2>
                <div className="ccf-radio-group ccf-direct-emissions-radio-group" data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
                    {['Yes', 'No'].map((option) => (
                        <div
                            key={option}
                            className={`ccf-radio-box ccf-direct-emissions-radio-box ${hasCertificate === option ? 'ccf-direct-emissions-radio-box-selected' : ''}`}
                            onClick={() => setHasCertificate(option)}
                        >
                            <input
                                type="radio"
                                name="hasCertificate"
                                value={option}
                                checked={hasCertificate === option}
                                onChange={() => setHasCertificate(option)}
                                className="ccf-radio-input ccf-direct-emissions-radio-input"
                            />
                            <label className="ccf-radio-label ccf-direct-emissions-radio-label">{option}</label>
                        </div>
                    ))}
                </div>
                {hasCertificate === 'Yes' && (
                    <div className="ccf-refrigerant-section" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200" style={{ width: '100%', maxWidth: '600px' }}>
                        <h3 className="ccf-direct-emissions-question" style={{ fontSize: '20px', marginTop: '20px', marginBottom: '10px' }}>
                            Provide the details of standardized Certificate below:
                        </h3>
                        <input
                            type="text"
                            className="ccf-input ccf-input-quantity-direct"
                            placeholder="Name of the certificate"
                            value={certificateName}
                            onChange={(e) => setCertificateName(e.target.value)}
                            style={{ width: '100%', marginBottom: '15px' }}
                        />
                        <input
                            type="text"
                            className="ccf-input ccf-input-quantity-direct"
                            placeholder="RE Procurement mechanism"
                            value={procurementMechanism}
                            onChange={(e) => setProcurementMechanism(e.target.value)}
                            style={{ width: '100%', marginBottom: '15px' }}
                        />
                        <input
                            type="text"
                            className="ccf-input ccf-input-quantity-direct"
                            placeholder="Serial Identity (ID)"
                            value={serialId}
                            onChange={(e) => setSerialId(e.target.value)}
                            style={{ width: '100%', marginBottom: '15px' }}
                        />
                        <input
                            type="text"
                            className="ccf-input ccf-input-quantity-direct"
                            placeholder="Generator ID"
                            value={generatorId}
                            onChange={(e) => setGeneratorId(e.target.value)}
                            style={{ width: '100%', marginBottom: '15px' }}
                        />
                        <input
                            type="text"
                            className="ccf-input ccf-input-quantity-direct"
                            placeholder="Generator Name"
                            value={generatorName}
                            onChange={(e) => setGeneratorName(e.target.value)}
                            style={{ width: '100%', marginBottom: '15px' }}
                        />
                        <input
                            type="text"
                            className="ccf-input ccf-input-quantity-direct"
                            placeholder="Generator Location"
                            value={generatorLocation}
                            onChange={(e) => setGeneratorLocation(e.target.value)}
                            style={{ width: '100%', marginBottom: '15px' }}
                        />
                        <input
                            type="text"
                            className="ccf-input ccf-input-quantity-direct"
                            placeholder="Date of Generation"
                            value={generationDate}
                            onChange={(e) => setGenerationDate(e.target.value)}
                            style={{ width: '100%', marginBottom: '15px' }}
                        />
                        <input
                            type="text"
                            className="ccf-input ccf-input-quantity-direct"
                            placeholder="Issuance Date"
                            value={issuanceDate}
                            onChange={(e) => setIssuanceDate(e.target.value)}
                            style={{ width: '100%', marginBottom: '15px' }}
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

export default IndirectEmissions6;
