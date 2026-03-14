import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const EligibilityScreen = () => {
    const navigate = useNavigate();
    const [acknowledged, setAcknowledged] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
        AOS.init();
    }, []);

    const handleContinue = () => {
        if (!acknowledged) {
            alert('Please acknowledge that you have read and understood the eligible technologies.');
            return;
        }
        navigate('/CCF-Calculator/procurement');
    };

    return (
        <div className="ccf-business-screen-container">
            <div className="ccf-business-content-container" style={{ maxWidth: '90%', paddingTop: '50px' }}>
                <h2 className="ccf-business-question-text" data-aos="fade-up" data-aos-duration="800">
                    Please read following eligible technologies to be considered as renewable electricity (RE) and acknowledge them.
                </h2>
                <div className="ccf-business-info-section" data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
                    <p className="ccf-business-info-text" style={{ textAlign: 'left', marginBottom: '15px', whiteSpace: 'pre-line' }}>
                        a. Wind{'\n'}
                        b. Hydro{'\n'}
                        c. Solar power{'\n'}
                        d. Geothermal{'\n'}
                        e. Solid, liquid, and gaseous forms of Biomass from the fuels (woody waste, land fill gas, wastewater methane, animal & other organic waste, energy crops){'\n'}
                        f. Ocean-based energy resources captured through tidal and wave technologies.
                    </p>
                    <h3 className="ccf-business-question-text" style={{ fontSize: '20px', marginTop: '30px', marginBottom: '15px' }}>
                        Excluded technologies:
                    </h3>
                    <p className="ccf-business-info-text" style={{ textAlign: 'left', whiteSpace: 'pre-line' }}>
                        a. Electricity from nuclear power is not regarded as renewable electricity.{'\n'}
                        b. Electricity from waste combustion is not regarded as renewable electricity.
                    </p>
                </div>
                <div className="ccf-business-checkbox-container" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
                    <label className="ccf-business-checkbox-label">
                        <input
                            type="checkbox"
                            checked={acknowledged}
                            onChange={(e) => setAcknowledged(e.target.checked)}
                            className="ccf-business-checkbox-input"
                        />
                        <span className="ccf-business-checkbox-text">
                            I acknowledge that I have read and understood the Eligible technologies consider as renewable electricity (RE) mentioned above
                        </span>
                    </label>
                </div>
                <div className="ccf-business-button-container" data-aos="fade-up" data-aos-duration="800" data-aos-delay="300">
                    <button
                        className={`ccf-business-continue-btn ${!acknowledged ? 'ccf-btn-disabled' : ''}`}
                        onClick={handleContinue}
                        disabled={!acknowledged}
                    >
                        Continue
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EligibilityScreen;
