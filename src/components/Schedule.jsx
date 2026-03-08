import React, { useLayoutEffect, useRef, useState, useEffect } from 'react';
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
        color: "#D4E7C5",
        image: "https://res.cloudinary.com/dwsv6ggaa/image/upload/v1772953915/MEHENDI.jpg_gtu78c.jpg",
        styleImage: "https://res.cloudinary.com/dwsv6ggaa/image/upload/v1772954293/mehendi-look_gmz88m.png" // Add specific style guide images here
    },
    {
        number: 2,
        function: "Bollywood Night",
        name: "Sama – E – Ishq",
        date: "Friday, 27 March 2026",
        time: "07:00 PM",
        theme: "Jewel tones under the night sky",
        color: "#2C2C54",
        image: "https://res.cloudinary.com/dwsv6ggaa/image/upload/v1772953914/SANGEET.jpg_k2ge9q.jpg",
        isDark: true,
        styleImage: "https://res.cloudinary.com/dwsv6ggaa/image/upload/v1772955895/68afd5b3-31a9-425a-acac-a0773c8fe765_dfhn8z.jpg"
    },
    {
        number: 3,
        function: "Mayera",
        name: "Bandhan Bhai Behen Ro",
        date: "Saturday, 28 March 2026",
        time: "11:00 AM",
        theme: "Rajasthani Theme",
        color: "#FFE5D4",
        image: "https://res.cloudinary.com/dwsv6ggaa/image/upload/v1772953912/MAAYRA.jpg_tuglkg.jpg",
        styleImage: "https://res.cloudinary.com/dwsv6ggaa/image/upload/v1772955900/f1bb7b4f-8047-4297-ac35-ff137eb2771f_cmvbgq.jpg"
    },
    {
        number: 4,
        function: "Reception",
        name: "An Evening of Elegance",
        date: "Saturday, 28 March 2026",
        time: "07:30 PM",
        theme: "Black-Tie Reception",
        color: "#E8DFEC",
        image: "https://res.cloudinary.com/dwsv6ggaa/image/upload/v1772953914/RECEPTION.jpg_sqpogy.jpg",
        styleImage: "https://res.cloudinary.com/dwsv6ggaa/image/upload/v1772955933/a9e65b50-4d98-420a-815b-2b0da3b0f9a3_nqdiea.jpg"
    },
    {
        number: 5,
        function: "Haldi & Sajangoth",
        name: "Rangon Ka Mela",
        date: "Monday, 30 March 2026",
        time: "12:00 PM",
        theme: "Indian Rajasthani Carnival",
        color: "#FFF3CD",
        image: "https://res.cloudinary.com/dwsv6ggaa/image/upload/v1772953761/HALDI.jpg_ftt9gg.jpg",
        styleImage: "https://res.cloudinary.com/dwsv6ggaa/image/upload/v1772955944/a59ce746-c3cf-450b-b14d-497fb0e101e7_vqhhhx.jpg"
    },
    {
        number: 6,
        function: "Mehndi",
        name: "Sitaron Ki Mehfil",
        date: "Monday, 30 March 2026",
        time: "04:00 PM",
        theme: "Filmy Glam",
        color: "#F8D7DA",
        image: "https://res.cloudinary.com/dwsv6ggaa/image/upload/v1772953915/MEHENDI.jpg_gtu78c.jpg",
        styleImage: "https://res.cloudinary.com/dwsv6ggaa/image/upload/v1772954293/mehendi-look_gmz88m.png"
    },
    {
        number: 7,
        function: "Sangeet",
        name: "Tilak followed by Sangeet",
        date: "Monday, 30 March 2026",
        time: "07:00 PM",
        theme: "Filmy Glam",
        color: "#F8D7DA",
        image: "https://res.cloudinary.com/dwsv6ggaa/image/upload/v1772953909/SANGEET_2.jpg_tpc30s.jpg",
        styleImage: "https://res.cloudinary.com/dwsv6ggaa/image/upload/v1772955960/b294d8bb-9042-429f-bfcd-c0f7243f5a7c_ng2h2v.jpg"
    },
    {
        number: 8,
        function: "Pool Party",
        name: "Rangilo Pushkar",
        date: "Tuesday, 31 March 2026",
        time: "11:00 AM",
        theme: "Pushkar Holi Theme",
        color: "#D6EAF8",
        image: "https://res.cloudinary.com/dwsv6ggaa/image/upload/v1772953915/POOL_PARTY.jpg_p7voxx.jpg",
        styleImage: "https://res.cloudinary.com/dwsv6ggaa/image/upload/v1772955982/ef5455f7-540c-47be-b6fc-2a08a16d0231_g29vca.jpg"
    },
    {
        number: 9,
        function: "Baraat",
        name: "Baraat Swagat & Toran",
        date: "Tuesday, 31 March 2026",
        time: "04:30 PM",
        color: "#FFE5D4",
        image: "https://res.cloudinary.com/dwsv6ggaa/image/upload/v1772953906/BARAT.jpg_h8cgwl.jpg",
        styleImage: "/images/styles/baraat-style.jpg"
    },
    {
        number: 10,
        function: "Wedding",
        name: "Saat Sur, Saat Vachan",
        date: "Tuesday, 31 March 2026",
        time: "07:00 PM",
        theme: "Musical Pheras",
        color: "#FADBD8",
        image: "https://res.cloudinary.com/dwsv6ggaa/image/upload/v1772953920/PHERE.jpg_pwzodd.jpg",
        styleImage: "https://res.cloudinary.com/dwsv6ggaa/image/upload/v1772955993/c812da81-f3ed-438b-b606-566c43fc50a0_hpkkd2.jpg"
    }
];

const FunctionCard = ({ func, onOpenStyle }) => {
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

                <button
                    className="style-guide-button"
                    onClick={() => onOpenStyle(func.styleImage || func.image)}
                    style={{ color: textColor, borderColor: subColor }}
                >
                    Explore Style Guide
                </button>
            </div>
        </div>
    );
};

const Schedule = () => {
    const sectionRef = useRef(null);
    const horizontalRef = useRef(null);
    const progressRef = useRef(null);
    const [isMobile, setIsMobile] = useState(false);
    const [selectedStyleImg, setSelectedStyleImg] = useState(null);

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
                        <FunctionCard key={i} func={func} onOpenStyle={setSelectedStyleImg} />
                    ))}
                </div>
            </div>

            {!isMobile && (
                <div className="scroll-progress-container">
                    <div ref={progressRef} className="scroll-progress-bar" />
                </div>
            )}

            {/* STYLE GUIDE MODAL */}
            {selectedStyleImg && (
                <div className="style-modal-overlay" onClick={() => setSelectedStyleImg(null)}>
                    <div className="style-modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="style-modal-close" onClick={() => setSelectedStyleImg(null)}>✕</button>
                        <img src={selectedStyleImg} alt="Style Guide" className="style-guide-full-img" />
                        <div className="style-modal-label">Inspiration for the Occasion</div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Schedule;