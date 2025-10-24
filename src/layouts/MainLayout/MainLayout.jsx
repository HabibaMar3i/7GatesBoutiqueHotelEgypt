import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import { Outlet } from 'react-router-dom'

export default function MainLayout() {
    return (
        <div className='flex flex-col min-h-screen overflow-x-hidden'>
            <Navbar />
            <main className='grow'>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}
