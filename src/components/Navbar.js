import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-logo">
          <span className="logo-text">VS</span>
        </div>

        <button 
          className={`hamburger ${menuOpen ? 'active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
          <li><button onClick={() => scrollToSection('about')}><span>01.</span> About</button></li>
          <li><button onClick={() => scrollToSection('experience')}><span>02.</span> Experience</button></li>
          <li><button onClick={() => scrollToSection('skills')}><span>03.</span> Skills</button></li>
          <li><button onClick={() => scrollToSection('education')}><span>04.</span> Education</button></li>
          <li><button onClick={() => scrollToSection('contact')}><span>05.</span> Contact</button></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
