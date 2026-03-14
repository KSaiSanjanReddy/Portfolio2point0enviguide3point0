import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Modules = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
        AOS.init();
    }, []);

    const modules = [
        {
            title: 'Household Information',
            description: 'Basic details about your household size and structure.',
            route: '/CCF-Calculator/household',
            icon: '🏠',
        },
        {
            title: 'Electricity Usage',
            description: 'Track your annual electricity consumption and renewable energy use.',
            route: '/CCF-Calculator/electricity',
            icon: '⚡',
        },
        {
            title: 'Fuel Consumption',
            description: 'Log your fuel usage to estimate related carbon emissions.',
            route: '/CCF-Calculator/fuel',
            icon: '⛽',
        },
        {
            title: 'Travel Information',
            description: 'Provide your yearly travel data across various modes of transport.',
            route: '/CCF-Calculator/travel',
            icon: '🚗',
        },
        {
            title: 'Meal Preferences',
            description: 'Share your dietary habits to evaluate your food-related carbon footprint.',
            route: '/CCF-Calculator/meal',
            icon: '🍽️',
        },
    ];

    return (
        <div className="ccf-modules-container">
            <div className="ccf-modules-content">
                <h1 className="ccf-modules-title" data-aos="fade-up" data-aos-duration="800">
                    Modules
                </h1>
                <p className="ccf-modules-subtitle" data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
                    Go through each module and address the questionnaire in order to get your carbon footprint.
                </p>
                <div className="ccf-modules-grid" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
                    {modules.map((module, index) => (
                        <div key={index} className="ccf-module-card">
                            <div className="ccf-module-icon">{module.icon}</div>
                            <h3 className="ccf-module-card-title">{module.title}</h3>
                            <p className="ccf-module-card-description">{module.description}</p>
                            <button
                                className="ccf-module-card-btn"
                                onClick={() => navigate(module.route)}
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

export default Modules;
