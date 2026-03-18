import reward from '../assets/reward2.webp'
import insider from '../assets/insider.webp'
import './Promotions.css'

export default function Promotions() {
  return (
    <div className="bodyContainer5" data-aos="fade-up">
      <img src={reward} alt="MSI Reward Program" data-aos="fade-right" data-aos-delay="100" />
      <img src={insider} alt="MSI Insider" data-aos="fade-left" data-aos-delay="200" />
    </div>
  )
}
