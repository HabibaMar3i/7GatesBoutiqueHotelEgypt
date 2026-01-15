import Hero from '../../components/Hero/Hero';




export default function Contact() {
    return (
        <div className="bg-white min-h-screen overflow-x-hidden">
            <Hero 
                title="Contact Us" 
                subtitle="Get in touch with us for reservations and inquiries"
                backgroundImage="/dining-pyramids-sun.webp"
                height="h-96"
            />
            
            <section className="py-24 px-4 md:px-12">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 data-aos="fade-up" className="text-4xl font-bold mb-8 text-[#ba8b4e] font-display">Get In Touch</h2>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-16 mb-20">
                        <div>
                            <h3 data-aos="fade-right" className="text-2xl font-bold mb-8 text-[#ba8b4e] font-display">Contact Information</h3>
                            
                            <div className="space-y-8">
                                <div className="flex items-center gap-4">
                                    <i className="fas fa-phone text-[#ba8b4e] text-xl"></i>
                                    <div>
                                        <h4 className="text-xl font-semibold mb-2 text-gray-800">Phone</h4>
                                        <a href="tel:+201001600307" className="text-lg text-[#ba8b4e] hover:text-[#ba8b4e]/80">
                                            +20 1001600300
                                        </a>
                                    </div>
                                </div>
                                
                                <div className="flex items-center gap-4">
                                    <i className="fas fa-envelope text-[#ba8b4e] text-xl"></i>
                                    <div>
                                        <h4 className="text-xl font-semibold mb-2 text-gray-800">Email</h4>
                                        <a href="mailto:info@7gatesboutiquehotelegypt.com" className="text-lg text-[#ba8b4e] hover:text-[#ba8b4e]/80 underline">
                                            info@7gatesboutiquehotelegypt.com
                                        </a>
                                    </div>
                                </div>
                                
                                <div className="flex items-center gap-4">
                                    <i className="fas fa-map-marker-alt text-[#ba8b4e] text-xl"></i>
                                    <div>
                                        <h4 className="text-xl font-semibold mb-2 text-gray-800">Address</h4>
                                        <p className="text-lg text-gray-700">
                                            11 Khattab St, Al Remaya, Al Haram, Giza Governorate
                                        </p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="mt-12">
                                <h4 className="text-xl font-semibold mb-4 text-gray-800">Follow Us</h4>
                                <div className="flex gap-4">
                                    <a href="https://instagram.com/7gatesboutiquehotelegypt" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-[#ba8b4e]/20 rounded-full flex items-center justify-center hover:bg-[#ba8b4e]/30">
                                        <i className="fab fa-instagram text-[#ba8b4e] text-xl"></i>
                                    </a>
                                    <a href="https://pinterest.com/7gatesboutiquehotelegypt" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-[#ba8b4e]/20 rounded-full flex items-center justify-center hover:bg-[#ba8b4e]/30">
                                        <i className="fab fa-pinterest text-[#ba8b4e] text-xl"></i>
                                    </a>
                                    <a href="https://tiktok.com/@7gatesboutiquehotelegypt" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-[#ba8b4e]/20 rounded-full flex items-center justify-center hover:bg-[#ba8b4e]/30">
                                        <i className="fab fa-tiktok text-[#ba8b4e] text-xl"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        
                        <div>
                            <h3 data-aos="fade-left" className="text-2xl font-bold mb-8 text-[#ba8b4e] font-display">Find Us</h3>
                            <p className="text-lg text-gray-700 mb-6">
                                Located just minutes from the iconic Pyramids of Giza
                            </p>
                            <div className="w-full h-96 rounded-lg overflow-hidden">
                                <iframe 
                                    src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d4796.573199084845!2d31.1290353!3d29.9882657!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e1!3m2!1sen!2seg!4v1761499149344!5m2!1sen!2seg"
                                    width="100%" 
                                    height="100%" 
                                    style={{border: 0}} 
                                    allowFullScreen="" 
                                    loading="lazy" 
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="7 Gates Boutique Hotel Location"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
