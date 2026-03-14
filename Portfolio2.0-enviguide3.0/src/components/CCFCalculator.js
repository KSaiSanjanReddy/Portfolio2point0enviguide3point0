import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import LandingPage from './CCFCalculator/LandingPage';

const CCFCalculator = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
        AOS.init();
    }, []);

    return <LandingPage />;
};

export default CCFCalculator;
