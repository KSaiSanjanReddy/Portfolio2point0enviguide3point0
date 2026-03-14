import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ScopeScreen = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
        AOS.init();
    }, []);

    const scopes = [
        {
            title: 'Scope 1: Direct Emissions',
            description: 'Emissions from sources owned or controlled by the organization.',
            route: '/CCF-Calculator/DirectEmissions',
        },
        {
            title: 'Scope 2: Indirect Emissions',
            description: 'Emissions from purchased electricity, steam, heating, and cooling.',
            route: '/CCF-Calculator/IndirectEmissions',
        },
        {
            title: 'Scope 3: Other Indirect Emissions',
            description: 'Emissions from sources not owned or controlled by the company but part of the value chain.',
            route: '/CCF-Calculator/others',
        },
        {
            title: 'Scope 4: Avoided Emissions',
            description: 'Emissions avoided by products, services, or initiatives that contribute to emission reductions.',
            route: '/CCF-Calculator/AvoidedEmissions',
        },
    ];

    return (
        <div className="ccf-scopes-container">
            <div className="ccf-scopes-content">
                <h1 className="ccf-scopes-title" data-aos="fade-up" data-aos-duration="800">
                    Scopes
                </h1>
                <p className="ccf-scopes-subtitle" data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
                    Go through each scope and address the questionnaire in order to get your carbon footprint.
                </p>
                <div className="ccf-scopes-grid" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
                    {scopes.map((scope, index) => (
                        <div key={index} className="ccf-scopes-card">
                            <h3 className="ccf-scopes-card-title">{scope.title}</h3>
                            <p className="ccf-scopes-card-description">{scope.description}</p>
                            <button
                                className="ccf-scopes-card-btn"
                                onClick={() => navigate(scope.route)}
                            >
                                Continue
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ScopeScreen;
