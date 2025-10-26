import Hero from '../../components/Hero/Hero';
import { poolPyramids, pool, bathtubPyramidsFlower, diningPyramids, bedRomantic, spa, shower, bathroomPyramidsView, room2beds, mosque, dining, bathroom } from '../../assets/images';

export default function HomePage() {
    return (
        <div>
            <Hero 
                title="7 Gates Boutique Hotel Egypt"
                subtitle="Experience luxury and comfort near the majestic Pyramids of Giza"
                backgroundImage={poolPyramids}
            />
            
            <div className="py-16 px-6 bg-gradient-to-b from-palace-900 to-palace-800">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-6 text-brand-400 font-display">Welcome to Luxury</h2>
                        <p className="text-xl text-brand-100/80 max-w-3xl mx-auto leading-relaxed mb-12">
                            Discover the perfect blend of modern luxury and ancient wonder at 7 Gates Boutique Hotel Egypt. Where elegance meets Egyptian heritage in the shadow of the Great Pyramids.
                        </p>
                    </div>
                    
                    <div className="grid md:grid-cols-3 gap-8 mb-16">
                        <div className="bg-brand-50/10 backdrop-blur-sm rounded-xl p-8 border border-brand-400/20 text-center">
                            <div className="w-16 h-16 bg-brand-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                <i className="fas fa-mountain text-white text-2xl"></i>
                            </div>
                            <h3 className="text-xl font-semibold mb-4 text-brand-300">Pyramid Views</h3>
                            <p className="text-brand-100/80">
                                Wake up to breathtaking views of the ancient Pyramids of Giza from your luxury suite.
                            </p>
                        </div>
                        
                        <div className="bg-brand-50/10 backdrop-blur-sm rounded-xl p-8 border border-brand-400/20 text-center">
                            <div className="w-16 h-16 bg-brand-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                <i className="fas fa-gem text-white text-2xl"></i>
                            </div>
                            <h3 className="text-xl font-semibold mb-4 text-brand-300">Luxury Amenities</h3>
                            <p className="text-brand-100/80">
                                Indulge in our spa, infinity pool, jacuzzi, and world-class dining experiences.
                            </p>
                        </div>
                        
                        <div className="bg-brand-50/10 backdrop-blur-sm rounded-xl p-8 border border-brand-400/20 text-center">
                            <div className="w-16 h-16 bg-brand-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                <i className="fas fa-landmark text-white text-2xl"></i>
                            </div>
                            <h3 className="text-xl font-semibold mb-4 text-brand-300">Cultural Heritage</h3>
                            <p className="text-brand-100/80">
                                Immerse yourself in authentic Egyptian culture with exclusive tours and experiences.
                            </p>
                        </div>
                    </div>
                    
                    <div className="bg-brand-50/5 rounded-2xl p-12 border border-brand-400/10 text-center mb-16">
                        <h3 className="text-3xl font-semibold mb-6 text-brand-400 font-display">Your Gateway to Ancient Wonders</h3>
                        <p className="text-lg text-brand-100/80 max-w-4xl mx-auto leading-relaxed">
                            Experience the magic of Egypt from our exclusive location on Pyramids Road. Our boutique hotel offers unparalleled access to the Giza complex while providing a serene oasis of comfort and sophistication. From our rooftop infinity pool to our award-winning restaurants, every moment is crafted to create unforgettable memories.
                        </p>
                    </div>
                    
                    <div className="text-center mb-12">
                        <h3 className="text-3xl font-semibold mb-6 text-brand-400 font-display">Experience Our Luxury</h3>
                        <p className="text-brand-100/80 max-w-2xl mx-auto">Discover the finest amenities and breathtaking views that await you</p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-6 gap-4 auto-rows-[200px]">
                        {/* Large featured image - Pool with pyramids */}
                        <div className="md:col-span-3 md:row-span-2 relative">
                            <div className="bg-brand-50/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-brand-400/20 h-full group cursor-pointer relative">
                                <img 
                                    src={poolPyramids}
                                    alt="Pool with Pyramids View"
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="absolute bottom-6 left-6 text-white">
                                        <h4 className="text-2xl font-bold mb-2">Infinity Pool</h4>
                                        <p className="text-sm opacity-90">Stunning views of the Great Pyramids</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        {/* Dining with pyramids */}
                        <div className="md:col-span-2 relative">
                            <div className="bg-brand-50/10 backdrop-blur-sm rounded-xl overflow-hidden border border-brand-400/20 h-full group cursor-pointer relative">
                                <img 
                                    src={diningPyramids}
                                    alt="Dining with Pyramids View"
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="absolute bottom-4 left-4 text-white">
                                        <h5 className="font-semibold">Fine Dining</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        {/* Spa treatment */}
                        <div className="relative">
                            <div className="bg-brand-50/10 backdrop-blur-sm rounded-xl overflow-hidden border border-brand-400/20 h-full group cursor-pointer">
                                <img 
                                    src={spa}
                                    alt="Spa Treatment"
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                        </div>
                        
                        {/* Bathtub with flowers */}
                        <div className="md:col-span-2 relative">
                            <div className="bg-brand-50/10 backdrop-blur-sm rounded-xl overflow-hidden border border-brand-400/20 h-full group cursor-pointer relative">
                                <img 
                                    src={bathtubPyramidsFlower}
                                    alt="Luxury Bathtub"
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="absolute bottom-4 left-4 text-white">
                                        <h5 className="font-semibold">Luxury Bath</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        {/* Romantic bedroom */}
                        <div className="relative">
                            <div className="bg-brand-50/10 backdrop-blur-sm rounded-xl overflow-hidden border border-brand-400/20 h-full group cursor-pointer">
                                <img 
                                    src={bedRomantic}
                                    alt="Romantic Suite"
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                        </div>
                        
                        {/* Pool area */}
                        <div className="relative">
                            <div className="bg-brand-50/10 backdrop-blur-sm rounded-xl overflow-hidden border border-brand-400/20 h-full group cursor-pointer">
                                <img 
                                    src={pool}
                                    alt="Pool Area"
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                        </div>
                        
                        {/* Bathroom with pyramid view */}
                        <div className="md:col-span-2 relative">
                            <div className="bg-brand-50/10 backdrop-blur-sm rounded-xl overflow-hidden border border-brand-400/20 h-full group cursor-pointer relative">
                                <img 
                                    src={bathroomPyramidsView}
                                    alt="Bathroom with Pyramid View"
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="absolute bottom-4 left-4 text-white">
                                        <h5 className="font-semibold">Pyramid Views</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        {/* Twin beds room */}
                        <div className="relative">
                            <div className="bg-brand-50/10 backdrop-blur-sm rounded-xl overflow-hidden border border-brand-400/20 h-full group cursor-pointer">
                                <img 
                                    src={room2beds}
                                    alt="Twin Bed Room"
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                        </div>
                        
                        {/* Dining area */}
                        <div className="relative">
                            <div className="bg-brand-50/10 backdrop-blur-sm rounded-xl overflow-hidden border border-brand-400/20 h-full group cursor-pointer">
                                <img 
                                    src={dining}
                                    alt="Dining Area"
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                        </div>
                        
                        {/* Mosque view */}
                        <div className="relative">
                            <div className="bg-brand-50/10 backdrop-blur-sm rounded-xl overflow-hidden border border-brand-400/20 h-full group cursor-pointer">
                                <img 
                                    src={mosque}
                                    alt="Cultural Views"
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
