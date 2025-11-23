import React, { useState } from 'react';
import './App.css';

function App() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const projects = [
    {
      id: 1,
      title: "User Auth Demo",
      description: "Full-stack authentication system with secure login, registration, and session management.",
      tech: ["Node.js", "Express", "React", "PostgreSQL"],
      liveUrl: "https://user-auth-demo-sooty.vercel.app",
      githubUrl: "https://github.com/larsssmoatsss/user-auth-demo",
      color: "#4A90E2"
    },
    {
      id: 2,
      title: "Rate Limiter Dashboard",
      description: "Visual demonstration of API rate limiting with real-time progress bars and request tracking.",
      tech: ["React", "Node.js", "Express", "Rate Limiting"],
      liveUrl: "https://rate-limiter-dashboard.vercel.app",
      githubUrl: "https://github.com/larsssmoatsss/rate-limiter-dashboard",
      color: "#50C878"
    },
    {
      id: 3,
      title: "Spotijudge",
      description: "Spotify integration with OAuth that analyzes your music taste using a custom scoring algorithm.",
      tech: ["Flask", "PostgreSQL", "Docker", "Spotify API"],
      liveUrl: "https://spotijudge.onrender.com",
      githubUrl: "https://github.com/larsssmoatsss/spotijudge",
      color: "#9B59B6"
    }
  ];

  return (
    <div className="app">
      <div className="grid-background"></div>
      
      <div className="content">
        <header className="header">
          <div className="header-content">
            <h1 className="name">Lars Moats</h1>
            <p className="tagline">Full-Stack Developer</p>
            <div className="links">
              <a 
                href="https://github.com/larsssmoatsss" 
                target="_blank" 
                rel="noopener noreferrer"
                className="header-link"
              >
                GitHub
              </a>
              <span className="separator">•</span>
              <a 
                href="https://linkedin.com/in/larsmoats" 
                target="_blank" 
                rel="noopener noreferrer"
                className="header-link"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </header>

        <main className="projects-section">
          <div className="projects-grid">
            {projects.map((project) => (
              <div
                key={project.id}
                className={`project-card ${hoveredCard === project.id ? 'hovered' : ''}`}
                onMouseEnter={() => setHoveredCard(project.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="card-accent" style={{ backgroundColor: project.color }}></div>
                
                <div className="card-content">
                  <h2 className="project-title">{project.title}</h2>
                  <p className="project-description">{project.description}</p>
                  
                  <div className="tech-stack">
                    {project.tech.map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  
                  <div className="project-links">
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link live-link"
                    >
                      <span className="link-icon">▶</span> Live Demo
                    </a>
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link github-link"
                    >
                      <span className="link-icon">{ '<>' }</span> GitHub
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>

        <footer className="footer">
          <p>Built with React • Deployed on Vercel</p>
          <p className="footer-year">© 2025 Lars Moats</p>
        </footer>
      </div>
    </div>
  );
}

export default App;