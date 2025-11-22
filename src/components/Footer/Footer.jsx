import { Link as RouterLink } from 'react-router-dom';


export default function Footer() {
    return (
        <footer className="bg-[#ba8b4e] text-white py-12">
            <div className="max-w-md mx-auto text-center space-y-6">
                {/* Logo and Text */}
                <div className="flex flex-col items-center">
                    <img src="/logo-text-white-cropped.svg" alt="Logo" className="h-66 w-auto" />
                </div>

                {/* Navigation Pages */}
                <div className="flex flex-wrap justify-center gap-4 text-white">
                    <RouterLink to="/about" className="hover:text-white/80">About Us</RouterLink>
                    <RouterLink to="/contact" className="hover:text-white/80">Contact Us</RouterLink>
                    <RouterLink to="/services" className="hover:text-white/80">Our Services</RouterLink>
                    <RouterLink to="/gallery" className="hover:text-white/80">Gallery</RouterLink>
                </div>

                {/* Social Media Links */}
                <div className="flex justify-center gap-4">
                    <a href="https://instagram.com/7gatesboutiquehotelegypt" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30">
                        <i className="fab fa-instagram text-white"></i>
                    </a>
                    <a href="https://pinterest.com/7gatesboutiquehotelegypt" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30">
                        <i className="fab fa-pinterest text-white"></i>
                    </a>
                    <a href="https://tiktok.com/@7gatesboutiquehotelegypt" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30">
                        <i className="fab fa-tiktok text-white"></i>
                    </a>
                </div>

                {/* Phone */}
                <div>
                    <a href="tel:+201001600300" className="text-white hover:text-white/80">
                        +20 1001600300
                    </a>
                </div>

                {/* Email */}
                <div>
                    <a href="mailto:info@7gatesboutiquehotelegypt.com" className="text-white hover:text-white/80 underline">
                        info@7gatesboutiquehotelegypt.com
                    </a>
                </div>

                {/* Location */}
                <div>
                    <p className="text-white mb-2">
                        <i className="fas fa-map-marker-alt mr-2"></i>
                        11 Khattab St, Al Remaya, Al Haram, Giza Governorate
                    </p>
                    <a href="https://maps.app.goo.gl/PGacv5k8PbhWTVMj8" target="_blank" rel="noopener noreferrer" className="text-white hover:text-white/80 underline">
                        View on Map
                    </a>
                </div>

                {/* Copyright */}
                <div className="pt-4 border-t border-white/20">
                    <p className="text-white/80 text-sm">
                        © {new Date().getFullYear()} 7 Gates Boutique Hotel Egypt
                    </p>
                </div>
            </div>
        </footer>
    );
}
