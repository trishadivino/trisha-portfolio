import { useState } from 'react';
import { FaGithub, FaInstagram, FaBars, FaTimes } from 'react-icons/fa';
import { RiMessengerFill } from 'react-icons/ri';
import { FaWhatsapp } from 'react-icons/fa';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <a href="#home" className="navbar-logo">
        <img src="/devv-vision logo.png" alt="Devv-Vision Logo" />
        <span className="navbar-brand">DEVV-VISION</span>
      </a>

      {/* Hamburger Menu Button */}
      <button className="hamburger" onClick={toggleMenu}>
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      <ul className={`nav-links ${isOpen ? 'nav-active' : ''}`}>
        <li><a href="#home" onClick={() => setIsOpen(false)}>Home</a></li>
        <li><a href="#about" onClick={() => setIsOpen(false)}>About</a></li>
        <li><a href="#education" onClick={() => setIsOpen(false)}>Education</a></li>
        <li><a href="#experience" onClick={() => setIsOpen(false)}>Experience</a></li>
        <li><a href="#projects" onClick={() => setIsOpen(false)}>Projects</a></li>
        <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
      </ul>
    </nav>
  )
}

export default Navbar