import Hero from '../../components/Hero/Hero';

export default function HomePage() {
    return (
        <div>
            <Hero 
                title="7 Gates Boutique Hotel Egypt"
                subtitle="Experience luxury and comfort near the majestic Pyramids of Giza"
                backgroundImage="https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
            />
            
            <div className="py-16 px-6 bg-linear-to-b from-palace-900 to-palace-800">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-8 text-brand-500 font-display">Welcome to Luxury</h2>
                    <p className="text-center text-brand-100/80 max-w-2xl mx-auto text-lg leading-relaxed">
                        Discover the perfect blend of modern luxury and ancient wonder at 7 Gates Boutique Hotel Egypt. Where elegance meets Egyptian heritage.
                    </p>
                </div>
            </div>
        </div>
    )
}
