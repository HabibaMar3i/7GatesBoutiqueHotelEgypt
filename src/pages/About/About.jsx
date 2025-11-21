import Hero from '../../components/Hero/Hero';
import { pyramidsView, viewNight, lightDecorGood } from '../../assets/images';

export default function About() {
    return (
        <div>
            <Hero 
                title="About Us" 
                subtitle="Discover our story and commitment to exceptional hospitality"
                backgroundImage={pyramidsView}
                height="h-96"
            />
            
            <section className="py-24 px-4 md:px-12">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
                        <div>
                            <h2 className="text-4xl font-bold mb-6 text-[#ba8b4e] font-display">Our Story</h2>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                Nestled in the shadow of the ancient Pyramids of Giza, 7 Gates Boutique Hotel Egypt offers an extraordinary blend of modern luxury and timeless Egyptian heritage.
                            </p>
                        </div>
                        <div>
                            <img src={viewNight} alt="Hotel Reception" className="w-full h-80 object-cover rounded-lg" />
                        </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
                        <div className="md:order-2">
                            <h2 className="text-4xl font-bold mb-6 text-[#ba8b4e] font-display">Our Vision</h2>
                            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                We believe that luxury travel should be an immersive experience that connects guests with the rich cultural tapestry of Egypt. Our boutique hotel serves as a gateway to both ancient wonders and contemporary comfort.
                            </p>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                Every detail has been carefully curated to reflect the grandeur of pharaonic Egypt while providing the sophisticated amenities expected by today's discerning travelers.
                            </p>
                        </div>
                        <div className="md:order-1">
                            <img src={lightDecorGood} alt="Hotel Building" className="w-full h-80 object-cover rounded-lg" />
                        </div>
                    </div>
                    
                    <div className="bg-[#ba8b4e] rounded-lg p-12 mb-20">
                        <h2 className="text-4xl font-bold mb-6 text-white font-display text-center">Our Heritage</h2>
                        <p className="text-lg text-white leading-relaxed mb-6 text-center max-w-4xl mx-auto">
                            Located on the historic Pyramids Road, our hotel stands as a testament to Egypt's enduring allure. The seven gates in our name represent the seven wonders of hospitality: comfort, elegance, service, cuisine, culture, adventure, and memories.
                        </p>
                        <p className="text-lg text-white leading-relaxed text-center max-w-4xl mx-auto">
                            Each gate opens to a new dimension of your Egyptian journey, creating an unforgettable experience that honors both past and present.
                        </p>
                    </div>
                    
                    <div className="text-center">
                        <h2 className="text-4xl font-bold mb-8 text-[#ba8b4e] font-display">Experience Egypt Like Never Before</h2>
                        <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
                            From sunrise views of the Great Pyramid to sunset cocktails by our infinity pool, every moment at 7 Gates is designed to create lasting memories. Our dedicated team of hospitality professionals ensures that your stay exceeds expectations, whether you're here for adventure, relaxation, or cultural exploration.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}
