import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const usePageTitle = () => {
    const location = useLocation();

    useEffect(() => {
        const pageTitles = {
            '/': 'Home',
            '/about': 'About Us',
            '/services': 'Our Services',
            '/contact': 'Contact Us',
            '/gallery': 'Gallery',
            '/book': 'Book Now'
        };

        const pageTitle = pageTitles[location.pathname] || 'Home';
        document.title = `${pageTitle} | 7 Gates Boutique Hotel Egypt`;
    }, [location.pathname]);
};