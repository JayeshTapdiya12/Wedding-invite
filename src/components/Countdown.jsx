import React, { useState, useEffect } from 'react';
import '../style/countdown.css';

const Countdown = () => {
    const [timeLeft, setTimeLeft] = useState({
        days: 0, hours: 0, minutes: 0, seconds: 0
    });

    useEffect(() => {
        const targetDate = new Date("March 28, 2026 00:00:00").getTime();
        const interval = setInterval(() => {
            const now = new Date().getTime();
            const difference = targetDate - now;

            if (difference <= 0) {
                clearInterval(interval);
            } else {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                    minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
                    seconds: Math.floor((difference % (1000 * 60)) / 1000)
                });
            }
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="countdown-section">
            <div className="floral-overlay-bg"></div>

            <div className="countdown-content">
                <h2 className="countdown-header">The Celebration Begins In</h2>

                {/* The 2x2 Grid Container */}
                <div className="countdown-grid">
                    <div className="grid-box">
                        <span className="num">{timeLeft.days}</span>
                        <span className="label">Days</span>
                    </div>
                    <div className="grid-box">
                        <span className="num">{String(timeLeft.hours).padStart(2, '0')}</span>
                        <span className="label">Hours</span>
                    </div>
                    <div className="grid-box">
                        <span className="num">{String(timeLeft.minutes).padStart(2, '0')}</span>
                        <span className="label">Mins</span>
                    </div>
                    <div className="grid-box">
                        <span className="num">{String(timeLeft.seconds).padStart(2, '0')}</span>
                        <span className="label">Secs</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Countdown;