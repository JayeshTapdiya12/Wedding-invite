import React, { useEffect } from "react";
import '../style/Schedule.css';

const Schedule = () => {
    const schedule = [
        {
            chapter: "Chapter I: Indore",
            events: [
                { day: "Friday", date: "27 March 2026", time: "10:00 AM", name: "Ganesh Poojan" },
                { day: "Friday", date: "27 March 2026", time: "01:00 PM", name: "Ishq Da Rang – Mehendi Ke Sang" },
                { day: "Friday", date: "27 March 2026", time: "07:00 PM", name: "Sama – E – Ishq" },
                { day: "Saturday", date: "28 March 2026", time: "11:00 AM", name: "Bandhan Bhai Behen Ro" },
                { day: "Saturday", date: "28 March 2026", time: "07:30 PM", name: "An Evening of Elegance – Reception" }
            ]
        },
        {
            chapter: "Chapter II: Pushkar",
            events: [
                { day: "Monday", date: "30 March 2026", time: "12:00 PM", name: "Rangon Ka Mela" },
                { day: "Monday", date: "30 March 2026", time: "04:00 PM", name: "Sitaron Ki Mehfil" },
                { day: "Monday", date: "30 March 2026", time: "07:00 PM", name: "Tilak followed by Sangeet" },
                { day: "Tuesday", date: "31 March 2026", time: "11:00 AM", name: "Rangilo Pushkar" },
                { day: "Tuesday", date: "31 March 2026", time: "01:00 PM", name: "Rajwada Welcome" },
                { day: "Tuesday", date: "31 March 2026", time: "04:30 PM", name: "Baraat Swagat & Toran" },
                { day: "Tuesday", date: "31 March 2026", time: "07:00 PM", name: "Saat Sur, Saat Vachan" }
            ]
        }
    ];

    useEffect(() => {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: "0px 0px -50px 0px"
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("reveal-visible");
                }
            });
        }, observerOptions);

        const elements = document.querySelectorAll(".reveal-on-scroll");
        elements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <section className="timeline-section">
            <div className="timeline-container">
                <h2 className="main-title reveal-on-scroll">Events Of The Wedding</h2>

                {schedule.map((chapter, cIndex) => (
                    <div key={cIndex} className="chapter-wrapper">
                        <div className="gold-line"></div>
                        <h3 className="chapter-label reveal-on-scroll">{chapter.chapter}</h3>
                        <div className="gold-line"></div>

                        <div className="timeline-spine-area">
                            {/* Vertical Line with drawing animation */}
                            <div className="vertical-line-gold reveal-on-scroll"></div>

                            {chapter.events.map((event, eIndex) => (
                                <div
                                    key={eIndex}
                                    className={`event-row-container reveal-on-scroll ${eIndex % 2 === 0 ? 'left-side' : 'right-side'}`}
                                >
                                    <div className="event-text-mask">
                                        <span className="event-meta">{event.day}, {event.date}</span>
                                        <span className="event-clock">{event.time}</span>
                                        <h4 className="event-heading">{event.name}</h4>
                                    </div>
                                    <div className="line-dot"></div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}

                <div className="final-decoration reveal-on-scroll">
                    <div className="gold-line"></div>
                    <img src="/flask.png" alt="Flowers" className="gold-vase" />
                    <div className="gold-line"></div>
                </div>
            </div>
        </section>
    );
};

export default Schedule;