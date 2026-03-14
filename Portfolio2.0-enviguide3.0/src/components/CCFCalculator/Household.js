import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCarbonFootprint } from '../../context/CarbonFootprintContext';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Household = () => {
    const navigate = useNavigate();
    const { updateCarbonData } = useCarbonFootprint();
    const [count, setCount] = useState(0);

    useEffect(() => {
        window.scrollTo(0, 0);
        AOS.init();
    }, []);

    const increment = () => {
        if (count < 6) {
            setCount(count + 1);
        }
    };

    const decrement = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };

    const handleContinue = () => {
        updateCarbonData('numOfMembers', count);
        navigate('/CCF-Calculator/electricity');
    };

    const handleSkip = () => {
        navigate('/CCF-Calculator/electricity');
    };

    return (
        <div className="ccf-individual-screen-container">
            <div className="ccf-individual-progress-bar-container">
                <div className="ccf-individual-progress-bar"></div>
            </div>
            <div className="ccf-individual-screen-content">
                <h2 className="ccf-individual-question-text" data-aos="fade-up" data-aos-duration="800">
                    How many people live in your household?
                </h2>
                
                <div className="ccf-counter-container" data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
                    <button className="ccf-circle-button" onClick={decrement}>
                        <span className="ccf-button-icon">−</span>
                    </button>
                    <span className="ccf-count-text">{count}</span>
                    <button className="ccf-circle-button" onClick={increment}>
                        <span className="ccf-button-icon">+</span>
                    </button>
                </div>

                <div className="ccf-individual-button-container" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
                    <button className="ccf-individual-skip-btn" onClick={handleSkip}>
                        Skip
                    </button>
                    <button className="ccf-individual-continue-btn" onClick={handleContinue}>
                        Continue
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Household;
