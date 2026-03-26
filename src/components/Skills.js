import React from 'react';
import './Skills.css';
import { FaJava, FaPython, FaAws, FaDocker, FaGitAlt, FaNodeJs } from 'react-icons/fa';
import { SiSpringboot, SiMysql, SiKubernetes, SiTypescript } from 'react-icons/si';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      skills: [
        { name: 'Java', icon: <FaJava />, level: 95 },
        { name: 'Python', icon: <FaPython />, level: 80 },
        { name: 'TypeScript', icon: <SiTypescript />, level: 75 }
      ]
    },
    {
      title: 'Frameworks',
      skills: [
        { name: 'Spring Boot', icon: <SiSpringboot />, level: 95 },
        { name: 'Node.js', icon: <FaNodeJs />, level: 80 }
      ]
    },
    {
      title: 'Databases',
      skills: [
        { name: 'MySQL', icon: <SiMysql />, level: 90 },
        { name: 'AWS Aurora', level: 85 }
      ]
    },
    {
      title: 'Cloud & DevOps',
      skills: [
        { name: 'AWS', icon: <FaAws />, level: 90 },
        { name: 'Docker', icon: <FaDocker />, level: 85 },
        { name: 'Kubernetes', icon: <SiKubernetes />, level: 75 },
        { name: 'Git', icon: <FaGitAlt />, level: 95 }
      ]
    }
  ];

  const concepts = [
    'Distributed Systems',
    'RESTful APIs',
    'Microservices',
    'System Design',
    'Performance Optimization',
    'CI/CD',
    'Monitoring & Observability'
  ];

  return (
    <section className="skills" id="skills">
      <h2 className="section-title">
        <span className="section-number">03.</span>
        Skills & Technologies
      </h2>

      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <div key={index} className="skill-category">
            <h3 className="category-title">{category.title}</h3>
            <div className="skills-list">
              {category.skills.map((skill, idx) => (
                <div key={idx} className="skill-item">
                  <div className="skill-header">
                    <span className="skill-name">
                      {skill.icon && <span className="skill-icon">{skill.icon}</span>}
                      {skill.name}
                    </span>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="concepts-section">
        <h3 className="concepts-title">Core Concepts & Expertise</h3>
        <div className="concepts-list">
          {concepts.map((concept, index) => (
            <div key={index} className="concept-tag">
              {concept}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
