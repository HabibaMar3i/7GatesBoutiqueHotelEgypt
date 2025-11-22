export default function Hero({ title, subtitle, backgroundImage, height = "h-screen" }) {
    return (
        <div 
            className={`${height} bg-cover bg-center bg-no-repeat flex items-center justify-center relative`}
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/80 to-black/60"></div>
            <div className="relative z-10 text-center px-6">
                <h1 className="text-4xl md:text-6xl font-bold mb-4 font-display text-white">
                    {title}
                </h1>
                {subtitle && (
                    <p className="text-lg md:text-xl max-w-2xl mx-auto text-white">
                        {subtitle}
                    </p>
                )}
            </div>
        </div>
    );
}