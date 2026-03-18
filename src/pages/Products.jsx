import card1 from '../assets/card1.jpeg'
import card2 from '../assets/card2.jpeg'
import card3 from '../assets/card3.jpeg'
import card4 from '../assets/card4.jpeg'
import card5 from '../assets/card5.jpeg'
import card6 from '../assets/card6.jpeg'
import evCharger from '../assets/ev charger.png'
import evCharger2 from '../assets/ev charger2.png'
import evCharger3 from '../assets/ev charger3.png'
import evCharger4 from '../assets/ev charger4.png'
import evCharger5 from '../assets/ev charger5.png'
import evCharger6 from '../assets/ev charger6.png'
import evCharger7 from '../assets/ev charger7.png'
import Footer from '../components/Footer'
import './Products.css'

const featuredProducts = [
  { img: card1, name: 'Creator A16 AI Copilot+ PC', desc: 'Next-Level AI PC', price: '$1,499' },
  { img: card2, name: 'Stealth 16 AI Studio', desc: 'Ultra-Thin Powerhouse', price: '$2,199' },
  { img: card3, name: 'Titan 18 HX', desc: 'Desktop-Level Performance', price: '$3,499' },
  { img: card4, name: 'Prestige 16 AI Evo', desc: 'Business & Productivity', price: '$1,299' },
  { img: card5, name: 'Raider 18 HX', desc: 'Dominate the Game', price: '$2,799' },
  { img: card6, name: 'Crosshair 16 HX', desc: 'Built for Victory', price: '$1,899' },
]

const categories = [
  { img: evCharger, name: 'EV Charger' },
  { img: evCharger2, name: 'AIoT & Industrial' },
  { img: evCharger3, name: 'Automotive & Commercial' },
  { img: evCharger4, name: 'Funtoro' },
  { img: evCharger5, name: 'Autonomous Mobile Robot' },
  { img: evCharger6, name: 'Server' },
  { img: evCharger7, name: 'Rugged Tablet' },
]

export default function Products() {
  return (
    <div className="productsPage">
      <div className="productsHero">
        <h1 data-aos="fade-down">Our Products</h1>
        <p data-aos="fade-up" data-aos-delay="100">Explore MSI's lineup of laptops, desktops, and smart solutions</p>
      </div>

      <section className="productsSection">
        <h2 data-aos="fade-up">Featured Products</h2>
        <div className="productsGrid">
          {featuredProducts.map((product, i) => (
            <div className="productCard" key={i} data-aos="fade-up" data-aos-delay={i * 100}>
              <div className="productImgWrap">
                <img src={product.img} alt={product.name} />
              </div>
              <div className="productInfo">
                <h3>{product.name}</h3>
                <p>{product.desc}</p>
                <span className="productPrice">{product.price}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="categoriesSection">
        <h2 data-aos="fade-up">Product Categories</h2>
        <div className="categoriesGrid">
          {categories.map((cat, i) => (
            <div className="categoryCard" key={i} data-aos="zoom-in" data-aos-delay={i * 80}>
              <img src={cat.img} alt={cat.name} />
              <h3>{cat.name}</h3>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}
