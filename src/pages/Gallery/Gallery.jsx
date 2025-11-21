import Hero from '../../components/Hero/Hero';
import { viewPool } from '../../assets/images';

export default function Gallery() {
    return (
        <div className="bg-white min-h-screen">
            <Hero 
                title="Gallery" 
                subtitle="Discover the beauty of 7 Gates Boutique Hotel Egypt"
                backgroundImage={viewPool}
                height="h-96"
            />
            
            <section className="py-24 px-4 md:px-12">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="bg-[#ba8b4e] rounded-lg p-16">
                        <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-8">
                            <i className="fas fa-images text-3xl text-white"></i>
                        </div>
                        <h2 className="text-4xl font-bold mb-6 text-white font-display">Coming Soon</h2>
                        <p className="text-xl text-white mb-8">
                            Our stunning photo gallery is currently being curated to showcase the luxury and beauty of 7 Gates Boutique Hotel Egypt.
                        </p>
                        <p className="text-lg text-white/90">
                            Stay tuned for breathtaking images of our suites, amenities, and the magnificent Pyramids view.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}
