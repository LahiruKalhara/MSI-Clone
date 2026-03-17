import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import addUser from '../assets/add-user.png'
import searchIcon from '../assets/search-interface-symbol.png'
import './Header.css'

export default function Header({ darkMode, onToggle }) {
  return (
    <header>
      <div className="headerContainer">
        <Link to="/">
          <img className="logo" src={logo} alt="MSI Logo" />
        </Link>
        <ul>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/aiot-solutions">AIoT Solutions</Link></li>
          <li><Link to="/community">Community</Link></li>
          <li><Link to="/whats-new">What's New</Link></li>
          <li><Link to="/support">Support</Link></li>
        </ul>
        <div className="headerRight">
          <button className="themeToggle" onClick={onToggle} aria-label="Toggle dark mode">
            {darkMode ? '\u2600\uFE0F' : '\uD83C\uDF19'}
          </button>
          <div className="icons">
            <img src={addUser} alt="User" />
            <img src={searchIcon} alt="Search" />
          </div>
        </div>
      </div>
    </header>
  )
}
