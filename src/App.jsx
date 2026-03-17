import { useState, useEffect } from 'react'
import Header from './components/Header'
import HeroBanner from './components/HeroBanner'
import LatestInnovation from './components/LatestInnovation'
import AIoTSolutions from './components/AIoTSolutions'
import SmartSolutions from './components/SmartSolutions'
import Promotions from './components/Promotions'
import Footer from './components/Footer'

export default function App() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    document.body.classList.toggle('dark', darkMode)
  }, [darkMode])

  return (
    <>
      <Header darkMode={darkMode} onToggle={() => setDarkMode(!darkMode)} />
      <HeroBanner />
      <LatestInnovation />
      <AIoTSolutions />
      <SmartSolutions />
      <Promotions />
      <Footer />
    </>
  )
}
