import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Function to handle scroll reveal animations
const setupRevealAnimations = () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active')
        }
      })
    },
    { threshold: 0.1 }
  )

  document.querySelectorAll('.reveal').forEach((element) => {
    observer.observe(element)
  })
}

const rootElement = document.getElementById('root')!
createRoot(rootElement).render(<App />)

// Set up animations after everything is loaded
window.addEventListener('DOMContentLoaded', () => {
  setTimeout(setupRevealAnimations, 100)
})
