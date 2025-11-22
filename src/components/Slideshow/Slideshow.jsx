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
import { preloadImages } from '../../utils/imagePreloader';

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
        preloadImages(slides);
        
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 4000);
        return () => clearInterval(timer);
    }, [slides.length]);

    return (
        <div className="relative h-screen overflow-hidden w-full">
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-700 ${
                        index === currentSlide ? 'opacity-100' : 'opacity-0'
                    }`}
                >
                    <img 
                        src={slide} 
                        alt={`Slide ${index + 1}`}
                        className="w-full h-full object-cover object-center"
                        loading={index === 0 ? 'eager' : 'lazy'}
                    />
                    <div className="absolute inset-0 bg-black/40"></div>
                </div>
            ))}
            
            <div className="relative z-10 flex items-center justify-center h-full px-4">
                <div className="text-center text-white max-w-4xl mx-auto">
                    <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 font-display leading-tight">
                        Welcome to Luxury
                    </h1>
                    <p className="text-lg sm:text-xl md:text-2xl leading-relaxed">
                        Experience the finest boutique hospitality near the ancient Pyramids of Giza
                    </p>
                </div>
            </div>
        </div>
    );
}