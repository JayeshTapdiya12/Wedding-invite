import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../style/Gallery.css';

const Gallery = () => {
    const [selectedImg, setSelectedImg] = useState(null);

    const images = [
        {
            id: 1,
            url: "https://res.cloudinary.com/dwsv6ggaa/image/upload/v1772954264/img1_vixx3s.jpg",
            title: 'The First Chapter'
        },
        {
            id: 2,
            url: "https://res.cloudinary.com/dwsv6ggaa/image/upload/v1772954261/img2_mc93cp.jpg",
            title: 'Golden Hours'
        },
        {
            id: 3,
            url: "https://res.cloudinary.com/dwsv6ggaa/image/upload/v1772954260/img3_qwfuhh.jpg",
            title: 'Sweet Whispers'
        },

        {
            id: 5,
            url: "https://res.cloudinary.com/dwsv6ggaa/image/upload/v1772954259/img5_wmuklh.jpg",
            title: 'Hand in Hand'
        },
        {
            id: 4,
            url: "https://res.cloudinary.com/dwsv6ggaa/image/upload/v1772954259/img4_bfupnh.jpg",
            title: 'Better Together'
        },
        {
            id: 6,
            url: "https://res.cloudinary.com/dwsv6ggaa/image/upload/v1772954260/img6_texq08.jpg",
            title: 'Our Forever'
        },
    ];

    return (
        <section className="gallery-wrapper">
            <div className="gallery-header">
                <span className="script-text">Captured Moments</span>
                <h2 className="gallery-title">Our Love Story</h2>
                <div className="title-underline"></div>
            </div>

            <div className="bento-grid">
                {images.map((img, index) => (
                    <motion.div
                        key={img.id}
                        className={`grid-item item-${index + 1}`}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        onClick={() => setSelectedImg(img.url)}
                    >
                        <div className="image-card">
                            <img src={img.url} alt={img.title} />
                            <div className="image-overlay">
                                <p className="image-caption">{img.title}</p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Lightbox for full-screen view */}
            <AnimatePresence>
                {selectedImg && (
                    <motion.div
                        className="lightbox-modal"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImg(null)}
                    >
                        <motion.img
                            src={selectedImg}
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                        />
                        <span className="close-lightbox">&times;</span>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Gallery;