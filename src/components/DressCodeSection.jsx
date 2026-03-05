import React, { useEffect } from 'react';
import '../style/DressCodeSection.css';

const DressCodeSection = () => {
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('reveal-active');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.lookbook-card').forEach(card => observer.observe(card));
        return () => observer.disconnect();
    }, []);

    // Replace the 'image' paths with your actual filenames (e.g., /images/mehendi.jpg)
    const lookbook = [
        {
            function: "Ishq Da Rang – Mehendi Ke Sang",
            location: "Shrida Green, Indore",
            time: "1:00 PM | 27 March",
            theme: "Rang-e-Mor (Peacock Colors)",
            image: "/images/dresscode/mehendi-look.png"
        },
        {
            function: "Sama-E-Ishq (Bollywood Night)",
            location: "Shrida Green, Indore",
            time: "7:00 PM | 27 March",
            theme: "Enchanting Night Sky",
            image: "/images/bollywood-look.jpg"
        },
        {
            function: "Bandhan Bhai Behen Ro (Mayera)",
            location: "Shrida Green, Indore",
            time: "11:00 AM | 28 March",
            theme: "Mhaaro Riwaaz (Rajasthani)",
            image: "/images/mayera-look.jpg"
        },
        {
            function: "An Evening of Elegance (Reception)",
            location: "Shrida Green, Indore",
            time: "7:30 PM | 28 March",
            theme: "Formal Glamour",
            image: "/images/reception-look.jpg"
        },
        {
            function: "Rango Ka Mela (Haldi)",
            location: "The Westin, Pushkar",
            time: "12:00 PM | 30 March",
            theme: "Rajasthani Carnival",
            image: "/images/haldi-look.jpg"
        },
        {
            function: "Sitaron Ki Mehfil (Sangeet)",
            location: "The Westin, Pushkar",
            time: "7:00 PM | 30 March",
            theme: "Filmy Glam",
            image: "/images/sangeet-look.jpg"
        },
        {
            function: "Rangilo Pushkar (Pool Party)",
            location: "The Westin, Pushkar",
            time: "11:00 AM | 31 March",
            theme: "Subtle Colors for Holi",
            image: "/images/pool-look.jpg"
        },
        {
            function: "Saat Sur, Saat Vachan (Phere)",
            location: "The Westin, Pushkar",
            time: "7:00 PM | 31 March",
            theme: "Heritage & Majestic",
            image: "/images/phere-look.jpg"
        }
    ];

    return (
        <section className="dresscode-section">
            <div className="container">
                <div className="dresscode-header">
                    <h2 className="dresscode-title">Wedding Style Guide</h2>
                    <p className="dresscode-subtitle">Vibe Check: Dress to Celebrate</p>
                    <div className="gold-accent-line"></div>
                </div>

                <div className="lookbook-grid">
                    {lookbook.map((item, index) => (
                        <div key={index} className="lookbook-card">
                            <div className="lookbook-image-container">
                                <img src={item.image} alt={item.theme} className="lookbook-img" />
                                <div className="image-overlay">
                                    <span className="card-number">0{index + 1}</span>
                                </div>
                            </div>

                            <div className="lookbook-info">
                                <span className="function-label">{item.function}</span>
                                <h3 className="theme-heading">{item.theme}</h3>

                                <div className="function-meta-box">
                                    <span>📍 {item.location}</span>
                                    <span>⏰ {item.time}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* <img src="./champane.png" alt="Decoration" className="animated-vase" /> */}
            </div>
        </section>
    );
};

export default DressCodeSection;