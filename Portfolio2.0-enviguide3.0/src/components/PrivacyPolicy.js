import React, { useEffect } from "react";

const PrivacyPolicy = () => {
     useEffect(() => {
            window.scrollTo(0, 0);
        }, []);
    return (
        <>
            <div className="PrivacyPolicy-mainsection">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-10">
                            <h2 className="text-head">PRIVACY POLICY</h2>
                            <p className="text-content">Welcome to Enviguide. We take your privacy seriously and are committed to protecting your personal data. This privacy policy explains how we collect, use, and protect your information when you visit our website.</p>
                            <h3 className="text-subhead">1. Data Collection on This Website</h3>
                            <p className="text-content">The data on this website is processed by the website operator, whose contact information is provided in the section "Contact Information for the Data Controller" in this policy.</p>
                            <p className="text-content">We collect your data in two ways:</p>
                            <ul>
                                <li className="text-content text-content2"> <span>Data you provide to us</span>: This may include information you enter into a contact form or provide when subscribing to our services.</li>
                                <li className="text-content"><span>Data collected automatically</span>: Our IT systems automatically collect technical data e.g., web browser, operating system, access time when you visit the website.</li>
                            </ul>

                            <h3 className="text-subhead">2. What Is Your Data Used For?</h3>
                            <ul>
                                <li className="text-content text-content2">Ensuring the proper functioning of the website.</li>
                                <li className="text-content text-content2">Analysing user behaviour to improve our services.</li>
                                <li className="text-content text-content2">Responding to inquiries and service requests.</li>
                                <li className="text-content">Marketing and promotional activities (with your consent).</li>
                            </ul>

                            <h3 className="text-subhead">3. Your Rights Regarding Your Data</h3>
                            <ul>
                                <li className="text-content text-content2"><span>Right to access</span>: You can request information about the origin, recipient, and purpose of your stored personal data.</li>
                                <li className="text-content text-content2"><span>Right to rectification or deletion</span>: You can request corrections or deletion of your data.</li>
                                <li className="text-content text-content2"><span>Right to revoke consent</span>: If you have given consent to data processing, you can revoke it at any time.</li>
                                <li className="text-content text-content2"><span>Right to object to data collection</span>: You may object to certain data processing activities.</li>
                                <li className="text-content text-content2"><span>Right to data portability</span>: You have the right to receive your data in a structured, commonly used format.</li>
                                <li className="text-content"><span>Right to file a complaint</span>: You have the right to lodge a complaint with a supervisory authority.</li>
                            </ul>

                            <h3 className="text-subhead">4. Data Processing Legal Basis</h3>
                            <p className="text-content">Our data processing is based on:</p>
                            <ul>
                                <li className="text-content text-content2">Your consent (Art. 6(1)(a) GDPR).</li>
                                <li className="text-content text-content2">Contractual necessity (Art. 6(1)(b) GDPR).</li>
                                <li className="text-content text-content2">Legal obligations (Art. 6(1)(c) GDPR).</li>
                                <li className="text-content">Legitimate interests (Art. 6(1)(f) GDPR).</li>
                            </ul>

                            <h3 className="text-subhead">5. Third-Party Data Processing and International Transfers</h3>
                            <p className="text-content">Some of our service providers may be located in countries outside the EU/EEA, where data protection laws may differ. If we transfer data to third countries, we ensure appropriate safeguards are in place, such as:</p>
                            <ul>
                                <li className="text-content text-content2">EU Standard Contractual Clauses (SCCs).</li>
                                <li className="text-content text-content2">Binding Corporate Rules (BCRs).</li>
                                <li className="text-content">EU-US Data Privacy Framework (DPF), if applicable.</li>
                            </ul>

                            <h3 className="text-subhead">6. Data Retention.</h3>
                            <p className="text-content">Your data is stored as long as necessary for its intended purpose. If you request deletion or revoke consent, we will delete your data unless legally required to retain it.</p>

                            <h3 className="text-subhead">7. Use of Cookies and Tracking Technologies.</h3>
                            <p className="text-content">We use cookies and similar tracking technologies to enhance user experience and analyse website traffic. You can manage your cookie preferences through your browser settings.</p>

                            <h3 className="text-subhead">8. Analysis Tools and Third-Party Services.</h3>
                            <p className="text-content">We may use analytics services, such as Google Analytics, to evaluate website usage. These tools help us improve our services. More details about such tools are available in this privacy policy.</p>

                            <h3 className="text-subhead">9. Contact Information for the Data Controller.</h3>
                            <p className="text-content">Enviguide Techno Solutions Private Limited.</p>
                            <p className="text-content">If you have any privacy-related concerns, please contact us.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PrivacyPolicy;