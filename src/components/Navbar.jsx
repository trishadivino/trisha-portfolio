import { FaGithub, FaInstagram } from 'react-icons/fa';
import { RiMessengerFill } from 'react-icons/ri';
import { FaWhatsapp } from 'react-icons/fa';
function Navbar() {
  return (
    <nav className="navbar">
      <div className='logo-placeholder'></div>

      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#education">Education</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="social-icons">
        <a href="https://github.com/trishadivino" target="_blank" rel="noopener noreferrer"><FaGithub size={22} /></a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram size={22} /></a>
        <a href="https://www.facebook.com/share/1D7jAyy6AJ/" target="_blank" rel="noopener noreferrer"><RiMessengerFill size={22} /></a>
        <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer"><FaWhatsapp size={22} /></a>
      </div>
    </nav>
  )
}

export default Navbar