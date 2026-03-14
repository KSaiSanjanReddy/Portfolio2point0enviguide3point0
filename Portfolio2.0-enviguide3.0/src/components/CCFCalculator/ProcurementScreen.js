import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ProcurementScreen = () => {
    const navigate = useNavigate();
    const [acknowledged, setAcknowledged] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
        AOS.init();
    }, []);

    const handleContinue = () => {
        if (!acknowledged) {
            alert('Please acknowledge that you have read and understood the procurement mechanisms.');
            return;
        }
        navigate('/CCF-Calculator/scope');
    };

    return (
        <div className="ccf-business-screen-container">
            <div className="ccf-business-content-container" style={{ maxWidth: '90%', paddingTop: '50px' }}>
                <h2 className="ccf-business-question-text" data-aos="fade-up" data-aos-duration="800">
                    Please read following Procurement mechanisms and acknowledge them.
                </h2>
                <div className="ccf-business-info-section" data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
                    <p className="ccf-business-info-text" style={{ textAlign: 'left', marginBottom: '15px', whiteSpace: 'pre-line' }}>
                        Electricity will be regarded as renewable electricity if provided using one of the mechanisms stated below and respecting the requirements regarding double counting. Please select which ones apply to your processes. If none apply in the country carbon emissions occur, at the end an alternative locally accepted at the time of production type of proof:{'\n'}
                        a. Onsite generation: EACs generated{'\n'}
                        b. Onsite generation: No EACs generated{'\n'}
                        c. Off-Site generation: PPA / sleeved PPA (Proof of delivery necessary){'\n'}
                        d. Off-Site generation: Virtual PPA (Proof via EAC necessary){'\n'}
                        e. Off-Site generation: Green Power Tariff / Green Power Product{'\n'}
                        f. Power supplied by an electricity provider where the provider takes over the responsibility to provide the electricity either directly from renewable sources (e.g. through PPAs) or procures and deletes unbundled EACs for the supplied electricity.{'\n'}
                        g. Unbundled EACs{'\n'}
                        h. Unbundled REC's / I-REC's
                    </p>
                    <h3 className="ccf-business-question-text" style={{ fontSize: '20px', marginTop: '30px', marginBottom: '15px' }}>
                        Acronyms used:
                    </h3>
                    <p className="ccf-business-info-text" style={{ textAlign: 'left', whiteSpace: 'pre-line' }}>
                        PPA: Power Purchase Agreements{'\n'}
                        EAC: Energy Attribute Certificates{'\n'}
                        I-REC: International Green Energy Certificates{'\n'}
                        GOO: Guarantee of Origin
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
                            I have read and acknowledge the eligible and excluded technologies.
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

export default ProcurementScreen;
