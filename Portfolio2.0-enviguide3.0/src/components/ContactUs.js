import React, { useEffect, useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { NavLink } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ContactUs = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
        AOS.init();
    }, []);

    const [messages, setMessages] = useState('');

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [represent, setRepresent] = useState('individual'); // default
    const [companyName, setCompanyName] = useState('');
    const [message, setMessage] = useState('');

    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault(); // prevent page reload

        // Validate fields
        const newErrors = {};
        if (!name?.trim()) newErrors.name = "Name is required";
        if (!email?.trim()) newErrors.email = "Email is required";
        if (!represent?.trim()) newErrors.represent = "This field is required";
        // if (!companyName?.trim()) newErrors.companyName = "Company name is required";
        if (!message?.trim()) newErrors.message = "Message is required";

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return; // Stop the form submission
        }

        setErrors({}); // Clear previous errors
        setLoading(true);

        const formData = {
            name,
            email,
            represent,
            companyName,
            message,
            role: "User",
        };

        try {
            const response = await axios.post(
                "https://enviguide-fpachcgjfghwazdp.westeurope-01.azurewebsites.net/api/contact",
                formData,
                {
                    headers: { "Content-Type": "application/json" },
                    timeout: 10000,
                }
            );


            // console.log(messages);
            setMessages(response?.data?.message);
            toast.success("Message received. We'll get back to you soon!", messages);
            // ✅ Clear form fields
            setName('');
            setEmail('');
            setRepresent('');
            setCompanyName('');
            setMessage('');

        } catch (error) {
            console.error("Axios request failed:", error);
        } finally {
            setLoading(false);
        }

    };


    const sendEmail = () => {
        const recipient = "info@enviguide.com";
        const subject = "";
        const body = "";
        const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.location.href = mailtoLink;
    };

    const makeCall = () => {
        const phoneNumber = "+919986331158"; // Replace with a valid phone number
        const telLink = `tel:${phoneNumber}`;
        window.location.href = telLink;
    };


    return (
        <>
            <div className="contactus-mainsection">
                <div className="contactus-section1">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-9">
                                <h2 className="contactus-mainhead" data-aos="fade-up" data-aos-duration="800" data-aos-delay="30">Contact Us</h2>
                                <h3 className="contactus-subhead" data-aos="fade-up" data-aos-duration="800" data-aos-delay="30">Empowering Climate Action Starts Here</h3>
                                <p className="contactus-content">Have questions about how Enviguide can help your organization achieve its sustainability goals? Our team is ready to assist you; whether you're looking for a demo, need technical support, or want to explore partnership opportunities.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <ToastContainer /> */}
                <ToastContainer
                    position="bottom-right"
                    autoClose={6000}  // Toast disappears after 5 seconds
                    hideProgressBar={false}  // Show progress bar
                    newestOnTop={false}  // New toasts appear at the bottom
                    closeButton={false}  // Disable close button
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />

                <div className="contactus-section2">
                    <div className="container">
                        <div className="contact-section4">
                            <div className="row">
                                <div className="col-md-4">
                                    <NavLink onClick={sendEmail} style={{ textDecoration: 'none' }}>
                                        <div className="mailsection">
                                            <div className="contactus-imiconbg">
                                                <img className="contactus-imicon" src="../assets/images/mail.png" alt="email" />
                                            </div>
                                            <h3 className="mailsection-head">Send Us Mail</h3>
                                            <p className="mailsection-sub">info@enviguide.com</p>
                                        </div>
                                    </NavLink>
                                </div>
                                <div className="col-md-4">
                                    <NavLink onClick={makeCall} style={{ textDecoration: 'none' }}>
                                        <div className="mailsection">
                                            <div className="contactus-imiconbg">
                                                <img className="contactus-imicon" src="../assets/images/phone-call.png" alt="email" />
                                            </div>
                                            <h3 className="mailsection-head">Call Us Anytime</h3>
                                            <p className="mailsection-sub">+91 9986331158</p>
                                        </div>
                                    </NavLink>
                                </div>
                                <div className="col-md-4">
                                    <div className="mailsection">
                                        <div className="contactus-imiconbg">
                                            <img className="contactus-imicon" src="../assets/images/location.png" alt="email" />
                                        </div>
                                        <h3 className="mailsection-head">Visit Our Office</h3>
                                        <p className="mailsection-sub">Hyderabad, Telangana, India - 500049.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-5">
                                <div className="contactus-leftsection">
                                    <h3 className="contactus-lefthead">Get in Touch</h3>
                                    <p className="contactus-leftsubhead">Fill out the form and we’ll get back to you within 1 to 2 business days.</p>
                                    <img className="contactus-im" src="../assets/images/contactus.jpg" alt="contactus" />
                                </div>
                            </div>
                            <div className="col-md-7">
                                <div className="contect-sectionright">
                                    <form onSubmit={handleSubmit}>

                                        <div className="row">
                                            <div className="col-md-6">
                                                <label className="contact-label">Your Name</label>
                                                <input
                                                    type="text"
                                                    value={name}
                                                    onChange={(e) => setName(e.target.value)}
                                                    placeholder="Enter your name"
                                                    className="contact-input"
                                                // required

                                                />
                                                {errors.name && <span style={{ color: 'red', margin: '0px', fontSize: 14 }}>{errors.name}</span>}
                                            </div>
                                            <div className="col-md-6">
                                                <label className="contact-label">Your Email</label>
                                                <input
                                                    type="email"
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                    placeholder="Enter your email"
                                                    className="contact-input"
                                                // required
                                                />
                                                {errors.email && <span style={{ color: 'red', margin: '0px', fontSize: 14 }}>{errors.email}</span>}
                                            </div>
                                        </div>

                                        <label className="contact-label">You Represent</label>
                                        <div className="toggle-container">
                                            <button
                                                type="button"
                                                onClick={() => setRepresent('individual')}
                                                className={`toggle-button ${represent === 'individual' ? 'selected' : ''}`}
                                            >
                                                An Individual
                                            </button>
                                            <button
                                                type="button"
                                                onClick={() => setRepresent('company')}
                                                className={`toggle-button ${represent === 'company' ? 'selected' : ''}`}
                                            >
                                                A Company
                                            </button>
                                        </div>

                                        {represent === 'company' && (
                                            <>
                                                <label className="contact-label">Your Company Name</label>
                                                <input
                                                    type="text"
                                                    value={companyName}
                                                    onChange={(e) => setCompanyName(e.target.value)}
                                                    placeholder="Enter your company name"
                                                    className="contact-input"
                                                // required
                                                />
                                            </>
                                        )}

                                        <label className="contact-label">Description</label>
                                        <textarea
                                            value={message}
                                            onChange={(e) => setMessage(e.target.value)}
                                            placeholder="Enter your message"
                                            className="contact-input description-input"
                                        // required
                                        />
                                        {errors.message && <span style={{ color: 'red', margin: '0px', fontSize: 14 }}>{errors.message}</span>}
                                        <div>
                                            <button
                                                type="submit"
                                                // className="submit-button" 
                                                style={{
                                                    backgroundColor: loading ? "rgba(0, 0, 0, 0.2)" : "#9afb00", // gray when loading, blue otherwise
                                                    color: loading ? "rgba(0, 0, 0, 0.3)" : "#000000",
                                                    cursor: loading ? "not-allowed" : "pointer",
                                                    padding: "10px 20px",
                                                    border: "none",
                                                    borderRadius: "5px",
                                                    width: "250px",
                                                    fontFamily: "Poppins-Medium",
                                                    fontSize: "16px",
                                                    marginTop: "30px"
                                                }}
                                                disabled={loading}>
                                                {loading ? "Submitting..." : "Submit"}
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </div >
        </>
    )
}

export default ContactUs;