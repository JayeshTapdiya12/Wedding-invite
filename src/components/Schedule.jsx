import React, { useLayoutEffect, useRef, useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../style/Schedule.css';

gsap.registerPlugin(ScrollTrigger);

const weddingFunctions = [

    {

        number: 1,

        function: "Mehendi",

        name: "Ishq Da Rang – Mehendi Ke Sang",

        date: "Friday, 27 March 2026",

        time: "01:00 PM",

        theme: "MORPANKH — Colours of Peacock's Feather",

        quote: "Where hands paint henna and hearts paint promises.",

        color: "#D4E7C5",

        image: "/images/functions/mehndi.jpeg"

    },

    {

        number: 2,

        function: "Bollywood Night",

        name: "Sama – E – Ishq",

        date: "Friday, 27 March 2026",

        time: "07:00 PM",

        theme: "Jewel tones under the night sky",

        quote: "An evening where Bollywood meets love.",

        color: "#2C2C54",

        image: "/images/functions/bollywood-night.avif",

        isDark: true

    },

    {

        number: 3,

        function: "Mayera",

        name: "Bandhan Bhai Behen Ro",

        date: "Saturday, 28 March 2026",

        time: "11:00 AM",

        theme: "Rajasthani Theme",

        quote: "Brothers and sisters, bound by love.",

        color: "#FFE5D4",

        image: "/images/functions/mayera.jpg"

    },

    {

        number: 4,

        function: "Reception",

        name: "An Evening of Elegance",

        date: "Saturday, 28 March 2026",

        time: "07:30 PM",

        theme: "Black-Tie Reception",

        quote: "A night of elegance and laughter.",

        color: "#E8DFEC",

        image: "/images/functions/reception.jpeg"

    },

    {

        number: 5,

        function: "Haldi & Sajangoth",

        name: "Rangon Ka Mela",

        date: "Monday, 30 March 2026",

        time: "12:00 PM",

        theme: "Indian Rajasthani Carnival",

        color: "#FFF3CD",

        image: "/images/functions/haldi.jpeg"

    },

    {

        number: 6,

        function: "Mehndi",

        name: "Sitaron Ki Mehfil",

        date: "Monday, 30 March 2026",

        time: "04:00 PM",

        theme: "Filmy Glam",

        color: "#F8D7DA",

        image: "/images/functions/sitaron.jpg"

    },

    {

        number: 7,

        function: "Sangeet",

        name: "Tilak followed by Sangeet",

        date: "Monday, 30 March 2026",

        time: "07:00 PM",

        theme: "Filmy Glam",

        color: "#F8D7DA",

        image: "/images/functions/sangeet.jpg"

    },

    {

        number: 8,

        function: "Pool Party",

        name: "Rangilo Pushkar",

        date: "Tuesday, 31 March 2026",

        time: "11:00 AM",

        theme: "Pushkar Holi Theme",

        color: "#D6EAF8",

        image: "/images/functions/pool-party.jpg"

    },



    {

        number: 9,

        function: "Baraat",

        name: "Baraat Swagat & Toran",

        date: "Tuesday, 31 March 2026",

        time: "04:30 PM",

        color: "#FFE5D4",

        image: "/images/functions/baraat.jpg"

    },

    {

        number: 10,

        function: "Wedding",

        name: "Saat Sur, Saat Vachan",

        date: "Tuesday, 31 March 2026",

        time: "07:00 PM",

        theme: "Musical Pheras",

        color: "#FADBD8",

        image: "/images/functions/pheras.jpg"

    }

];

const FunctionCard = ({ func }) => {
    const textColor = func.isDark ? '#FFF8F0' : '#3D3024';
    const subColor = func.isDark ? 'rgba(255, 248, 240, 0.7)' : '#8B6F6F';

    return (
        <div className="function-card" style={{ backgroundColor: func.color }}>
            <div className="card-bg-number" style={{ color: textColor }}>{func.number}</div>
            <div className="card-img-container">
                <img src={func.image} alt={func.name} className="card-main-img" />
                <div className="card-img-overlay" style={{ background: `linear-gradient(to bottom, transparent 20%, ${func.color} 100%)` }} />
            </div>
            <div className="card-body">
                <p className="card-label" style={{ color: subColor }}>{func.function}</p>
                <h3 className="card-name" style={{ color: textColor }}>{func.name}</h3>
                <div className="card-info-row">
                    <p style={{ color: textColor }}>{func.date}</p>
                    <p style={{ color: subColor }}>{func.time}</p>
                </div>
                <div className="card-divider" />
                {func.theme && <p className="card-theme" style={{ color: subColor }}>{func.theme}</p>}
                <p>Style Guide Attached</p>
            </div>
        </div>
    );
};

const Schedule = () => {
    const sectionRef = useRef(null);
    const horizontalRef = useRef(null);
    const progressRef = useRef(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 1024);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            if (!isMobile && horizontalRef.current) {
                const cards = horizontalRef.current.querySelectorAll('.function-card');

                const getScrollAmount = () => {
                    const cardWidth = cards[0].offsetWidth;
                    const gap = parseInt(window.getComputedStyle(horizontalRef.current).gap) || 32;
                    const totalWidth = (cards.length * cardWidth) + ((cards.length - 1) * gap);
                    return totalWidth - window.innerWidth + (window.innerWidth * 0.15);
                };

                gsap.to(horizontalRef.current, {
                    x: () => -getScrollAmount(),
                    ease: "none",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        pin: true,
                        scrub: 1,
                        start: "top top",
                        end: () => `+=${getScrollAmount()}`,
                        invalidateOnRefresh: true,
                    }
                });

                gsap.to(progressRef.current, {
                    scaleX: 1,
                    ease: "none",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top top",
                        end: () => `+=${getScrollAmount()}`,
                        scrub: 0.3
                    }
                });
            }
        }, sectionRef);
        return () => ctx.revert();
    }, [isMobile]);

    return (
        <section ref={sectionRef} className="schedule-section">
            <div className="schedule-header">
                <h2 className="schedule-title">The Celebrations</h2>
                <p className="schedule-desc">A journey of joy and timeless rituals</p>
            </div>

            <div className={`cards-container ${isMobile ? 'mobile-view' : 'desktop-view'}`}>
                <div ref={horizontalRef} className="cards-wrapper">
                    {weddingFunctions.map((func, i) => (
                        <FunctionCard key={i} func={func} />
                    ))}
                </div>
            </div>

            {!isMobile && (
                <div className="scroll-progress-container">
                    <div ref={progressRef} className="scroll-progress-bar" />
                </div>
            )}
        </section>
    );
};

export default Schedule;