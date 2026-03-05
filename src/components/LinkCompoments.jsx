import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../style/LinkComponents.css';

const navItems = [
    {
        title: "The Style Guide",
        subtitle: "Wardrobe & Dress Code",
        path: "/wardrobe",
        icon: "✨",
        description: "From Morpankh hues to Royal Rajwada—dress to impress."
    },
    {
        title: "Explore Indore & Pushkar",
        subtitle: "Cities to Explore",
        path: "/explore",
        icon: "🏛️",
        description: "Discover the hidden gems and street food of our home city."
    },
    {
        title: "Guest Guide",
        subtitle: "Travelling & Stay",
        path: "/guide",
        icon: "✈️",
        description: "Everything you need to know about reaching Pushkar & Indore."
    },
    {
        title: "The Moments",
        subtitle: "Wedding Gallery",
        path: "/gallery",
        icon: "📸",
        description: "Relive the celebrations through our shared lens."
    }
];

const LinkComponents = () => {
    return (
        <section className="links-section">
            <div className="links-header reveal">
                <span className="pre-title">Guest Essentials</span>
                <h2 className="main-title">Plan Your Journey</h2>
            </div>

            <div className="links-grid">
                {navItems.map((item, index) => (
                    <motion.div
                        key={index}
                        whileHover={{ y: -10 }}
                        className="link-card-wrapper"
                    >
                        <Link to={item.path} className="link-card">
                            <div className="card-icon">{item.icon}</div>
                            <div className="card-content">
                                <span className="card-subtitle">{item.subtitle}</span>
                                <h3 className="card-title">{item.title}</h3>
                                <p className="card-description">{item.description}</p>
                            </div>
                            <div className="card-footer">
                                <span>Explore Now</span>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </div>
                        </Link>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default LinkComponents;