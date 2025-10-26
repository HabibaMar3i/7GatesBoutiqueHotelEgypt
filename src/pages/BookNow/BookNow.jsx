import Hero from '../../components/Hero/Hero';
import { bathroomPyramidsView } from '../../assets/images';

export default function BookNow() {
    return (
        <div>
            <Hero 
                title="Book Your Stay"
                subtitle="Reserve your luxury experience at 7 Gates Boutique Hotel"
                backgroundImage={bathroomPyramidsView}
                height="h-96"
            />
            
            <div className="py-32 px-6 bg-gradient-to-b from-palace-900 to-palace-800">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="bg-brand-50/10 backdrop-blur-sm rounded-2xl p-16 border border-brand-400/20" data-aos="zoom-in">
                        <h2 className="text-5xl font-bold mb-6 text-brand-400 font-display" data-aos="fade-down" data-aos-delay="200">Coming Soon</h2>
                        <p className="text-xl text-brand-100/80 mb-8 leading-relaxed" data-aos="fade-up" data-aos-delay="300">
                            Our online booking system is currently under development. 
                        </p>
                        <p className="text-lg text-brand-200/70 mb-12" data-aos="fade-up" data-aos-delay="400">
                            For reservations, please contact us directly at <span className="text-brand-400 font-semibold">+20 1001600300</span> or email us at <span className="text-brand-400 font-semibold">reservations@7gatesboutiquehotelegypt.com</span>
                        </p>
                        <div className="text-brand-300/60" data-aos="fade-up" data-aos-delay="500">
                            <p>We look forward to welcoming you to our luxury oasis near the Pyramids</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}