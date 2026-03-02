import React from "react";
import '../style/venue.css';

const Venue = () => {
    return (
        <section className="venue-section-gold">
            <div className="venue-container">
                <h2 className="venue-main-title">The Venue</h2>
                <p className="venue-subtitle">WHERE WE CELEBRATE</p>

                <div className="venue-grid">
                    {/* Indore Venue Card */}
                    <div className="venue-card">
                        <div className="venue-illustration">
                            <img src="/indore-venue.png" alt="Shrida Green Indore" />
                        </div>
                        <h3 className="venue-name">Shrida Green</h3>
                        <p className="venue-date">27 March 2026</p>
                        <p className="venue-address">
                            CAT Road, Indore, Madhya Pradesh
                        </p>
                        <a
                            href="https://maps.google.com/?q=Glory+by+Shridha,+CAT+Road,+IndoreThe"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="map-link-btn"
                        >
                            VIEW LARGER MAP
                        </a>
                    </div>

                    {/* Pushkar Venue Card */}
                    <div className="venue-card">
                        <div className="venue-illustration">
                            <img src="/pushkar-venue.png" alt="The Westin Pushkar" />
                        </div>
                        <h3 className="venue-name">The Westin Pushkar</h3>
                        <p className="venue-date">30 March 2026</p>
                        <p className="venue-address">
                            Khasra No. 1242, 1243, 1196, Pushkar, Rajasthan
                        </p>
                        <a
                            href="https://maps.google.com/?q=The+Westin+Pushkar+Resort+%26+Spa,+Pushkar,+Rajasthan,+India"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="map-link-btn"
                        >
                            VIEW LARGER MAP
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Venue;