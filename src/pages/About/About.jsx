import Hero from '../../components/Hero/Hero';

export default function About() {
    return (
        <div>
            <Hero 
                title="About Us"
                subtitle="Discover our story and commitment to exceptional hospitality"
                backgroundImage="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
                // height="h-96"
            />
            
            <div className="py-16 px-6">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-8">Our Story</h2>
                    <p className="text-gray-600 text-center">
                        Content about the hotel's history and mission will go here.
                    </p>
                </div>
            </div>
        </div>
    )
}
