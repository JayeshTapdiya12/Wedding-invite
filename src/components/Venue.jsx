import React from "react";
import { motion } from 'framer-motion';
import '../style/Venue.css';

// Ensure your images in /public are the full-width photos of the actual venues, not illustrations.
const venues = [
    {
        name: "Glory By Shrida",
        date: "27 - 28 March 2026",
        address: "CAT Road, Indore, Madhya Pradesh",
        image: "https://media.weddingz.in/photologue/images/shrida-greens-lawns-and-resort-rajendra-nagar-indore.png", // Full width photo
        mapLink: "https://maps.google.com/?q=Glory+by+Shridha,+CAT+Road,+IndoreThe"
    },
    {
        name: "The Westin Pushkar",
        date: "30 - 31 March 2026",
        address: "Khasra No. 1242, 1243, 1196, Pushkar, Rajasthan",
        image: "https://www.hotelscombined.com/himg/7d/51/fa/leonardo-2655516-840117-243056.jpg", // Full width photo
        mapLink: "https://maps.google.com/?q=The+Westin+Pushkar+Resort+%26+Spa,+Pushkar,+Rajasthan,+India"
    }
];

const Venue = () => {
    return (
        <section className="venue-section-gold">
            <div className="venue-container">
                {/* Header Animation */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="venue-main-title">The Venue</h2>
                    <p className="venue-subtitle">WHERE WE CELEBRATE</p>
                </motion.div>

                <div className="venue-grid">
                    {venues.map((venue, index) => (
                        <motion.div
                            key={index}
                            className="venue-card-luxe"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.8 }}
                        >
                            {/* Full-width image container with gradient overlay */}
                            <div className="venue-card-image">
                                <img src={venue.image} alt={venue.name} />
                                <div className="image-overlay"></div>
                            </div>

                            {/* Text Content area with specific padding */}
                            <div className="venue-card-body">
                                <h3 className="venue-name">{venue.name}</h3>
                                <p className="venue-date">{venue.date}</p>

                                <p className="venue-address">
                                    {venue.address}
                                </p>

                                <a
                                    href={venue.mapLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="map-link-btn"
                                >
                                    {/* Small icon placeholder before the text */}
                                    <span className="map-icon">ウェ</span>
                                    VIEW LARGER MAP
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Venue;