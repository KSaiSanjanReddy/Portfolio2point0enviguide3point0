import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCarbonFootprint } from '../../context/CarbonFootprintContext';
import { calculateCorporateCarbonFootprint } from '../../utils/coorpCFCalculator';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ResultsScreen = () => {
    const navigate = useNavigate();
    const { carbonData, resetCarbonData } = useCarbonFootprint();

    useEffect(() => {
        window.scrollTo(0, 0);
        AOS.init();
    }, []);

    const { scope1, scope2, scope3, total } = calculateCorporateCarbonFootprint(carbonData);

    const handleContinue = () => {
        if (resetCarbonData) {
            resetCarbonData();
        }
        navigate('/CCF-Calculator');
    };

    return (
        <div className="ccf-results-container">
            <div className="ccf-results-content">
                <h1 className="ccf-results-title" data-aos="fade-up" data-aos-duration="800">
                    Emission Summary
                </h1>

                <div className="ccf-scopes-container" data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
                    <div className="ccf-scope-card">
                        <h3 className="ccf-scope-title">Direct Emissions</h3>
                        <p className="ccf-scope-value">{(scope1 * 1000).toFixed(3)} kg CO₂e</p>
                        <p className="ccf-scope-subvalue">{scope1.toFixed(6)} tonnes CO₂e</p>
                    </div>

                    <div className="ccf-scope-card">
                        <h3 className="ccf-scope-title">Indirect Emissions</h3>
                        <p className="ccf-scope-value">{(scope2 * 1000).toFixed(3)} kg CO₂e</p>
                        <p className="ccf-scope-subvalue">{scope2.toFixed(6)} tonnes CO₂e</p>
                    </div>

                    <div className="ccf-scope-card ccf-scope-card-full">
                        <h3 className="ccf-scope-title">Other Indirect Emissions</h3>
                        <p className="ccf-scope-value">{(scope3 * 1000).toFixed(3)} kg CO₂e</p>
                        <p className="ccf-scope-subvalue">{scope3.toFixed(6)} tonnes CO₂e</p>
                    </div>
                </div>

                <div className="ccf-total-container" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
                    <h2 className="ccf-total-title">Total Carbon Footprint</h2>
                    <p className="ccf-total-value">{total.toFixed(2)}</p>
                    <p className="ccf-total-unit">tonnes CO₂e</p>
                    <p className="ccf-date-text">
                        Last Calculated On: {new Date().toLocaleDateString()}
                    </p>
                </div>

                <div className="ccf-button-container" data-aos="fade-up" data-aos-duration="800" data-aos-delay="300">
                    <button className="ccf-continue-btn" onClick={handleContinue}>
                        Continue
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ResultsScreen;
