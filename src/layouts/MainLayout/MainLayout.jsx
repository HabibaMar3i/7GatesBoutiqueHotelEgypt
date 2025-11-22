import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import Loading from '../../components/Loading/Loading'
import { Outlet, useLocation } from 'react-router-dom'
import { usePageTitle } from '../../hooks/usePageTitle'

export default function MainLayout() {
    const [isLoading, setIsLoading] = useState(false)
    const location = useLocation()
    usePageTitle()

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
        <div className='flex flex-col min-h-screen'>
            <AOSRefresh />
            <Navbar />
            <main className='grow'>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}
