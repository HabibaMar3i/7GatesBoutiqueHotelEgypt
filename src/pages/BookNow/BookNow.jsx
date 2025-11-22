import Hero from '../../components/Hero/Hero';
import { roomPyramids, roomCurtains, roomPyramids2 } from '../../assets/images';


export default function BookNow() {
    return (
        <div className="bg-white min-h-screen overflow-x-hidden">
            <Hero 
                title="Book Your Stay" 
                subtitle="Reserve your luxury experience at 7 Gates Boutique Hotel"
                backgroundImage={roomPyramids}
                height="h-96"
            />
            
            <section className="py-24 px-4 md:px-12">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
                        <div>
                            <img src={roomCurtains} alt="Hotel Reception" className="w-full h-96 object-cover rounded-lg" data-aos="fade-left" />
                        </div>
                        <div>
                            <h2 data-aos="fade-right" className="text-4xl font-bold mb-8 text-[#ba8b4e] font-display">Make Your Reservation</h2>
                            <p data-aos="fade-left" data-aos-delay="200" className="text-lg text-gray-700 mb-8 leading-relaxed">
                                Experience unparalleled luxury at 7 Gates Boutique Hotel Egypt. Our dedicated reservations team is ready to help you plan your perfect stay near the ancient Pyramids of Giza.
                            </p>
                            
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <i className="fas fa-phone text-[#ba8b4e] text-xl mt-1"></i>
                                    <div>
                                        <p className="text-lg text-gray-700">
                                            Call us directly at{' '}
                                            <a href="tel:+201001600300" className="text-[#ba8b4e] hover:text-[#ba8b4e]/80 font-semibold">
                                                +20 1001600300
                                            </a>
                                        </p>
                                    </div>
                                </div>
                                
                                <div className="flex items-start gap-4">
                                    <i className="fas fa-envelope text-[#ba8b4e] text-xl mt-1"></i>
                                    <div>
                                        <p className="text-lg text-gray-700">
                                            Email us at{' '}
                                            <a href="mailto:reservations@7gatesboutiquehotelegypt.com" className="text-[#ba8b4e] hover:text-[#ba8b4e]/80 font-semibold underline break-all">
                                                reservations@7gatesboutiquehotelegypt.com
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="relative rounded-lg overflow-hidden">
                        <img src={roomPyramids2} alt="Hotel Building" className="w-full h-80 object-cover" data-aos="zoom-in" />
                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                            <div className="text-center text-white px-6">
                                <h3 data-aos="zoom-in" className="text-3xl font-bold mb-4 font-display">
                                    We Look Forward to Welcoming You
                                </h3>
                                <p className="text-xl">
                                    To our luxury oasis near the Pyramids
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}