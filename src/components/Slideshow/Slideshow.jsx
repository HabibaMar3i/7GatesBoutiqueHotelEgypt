import { useState, useEffect } from 'react';
import { 
    pool, 
    reception, 
    wholeBuilding3, 
    roomPyramids, 
    diningPyramids, 
    viewPool, 
    roomMaster, 
} from '../../assets/images';

export default function Slideshow() {
    const [currentSlide, setCurrentSlide] = useState(0);
    
    const slides = [
        pool,
        reception,
        wholeBuilding3,
        roomPyramids,
        diningPyramids,
        viewPool,
        roomMaster,
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 3500);
        return () => clearInterval(timer);
    }, [slides.length]);

    return (
        <div className="relative h-screen overflow-hidden">
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-700 ${
                        index === currentSlide ? 'opacity-100' : 'opacity-0'
                    }`}
                    style={{ backgroundImage: `url(${slide})` }}
                >
                    <div className="absolute inset-0 bg-black/40"></div>
                </div>
            ))}
            
            <div className="relative z-10 flex items-center justify-center h-full">
                <div className="text-center text-white px-6">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 font-display">
                        Welcome to Luxury
                    </h1>
                    <p className="text-xl md:text-2xl max-w-3xl mx-auto">
                        Experience the finest boutique hospitality near the ancient Pyramids of Giza
                    </p>
                </div>
            </div>
        </div>
    );
}