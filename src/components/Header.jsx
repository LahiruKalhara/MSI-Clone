import logo from '../assets/logo.png'
import addUser from '../assets/add-user.png'
import searchIcon from '../assets/search-interface-symbol.png'
import './Header.css'

export default function Header() {
  return (
    <header>
      <div className="headerContainer">
        <img className="logo" src={logo} alt="MSI Logo" />
        <ul>
          <li>Products</li>
          <li>AIoT Solutions</li>
          <li>Community</li>
          <li>What's New</li>
          <li>Support</li>
        </ul>
        <div className="icons">
          <img src={addUser} alt="User" />
          <img src={searchIcon} alt="Search" />
        </div>
      </div>
    </header>
  )
}
