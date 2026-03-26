import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about" id="about">
      <h2 className="section-title">
        <span className="section-number">01.</span>
        About Me
      </h2>
      
      <div className="about-content">
        <div className="about-text">
          <p>
            Hello! I'm Vishal, a Backend Engineer based in Cork, Ireland. My journey in software 
            development began during my Bachelor's at VIT, where I discovered my passion for building 
            scalable and efficient systems.
          </p>
          <p>
            At <span className="highlight">Locus.sh (acquired by IKEA)</span>, I spent over 3 years 
            building and optimizing high-throughput distributed systems processing{' '}
            <span className="highlight">100k+ daily transactions</span>. My work focused on reducing 
            API latency from 10s to sub-1s, cutting production incidents by 95%, and saving $29K/year 
            in cloud costs through architectural improvements.
          </p>
          <p>
            Currently, I'm pursuing my <span className="highlight">MSc in Computing Science</span> at{' '}
            <span className="highlight">University College Cork</span>, where I'm deepening my 
            knowledge in advanced algorithms, distributed systems, and system design.
          </p>
          <p>
            When I'm not coding, you'll find me exploring Cork's scenic landscapes, reading about 
            emerging technologies, or experimenting with new frameworks and tools.
          </p>
        </div>
        
        <div className="about-image">
          <div className="image-wrapper">
            <img 
              src="/assets/profile.png" 
              alt="Vishal Sharma" 
            />
            <div className="image-overlay"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
