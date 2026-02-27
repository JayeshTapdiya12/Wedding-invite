// import { motion } from "framer-motion";

import React, { useState, useEffect } from 'react';
import '../style/CoupleReveal.css';
import Countdown from './CountDown';

const CoupleReveal = ({ onComplete }) => {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        // Trigger animations after mount
        const timer = setTimeout(() => setAnimate(true), 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <div className={`page-wrapper ${animate ? 'animate-start' : ''}`}>

                <div className="bg-hero">
                    <img
                        src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2000"
                        alt="Couple"
                        className="hero-image"
                    />
                    <div className="overlay-vignette"></div>
                </div>

                <main className="content-reveal">
                    <div className="reveal-box">
                        <span className="eyebrow">The Wedding of</span>

                        {/* Ensure names are direct children for nth-child CSS to work */}
                        <h1 className="main-title">
                            <span className="name first-name">Priya</span>
                            <span className="ampersand">&</span>
                            <span className="name second-name">Saksham</span>
                        </h1>

                        <div className="details-row">
                            <span className="detail-item">MARCH 28, 2026</span>
                            <div className="divider-dot"></div>
                            <span className="detail-item">PUSHKAR</span>
                        </div>
                    </div>

                    {/* The Scroll Indicator */}
                    <div className="scroll-indicator">
                        <div className="mouse">
                            <div className="wheel"></div>
                        </div>
                        <p>Scroll to explore</p>
                    </div>
                </main>

                {/* Placeholder for content below to test scrolling */}
                <div style={{ height: '25vh', background: '#121212' }}></div>
                <Countdown />
                <div style={{ height: '25vh', background: '#121212' }}></div>


            </div>


        </>
    );
};

export default CoupleReveal;