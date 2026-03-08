import React from 'react';
import '../style/ImageCarousel.css';

const ImageCarousel = () => {
    const images = [
        "https://res.cloudinary.com/dwsv6ggaa/image/upload/v1772954264/img1_vixx3s.jpg",
        "https://res.cloudinary.com/dwsv6ggaa/image/upload/v1772954260/img6_texq08.jpg",
        "https://res.cloudinary.com/dwsv6ggaa/image/upload/v1772954260/img3_qwfuhh.jpg",
        "https://res.cloudinary.com/dwsv6ggaa/image/upload/v1772954261/img2_mc93cp.jpg",
        "https://res.cloudinary.com/dwsv6ggaa/image/upload/v1772954259/img4_bfupnh.jpg",
        "https://res.cloudinary.com/dwsv6ggaa/image/upload/v1772954259/img5_wmuklh.jpg",



    ];

    const loopImages = [...images, ...images];

    return (
        <section className="carousel-dark-section">
            <div className="carousel-header">
                <h2 className="title">Moments to Cherish</h2>
                <br />
                <span className="subtitle">A glimpse into our journey together</span>
                <div className="gold-line"></div>

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
                <img src="https://res.cloudinary.com/dwsv6ggaa/image/upload/v1772955161/flask_su3hrm.png" alt="Decorative Vase" className="flask-image" />
            </div>
        </section>
    );
};

export default ImageCarousel;