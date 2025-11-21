import { useState, useEffect } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import Loading from '../../components/Loading/Loading'
import { Outlet, useLocation } from 'react-router-dom'

export default function MainLayout() {
    const [isLoading, setIsLoading] = useState(false)
    const location = useLocation()

    useEffect(() => {
        setIsLoading(true)
        const timer = setTimeout(() => {
            setIsLoading(false)
        }, 300)
        return () => clearTimeout(timer)
    }, [location.pathname])

    if (isLoading) {
        return <Loading />
    }

    return (
        <div className='flex flex-col min-h-screen bg-white'>
            <Navbar />
            <main className='grow bg-white'>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}
