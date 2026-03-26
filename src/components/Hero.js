import React, { useState, useEffect } from 'react';
import './Hero.css';
import Terminal from './Terminal';

const Hero = () => {
  const [showTerminal, setShowTerminal] = useState(false);
  const [displayText, setDisplayText] = useState('');
  const fullText = 'Building scalable backend systems.';

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);

    return () => clearInterval(timer);
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <p className="hero-intro">Hi, my name is</p>
        <h1 className="hero-name">
          Vishal Sharma
          <span className="name-cursor">|</span>
        </h1>
        <h2 className="hero-subtitle typing-text">
          {displayText}
          <span className="typing-cursor">_</span>
        </h2>
        <p className="hero-description">
          I'm a <span className="highlight">Backend Engineer</span> with 3+ years of experience 
          building and scaling high-throughput distributed systems. Currently pursuing my{' '}
          <span className="highlight">MSc in Computing Science</span> at{' '}
          <span className="highlight">University College Cork</span>, specializing in Java, 
          Spring Boot, and AWS.
        </p>
        
        <div className="hero-mode-selector">
          <button 
            className={`mode-button ${!showTerminal ? 'active' : ''}`}
            onClick={() => setShowTerminal(false)}
          >
            <span className="mode-icon">👤</span>
            <span className="mode-label">INTERACTIVE</span>
            <span className="mode-desc">For regular GUI guys</span>
          </button>
          <button 
            className={`mode-button ${showTerminal ? 'active' : ''}`}
            onClick={() => setShowTerminal(true)}
          >
            <span className="mode-icon">💻</span>
            <span className="mode-label">TERMINAL</span>
            <span className="mode-desc">For developers and geeks!</span>
          </button>
        </div>

        {!showTerminal ? (
          <div className="hero-actions">
            <button className="cta-button primary" onClick={scrollToContact}>
              Get In Touch
            </button>
            <a 
              href="/Vishal_Resume.pdf" 
              className="cta-button secondary"
              download
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Resume
            </a>
            <button className="cta-button secondary" onClick={() => setShowTerminal(true)}>
              Try Terminal Mode
            </button>
          </div>
        ) : (
          <div className="terminal-wrapper">
            <Terminal />
          </div>
        )}
      </div>
      
      <div className="hero-decorations">
        <div className="decoration-circle circle-1"></div>
        <div className="decoration-circle circle-2"></div>
        <div className="decoration-circle circle-3"></div>
        <div className="floating-code code-1">&lt;code/&gt;</div>
        <div className="floating-code code-2">{'{ }'}</div>
        <div className="floating-code code-3">[ ]</div>
      </div>
    </section>
  );
};

export default Hero;
