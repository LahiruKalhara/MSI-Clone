import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Products from './pages/Products'
import AiotSolutions from './pages/AiotSolutions'
import Community from './pages/Community'
import WhatsNew from './pages/WhatsNew'
import Support from './pages/Support'
import FutureTrends from './pages/FutureTrends'

export default function App() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    document.body.classList.toggle('dark', darkMode)
  }, [darkMode])

  return (
    <BrowserRouter>
      <Header darkMode={darkMode} onToggle={() => setDarkMode(!darkMode)} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/aiot-solutions" element={<AiotSolutions />} />
        <Route path="/community" element={<Community />} />
        <Route path="/whats-new" element={<WhatsNew />} />
        <Route path="/support" element={<Support />} />
        <Route path="/future-trends" element={<FutureTrends />} />
      </Routes>
    </BrowserRouter>
  )
}
