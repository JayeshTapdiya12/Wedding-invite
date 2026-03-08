import React from 'react';
import '../style/ExploreSection.css';

const ExploreSection = () => {
    const landmarks = [
        // INDORE PLACES
        {
            city: "Indore",
            title: "Rajwada Palace",
            desc: "The heartbeat of Indore, this seven-story palace features a blend of Maratha and Mughal architecture.",
            img: "https://res.cloudinary.com/dwsv6ggaa/image/upload/v1772955162/rajwada_byrxyq.png"
        },
        {
            city: "Indore",
            title: "Sarafa Bazaar",
            desc: "A jewelry market by day that transforms into a legendary night street food paradise after 9 PM.",
            img: "https://res.cloudinary.com/dwsv6ggaa/image/upload/v1772955753/images_dxrov5.jpg"
        },
        {
            city: "Indore",
            title: "56 Dukaan",
            desc: "A famous cluster of 56 shops offering the best of Indore's culinary delights and chaat.",
            img: "https://res.cloudinary.com/dwsv6ggaa/image/upload/v1772955192/56dukaan_jaftue.png"
        },
        {
            city: "Indore",
            title: "Lal Bagh Palace",
            desc: "One of the grandest monuments of the Holkar dynasty, reflecting a truly European lifestyle.",
            img: "https://res.cloudinary.com/dwsv6ggaa/image/upload/v1772955717/lalbagh_dhynuh.png"
        },
        // PUSHKAR PLACES
        {
            city: "Pushkar",
            title: "Pushkar Lake",
            desc: "A sacred oasis surrounded by 52 bathing ghats, offering a spiritual and serene atmosphere.",
            img: "https://res.cloudinary.com/dwsv6ggaa/image/upload/v1772955631/pushkar-lake_zrugk7.png"
        },
        {
            city: "Pushkar",
            title: "Brahma Temple",
            desc: "The only significant temple in the world dedicated to Lord Brahma, dating back to the 14th century.",
            img: "https://res.cloudinary.com/dwsv6ggaa/image/upload/v1772955295/brahma_temple_qmgosx.png"
        },
        {
            city: "Pushkar",
            title: "Pushkar Local Market",
            desc: "A vibrant maze of shops selling silver jewelry, colorful textiles, and traditional Rajasthani crafts.",
            img: "https://res.cloudinary.com/dwsv6ggaa/image/upload/v1772955163/pushkar_market_rbbf4j.png"
        },
        {
            city: "Pushkar",
            title: "Desert Safari",
            desc: "Experience the rustic charm of Rajasthan with a camel or jeep safari through the golden sand dunes.",
            img: "https://res.cloudinary.com/dwsv6ggaa/image/upload/v1772955680/desert_safari_gnphzg.png"
        }
    ];

    return (
        <section className="explore-gold-section">
            <div className="explore-container">
                <h2 className="explore-main-title">Explore the Cities</h2>
                <p className="explore-subtitle">LOCAL GEMS TO VISIT</p>
                <div className="gold-line"></div>

                <div className="landmark-vertical-stack">
                    {landmarks.map((place, index) => (
                        <div key={index} className="explore-card-vertical">
                            <div className="card-image-box">
                                <img src={place.img} alt={place.title} className="place-image" />
                            </div>
                            <div className="card-content-box">
                                <span className="city-tag">{place.city}</span>
                                <h3 className="place-name">{place.title}</h3>
                                <p className="place-description">{place.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="gold-line"></div>

                <div className="explore-footer">
                    <img src="./champane.png" alt="Decorative Gold Vase" className="vase-icon" />
                </div>

                <div className="gold-line"></div>
            </div>
        </section>
    );
};

export default ExploreSection;