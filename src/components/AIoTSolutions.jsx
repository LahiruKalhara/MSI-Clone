import useScrollAnimation from '../hooks/useScrollAnimation'
import cardddd from '../assets/cardddd.jpeg'
import c1 from '../assets/c1.jpeg'
import c2 from '../assets/c2.jpeg'
import c3 from '../assets/c3.jpeg'
import c4 from '../assets/c4.jpeg'
import c5 from '../assets/c5.jpeg'
import c6 from '../assets/c6.jpeg'
import './AIoTSolutions.css'

const amrCards = [c1, c2, c3, c4, c5, c6]

export default function AIoTSolutions() {
  const [ref, isVisible] = useScrollAnimation()

  return (
    <div ref={ref} className={`bodyContainer3${isVisible ? ' opacityon' : ''}`}>
      <h1>Empower Your Business with AIoT Solutions</h1>
      <div className="cardGrid">
        <div className="cardContainer1">
          <div className="card">
            <img src={cardddd} alt="EV Charging Solutions" />
            <h3>EV Charging Solutions</h3>
            <p>Smart Charging for Business and Home</p>
          </div>
        </div>
        <div className="cardContainer2">
          {amrCards.map((img, i) => (
            <div className="card" key={i}>
              <img src={img} alt={`AMR ${i + 1}`} />
              <h3>Autonomous Mobile Robot (AMR)</h3>
              <p>AI, Automation and Robotics</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
