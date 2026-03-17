import useScrollAnimation from '../hooks/useScrollAnimation'
import reward from '../assets/reward2.webp'
import insider from '../assets/insider.webp'
import './Promotions.css'

export default function Promotions() {
  const [ref, isVisible] = useScrollAnimation()

  return (
    <div ref={ref} className={`bodyContainer5${isVisible ? ' opacityon' : ''}`}>
      <img src={reward} alt="MSI Reward Program" />
      <img src={insider} alt="MSI Insider" />
    </div>
  )
}
