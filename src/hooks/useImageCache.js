import { useEffect } from 'react';
import * as images from '../assets/images';

export const useImageCache = () => {
    useEffect(() => {
        // Preload critical images on app start
        const criticalImages = [
            images.pyramidsView,
            images.view,
            images.diningPyramidsSun,
            images.roomPyramids,
            images.viewPool,
            images.logoNoText,
            images.logoWhite
        ];

        criticalImages.forEach(src => {
            const img = new Image();
            img.src = src;
        });
    }, []);
};