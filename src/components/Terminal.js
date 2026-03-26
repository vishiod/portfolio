import React, { useState, useEffect, useRef } from 'react';
import './Terminal.css';

const Terminal = () => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    { type: 'output', content: 'Welcome to Vishal\'s Portfolio Terminal!' },
    { type: 'output', content: 'Type "help" to see available commands.' },
  ]);
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef(null);
  const terminalRef = useRef(null);

  const commands = {
    help: () => [
      'Available commands:',
      '  about      - Learn more about me',
      '  skills     - View my technical skills',
      '  experience - See my work experience',
      '  education  - View my education',
      '  contact    - Get my contact information',
      '  projects   - View my projects',
      '  clear      - Clear the terminal',
      '  linkedin   - Open my LinkedIn profile',
      '  github     - Open my GitHub profile',
    ],
    about: () => [
      'Hi! I\'m Vishal Sharma',
      'Backend Engineer with 3+ years of experience',
      'Currently pursuing MSc in Computing Science at UCC',
      'Based in Cork, Ireland',
      '',
      'I specialize in building scalable distributed systems',
      'and have a passion for performance optimization.',
    ],
    skills: () => [
      'Languages:     Java, Python, TypeScript',
      'Frameworks:    Spring Boot, Node.js, Express',
      'Databases:     MySQL, AWS Aurora',
      'Cloud:         AWS (EC2, RDS, Lambda)',
      'DevOps:        Docker, Kubernetes, CI/CD',
      'Concepts:      Distributed Systems, Microservices',
    ],
    experience: () => [
      'Locus.sh (Acquired by IKEA) - Bengaluru, India',
      '├── SDE-2 Backend (Jan 2024 – Present)',
      '│   ├── Reduced API latency from 10s to 990ms',
      '│   ├── Cut production incidents by 95%',
      '│   ├── Saved $29K/year in RDS costs',
      '│   └── Reduced deployment failures by 60%',
      '├── SDE-1 Backend (May 2023 – Dec 2024)',
      '│   ├── Built SMS system handling 80K+ messages/day',
      '│   ├── Improved scalability by 50%',
      '│   └── Reduced rider cancellations by 18%',
      '└── Intern (May 2022 – Apr 2023)',
      '    ├── Contributed to 100K+ daily transactions',
      '    └── Secured APK deployments with SHA256',
    ],
    education: () => [
      'University College Cork (UCC)',
      '  MSc in Computing Science (2025-2026)',
      '  Percentage: 74%',
      '',
      'Vellore Institute of Technology (VIT)',
      '  B.Tech in Information Technology (2019-2023)',
      '  CGPA: 8.45/10',
    ],
    contact: () => [
      'Email:    vishalsharma01386@gmail.com',
      'Phone:    +353 89 971 3065',
      'Location: Cork, Ireland',
      'LinkedIn: linkedin.com/in/vishalsharma0112',
      'GitHub:   github.com/vishiod',
    ],
    projects: () => [
      'High-Throughput Distributed Systems',
      '  └── Processing 100K+ daily transactions at scale',
      '',
      'SMS Notification Service',
      '  └── Real-time delivery of 80K+ messages/day',
      '',
      'Multi-leg Logistics Tracking',
      '  └── Contributing to $300K+ ARR',
    ],
    clear: () => {
      setHistory([]);
      return null;
    },
    linkedin: () => {
      window.open('https://www.linkedin.com/in/vishalsharma0112/', '_blank');
      return ['Opening LinkedIn profile...'];
    },
    github: () => {
      window.open('https://github.com/vishiod', '_blank');
      return ['Opening GitHub profile...'];
    },
  };

  const handleCommand = (cmd) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    
    if (trimmedCmd === '') return;

    setCommandHistory(prev => [...prev, cmd]);
    setHistoryIndex(-1);

    const newHistory = [
      ...history,
      { type: 'input', content: cmd },
    ];

    if (commands[trimmedCmd]) {
      const output = commands[trimmedCmd]();
      if (output) {
        output.forEach(line => {
          newHistory.push({ type: 'output', content: line });
        });
      }
    } else {
      newHistory.push({ 
        type: 'error', 
        content: `Command not found: ${trimmedCmd}. Type "help" for available commands.` 
      });
    }

    setHistory(newHistory);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleCommand(input);
    setInput('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const newIndex = historyIndex + 1;
        if (newIndex < commandHistory.length) {
          setHistoryIndex(newIndex);
          setInput(commandHistory[commandHistory.length - 1 - newIndex]);
        }
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setInput(commandHistory[commandHistory.length - 1 - newIndex]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInput('');
      }
    }
  };

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <div className="terminal-container" onClick={() => inputRef.current?.focus()}>
      <div className="terminal-header">
        <div className="terminal-buttons">
          <span className="terminal-button close"></span>
          <span className="terminal-button minimize"></span>
          <span className="terminal-button maximize"></span>
        </div>
        <div className="terminal-title">vishal@portfolio:~</div>
      </div>
      <div className="terminal-body" ref={terminalRef}>
        {history.map((item, index) => (
          <div key={index} className={`terminal-line ${item.type}`}>
            {item.type === 'input' ? (
              <>
                <span className="terminal-prompt">visitor@portfolio:~$</span> {item.content}
              </>
            ) : (
              <span>{item.content}</span>
            )}
          </div>
        ))}
        <form onSubmit={handleSubmit} className="terminal-input-line">
          <span className="terminal-prompt">visitor@portfolio:~$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="terminal-input"
            autoComplete="off"
            spellCheck="false"
          />
          <span className="terminal-cursor">_</span>
        </form>
      </div>
    </div>
  );
};

export default Terminal;
