import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCarbonFootprint } from '../../context/CarbonFootprintContext';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Lottie from 'lottie-react';
import shippingAnimation from '../../assets/animations/cold-chain-logistics.json';

const Others6 = () => {
    const navigate = useNavigate();
    const { updateCarbonData } = useCarbonFootprint();
    const [flightsDist, setFlightsDist] = useState('');
    const [trainsDist, setTrainsDist] = useState('');
    const [carsDist, setCarsDist] = useState('');
    const [cruiseShipsDist, setCruiseShipsDist] = useState('');

    useEffect(() => {
        window.scrollTo(0, 0);
        AOS.init();
    }, []);

    const handleNumericInput = (text, setter) => {
        if (/^\d*\.?\d*$/.test(text)) {
            setter(text);
        }
    };

    const handleContinue = () => {
        const businessTravelData = {
            flights: parseFloat(flightsDist) || 0,
            trains: parseFloat(trainsDist) || 0,
            cars: parseFloat(carsDist) || 0,
            cruiseShips: parseFloat(cruiseShipsDist) || 0,
        };
        updateCarbonData('businessTravel', businessTravelData);
        navigate('/CCF-Calculator/others8');
    };

    const handleSkip = () => {
        navigate('/CCF-Calculator/others8');
    };

    const progress = (13 / 18) * 100;

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
                <span className="ccf-progress-text">13 of 18</span>
            </div>
            <div className="ccf-screen-content ccf-direct-emissions-content">
                <h2 className="ccf-question-text ccf-direct-emissions-question" data-aos="fade-up" data-aos-duration="800">
                    What is the total distance (in km) covered by your company's business travel in the past year?
                </h2>
                <div className="ccf-refrigerant-section" data-aos="fade-up" data-aos-duration="800" data-aos-delay="100" style={{ width: '100%', maxWidth: '600px' }}>
                    <input
                        type="text"
                        className="ccf-input ccf-input-quantity-direct"
                        placeholder="by Flights (km)"
                        value={flightsDist}
                        onChange={(e) => handleNumericInput(e.target.value, setFlightsDist)}
                        style={{ width: '100%', marginBottom: '15px' }}
                    />
                    <input
                        type="text"
                        className="ccf-input ccf-input-quantity-direct"
                        placeholder="by Trains (km)"
                        value={trainsDist}
                        onChange={(e) => handleNumericInput(e.target.value, setTrainsDist)}
                        style={{ width: '100%', marginBottom: '15px' }}
                    />
                    <input
                        type="text"
                        className="ccf-input ccf-input-quantity-direct"
                        placeholder="by Cars (km)"
                        value={carsDist}
                        onChange={(e) => handleNumericInput(e.target.value, setCarsDist)}
                        style={{ width: '100%', marginBottom: '15px' }}
                    />
                    <input
                        type="text"
                        className="ccf-input ccf-input-quantity-direct"
                        placeholder="by Cruise Ships (km)"
                        value={cruiseShipsDist}
                        onChange={(e) => handleNumericInput(e.target.value, setCruiseShipsDist)}
                        style={{ width: '100%', marginBottom: '15px' }}
                    />
                </div>
                <div className="ccf-button-container ccf-direct-emissions-buttons" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
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

export default Others6;
