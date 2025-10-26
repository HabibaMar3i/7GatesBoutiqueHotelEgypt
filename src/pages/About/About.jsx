import Hero from '../../components/Hero/Hero';
import { room2beds } from '../../assets/images';

export default function About() {
    return (
        <div>
            <Hero 
                title="About Us"
                subtitle="Discover our story and commitment to exceptional hospitality"
                backgroundImage={room2beds}
                // height="h-96"
            />
            
            <div className="py-16 px-6 bg-gradient-to-b from-palace-900 to-palace-800">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-6 text-brand-400 font-display">Our Story</h2>
                        <p className="text-xl text-brand-100/80 max-w-3xl mx-auto leading-relaxed">
                            Nestled in the shadow of the ancient Pyramids of Giza, 7 Gates Boutique Hotel Egypt offers an extraordinary blend of modern luxury and timeless Egyptian heritage.
                        </p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                        <div className="bg-brand-50/10 backdrop-blur-sm rounded-xl p-8 border border-brand-400/20">
                            <h3 className="text-2xl font-semibold mb-4 text-brand-300">Our Vision</h3>
                            <p className="text-brand-100/80 leading-relaxed mb-6">
                                We believe that luxury travel should be an immersive experience that connects guests with the rich cultural tapestry of Egypt. Our boutique hotel serves as a gateway to both ancient wonders and contemporary comfort.
                            </p>
                            <p className="text-brand-100/80 leading-relaxed">
                                Every detail has been carefully curated to reflect the grandeur of pharaonic Egypt while providing the sophisticated amenities expected by today's discerning travelers.
                            </p>
                        </div>
                        
                        <div className="bg-brand-50/10 backdrop-blur-sm rounded-xl p-8 border border-brand-400/20">
                            <h3 className="text-2xl font-semibold mb-4 text-brand-300">Our Heritage</h3>
                            <p className="text-brand-100/80 leading-relaxed mb-6">
                                Located on the historic Pyramids Road, our hotel stands as a testament to Egypt's enduring allure. The seven gates in our name represent the seven wonders of hospitality: comfort, elegance, service, cuisine, culture, adventure, and memories.
                            </p>
                            <p className="text-brand-100/80 leading-relaxed">
                                Each gate opens to a new dimension of your Egyptian journey, creating an unforgettable experience that honors both past and present.
                            </p>
                        </div>
                    </div>
                    
                    <div className="text-center bg-brand-50/5 rounded-2xl p-12 border border-brand-400/10">
                        <h3 className="text-3xl font-semibold mb-6 text-brand-400 font-display">Experience Egypt Like Never Before</h3>
                        <p className="text-lg text-brand-100/80 max-w-4xl mx-auto leading-relaxed">
                            From sunrise views of the Great Pyramid to sunset cocktails by our infinity pool, every moment at 7 Gates is designed to create lasting memories. Our dedicated team of hospitality professionals ensures that your stay exceeds expectations, whether you're here for adventure, relaxation, or cultural exploration.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
