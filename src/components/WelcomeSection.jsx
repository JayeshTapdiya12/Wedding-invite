import React, { useEffect } from 'react';
import '../style/WelcomeSection.css';

const WelcomeSection = () => {
    useEffect(() => {
        const observerOptions = { threshold: 0.1 };
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("animate-in");
                }
            });
        }, observerOptions);

        const elements = document.querySelectorAll(".reveal");
        elements.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <section className="welcome-light-section">
            <div className="welcome-container">
                {/* Main Headline */}
                <div className="welcome-header reveal fade-down">
                    <h2 className="marrying-tag">WE’RE GETTING MARRIED!!</h2>
                    <p className="celebrate-with-us">And we’d love for you to celebrate it with us.</p>
                </div>

                <div className="welcome-body-content">
                    {/* The Origin Story */}
                    <div className="story-card reveal fade-up delay-1">
                        <p className="narrative-text">
                            Two families met. Conversations happened. <br />
                            <span className="italic-sub">Horoscopes probably approved.</span>
                        </p>

                        <div className="divider-diamond"></div>

                        <p className="narrative-text">
                            And somewhere between <span className="highlight-text">“formal introductions”</span> <br />
                            and a few <span className="highlight-text">“coffee conversations”</span>, <br />
                            a forever quietly took shape.
                        </p>

                        {/* The Promise */}
                        <div className="vow-box reveal fade-up delay-2">
                            <p className="no-drama">No dramatic twists. No long speeches.</p>
                            <p className="choosing-each-other">Just two people, choosing each other —</p>
                            <h3 className="always-text">TODAY, TOMORROW, ALWAYS.</h3>
                        </div>

                        {/* The Call to Action */}
                        <div className="location-vibe reveal fade-up delay-3">
                            <p className="now-time">Now it’s time to celebrate!</p>
                            <p className="location-call">
                                Join us in <strong>Indore</strong>, celebrate with us <br />
                                under the open skies of <strong>Pushkar!</strong>
                            </p>
                        </div>

                        {/* The Friendly Ultimatum */}
                        <div className="final-instruction reveal fade-up delay-4">
                            <div className="instruction-row">
                                <span>Clear your calendar.</span>
                                <span className="dot"></span>
                                <span>Cancel your excuses.</span>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Footer Disclaimer */}
                <div className="welcome-footer-divider reveal scale-in delay-5">
                    <div className="gold-line"></div>
                    <p className="final-call">
                        Your presence isn’t optional — <br />
                        <strong>it’s part of the celebration!</strong>
                    </p>
                    <div className="gold-line"></div>
                </div>
            </div>
        </section>
    );
};

export default WelcomeSection;