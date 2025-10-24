import './App.css'
import { createBrowserRouter, Navigate } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import About from './pages/About/About';
import Gallery from './pages/Gallery/Gallery';
import Contact from './pages/Contact/Contact';
import MainLayout from './layouts/MainLayout/MainLayout';
import NotFound from './pages/NotFound/NotFound';

function App() {
  const routes = createBrowserRouter([
    {
      path: '', element: <MainLayout />, children: [
        { index: true, element: <HomePage /> },
        { path: '/home', element: <Navigate to="/" /> },
        { path: '/about', element: <About /> },
        { path: '/gallery', element: <Gallery /> },
        { path: '/contact', element: <Contact /> },
      ]
    },
    { path: '*', element: <NotFound /> },
  ])
  return (
    <>
      <RouterProvider router={routes} />
    </>
  )
}

export default App
