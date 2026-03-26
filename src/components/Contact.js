import React from 'react';
import './Contact.css';
import { FaEnvelope, FaLinkedin, FaGithub, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="contact-content">
        <h2 className="section-title">
          <span className="section-number">05.</span>
          Get In Touch
        </h2>

        <div className="contact-text">
          <p>
            I'm currently open to new opportunities and collaborations. Whether you have a 
            question, want to discuss a project, or just want to say hi, feel free to reach out!
          </p>
          <p>
            I'm particularly interested in backend engineering roles, distributed systems 
            projects, and opportunities to work on challenging technical problems at scale.
          </p>
        </div>

        <div className="contact-methods">
          <a href="mailto:vishalsharma01386@gmail.com" className="contact-card">
            <FaEnvelope className="contact-icon" />
            <div className="contact-details">
              <span className="contact-label">Email</span>
              <span className="contact-value">vishalsharma01386@gmail.com</span>
            </div>
          </a>

          <a href="tel:+353899713065" className="contact-card">
            <FaPhone className="contact-icon" />
            <div className="contact-details">
              <span className="contact-label">Phone</span>
              <span className="contact-value">+353 89 971 3065</span>
            </div>
          </a>

          <div className="contact-card">
            <FaMapMarkerAlt className="contact-icon" />
            <div className="contact-details">
              <span className="contact-label">Location</span>
              <span className="contact-value">Cork, Ireland</span>
            </div>
          </div>

          <a 
            href="https://www.linkedin.com/in/vishalsharma0112/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="contact-card"
          >
            <FaLinkedin className="contact-icon" />
            <div className="contact-details">
              <span className="contact-label">LinkedIn</span>
              <span className="contact-value">vishalsharma0112</span>
            </div>
          </a>

          <a 
            href="https://github.com/vishiod" 
            target="_blank" 
            rel="noopener noreferrer"
            className="contact-card"
          >
            <FaGithub className="contact-icon" />
            <div className="contact-details">
              <span className="contact-label">GitHub</span>
              <span className="contact-value">vishiod</span>
            </div>
          </a>
        </div>

        <div className="social-links">
          <a 
            href="https://www.linkedin.com/in/vishalsharma0112/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-link"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a 
            href="https://github.com/vishiod" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-link"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
        </div>

        <a href="mailto:vishalsharma01386@gmail.com" className="say-hello-button">
          Say Hello
        </a>
      </div>
    </section>
  );
};

export default Contact;
