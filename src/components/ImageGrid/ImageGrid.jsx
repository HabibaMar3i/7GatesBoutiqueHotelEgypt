import { bathroom, dining2, jacussi2, view } from '../../assets/images';

export default function ImageGrid() {
    const images = [
        { src: bathroom, alt: "Luxury Bathroom" },
        { src: dining2, alt: "Dining Area" },
        { src: jacussi2, alt: "Jacuzzi" },
        { src: view, alt: "Hotel View" }
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