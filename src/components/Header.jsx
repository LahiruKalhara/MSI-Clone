import { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/msi-logo.png'
import addUser from '../assets/add-user.png'
import searchIcon from '../assets/search-interface-symbol.png'
import './Header.css'

export default function Header({ darkMode, onToggle }) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header>
      <div className="headerContainer">
        <Link to="/">
          <img className="logo" src={logo} alt="MSI Logo" />
        </Link>
        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          <span className={menuOpen ? 'bar open' : 'bar'}></span>
          <span className={menuOpen ? 'bar open' : 'bar'}></span>
          <span className={menuOpen ? 'bar open' : 'bar'}></span>
        </button>
        <ul className={menuOpen ? 'navOpen' : ''}>
          <li><Link to="/products" onClick={() => setMenuOpen(false)}>Products</Link></li>
          <li><Link to="/aiot-solutions" onClick={() => setMenuOpen(false)}>AIoT Solutions</Link></li>
          <li><Link to="/community" onClick={() => setMenuOpen(false)}>Community</Link></li>
          <li><Link to="/whats-new" onClick={() => setMenuOpen(false)}>What's New</Link></li>
          <li><Link to="/support" onClick={() => setMenuOpen(false)}>Support</Link></li>
        </ul>
        <div className="headerRight">
          <div className="themeSwitch">
            <label className="toggleLabel">
              <input type="checkbox" checked={darkMode} onChange={onToggle} />
              <span className="toggleTrack">
                <span className="toggleThumb"></span>
              </span>
            </label>
            <span className="themeText">{darkMode ? 'Dark' : 'Light'}</span>
          </div>
          <div className="icons">
            <img src={addUser} alt="User" />
            <img src={searchIcon} alt="Search" />
          </div>
        </div>
      </div>
    </header>
  )
}
