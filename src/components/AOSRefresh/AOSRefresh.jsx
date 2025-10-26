import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import AOS from 'aos';

export default function AOSRefresh() {
    const location = useLocation();

    useEffect(() => {
        // Refresh AOS on route change for better performance
        AOS.refresh();
    }, [location.pathname]);

    return null;
}