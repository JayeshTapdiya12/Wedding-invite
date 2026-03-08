import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import '../style/CoupleReveal.css';

const CoupleReveal = () => {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        setAnimate(true);
    }, []);

    return (
        <div className="page-wrapper">
            {/* Background Image Layer with Ken Burns Zoom Effect */}
            <div className={`bg-hero ${animate ? 'zoom-active' : ''}`}>
                <img src="./coverimg.jpeg" alt="Couple" className="hero-image" />
                <div className="overlay-vignette"></div>
            </div>

            {/* Main Content Layer */}
            <main className="content-reveal">

                {/* Decorative Icon */}
                <motion.div
                    className="top-decor"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                >
                    <svg width="45" height="45" viewBox="0 0 60 60" fill="none">
                        <circle cx="30" cy="30" r="5" fill="#D4A373" opacity="0.6" />
                        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
                            <g key={i} transform={`rotate(${angle} 30 30)`}>
                                <ellipse cx="30" cy="15" rx="2" ry="6" fill="#D4A373" opacity="0.5" />
                            </g>
                        ))}
                    </svg>
                </motion.div>

                <motion.p
                    className="eyebrow-text"
                    initial={{ opacity: 0, letterSpacing: "1px" }}
                    animate={{ opacity: 1, letterSpacing: "4px" }}
                    transition={{ delay: 0.5, duration: 1 }}
                >
                    The Wedding Celebration of
                </motion.p>

                <div className="names-stack">
                    <motion.h1
                        className="couple-name"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 1.2 }}
                    >
                        Priya
                    </motion.h1>

                    <motion.div
                        className="divider-symbol"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1.1, duration: 0.8 }}
                    >
                        ✦
                    </motion.div>

                    <motion.h1
                        className="couple-name shine-delay"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.4, duration: 1.2 }}
                    >
                        Saksham
                    </motion.h1>
                </div>

                {/* Animated Scroll Indicator */}
                <motion.div
                    className="scroll-footer"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.5, duration: 1 }}
                >
                    <div className="mouse-icon">
                        <div className="wheel-dot"></div>
                    </div>
                    <p>Scroll to explore</p>
                </motion.div>
            </main>
        </div>
    );
};

export default CoupleReveal;