import React, { useState } from 'react';
import './Experience.css';

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);

  const experiences = [
    {
      company: 'Locus.sh',
      title: 'SDE-2 Backend',
      period: 'Jan 2024 – Present',
      location: 'Bengaluru, India (Acquired by IKEA)',
      details: [
        'Led architectural redesign of a core workflow from asynchronous DB-heavy flows to stateless synchronous services, reducing RDS costs by $29K/year and improving reliability',
        'Enhanced API performance by reducing P99 latency from 10s to 990ms through query optimization, bottleneck analysis, and restructuring critical code paths',
        'Reduced production incidents by 95% (200 to <10 alerts) by improving monitoring, alerting strategy, and release practices',
        'Owned CI/CD pipelines (GitHub Actions) supporting weekly releases, reducing deployment failures by 60%'
      ]
    },
    {
      company: 'Locus.sh',
      title: 'SDE-1 Backend',
      period: 'May 2023 – Dec 2024',
      location: 'Bengaluru, India',
      details: [
        'Designed SMS-trigger system handling 80,000+ messages/day for real-time order status updates',
        'Strengthened Dispatch Wave Framework automating 300k+ orders/day for fleet optimization',
        'Improved order upload scalability by 50%, reducing median latency by 4 seconds',
        'Contributed to building multi-leg logistics order tracking system contributing to $300K+ ARR',
        'Integrated rider tracking with dynamic geofence visualization, reducing rider cancellations by 18%'
      ]
    },
    {
      company: 'Locus.sh',
      title: 'Software Engineering Intern',
      period: 'May 2022 – Apr 2023',
      location: 'Bengaluru, India',
      details: [
        'Contributed to backend feature development and bug fixes in high-throughput logistics systems handling 100k+ daily transactions',
        'Secured APK deployments using SHA256 digital signature implementation'
      ]
    }
  ];

  return (
    <section className="experience" id="experience">
      <h2 className="section-title">
        <span className="section-number">02.</span>
        Where I've Worked
      </h2>

      <div className="experience-container">
        <div className="tab-list">
          {experiences.map((exp, index) => (
            <button
              key={index}
              className={`tab-button ${activeTab === index ? 'active' : ''}`}
              onClick={() => setActiveTab(index)}
            >
              {exp.company}
            </button>
          ))}
        </div>

        <div className="tab-content">
          <h3 className="job-title">
            {experiences[activeTab].title}
            <span className="company-name"> @ {experiences[activeTab].company}</span>
          </h3>
          <p className="job-period">{experiences[activeTab].period}</p>
          <p className="job-location">{experiences[activeTab].location}</p>
          
          <ul className="job-details">
            {experiences[activeTab].details.map((detail, index) => (
              <li key={index}>{detail}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
