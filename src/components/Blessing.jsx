import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion, AnimatePresence } from "framer-motion";
import "../style/Blessing.css";

const Blessings = () => {
    const form = useRef(null);
    const [submitted, setSubmitted] = useState(false);
    const [showHearts, setShowHearts] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_4f3c1np",      // your service ID
                "template_imep6uh",     // your template ID
                form.current,
                "JAkhCVod6Y6D-pSRz"     // your public key
            )
            .then(() => {
                setSubmitted(true);
                setShowHearts(true);

                setTimeout(() => {
                    setSubmitted(false);
                    setShowHearts(false);
                }, 3000);

                form.current.reset();
            })
            .catch((error) => {
                console.error("EmailJS Error:", error);
                alert("Failed to send, please try again.");
            });
    };

    return (
        <section className="blessings-section">
            <div className="blessings-container">

                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="title">Send Your Blessings</h2>
                    <div className="divider"></div>
                </motion.div>

                <form ref={form} onSubmit={sendEmail} className="blessings-form">

                    <input
                        type="text"
                        name="user_name"
                        placeholder="Your Name"
                        required
                    />

                    <input
                        type="email"
                        name="user_email"
                        placeholder="Your Email"
                        required
                    />

                    <textarea
                        name="message"
                        placeholder="Your wishes and blessings..."
                        rows={4}
                        required
                    />

                    <button
                        type="submit"
                        disabled={submitted}
                        className={submitted ? "sent" : ""}
                    >
                        {submitted ? "Thank you for your blessings!" : "Send Wishes"}
                    </button>

                </form>

                <AnimatePresence>
                    {showHearts && (
                        <motion.div
                            className="heart-burst"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            {[...Array(8)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    className="heart"
                                    initial={{ y: 0, opacity: 1 }}
                                    animate={{
                                        y: -120,
                                        opacity: 0,
                                        x: (Math.random() - 0.5) * 100,
                                    }}
                                    transition={{ duration: 2 }}
                                >
                                    ❤
                                </motion.div>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>

            </div>
        </section>
    );
};

export default Blessings;