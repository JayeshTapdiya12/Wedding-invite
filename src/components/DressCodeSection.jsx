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
            image: "https://res.cloudinary.com/dwsv6ggaa/image/upload/v1772954293/mehendi-look_gmz88m.png"
        },
        {
            function: "Sama-E-Ishq (Bollywood Night)",
            location: "Shrida Green, Indore",
            time: "7:00 PM | 27 March",
            theme: "Enchanting Night Sky",
            image: "https://res.cloudinary.com/dwsv6ggaa/image/upload/v1772955895/68afd5b3-31a9-425a-acac-a0773c8fe765_dfhn8z.jpg"
        },
        {
            function: "Bandhan Bhai Behen Ro (Mayera)",
            location: "Shrida Green, Indore",
            time: "11:00 AM | 28 March",
            theme: "Mhaaro Riwaaz (Rajasthani)",
            image: "https://res.cloudinary.com/dwsv6ggaa/image/upload/v1772955900/f1bb7b4f-8047-4297-ac35-ff137eb2771f_cmvbgq.jpg"
        },
        {
            function: "An Evening of Elegance (Reception)",
            location: "Shrida Green, Indore",
            time: "7:30 PM | 28 March",
            theme: "Formal Glamour",
            image: "https://res.cloudinary.com/dwsv6ggaa/image/upload/v1772955933/a9e65b50-4d98-420a-815b-2b0da3b0f9a3_nqdiea.jpg"
        },
        {
            function: "Rango Ka Mela (Haldi)",
            location: "The Westin, Pushkar",
            time: "12:00 PM | 30 March",
            theme: "Rajasthani Carnival",
            image: "https://res.cloudinary.com/dwsv6ggaa/image/upload/v1772955944/a59ce746-c3cf-450b-b14d-497fb0e101e7_vqhhhx.jpg"
        },
        {
            function: "Sitaron Ki Mehfil (Sangeet)",
            location: "The Westin, Pushkar",
            time: "7:00 PM | 30 March",
            theme: "Filmy Glam",
            image: "https://res.cloudinary.com/dwsv6ggaa/image/upload/v1772955960/b294d8bb-9042-429f-bfcd-c0f7243f5a7c_ng2h2v.jpg"
        },
        {
            function: "Rangilo Pushkar (Pool Party)",
            location: "The Westin, Pushkar",
            time: "11:00 AM | 31 March",
            theme: "Subtle Colors for Holi",
            image: "https://res.cloudinary.com/dwsv6ggaa/image/upload/v1772955982/ef5455f7-540c-47be-b6fc-2a08a16d0231_g29vca.jpg"
        },
        {
            function: "Saat Sur, Saat Vachan (Phere)",
            location: "The Westin, Pushkar",
            time: "7:00 PM | 31 March",
            theme: "Heritage & Majestic",
            image: "https://res.cloudinary.com/dwsv6ggaa/image/upload/v1772955993/c812da81-f3ed-438b-b606-566c43fc50a0_hpkkd2.jpg"
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