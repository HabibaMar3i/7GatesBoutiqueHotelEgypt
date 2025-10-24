import Hero from '../../components/Hero/Hero';

export default function Gallery() {
    return (
        <div>
            <Hero 
                title="Gallery"
                subtitle="Explore our beautiful spaces and stunning views"
                backgroundImage="https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
                height="h-96"
            />
            
            <div className="py-16 px-6">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-8">Photo Gallery</h2>
                    <p className="text-gray-600 text-center">
                        Hotel photo gallery will be displayed here.
                    </p>
                </div>
            </div>
        </div>
    )
}
