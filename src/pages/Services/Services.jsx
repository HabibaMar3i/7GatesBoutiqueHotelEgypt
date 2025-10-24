import Hero from '../../components/Hero/Hero';

export default function Services() {
    return (
        <div>
            <Hero 
                title="Our Services"
                subtitle="Luxury amenities and personalized experiences await you"
                backgroundImage="https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
                height="h-96"
            />
            
            <div className="py-16 px-6">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-8">What We Offer</h2>
                    <p className="text-gray-600 text-center">
                        Details about hotel services will go here.
                    </p>
                </div>
            </div>
        </div>
    )
}
