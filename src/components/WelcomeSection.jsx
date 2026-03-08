import React from 'react';
import { motion } from 'framer-motion';
import '../style/WelcomeSection.css';

const WelcomeSection = () => {
    return (
        <section className="welcome-outer-wrapper">
            <div className="container mx-auto px-4">
                <motion.div
                    className="welcome-card-premium"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    {/* Decorative Top Border Ornament */}
                    <div className="card-ornament top-ornament">✦</div>

                    <div className="welcome-content-inner">
                        <h2 className="note-title">A Note From Us</h2>

                        <div className="note-body">
                            <p className="greeting">To our beloved family and friends,</p>

                            <p>
                                Every love story has a chapter that changes everything — and ours began with a
                                friendship that neither of us expected, grew into something neither of us could ignore,
                                and is now becoming a forever we can't wait to celebrate.
                            </p>

                            <p>
                                From Indore to Pushkar, from late-night conversations to early-morning chai, every
                                moment has led us here — to this celebration, with you.
                            </p>

                            <p>
                                We don't just want you at our wedding. We want you in this chapter, dancing with us,
                                laughing with us, and making memories that we'll hold close for the rest of our lives.
                            </p>

                            <p className="pushkar-sky">See you under the Pushkar sky.</p>
                        </div>

                        <div className="note-signature">
                            <p className="with-love">With all our love,</p>
                            <h3 className="couple-names">Priya & Saksham</h3>
                        </div>
                    </div>

                    {/* Decorative Bottom Border Ornament */}
                    <div className="card-ornament bottom-ornament">✦</div>
                </motion.div>
            </div>
        </section>
    );
};

export default WelcomeSection;