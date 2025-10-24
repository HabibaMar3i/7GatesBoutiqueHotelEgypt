import Hero from '../../components/Hero/Hero';

export default function Contact() {
    return (
        <div>
            <Hero 
                title="Contact Us"
                subtitle="Get in touch with us for reservations and inquiries"
                backgroundImage="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
                height="h-96"
            />
            
            <div className="py-16 px-6">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-8">Reach Out to Us</h2>
                    <p className="text-gray-600 text-center">
                        Contact information and form will go here.
                    </p>
                </div>
            </div>
        </div>
    )
}
