import Hero from '../../components/Hero/Hero';
import { spa } from '../../assets/images';

export default function Contact() {
    return (
        <div>
            <Hero 
                title="Contact Us"
                subtitle="Get in touch with us for reservations and inquiries"
                backgroundImage={spa}
                height="h-96"
            />
            
            <div className="py-16 px-6 bg-gradient-to-b from-palace-900 to-palace-800">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-12 text-brand-400 font-display">Get In Touch</h2>
                    
                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="bg-brand-50/10 backdrop-blur-sm rounded-xl p-8 border border-brand-400/20 h-full">
                            <h3 className="text-2xl font-semibold mb-6 text-brand-300">Contact Information</h3>
                            
                            <div className="space-y-4 mb-8">
                                <div className="flex items-center space-x-4">
                                    <div className="w-10 h-10 bg-brand-500 rounded-full flex items-center justify-center">
                                        <i className="fas fa-phone text-white"></i>
                                    </div>
                                    <div>
                                        <p className="text-brand-200 font-medium">Phone</p>
                                        <p className="text-brand-100">+20 1001600300</p>
                                    </div>
                                </div>
                                
                                <div className="flex items-center space-x-4">
                                    <div className="w-10 h-10 bg-brand-500 rounded-full flex items-center justify-center">
                                        <i className="fas fa-envelope text-white"></i>
                                    </div>
                                    <div>
                                        <p className="text-brand-200 font-medium">Email</p>
                                        <p className="text-brand-100">info@7gatesboutiquehotelegypt.com</p>
                                    </div>
                                </div>
                                
                                <div className="flex items-center space-x-4">
                                    <div className="w-10 h-10 bg-brand-500 rounded-full flex items-center justify-center">
                                        <i className="fas fa-map-marker-alt text-white"></i>
                                    </div>
                                    <div>
                                        <p className="text-brand-200 font-medium">Address</p>
                                        <p className="text-brand-100">Pyramids Road, Giza, Egypt</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div>
                                <h4 className="text-lg font-semibold mb-4 text-brand-300">Follow Us</h4>
                                <div className="flex space-x-3">
                                    <a
                                        href="https://instagram.com/7gatesboutiquehotelegypt"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 bg-brand-500 rounded-full flex items-center justify-center hover:bg-brand-400 transition-colors"
                                    >
                                        <i className="fab fa-instagram text-white"></i>
                                    </a>
                                    <a
                                        href="https://pinterest.com/7gatesboutiquehotelegypt"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 bg-brand-500 rounded-full flex items-center justify-center hover:bg-brand-400 transition-colors"
                                    >
                                        <i className="fab fa-pinterest text-white"></i>
                                    </a>
                                    <a
                                        href="https://tiktok.com/@7gatesboutiquehotelegypt"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 bg-brand-500 rounded-full flex items-center justify-center hover:bg-brand-400 transition-colors"
                                    >
                                        <i className="fab fa-tiktok text-white"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        
                        <div className="bg-brand-50/10 backdrop-blur-sm rounded-xl p-8 border border-brand-400/20 h-full">
                            <h3 className="text-2xl font-semibold mb-6 text-brand-300">Find Us</h3>
                            <div className="w-full h-80 rounded-lg overflow-hidden">
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
                            <p className="text-brand-200/80 text-sm mt-4 text-center">
                                Located just minutes from the iconic Pyramids of Giza
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
