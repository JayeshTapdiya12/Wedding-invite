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
                        <h2 className="note-title announcement">WE’RE GETTING MARRIED!!</h2>

                        <div className="note-body">
                            <p className="greeting">And we’d love for you to celebrate it with us.</p>

                            <p>
                                Two families met. Conversations happened. <br />
                                <i>Horoscopes probably approved.</i>
                            </p>

                            <p>
                                And somewhere between “formal introductions” and a few “coffee
                                conversations”, a forever quietly took shape.
                            </p>

                            <p className="text-italic">No dramatic twists. No long speeches.</p>

                            <p className="text-highlight">
                                Just two people, choosing each other — <br />
                                <strong>TODAY, TOMORROW, ALWAYS.</strong>
                            </p>

                            <p>Now it’s time to celebrate!</p>

                            <p>
                                Join us in Indore, celebrate with us under the <br />
                                <span className="text-gold">open skies of Pushkar!</span>
                            </p>

                            <div className="call-to-action">
                                <p>Clear your calendar , Cancel your excuses.</p>
                                <p className="final-note">
                                    Your presence isn’t optional — <strong>it’s part of the celebration!</strong>
                                </p>
                            </div>
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