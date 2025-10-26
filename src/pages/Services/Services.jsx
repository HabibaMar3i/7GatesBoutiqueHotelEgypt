import Hero from '../../components/Hero/Hero';
import { bathroom } from '../../assets/images';

export default function Services() {
    return (
        <div>
            <Hero 
                title="Our Services"
                subtitle="Luxury amenities and personalized experiences await you"
                backgroundImage={bathroom}
                height="h-96"
            />
            
            <div className="py-16 px-6 bg-gradient-to-b from-palace-900 to-palace-800">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-6 text-brand-400 font-display">Luxury Amenities & Services</h2>
                        <p className="text-xl text-brand-100/80 max-w-3xl mx-auto leading-relaxed">
                            Indulge in world-class amenities designed to elevate your Egyptian adventure
                        </p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                        <div className="bg-brand-50/10 backdrop-blur-sm rounded-xl p-8 border border-brand-400/20 text-center">
                            <div className="w-16 h-16 bg-brand-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                <i className="fas fa-bed text-white text-2xl"></i>
                            </div>
                            <h3 className="text-xl font-semibold mb-4 text-brand-300">Luxury Suites</h3>
                            <p className="text-brand-100/80 leading-relaxed">
                                Elegantly appointed rooms and suites with panoramic pyramid views, marble bathrooms, and premium Egyptian cotton linens.
                            </p>
                        </div>
                        
                        <div className="bg-brand-50/10 backdrop-blur-sm rounded-xl p-8 border border-brand-400/20 text-center">
                            <div className="w-16 h-16 bg-brand-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                <i className="fas fa-swimming-pool text-white text-2xl"></i>
                            </div>
                            <h3 className="text-xl font-semibold mb-4 text-brand-300">Infinity Pool</h3>
                            <p className="text-brand-100/80 leading-relaxed">
                                Stunning rooftop infinity pool with unobstructed views of the Pyramids, perfect for sunset swims and stargazing.
                            </p>
                        </div>
                        
                        <div className="bg-brand-50/10 backdrop-blur-sm rounded-xl p-8 border border-brand-400/20 text-center">
                            <div className="w-16 h-16 bg-brand-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                <i className="fas fa-spa text-white text-2xl"></i>
                            </div>
                            <h3 className="text-xl font-semibold mb-4 text-brand-300">Spa & Jacuzzi</h3>
                            <p className="text-brand-100/80 leading-relaxed">
                                Rejuvenating spa treatments and private jacuzzi suites offering ancient Egyptian wellness rituals and modern therapies.
                            </p>
                        </div>
                        
                        <div className="bg-brand-50/10 backdrop-blur-sm rounded-xl p-8 border border-brand-400/20 text-center">
                            <div className="w-16 h-16 bg-brand-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                <i className="fas fa-utensils text-white text-2xl"></i>
                            </div>
                            <h3 className="text-xl font-semibold mb-4 text-brand-300">Gourmet Dining</h3>
                            <p className="text-brand-100/80 leading-relaxed">
                                Award-winning restaurants featuring authentic Egyptian cuisine and international dishes crafted by renowned chefs.
                            </p>
                        </div>
                        
                        <div className="bg-brand-50/10 backdrop-blur-sm rounded-xl p-8 border border-brand-400/20 text-center">
                            <div className="w-16 h-16 bg-brand-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                <i className="fas fa-user-tie text-white text-2xl"></i>
                            </div>
                            <h3 className="text-xl font-semibold mb-4 text-brand-300">Master Chefs</h3>
                            <p className="text-brand-100/80 leading-relaxed">
                                Internationally trained culinary masters specializing in Egyptian delicacies, Mediterranean fusion, and contemporary cuisine.
                            </p>
                        </div>
                        
                        <div className="bg-brand-50/10 backdrop-blur-sm rounded-xl p-8 border border-brand-400/20 text-center">
                            <div className="w-16 h-16 bg-brand-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                <i className="fas fa-theater-masks text-white text-2xl"></i>
                            </div>
                            <h3 className="text-xl font-semibold mb-4 text-brand-300">Cultural Experiences</h3>
                            <p className="text-brand-100/80 leading-relaxed">
                                Exclusive guided tours, private pyramid access, traditional music performances, and authentic cultural immersion programs.
                            </p>
                        </div>
                    </div>
                    
                    <div className="bg-brand-50/5 rounded-2xl p-12 border border-brand-400/10 text-center">
                        <h3 className="text-3xl font-semibold mb-6 text-brand-400 font-display">Personalized Service</h3>
                        <p className="text-lg text-brand-100/80 max-w-4xl mx-auto leading-relaxed mb-8">
                            Our dedicated concierge team is available 24/7 to curate personalized experiences, from private desert excursions to exclusive dining reservations. Every detail is tailored to create your perfect Egyptian getaway.
                        </p>
                        <div className="grid md:grid-cols-3 gap-6 text-center">
                            <div>
                                <div className="text-2xl font-bold text-brand-400 mb-2">24/7</div>
                                <p className="text-brand-200">Concierge Service</p>
                            </div>
                            <div>
                                <div className="text-2xl font-bold text-brand-400 mb-2">5-Star</div>
                                <p className="text-brand-200">Luxury Rating</p>
                            </div>
                            <div>
                                <div className="text-2xl font-bold text-brand-400 mb-2">Premium</div>
                                <p className="text-brand-200">Location</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}