import { Link } from 'react-router-dom'
import card1 from '../assets/card1.jpeg'
import card2 from '../assets/card2.jpeg'
import card3 from '../assets/card3.jpeg'
import card4 from '../assets/card4.jpeg'
import card5 from '../assets/card5.jpeg'
import card6 from '../assets/card6.jpeg'
import dss from '../assets/dss.jpeg'
import './LatestInnovation.css'

const cards = [
  { img: card1, name: 'Creator A16 AI Copilot + PC', desc: 'Next-Level AI PC' },
  { img: card2, name: 'Stealth 18 AI Studio', desc: 'Ultimate Creator Laptop' },
  { img: card3, name: 'Titan 18 HX', desc: 'Extreme Gaming Power' },
  { img: card4, name: 'Prestige 16 AI Evo', desc: 'Business & Productivity' },
  { img: card5, name: 'Raider GE78 HX', desc: 'Gaming Domination' },
  { img: card6, name: 'Summit E16 Flip Evo', desc: 'Versatile 2-in-1' },
]

export default function LatestInnovation() {
  return (
    <div className="bodyContainer2" data-aos="fade-up">
      <h1>Discover the Latest MSI Innovation</h1>
      <div className="cardContainer">
        {cards.map((card, i) => (
          <Link to="/products" className="card" key={i} data-aos="fade-up" data-aos-delay={i * 100}>
            <img src={card.img} alt={card.name} />
            <h3>{card.name}</h3>
            <p>{card.desc}</p>
          </Link>
        ))}
      </div>
      <Link to="/products" className="img2" data-aos="zoom-in" data-aos-delay="200">
        <img src={dss} alt="MSI Showcase" />
      </Link>
    </div>
  )
}
