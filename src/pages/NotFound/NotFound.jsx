import { Link } from 'react-router-dom';

export default function NotFound() {
    return (
        <div className="min-h-screen bg-white flex items-center justify-center px-4">
            <div className="max-w-2xl mx-auto text-center">
                <div className="relative mb-12">
                    <img src="/pyramids-view.webp" alt="Pyramids View" className="w-full h-64 object-cover rounded-lg opacity-20" />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <h1 className="text-8xl font-bold text-[#ba8b4e] font-display">404</h1>
                    </div>
                </div>
                
                <h2 className="text-3xl font-bold mb-4 text-gray-800 font-display">
                    Oops! Page Not Found
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                    The page you're looking for seems to have wandered off like a camel in the desert. 
                    Let's get you back to our luxury oasis.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link 
                        to="/" 
                        className="bg-[#ba8b4e] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#ba8b4e]/90 transition-colors no-underline"
                    >
                        Return Home
                    </Link>
                    <Link 
                        to="/contact" 
                        className="border-2 border-[#ba8b4e] text-[#ba8b4e] px-8 py-3 rounded-lg font-semibold hover:bg-[#ba8b4e] hover:text-white transition-colors no-underline"
                    >
                        Contact Us
                    </Link>
                </div>
                
                <div className="mt-12 text-sm text-gray-500">
                    <p>Need help? Call us at <a href="tel:+201001600307" className="text-[#ba8b4e] hover:underline">+20 1001600300</a></p>
                </div>
            </div>
        </div>
    )
}
