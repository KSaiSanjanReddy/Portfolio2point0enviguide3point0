import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCarbonFootprint } from '../../context/CarbonFootprintContext';
import { calculateIndividualCarbonFootprint } from '../../utils/indiCFCalculator';
import AOS from 'aos';
import 'aos/dist/aos.css';

const IndividualResults = () => {
    const navigate = useNavigate();
    const { carbonData, resetCarbonData } = useCarbonFootprint();

    useEffect(() => {
        window.scrollTo(0, 0);
        AOS.init();
    }, []);

    const { total, electricity, fuel, travel, meal } = calculateIndividualCarbonFootprint(carbonData);

    const getBadgeText = () => {
        if (total < 5) return 'Low';
        if (total >= 5 && total <= 10) return 'Moderate';
        return 'High';
    };

    const getCurrentDate = () => {
        const date = new Date();
        const options = { 
            year: 'numeric', 
            month: 'short', 
            day: '2-digit' 
        };
        return date.toLocaleDateString('en-US', options);
    };

    const handleContinue = () => {
        if (resetCarbonData) {
            resetCarbonData();
        }
        navigate('/CCF-Calculator');
    };

    return (
        <div className="ccf-individual-results-container">
            <div className="ccf-individual-results-content">
                <div className="ccf-results-badge" data-aos="fade-up" data-aos-duration="800">
                    {getBadgeText()}
                </div>

                <p className="ccf-results-subtitle" data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
                    Your calculated carbon footprint
                </p>

                <h1 className="ccf-results-heading" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
                    {total.toFixed(2)}
                </h1>

                <p className="ccf-results-unit" data-aos="fade-up" data-aos-duration="800" data-aos-delay="250">
                    tonnes CO2e
                </p>

                <p className="ccf-results-date" data-aos="fade-up" data-aos-duration="800" data-aos-delay="300">
                    Last Calculated On: {getCurrentDate()}
                </p>

                <div className="ccf-results-breakdown" data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">
                    <div className="ccf-breakdown-card">
                        <h3 className="ccf-breakdown-title">Electricity</h3>
                        <p className="ccf-breakdown-value">{electricity.toFixed(3)} tonnes CO₂e</p>
                    </div>
                    <div className="ccf-breakdown-card">
                        <h3 className="ccf-breakdown-title">Fuel</h3>
                        <p className="ccf-breakdown-value">{fuel.toFixed(3)} tonnes CO₂e</p>
                    </div>
                    <div className="ccf-breakdown-card">
                        <h3 className="ccf-breakdown-title">Travel</h3>
                        <p className="ccf-breakdown-value">{travel.toFixed(3)} tonnes CO₂e</p>
                    </div>
                    <div className="ccf-breakdown-card">
                        <h3 className="ccf-breakdown-title">Meal</h3>
                        <p className="ccf-breakdown-value">{meal.toFixed(3)} tonnes CO₂e</p>
                    </div>
                </div>

                <button className="ccf-results-button" onClick={handleContinue} data-aos="fade-up" data-aos-duration="800" data-aos-delay="500">
                    Calculate
                </button>
            </div>
        </div>
    );
};

export default IndividualResults;
