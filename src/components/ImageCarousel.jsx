import React from 'react';
import '../style/ImageCarousel.css';

const ImageCarousel = () => {
    const images = [
        "./img1.jpeg",
        "./img2.jpeg",
        "./img3.jpeg",
        "./img4.jpeg",
        "./img5.jpeg",
        "./img6.jpeg",


        // "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1000",
        // "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1000",
        // "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1000",
        // "https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=1000"
    ];

    const loopImages = [...images, ...images];

    return (
        <section className="carousel-dark-section">
            <div className="carousel-header">
                <span className="subtitle">MOMENTS</span>
                <h2 className="title">Our Journey</h2>
            </div>

            <div className="carousel-wrapper">
                <div className="carousel-track">
                    {loopImages.map((img, index) => (
                        <div className="carousel-card" key={index}>
                            <img src={img} alt={`Wedding Moment ${index + 1}`} />
                        </div>
                    ))}
                </div>
            </div>

            {/* Decorative Flask Section */}
            <div style={{ height: '3vh' }}></div>
            <div style={{ height: '3vh' }}></div>

            <div className="gold-line"></div>

            <div className="decorative-divider">
                <img src="/flask.png" alt="Decorative Vase" className="flask-image" />
            </div>
        </section>
    );
};

export default ImageCarousel;