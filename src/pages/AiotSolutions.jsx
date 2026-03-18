import cardddd from '../assets/cardddd.jpeg'
import c1 from '../assets/c1.jpeg'
import c2 from '../assets/c2.jpeg'
import c3 from '../assets/c3.jpeg'
import c4 from '../assets/c4.jpeg'
import c5 from '../assets/c5.jpeg'
import c6 from '../assets/c6.jpeg'
import evCharger from '../assets/ev charger.png'
import evCharger2 from '../assets/ev charger2.png'
import evCharger3 from '../assets/ev charger3.png'
import Footer from '../components/Footer'
import './AiotSolutions.css'

const solutions = [
  { img: c1, name: 'Warehouse Automation', desc: 'Streamline logistics with intelligent AMR systems that optimize picking, packing, and sorting operations.' },
  { img: c2, name: 'Smart Manufacturing', desc: 'AI-driven quality inspection and predictive maintenance for production lines.' },
  { img: c3, name: 'Healthcare Robotics', desc: 'Autonomous delivery and disinfection robots for hospitals and clinics.' },
  { img: c4, name: 'Retail Intelligence', desc: 'Smart inventory management and customer analytics powered by edge AI.' },
  { img: c5, name: 'Smart Building', desc: 'Integrated building management with IoT sensors and AI-driven energy optimization.' },
  { img: c6, name: 'Logistics & Delivery', desc: 'Last-mile delivery solutions with autonomous mobile robots.' },
]

const partners = [
  { img: evCharger, name: 'NVIDIA', role: 'AI Computing Partner' },
  { img: evCharger2, name: 'Intel', role: 'Edge AI Partner' },
  { img: evCharger3, name: 'Microsoft', role: 'Cloud & AI Partner' },
]

export default function AiotSolutions() {
  return (
    <div className="aiotPage">
      <div className="aiotHero">
        <h1 data-aos="fade-down">AIoT Solutions</h1>
        <p data-aos="fade-up" data-aos-delay="100">Empower your business with AI-powered IoT solutions for every industry</p>
      </div>

      <section className="aiotOverview">
        <div className="overviewContent">
          <div className="overviewText" data-aos="fade-right">
            <h2>EV Charging Solutions</h2>
            <p>MSI's smart EV charging solutions combine cutting-edge hardware with intelligent software to deliver reliable, efficient, and scalable charging infrastructure for businesses and homes.</p>
            <ul>
              <li>Smart load balancing & energy management</li>
              <li>Remote monitoring & diagnostics</li>
              <li>Scalable from single unit to fleet deployment</li>
              <li>Compatible with all major EV standards</li>
            </ul>
          </div>
          <div className="overviewImg" data-aos="fade-left" data-aos-delay="200">
            <img src={cardddd} alt="EV Charging Solutions" />
          </div>
        </div>
      </section>

      <section className="aiotSolutions">
        <h2 data-aos="fade-up">Industry Solutions</h2>
        <div className="solutionsGrid">
          {solutions.map((sol, i) => (
            <div className="solutionCard" key={i} data-aos="fade-up" data-aos-delay={i * 100}>
              <div className="solutionImgWrap">
                <img src={sol.img} alt={sol.name} />
              </div>
              <div className="solutionInfo">
                <h3>{sol.name}</h3>
                <p>{sol.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="aiotPartners">
        <h2 data-aos="fade-up">Technology Partners</h2>
        <div className="partnersGrid">
          {partners.map((p, i) => (
            <div className="partnerCard" key={i} data-aos="zoom-in" data-aos-delay={i * 100}>
              <img src={p.img} alt={p.name} />
              <h3>{p.name}</h3>
              <p>{p.role}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}
