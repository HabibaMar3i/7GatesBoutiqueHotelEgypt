export default function ImageGrid() {
    const images = [
        { src: "/bathroom.webp", alt: "Luxury Bathroom" },
        { src: "/dining (2).webp", alt: "Dining Area" },
        { src: "/jacussi (2).webp", alt: "Jacuzzi" },
        { src: "/view.webp", alt: "Hotel View" }
    ];

    return (
        <section className="py-12 px-4 overflow-hidden">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {images.map((image, index) => (
                        <div key={index} className="h-80 md:h-96">
                            <img 
                                src={image.src} 
                                alt={image.alt} 
                                className="w-full h-full object-cover rounded transition-transform duration-300 hover:scale-105" 
                                loading="lazy"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}