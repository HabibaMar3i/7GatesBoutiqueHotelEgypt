import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function GalleryCarousel() {
    // Curated 40 images from public folder
    const galleryImages = [
        '/pool.webp',
        '/room-pyramids.webp',
        '/dining-pyramids.webp',
        '/bathroom-pyramids-flowers.webp',
        '/view-pool.webp',
        '/room-master.webp',
        '/Reception.webp',
        '/whole-building (3).webp',
        '/room-tv.webp',
        '/bathroom.webp',
        '/jacussi (2).webp',
        '/room-bed.webp',
        '/dining-pyramids-sun.webp',
        '/room (2).webp',
        '/bathroom-tiles.webp',
        '/light-decor-good.webp',
        '/pyramids-view.webp',
        '/room-twinbed.webp',
        '/spa.webp',
        '/room-curtains.webp',
        '/bathroom (2).webp',
        '/bathtub.webp',
        '/whole-building (4).webp',
        '/pool-night (2).webp',
        '/room (3).webp',
        '/dining (2).webp',
        '/bathroom-door.webp',
        '/sauna (2).webp',
        '/room-master (2).webp',
        '/window-view.webp',
        '/pedicure.webp',
        '/curridor.webp',
        '/frame-decor.webp',
        '/open-buffet.webp',
        '/bathroom-pyramids-flower.webp',
        '/room-pyramids (2).webp',
        '/whole-building (5).webp',
        '/waiting-area.webp',
        '/view.webp',
        '/light-decor.webp',
    ];

    return (
        <section className="py-16 px-4 md:px-12 bg-white">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="mb-12 text-center">
                    <div className="inline-flex items-center justify-center mb-4">
                        <div className="w-16 h-1 bg-[#ba8b4e]"></div>
                        <i className="fas fa-camera text-2xl text-[#ba8b4e] mx-4"></i>
                        <div className="w-16 h-1 bg-[#ba8b4e]"></div>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-display">
                        Gallery Showcase
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                        Experience the elegance and beauty of our boutique hotel through our curated collection of images
                    </p>
                </div>

                {/* Swiper Carousel with optimization features */}
                <div className="relative rounded-lg overflow-hidden shadow-xl">
                    <Swiper
                        modules={[Navigation, A11y]}
                        spaceBetween={0}
                        slidesPerView={1}
                        navigation={{
                            nextEl: '.gallery-next',
                            prevEl: '.gallery-prev',
                        }}
                        a11y={{
                            enabled: true,
                        }}
                        loop={true}
                        speed={600}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                        }}
                        className="w-full"
                        style={{ height: '600px' }}
                    >
                        {galleryImages.map((image, index) => (
                            <SwiperSlide key={index} className="flex items-center justify-center bg-gray-100">
                                <img
                                    src={image}
                                    alt={`Gallery Image ${index + 1}`}
                                    className="w-full h-full object-cover"
                                    loading="lazy"
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Navigation Buttons */}
                    <button
                        className="gallery-prev absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-[#ba8b4e] p-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110"
                        aria-label="Previous slide"
                    >
                        <i className="fas fa-chevron-left text-xl"></i>
                    </button>
                    <button
                        className="gallery-next absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-[#ba8b4e] p-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110"
                        aria-label="Next slide"
                    >
                        <i className="fas fa-chevron-right text-xl"></i>
                    </button>
                </div>

            </div>

            <style>{`
                .swiper {
                    width: 100%;
                    height: 600px;
                }

                .swiper-slide {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .swiper-slide img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }

                .swiper-button-prev:after,
                .swiper-button-next:after {
                    display: none;
                }

                @media (max-width: 768px) {
                    .swiper {
                        height: 400px;
                    }
                }

                @media (max-width: 480px) {
                    .swiper {
                        height: 300px;
                    }
                }
            `}</style>
        </section>
    );
}
