import Slideshow from '../../components/Slideshow/Slideshow';
import Testimonials from '../../components/Testimonials/Testimonials';
import ImageGrid from '../../components/ImageGrid/ImageGrid';
import { roomMaster, rommTwinbed } from '../../assets/images';
import { Link } from 'react-router-dom';


export default function HomePage() {
    
    return (
        <div className="overflow-x-hidden bg-white min-h-screen">
            <Slideshow />
            <section className="bg-[#ba8b4e] py-24 px-4 md:px-12" data-aos="fade-up">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 data-aos="fade-up" className="text-4xl md:text-5xl font-bold mb-8 text-white font-display">
                        WELCOME TO 7 GATES
                    </h2>
                    <p data-aos="fade-up" data-aos-delay="200" className="text-lg md:text-xl text-white leading-relaxed">
                        Experience luxury beside the legendary Pyramids of Giza. Our boutique hotel offers breathtaking pyramid views and world-class hospitality just minutes from ancient wonders. Discover your gateway to Egypt's most iconic destination.
                    </p>
                </div>
            </section>
            
            <section className="bg-white py-24 px-4 md:px-12" data-aos="fade-up">
                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="md:w-1/2">
                            <img 
                                src={roomMaster} 
                                alt="Luxury Suite" 
                                className="w-full h-96 object-cover rounded-lg" 
                                loading="lazy"
                                data-aos="fade-right"
                            />
                        </div>
                        <div className="md:w-1/2">
                            <h2 data-aos="fade-right" className="text-4xl md:text-5xl font-bold mb-8 text-[#ba8b4e] font-display">
                                SUITES
                            </h2>
                            <p data-aos="fade-left" data-aos-delay="200" className="text-lg md:text-xl text-[#ba8b4e] leading-relaxed mb-8">
                                The hotel's luxury suites offer breathtaking views of the majestic Pyramids of Giza. Our suites and rooms are all uniquely designed but share uncompromised features: spacious layouts, high ceilings, beautiful décor, well-appointed bathrooms, carefully selected furnishings, and king-size beds dressed with the finest Egyptian cotton linens for ultimate comfort.
                            </p>
                            <Link to="/gallery" className="bg-[#ba8b4e] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#ba8b4e]/90 transition-colors inline-block no-underline">
                                View Gallery
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            
            <Testimonials />
            <ImageGrid />
            
            <section className="relative h-96 overflow-hidden">
                <img 
                    src={rommTwinbed} 
                    alt="Hotel Building" 
                    className="absolute inset-0 w-full h-full object-cover" 
                    loading="lazy"
                    data-aos="zoom-in"
                />
                <div className="absolute inset-0 bg-black/60"></div>
                <div className="relative z-10 flex items-center justify-center h-full px-6">
                    <div className="text-center text-white">
                        <h2 className="text-4xl md:text-5xl font-bold mb-8 font-display">
                            BOOK YOUR STAY
                        </h2>
                        <Link to="/book" className="bg-[#ba8b4e] text-white px-12 py-4 rounded-lg text-lg font-semibold hover:bg-[#ba8b4e]/90 transition-colors inline-block no-underline">
                            Reserve Now
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
