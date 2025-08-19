import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './Component/navbar.tsx'
import Hero from './Component/Hero.tsx'
import FAQ from './Component/FAQ.tsx'
import Features from './Component/Features.tsx'
import Newsletter from './Component/Newsletter.tsx'
import Footer from './Component/Footer.tsx'
import './index.css'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div>
      <App/>
      <Hero />
      <Features/>
      <Newsletter/>
      <FAQ />
      <Footer/>
    </div>
  </StrictMode>,
)
