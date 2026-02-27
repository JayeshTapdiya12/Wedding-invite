const Flowers = () => {
    return (
        <>
            {Array.from({ length: 20 }).map((_, i) => (
                <div
                    key={i}
                    className="flower"
                    style={{
                        left: Math.random() * 100 + "vw",
                        animationDuration: 5 + Math.random() * 5 + "s",
                    }}
                >
                    🌸
                </div>
            ))}
        </>
    );
};

export default Flowers;