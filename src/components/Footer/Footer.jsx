export default function Footer() {
    return (
        <footer className="bg-palace-900 text-brand-100">
            <div className="max-w-6xl mx-auto px-6 py-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    {/* Brand & Contact */}
                    <div className="text-center md:text-left">
                        <h3 className="text-lg font-bold mb-2 text-brand-300">
                            7 Gates Boutique Hotel Egypt
                        </h3>
                        <p className="text-brand-200/70 text-sm mb-4">
                            Luxurious boutique stay near the Pyramids
                        </p>

                        <div className="flex flex-col md:flex-row gap-4 text-sm">
                            <div className="flex items-center">
                                <a href="mailto:info@gatesboutiquehotelegypt.com" className="hover:text-brand-400">
                                    <i className="fas fa-envelope text-brand-500 mr-1"></i>
                                    info@gatesboutiquehotelegypt.com
                                </a>
                            </div>
                            <div className="flex items-center">
                                <a href="tel:+201001600300" className="hover:text-brand-400">
                                    <i className="fas fa-phone text-brand-500 mr-1"></i>
                                    01001600300
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Icons & Copyright */}
                    <div className="text-center">
                        <div className="flex gap-3 mb-3 justify-center">
                            <a
                                href="https://instagram.com/7gatesboutiquehotelegypt"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 bg-brand-600/20 rounded-full flex items-center justify-center hover:bg-brand-500/30 transition-all duration-300"
                            >
                                <i className="fab fa-instagram text-brand-300"></i>
                            </a>
                            <a
                                href="https://pinterest.com/7gatesboutiquehotelegypt"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 bg-brand-600/20 rounded-full flex items-center justify-center hover:bg-brand-500/30 transition-all duration-300"
                            >
                                <i className="fab fa-pinterest text-brand-300"></i>
                            </a>
                            <a
                                href="https://tiktok.com/@7gatesboutiquehotelegypt"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 bg-brand-600/20 rounded-full flex items-center justify-center hover:bg-brand-500/30 transition-all duration-300"
                            >
                                <i className="fab fa-tiktok text-brand-300"></i>
                            </a>
                            <a
                                href="https://maps.app.goo.gl/PGacv5k8PbhWTVMj8"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 bg-brand-600/20 rounded-full flex items-center justify-center hover:bg-brand-500/30 transition-all duration-300"
                            >
                                <i className="fas fa-map text-brand-300"></i>
                            </a>
                        </div>
                        <p className="text-xs text-brand-200/60">
                            © {new Date().getFullYear()} 7 Gates Boutique Hotel Egypt
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
