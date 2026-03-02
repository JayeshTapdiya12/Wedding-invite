import React, { useState, useEffect } from 'react';
import '../style/RSVP.css';

const RSVP = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        attending: 'both',
        message: ''
    });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('RSVP Data:', formData);
        // Here you would typically send data to an API or Email service
        setSubmitted(true);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    return (
        <section className="rsvp-dark-section">
            <div className="rsvp-container reveal-on-scroll">
                {!submitted ? (
                    <>
                        <h2 className="rsvp-title">Kindly RSVP</h2>
                        <p className="rsvp-subtitle">WE LOOK FORWARD TO CELEBRATING WITH YOU</p>

                        <form className="rsvp-form" onSubmit={handleSubmit}>
                            <div className="input-group">
                                <label className="input-label">Full Name</label>
                                <input
                                    type="text"
                                    name="fullName"
                                    placeholder="Enter your name"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="input-group">
                                <label className="input-label">Events Attending</label>
                                <select
                                    name="attending"
                                    value={formData.attending}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="indore">Indore Only</option>
                                    <option value="pushkar">Pushkar Only</option>
                                    <option value="both">Both Indore & Pushkar</option>
                                    <option value="none">Regretfully Decline</option>
                                </select>
                            </div>

                            <div className="input-group">
                                <label className="input-label">Notes or Wishes</label>
                                <textarea
                                    name="message"
                                    placeholder="Dietary preferences or a message for the couple..."
                                    rows="4"
                                    value={formData.message}
                                    onChange={handleChange}
                                ></textarea>
                            </div>

                            <button type="submit" className="submit-gold-btn">
                                SEND RESPONSE
                            </button>
                        </form>
                    </>
                ) : (
                    <div className="success-message">
                        <h3 className="rsvp-title">Thank You!</h3>
                        <p>Your response has been received. We can't wait to see you!</p>
                        <button onClick={() => setSubmitted(false)} className="edit-btn">Edit Response</button>
                    </div>
                )}

                <div className="rsvp-footer">
                    <p className="contact-text">Need help? Contact our wedding planner:</p>
                    <a href="https://wa.me/7869148854" className="wa-link">
                        <span className="wa-icon">ウェ</span> Chat on WhatsApp
                    </a>
                </div>
            </div>
        </section>
    );
};

export default RSVP;