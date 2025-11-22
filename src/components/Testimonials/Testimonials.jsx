import { useState, useEffect } from 'react';

export default function Testimonials() {
    const [currentSlide, setCurrentSlide] = useState(0);
    
    const testimonials = [
        {
            text: "Absolutely stunning location with breathtaking pyramid views. The service was exceptional and the rooms were luxurious.",
            name: "Sarah Johnson"
        },
        {
            text: "A magical experience staying so close to the pyramids. The staff made our stay unforgettable.",
            name: "Ahmed Hassan"
        },
        {
            text: "Perfect blend of modern luxury and ancient wonder. Highly recommend for anyone visiting Giza.",
            name: "Maria Rodriguez"
        },
        {
            text: "The pyramid views from our suite were incredible. Best hotel experience in Egypt!",
            name: "David Chen"
        }
    ];

    const backgroundImages = ["/view-pool.webp", "/dining-pyramids.webp", "/room-master.webp", "/spa.webp"];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % testimonials.length);
        }, 4000);
        return () => clearInterval(timer);
    }, [testimonials.length]);

    return (
        <section className="relative h-screen overflow-hidden">
            {backgroundImages.map((image, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-700 ${
                        index === currentSlide ? 'opacity-100' : 'opacity-0'
                    }`}
                    style={{ backgroundImage: `url(${image})` }}
                >
                    <div className="absolute inset-0 bg-black/50"></div>
                </div>
            ))}
            
            <div className="relative z-10 flex items-center justify-center h-full px-6">
                <div className="bg-[#ba8b4e] p-8 rounded-lg max-w-2xl text-center">
                    <p className="text-white text-lg md:text-xl mb-4 italic">
                        "{testimonials[currentSlide].text}"
                    </p>
                    <p className="text-white font-semibold">
                        - {testimonials[currentSlide].name}
                    </p>
                </div>
            </div>
        </section>
    );
}