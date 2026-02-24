import { FaGithub, FaInstagram } from 'react-icons/fa';
import { RiMessengerFill } from 'react-icons/ri';
import { FaWhatsapp } from 'react-icons/fa';
function Navbar() {
  return (
    <nav className="navbar">
      <div className='logo-placeholder'></div>

      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About </a></li>
        <li><a href="#education">Education</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  )
}

export default Navbar