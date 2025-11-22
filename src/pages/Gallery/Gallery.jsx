import Hero from '../../components/Hero/Hero';
import GalleryCarousel from '../../components/GalleryCarousel/GalleryCarousel';

export default function Gallery() {
    return (
        <div className="bg-white min-h-screen">
            <Hero 
                title="Gallery" 
                subtitle="Discover the beauty of 7 Gates Boutique Hotel Egypt"
                backgroundImage="/view-pool.webp"
                height="h-96"
            />
            
            <GalleryCarousel />
        </div>
    )
}
