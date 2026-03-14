import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Lottie from 'lottie-react';
import shippingAnimation from '../../assets/animations/cold-chain-logistics.json';

const AvoidedEmissions = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
        AOS.init();
    }, []);

    const [text, setText] = useState('');

    useEffect(() => {
        window.scrollTo(0, 0);
        AOS.init();
    }, []);

    const handleContinue = () => {
        if (text.length > 500) {
            alert('Text exceeds the 500-character limit.');
            return;
        }
        navigate('/CCF-Calculator/Avoided2');
    };

    const handleSkip = () => {
        navigate('/CCF-Calculator/Avoided2');
    };

    const progress = (16 / 18) * 100;

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
                <span className="ccf-progress-text">16 of 18</span>
            </div>
            <div className="ccf-screen-content ccf-direct-emissions-content">
                <h2 className="ccf-question-text ccf-direct-emissions-question" data-aos="fade-up" data-aos-duration="800">
                    Does your company produce any products or services that help reduce emissions for your customers? Can you estimate the emissions avoided by using your product?
                </h2>
                <div className="ccf-refrigerant-section" data-aos="fade-up" data-aos-duration="800" data-aos-delay="100" style={{ width: '100%', maxWidth: '600px' }}>
                    <textarea
                        className="ccf-input ccf-input-quantity-direct"
                        placeholder="Your text goes here..."
                        value={text}
                        onChange={(e) => {
                            if (e.target.value.length <= 500) {
                                setText(e.target.value);
                            }
                        }}
                        rows="8"
                        style={{ width: '100%', marginBottom: '10px', padding: '15px', minHeight: '150px' }}
                    />
                    <p className="ccf-char-count" style={{ fontSize: '14px', color: '#666' }}>{text.length}/500 characters</p>
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

export default AvoidedEmissions;
