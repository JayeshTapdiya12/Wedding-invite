const Venue = () => {
    return (
        <section className="section">
            <h2>Venue</h2>
            <p>Royal Palace Garden, Indore</p>

            <iframe
                src="https://www.google.com/maps/embed?pb="
                width="100%"
                height="300"
                style={{ border: 0 }}
                loading="lazy"
            ></iframe>
        </section>
    );
};

export default Venue;