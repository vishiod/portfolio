import React from 'react';
import './Education.css';

const Education = () => {
  const education = [
    {
      school: 'University College Cork (UCC)',
      degree: 'MSc in Computing Science',
      period: 'Sept 2025 – Sept 2026',
      location: 'Cork, Ireland',
      grade: 'Percentage: 74%',
      highlights: [
        'Specializing in Advanced Algorithms and Distributed Systems',
        'Focus on System Design and Performance Optimization',
        'Research in Scalable Backend Architectures'
      ]
    },
    {
      school: 'Vellore Institute of Technology (VIT)',
      degree: 'Bachelor of Technology in Information Technology',
      period: 'July 2019 – Aug 2023',
      location: 'Vellore, India',
      grade: 'CGPA: 8.45/10',
      highlights: [
        'Strong foundation in Data Structures and Algorithms',
        'Completed multiple projects in Web Development and System Design',
        'Active member of coding clubs and technical societies'
      ]
    }
  ];

  return (
    <section className="education" id="education">
      <h2 className="section-title">
        <span className="section-number">04.</span>
        Education
      </h2>

      <div className="education-timeline">
        {education.map((edu, index) => (
          <div key={index} className="education-card">
            <div className="card-header">
              <div className="header-content">
                <h3 className="school-name">{edu.school}</h3>
                <p className="degree">{edu.degree}</p>
                <div className="education-meta">
                  <span className="period">{edu.period}</span>
                  <span className="separator">•</span>
                  <span className="location">{edu.location}</span>
                </div>
                <p className="grade">{edu.grade}</p>
              </div>
              <div className="card-number">{index + 1}</div>
            </div>
            <ul className="highlights">
              {edu.highlights.map((highlight, idx) => (
                <li key={idx}>{highlight}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
