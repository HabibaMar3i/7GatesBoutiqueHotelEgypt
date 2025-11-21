import Slideshow from '../../components/Slideshow/Slideshow';
import Testimonials from '../../components/Testimonials/Testimonials';
import { roomMaster } from '../../assets/images';
import { Link } from 'react-router-dom';

export default function HomePage() {
    return (
        <div className="overflow-x-hidden">
            <Slideshow />
            <section className="bg-[#ba8b4e] py-24 px-4 md:px-12">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white font-display">
                        WELCOME TO 7 GATES
                    </h2>
                    <p className="text-lg md:text-xl text-white leading-relaxed">
                        Experience luxury beside the legendary Pyramids of Giza. Our boutique hotel offers breathtaking pyramid views and world-class hospitality just minutes from ancient wonders. Discover your gateway to Egypt's most iconic destination.
                    </p>
                </div>
            </section>
            
            <section className="bg-white py-24 px-4 md:px-12">
                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="md:w-1/2">
                            <img src={roomMaster} alt="Luxury Suite" className="w-full h-96 object-cover rounded-lg" />
                        </div>
                        <div className="md:w-1/2">
                            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-[#ba8b4e] font-display">
                                SUITES
                            </h2>
                            <p className="text-lg md:text-xl text-[#ba8b4e] leading-relaxed mb-8">
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
        </div>
    );
}
