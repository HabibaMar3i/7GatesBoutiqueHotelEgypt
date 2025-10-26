import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './animations.css'
import App from './App.jsx'
import '@fortawesome/fontawesome-free/css/all.min.css'
import {HeroUIProvider} from '@heroui/react'
import AOS from 'aos'
import 'aos/dist/aos.css'

// Initialize AOS with performance optimizations
AOS.init({
  duration: 600,
  easing: 'ease-out',
  once: true,
  offset: 50,
  disable: false
})

createRoot(document.getElementById('root')).render(
  <HeroUIProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </HeroUIProvider>,
)
