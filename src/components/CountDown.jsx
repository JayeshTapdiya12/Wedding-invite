import React, { useState, useEffect } from 'react';
import '../style/countdown.css';

const CountDown = () => {
    const [timeLeft, setTimeLeft] = useState({
        days: 0, hours: 0, minutes: 0, seconds: 0
    });

    useEffect(() => {
        // Target date: March 31, 2026
        const targetDate = new Date("March 31, 2026 00:00:00").getTime();

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
            <div className="countdown-container reveal-fade-up">
                <h2 className="countdown-title">Countdown</h2>
                <h6 className="label">27 - 31 MARCH 2026</h6>

                <div className="countdown-grid">
                    <div className="time-box">
                        {/* Adding a key triggers the animation every time the number changes */}
                        <span key={timeLeft.days} className="number tick-animation">{timeLeft.days}</span>
                        <span className="label">Days</span>
                    </div>
                    <div className="time-box">
                        <span key={timeLeft.hours} className="number tick-animation">
                            {String(timeLeft.hours).padStart(2, '0')}
                        </span>
                        <span className="label">Hours</span>
                    </div>
                    <div className="time-box">
                        <span key={timeLeft.minutes} className="number tick-animation">
                            {String(timeLeft.minutes).padStart(2, '0')}
                        </span>
                        <span className="label">Minutes</span>
                    </div>
                    <div className="time-box">
                        <span key={timeLeft.seconds} className="number tick-animation">
                            {String(timeLeft.seconds).padStart(2, '0')}
                        </span>
                        <span className="label">Seconds</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CountDown;