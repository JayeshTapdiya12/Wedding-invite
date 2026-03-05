import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import '../style/Travelling.css';

const Travelling = () => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

    const transport = [
        {
            id: "01",
            type: "By Air",
            title: "The Skies",
            desc: "Your journey begins with a bird's eye view of the golden desert.",
            hubs: [
                { name: "Kishangarh Airport", meta: "40 km | 45 mins" },
                { name: "Jaipur International", meta: "135 km | 2.5 hours" }
            ],
            icon: "✈️"
        },
        {
            id: "02",
            type: "By Train",
            title: "The Rails",
            desc: "Experience the soul of India through the winding tracks to Ajmer.",
            hubs: [
                { name: "Ajmer Junction", meta: "22 km | 30 mins" }
            ],
            icon: "🚆"
        },
        {
            id: "03",
            type: "By Road",
            title: "The Open Road",
            desc: "Winding hills and open skies lead you to our serene oasis.",
            hubs: [
                { name: "Jaipur / Jodhpur", meta: "2.5h — 4h" },
                { name: "Delhi / Udaipur", meta: "6.5h — 5h" }
            ],
            icon: "🚗"
        }
    ];

    return (
        <div className="travel-cinematic-container">
            {/* The Animated Progress Line at the very top */}
            <motion.div className="scroll-progress-bar" style={{ scaleX }} />

            {/* Hero Section: The "Intro" Movie Frame */}
            <section className="travel-hero">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="hero-content"
                >
                    <span className="hero-kicker">Pushkar, Rajasthan</span>
                    <h1 className="hero-heading">The Road to <br />Our Forever</h1>
                    <div className="hero-line"></div>
                    <p className="hero-description">
                        Nestled in the tranquil embrace of the Aravalli hills,
                        where the desert sky meets celebration.
                    </p>
                </motion.div>
            </section>

            {/* Content Sections */}
            <div className="journey-wrapper">
                {transport.map((mode, idx) => (
                    <motion.section
                        key={mode.id}
                        className="journey-section"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="journey-grid">
                            <div className="journey-info">
                                <span className="journey-num">{mode.id}</span>
                                <span className="journey-type">{mode.type}</span>
                                <h2 className="journey-title">{mode.title}</h2>
                                <p className="journey-desc">{mode.desc}</p>

                                <div className="hub-container">
                                    {mode.hubs.map((hub, i) => (
                                        <div key={i} className="hub-item">
                                            <span className="hub-dot"></span>
                                            <div>
                                                <p className="hub-name">{hub.name}</p>
                                                <p className="hub-meta">{hub.meta}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="journey-visual">
                                <div className="visual-circle">
                                    <span className="visual-icon">{mode.icon}</span>
                                </div>
                            </div>
                        </div>
                    </motion.section>
                ))}
            </div>

            {/* Cinematic Ending */}
            <section className="travel-footer">
                <div className="footer-glass-card">
                    <h3 className="footer-title">The Westin Pushkar Resort & Spa</h3>
                    <p>Valet parking and concierge assistance await your arrival.</p>
                    <button className="travel-cta">Get Directions</button>
                </div>
            </section>
        </div>
    );
};

export default Travelling;