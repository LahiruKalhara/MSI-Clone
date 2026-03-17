import useScrollAnimation from '../hooks/useScrollAnimation'
import card1 from '../assets/card1.jpeg'
import card2 from '../assets/card2.jpeg'
import card3 from '../assets/card3.jpeg'
import card4 from '../assets/card4.jpeg'
import card5 from '../assets/card5.jpeg'
import card6 from '../assets/card6.jpeg'
import dss from '../assets/dss.jpeg'
import './LatestInnovation.css'

const cards = [card1, card2, card3, card4, card5, card6]

export default function LatestInnovation() {
  const [ref, isVisible] = useScrollAnimation()

  return (
    <div ref={ref} className={`bodyContainer2${isVisible ? ' opacityon' : ''}`}>
      <h1>Discover the Latest MSI Innovation</h1>
      <div className="cardContainer">
        {cards.map((img, i) => (
          <div className="card" key={i}>
            <img src={img} alt={`Card ${i + 1}`} />
            <h3>Creator A16 AI Copilot + PC</h3>
            <p>Next-Level AI PC</p>
          </div>
        ))}
      </div>
      <div className="img2">
        <img src={dss} alt="MSI Showcase" />
      </div>
    </div>
  )
}
