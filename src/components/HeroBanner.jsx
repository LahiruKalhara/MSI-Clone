import headbanner from '../assets/headbanner.jpeg'
import './HeroBanner.css'

export default function HeroBanner() {
  return (
    <div className="bodyContainer1">
      <img src={headbanner} alt="MSI Banner" />
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
