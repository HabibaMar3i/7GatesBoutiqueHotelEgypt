import Hero from '../../components/Hero/Hero';
import { shower, bathroomPyramidsView, diningPyramids, room2beds, mosque, pool, poolPyramids, bedRomantic, bathtubPyramidsFlower, dining, spa } from '../../assets/images';

export default function Gallery() {
    return (
        <div>
            <Hero 
                title="Gallery"
                subtitle="Explore our beautiful spaces and stunning views"
                backgroundImage={shower}
                height="h-96"
            />
            
            <div className="py-16 px-6 bg-gradient-to-b from-palace-900 to-palace-800">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-6 text-brand-400 font-display">Visual Journey</h2>
                        <p className="text-xl text-brand-100/80 max-w-3xl mx-auto leading-relaxed">
                            Discover the beauty and elegance of 7 Gates Boutique Hotel through our curated gallery
                        </p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                        <div className="bg-brand-50/10 backdrop-blur-sm rounded-xl overflow-hidden border border-brand-400/20">
                            <img 
                                src={bathroomPyramidsView} 
                                alt="Room Bathroom with Pyramids View"
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                                <h3 className="text-lg font-semibold text-brand-300 mb-2">Pyramid View Suite</h3>
                                <p className="text-brand-100/80 text-sm">Luxurious bathroom with breathtaking pyramid vistas</p>
                            </div>
                        </div>
                        
                        <div className="bg-brand-50/10 backdrop-blur-sm rounded-xl overflow-hidden border border-brand-400/20">
                            <img 
                                src={spa} 
                                alt="Spa Treatment"
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                                <h3 className="text-lg font-semibold text-brand-300 mb-2">Spa & Wellness</h3>
                                <p className="text-brand-100/80 text-sm">Rejuvenating treatments and wellness experiences</p>
                            </div>
                        </div>
                        
                        <div className="bg-brand-50/10 backdrop-blur-sm rounded-xl overflow-hidden border border-brand-400/20">
                            <img 
                                src={diningPyramids} 
                                alt="Dining with Pyramids View"
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                                <h3 className="text-lg font-semibold text-brand-300 mb-2">Fine Dining</h3>
                                <p className="text-brand-100/80 text-sm">Exquisite dining with stunning pyramid views</p>
                            </div>
                        </div>
                        
                        <div className="bg-brand-50/10 backdrop-blur-sm rounded-xl overflow-hidden border border-brand-400/20">
                            <img 
                                src={shower} 
                                alt="Luxury Bathroom Shower"
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                                <h3 className="text-lg font-semibold text-brand-300 mb-2">Luxury Bathrooms</h3>
                                <p className="text-brand-100/80 text-sm">Premium marble bathrooms with modern amenities</p>
                            </div>
                        </div>
                        
                        <div className="bg-brand-50/10 backdrop-blur-sm rounded-xl overflow-hidden border border-brand-400/20">
                            <img 
                                src={room2beds} 
                                alt="Twin Bed Room"
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                                <h3 className="text-lg font-semibold text-brand-300 mb-2">Comfortable Rooms</h3>
                                <p className="text-brand-100/80 text-sm">Spacious rooms with premium bedding and amenities</p>
                            </div>
                        </div>
                        
                        <div className="bg-brand-50/10 backdrop-blur-sm rounded-xl overflow-hidden border border-brand-400/20">
                            <img 
                                src={mosque} 
                                alt="Mosque View"
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                                <h3 className="text-lg font-semibold text-brand-300 mb-2">Cultural Views</h3>
                                <p className="text-brand-100/80 text-sm">Beautiful views of local architecture and culture</p>
                            </div>
                        </div>
                        
                        <div className="bg-brand-50/10 backdrop-blur-sm rounded-xl overflow-hidden border border-brand-400/20">
                            <img 
                                src={pool} 
                                alt="Swimming Pool"
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                                <h3 className="text-lg font-semibold text-brand-300 mb-2">Swimming Pool</h3>
                                <p className="text-brand-100/80 text-sm">Refreshing pool area for relaxation</p>
                            </div>
                        </div>
                        
                        <div className="bg-brand-50/10 backdrop-blur-sm rounded-xl overflow-hidden border border-brand-400/20">
                            <img 
                                src={poolPyramids} 
                                alt="Pool with Pyramids View"
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                                <h3 className="text-lg font-semibold text-brand-300 mb-2">Pool & Pyramids</h3>
                                <p className="text-brand-100/80 text-sm">Stunning pool area with pyramid backdrop</p>
                            </div>
                        </div>
                        
                        <div className="bg-brand-50/10 backdrop-blur-sm rounded-xl overflow-hidden border border-brand-400/20">
                            <img 
                                src={bedRomantic} 
                                alt="Decorated Room with Flowers"
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                                <h3 className="text-lg font-semibold text-brand-300 mb-2">Decorated Suites</h3>
                                <p className="text-brand-100/80 text-sm">Beautifully decorated rooms with floral arrangements</p>
                            </div>
                        </div>
                        
                        <div className="bg-brand-50/10 backdrop-blur-sm rounded-xl overflow-hidden border border-brand-400/20">
                            <img 
                                src={bathtubPyramidsFlower} 
                                alt="Bathtub with Pyramids View"
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                                <h3 className="text-lg font-semibold text-brand-300 mb-2">Luxury Bathtub</h3>
                                <p className="text-brand-100/80 text-sm">Relaxing bathtub with stunning pyramid views</p>
                            </div>
                        </div>
                        
                        <div className="bg-brand-50/10 backdrop-blur-sm rounded-xl overflow-hidden border border-brand-400/20">
                            <img 
                                src={dining} 
                                alt="Fine Dining Area"
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                                <h3 className="text-lg font-semibold text-brand-300 mb-2">Elegant Dining</h3>
                                <p className="text-brand-100/80 text-sm">Sophisticated dining spaces for memorable meals</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="bg-brand-50/5 rounded-2xl p-12 border border-brand-400/10 text-center">
                        <h3 className="text-3xl font-semibold mb-6 text-brand-400 font-display">Experience the Magic</h3>
                        <p className="text-lg text-brand-100/80 max-w-4xl mx-auto leading-relaxed">
                            Every corner of 7 Gates Boutique Hotel tells a story of luxury, heritage, and unforgettable moments. From intimate dining spaces to expansive terraces overlooking the ancient wonders, our hotel offers countless opportunities to create lasting memories in one of the world's most iconic destinations.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
