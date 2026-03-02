import React, { useEffect } from 'react';
import '../style/WelcomeSection.css';

const WelcomeSection = () => {
    useEffect(() => {
        const observerOptions = {
            threshold: 0.1,
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("animate-in");
                }
            });
        }, observerOptions);

        // Select all elements we want to animate
        const elements = document.querySelectorAll(".reveal");
        elements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <section className="welcome-light-section">
            <div className="welcome-container">
                {/* Header with a soft fade-down */}
                <h2 className="welcome-header-script reveal fade-down">Welcome!</h2>

                <div className="welcome-body-content">
                    <p className="namaste-text reveal fade-up delay-1">Namaste & Welcome,</p>

                    <div className="story-highlight-box reveal fade-up delay-2">
                        <p className="plot-twist-line">
                            Plot twist: This is an arranged marriage. <br />
                            <span className="voluntarily-tag">Yes… voluntarily. 😌</span>
                        </p>
                    </div>

                    <p className="narrative-text reveal fade-up delay-3">
                        Two families met. Conversations happened. Horoscopes probably approved.
                        And somewhere between “formal introductions” and “coffee discussions,”
                        a forever was decided.
                    </p>

                    <p className="location-text reveal fade-up delay-4">
                        From our home city of <strong>Indore & Mhow</strong> to the royal charm of <strong>Pushkar</strong>,
                        we’re upgrading from strangers-on-paper to partners-for-life.
                    </p>

                    <div className="vibe-check reveal fade-up delay-5">
                        <p>There will be legendary food.</p>
                        <p>There will be ambitious dance moves.</p>
                        <p>There will be stories that live on in family groups forever.</p>
                    </div>
                </div>

                <div className="welcome-footer-divider reveal scale-in delay-6">
                    <div className="gold-line shimmer"></div>
                    <p className="final-call">
                        Your presence isn’t optional — it’s part of the celebration.
                    </p>
                    <div className="gold-line shimmer"></div>
                </div>
            </div>
        </section>
    );
};

export default WelcomeSection;