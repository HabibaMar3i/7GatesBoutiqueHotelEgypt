import Hero from '../../components/Hero/Hero';
import { 
    sauna2, 
    pool, 
    roomMaster, 
    dining2, 
    view, 
    openBuffet,
    reception
} from '../../assets/images';


export default function Services() {
    const services = [
        {
            title: "Luxury Suites",
            description: "Elegantly appointed rooms and suites with panoramic pyramid views, marble bathrooms, and premium Egyptian cotton linens.",
            image: roomMaster
        },
        {
            title: "Infinity Pool",
            description: "Stunning rooftop infinity pool with unobstructed views of the Pyramids, perfect for sunset swims and stargazing.",
            image: pool
        },
        {
            title: "Spa & Jacuzzi",
            description: "Rejuvenating spa treatments and private jacuzzi suites offering ancient Egyptian wellness rituals and modern therapies.",
            image: sauna2
        },
        {
            title: "Gourmet Dining",
            description: "Award-winning restaurants featuring authentic Egyptian cuisine and international dishes crafted by renowned chefs.",
            image: dining2
        },
        {
            title: "Master Chefs",
            description: "Internationally trained culinary masters specializing in Egyptian delicacies, Mediterranean fusion, and contemporary cuisine.",
            image: openBuffet
        },
        {
            title: "Cultural Experiences",
            description: "Exclusive guided tours, private pyramid access, traditional music performances, and authentic cultural immersion programs.",
            image: reception
        }
    ];

    return (
        <div className="bg-white min-h-screen overflow-x-hidden">
            <Hero 
                title="Our Services" 
                subtitle="Luxury amenities and personalized experiences await you"
                backgroundImage={view}
                height="h-96"
            />
            
            <section className="py-24 px-4 md:px-12">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 data-aos="fade-up" className="text-4xl font-bold mb-8 text-[#ba8b4e] font-display">Luxury Amenities & Services</h2>
                        <p data-aos="fade" data-aos-delay="200" className="text-xl text-gray-700 max-w-3xl mx-auto">
                            Indulge in world-class amenities designed to elevate your Egyptian adventure
                        </p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-12 mb-20">
                        {services.map((service, index) => (
                            <div key={index} className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8`}>
                                <div className="md:w-1/2">
                                    <img src={service.image} alt={service.title} className="w-full h-64 object-cover rounded-lg" data-aos={index % 2 === 0 ? "fade-right" : "fade-left"} />
                                </div>
                                <div className="md:w-1/2">
                                    <h3 className="text-2xl font-bold mb-4 text-[#ba8b4e] font-display" data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}>{service.title}</h3>
                                    <p className="text-lg text-gray-700 leading-relaxed" data-aos={index % 2 === 0 ? "fade-left" : "fade-right"} data-aos-delay="200">{service.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    
                    <div className="bg-[#ba8b4e] rounded-lg p-12 mb-16">
                        <h2 data-aos="zoom-in" className="text-3xl font-bold mb-6 text-white font-display text-center">Personalized Service</h2>
                        <p data-aos="zoom-in" data-aos-delay="200" className="text-lg text-white leading-relaxed text-center max-w-4xl mx-auto">
                            Our dedicated concierge team is available 24/7 to curate personalized experiences, from private desert excursions to exclusive dining reservations. Every detail is tailored to create your perfect Egyptian getaway.
                        </p>
                    </div>
                    
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-gradient-to-br from-[#ba8b4e] to-[#ba8b4e]/80 p-8 rounded-xl text-white text-center transform hover:scale-105 transition-transform duration-300">
                            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                <i className="fas fa-clock text-2xl text-white"></i>
                            </div>
                            <div className="text-3xl font-bold mb-2">24/7</div>
                            <h3 className="text-lg font-semibold mb-2">Concierge Service</h3>
                            <p className="text-sm opacity-90">Always available to assist you</p>
                        </div>
                        <div className="bg-gradient-to-br from-[#ba8b4e] to-[#ba8b4e]/80 p-8 rounded-xl text-white text-center transform hover:scale-105 transition-transform duration-300">
                            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                <i className="fas fa-star text-2xl text-white"></i>
                            </div>
                            <div className="text-3xl font-bold mb-2">5-Star</div>
                            <h3 className="text-lg font-semibold mb-2">Luxury Rating</h3>
                            <p className="text-sm opacity-90">World-class hospitality standards</p>
                        </div>
                        <div className="bg-gradient-to-br from-[#ba8b4e] to-[#ba8b4e]/80 p-8 rounded-xl text-white text-center transform hover:scale-105 transition-transform duration-300">
                            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                <i className="fas fa-map-marker-alt text-2xl text-white"></i>
                            </div>
                            <div className="text-3xl font-bold mb-2">Premium</div>
                            <h3 className="text-lg font-semibold mb-2">Location</h3>
                            <p className="text-sm opacity-90">Steps away from the Pyramids</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}