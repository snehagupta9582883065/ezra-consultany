import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

// Initialize AOS animation
document.addEventListener('DOMContentLoaded', () => {
  AOS.init({
    duration: 800,
    once: true,
    easing: 'ease-out'
  })
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <App />
    </Router>
  </StrictMode>,
)