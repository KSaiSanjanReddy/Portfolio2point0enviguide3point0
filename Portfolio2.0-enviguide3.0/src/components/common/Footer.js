import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <>
            <div className="footer-mainsection">
                <div className="footer-insidesection">
                    <img src="../assets/images/Logo.png" className="footerlogo" alt="logo" />
                    <div className="footersec2">
                        <NavLink className="footer-txt" to={'/'}>Home</NavLink>
                        <NavLink className="footer-txt" to={'/About-us'}>About Us</NavLink>
                        <NavLink className="footer-txt" to={'/Solutions'}>Solutions</NavLink>
                        <NavLink className="footer-txt" to={'/Blog'}>Blog</NavLink>
                        <NavLink className="footer-txt" to={'/Contact-Us'}>Contact us</NavLink>
                    </div>
                    <div className="footersec3">
                        {/* <NavLink>
                            <img src="../assets/images/socialicon.png" className="twitter-logo" alt="twitter" />
                        </NavLink> */}
                        <NavLink to={'https://www.linkedin.com/company/enviguide-techno-solutions-pvt-ltd/'} target="_blank">
                            <img src="../assets/images/linkedin.png" className="linkedin-logo" alt="linkedin" />
                        </NavLink>
                        {/* <NavLink>
                            <img src="../assets/images/facebook.png" className="facebook-logo" alt="facebook" />
                        </NavLink> */}
                    </div>
                </div>
                <div className="footersecond-section">
                    <p className="footercopy">© 2025 Enviguide.com</p>
                    <div className="privacysection">
                        <NavLink className="privacysectiontext" to={'/Privacy-Policy'}>Privacy Policy</NavLink>
                            <div className="privacysectionline"></div>
                        <NavLink className="privacysectiontext privacysectiontext2">Cookies</NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;