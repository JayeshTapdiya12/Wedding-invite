const RSVP = () => {
    const handleClick = () => {
        const message = "I will attend your wedding ❤️";
        window.open(
            `https://wa.me/919999999999?text=${encodeURIComponent(message)}`,
            "_blank"
        );
    };

    return (
        <section className="section">
            <h2>RSVP</h2>
            <button className="whatsapp-btn" onClick={handleClick}>
                Confirm via WhatsApp
            </button>
        </section>
    );
};

export default RSVP;