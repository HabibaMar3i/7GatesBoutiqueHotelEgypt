export default function Hero({ title, subtitle, backgroundImage, height = "h-screen" }) {
    return (
        <div 
            className={`${height} bg-cover bg-center bg-no-repeat flex items-center justify-center relative`}
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/80 to-black/60"></div>
            <div className="relative z-10 text-center px-6">
                <h1 className="text-4xl md:text-6xl font-bold mb-4 font-display text-brand-400" data-aos="fade-down" data-aos-duration="1000">
                    {title}
                </h1>
                {subtitle && (
                    <p className="text-lg md:text-xl text-brand-50/90 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
                        {subtitle}
                    </p>
                )}
            </div>
        </div>
    );
}