import useScrollAnimation from '../hooks/useScrollAnimation'
import evCharger from '../assets/ev charger.png'
import evCharger2 from '../assets/ev charger2.png'
import evCharger3 from '../assets/ev charger3.png'
import evCharger4 from '../assets/ev charger4.png'
import evCharger5 from '../assets/ev charger5.png'
import evCharger6 from '../assets/ev charger6.png'
import evCharger7 from '../assets/ev charger7.png'
import './SmartSolutions.css'

const categories = [
  { img: evCharger, title: 'EV Charger' },
  { img: evCharger2, title: 'AIoT & Industrial' },
  { img: evCharger3, title: <>Automotive &<br />Commercial</> },
  { img: evCharger4, title: 'Funtoro' },
  { img: evCharger5, title: <>Autonomous<br />Mobile Robot</> },
  { img: evCharger6, title: 'Server' },
  { img: evCharger7, title: 'Rugged Tablet' },
]

export default function SmartSolutions() {
  const [ref, isVisible] = useScrollAnimation()

  return (
    <div ref={ref} className={`bodyContainer4${isVisible ? ' opacityon' : ''}`}>
      <h1>The Future of Smart</h1>
      <div className="cardContainer">
        {categories.map((cat, i) => (
          <div className="card" key={i}>
            <img src={cat.img} alt={typeof cat.title === 'string' ? cat.title : `Category ${i + 1}`} />
            <h3>{cat.title}</h3>
          </div>
        ))}
      </div>
    </div>
  )
}
