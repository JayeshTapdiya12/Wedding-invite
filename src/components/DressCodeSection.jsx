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
    }, []);
    const lookbook = [
        {
            function: "Ishq Da Rang – Mehendi Ke Sang",
            location: "Shrida Green, Indore",
            time: "1:00 PM | Friday, 27 March 2026",
            theme: "Rang-e-Mor (Peacock Colors)",
            men: "Kurta sets in jewel tones (Emerald, Royal Blue, Teal).",
            women: "Flowy Indian or Indo-western silhouettes in peacock hues."
        },
        {
            function: "Sama-E-Ishq (Bollywood Night)",
            location: "Shrida Green, Indore",
            time: "7:00 PM | Friday, 27 March 2026",
            theme: "Enchanting Night Sky",
            men: "Classic Bandhgalas or tailored Indo-western in dark jewel tones.",
            women: "Sarees or elegant Indo-western in Wine, Emerald, or Midnight Blue."
        },
        {
            function: "Bandhan Bhai Behen Ro (Mayera)",
            location: "Shrida Green, Indore",
            time: "11:00 AM | Saturday, 28 March 2026",
            theme: "Mhaaro Riwaaz (Rajasthani)",
            men: "Classic kurta sets with Rajasthani Saafas in kesariya or leheriya.",
            women: "Traditional Bandhni, Leheriya, or Gota-patti work in Rani Pink."
        },
        {
            function: "An Evening of Elegance (Reception)",
            location: "Shrida Green, Indore",
            time: "7:30 PM | Saturday, 28 March 2026",
            theme: "Formal Glamour",
            men: "Tuxedos or sharp dark suits.",
            women: "Evening gowns or shimmering sarees."
        },
        {
            function: "Rango Ka Mela (Haldi)",
            location: "The Westin, Pushkar",
            time: "12:00 PM | Monday, 30 March 2026",
            theme: "Rajasthani Carnival",
            men: "Vibrant kurtas with royal flair and heritage prints.",
            women: "Traditional silhouettes with Leheriya and Bandhej detailing."
        },
        {
            function: "Sitaron Ki Mehfil (Sangeet)",
            location: "The Westin, Pushkar",
            time: "7:00 PM | Monday, 30 March 2026",
            theme: "Filmy Glam",
            men: "Sharp suits, Tuxedos, or bold Bandhgalas.",
            women: "Glamorous sarees or dramatic heavy Lehengas."
        },
        {
            function: "Rangilo Pushkar (Pool Party/Holi)",
            location: "The Westin, Pushkar",
            time: "11:00 AM | Tuesday, 31 March 2026",
            theme: "Subtle Colors for Holi",
            men: "White Kurta Pyjama with a rangeen (colorful) dupatta.",
            women: "White Salwar Kurti or chic cord sets with colorful accents."
        },
        {
            function: "Saat Sur, Saat Vachan (Phere)",
            location: "The Westin, Pushkar",
            time: "7:00 PM | Tuesday, 31 March 2026",
            theme: "Heritage & Majestic",
            men: "Regal Sherwanis or Bandhgalas.",
            women: "Silk sarees or heirloom Lehengas."
        }
    ];

    return (
        <section className="dresscode-section">
            <div className="container">
                <h2 className="dresscode-title">Wedding Lookbook</h2>
                <p className="dresscode-subtitle">Dress to Celebrate</p>
                <div className="gold-accent-line"></div>

                <div className="lookbook-vertical-stack">
                    {lookbook.map((item, index) => (
                        <div key={index} className="lookbook-card">
                            <div className="side-accent"></div>
                            <span className="card-bg-number">0{index + 1}</span>

                            <div className="lookbook-header">
                                <span className="function-label">{item.function}</span>
                                <span className="function-meta">📍 {item.location}</span>
                                <span className="function-meta">⏰ {item.time}</span>
                                <h3 className="theme-heading">Theme: {item.theme}</h3>
                            </div>

                            <div className="lookbook-highlights">
                                <div className="highlight-box">
                                    <span className="gender-bold">FOR HER</span>
                                    <p className="details-text">{item.women}</p>
                                </div>
                                <div className="highlight-box">
                                    <span className="gender-bold">FOR HIM</span>
                                    <p className="details-text">{item.men}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <img src="./champane.png" alt="Decoration" className="animated-vase" />
            </div>
        </section>
    );
};

export default DressCodeSection;