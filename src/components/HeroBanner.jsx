import { useState, useEffect } from 'react'
import slide1 from '../assets/banner-slide1.jpg'
import slide2 from '../assets/banner-slide2.jpg'
import slide3 from '../assets/banner-slide3.jpg'
import slide4 from '../assets/banner-slide4.jpg'
import slide5 from '../assets/banner-slide5.jpg'
import slide6 from '../assets/banner-slide6.jpg'
import './HeroBanner.css'

const slides = [slide1, slide2, slide3, slide4, slide5, slide6]

export default function HeroBanner() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 2500)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="bodyContainer1">
      <div className="carousel">
        {slides.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Banner ${i + 1}`}
            className={`carouselSlide${i === current ? ' active' : ''}`}
          />
        ))}
        <div className="carouselDots">
          {slides.map((_, i) => (
            <button
              key={i}
              className={`dot${i === current ? ' activeDot' : ''}`}
              onClick={() => setCurrent(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
      <div>
        <ul>
          <li>MSI Center</li>
          <li>After-Burner</li>
          <li>MSI App Player</li>
          <li>MyMSI App</li>
        </ul>
      </div>
    </div>
  )
}
