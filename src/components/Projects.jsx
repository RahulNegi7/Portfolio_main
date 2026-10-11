import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Secure Task Management REST API',
    period: 'July 2026 – Aug 2026',
    bullets: [
      'Developed a secure RESTful task management backend with JWT-based stateless authentication, BCrypt password hashing, and role-based access control.',
      'Implemented user-level task isolation, input validation, centralized exception handling, and a layered Controller–Service–Repository architecture using Spring Data JPA.',
      'Containerized MySQL using Docker Compose and developed REST endpoints for authentication and task CRUD operations.'
    ],
    link: 'https://github.com/RahulNegi7',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop&q=80',
    tags: ['Java', 'Spring Boot', 'REST API', 'JWT', 'MySQL', 'Docker', 'Spring Data JPA']
  },
  {
    title: 'Intelligent Gaze-Controlled Cursor Navigation',
    period: 'Jan 2026 – March 2026',
    bullets: [
      'Developed a real-time computer vision–based HCI system enabling hands-free cursor control using webcam input, leveraging facial landmark detection and iris tracking to accurately map gaze direction to screen coordinates.',
      'Implemented Eye Aspect Ratio (EAR)-based blink detection with smoothing and performance optimization techniques, achieving ~35 ms latency, up to 92 FPS, and 96.7% accuracy for reliable real-time interaction.'
    ],
    link: 'https://github.com/RahulNegi7',
    image: 'https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?w=800&auto=format&fit=crop&q=80',
    tags: ['Python', 'OpenCV', 'MediaPipe', 'PyAutoGUI', 'Computer Vision', 'HCI']
  },
  {
    title: 'Crowd-Stacks — Decentralized Crowdfunding dApp',
    period: 'Aug 2025 – Sept 2025',
    bullets: [
      'Developed a full stack decentralized crowdfunding application integrating Next.js frontend with Clarity smart contracts on the Stacks blockchain.',
      'Implemented on-chain logic for campaign creation, funding, goal validation, withdrawals, and refunds, ensuring transparent & trustless transactions.',
      'Designed an intuitive UI for creating and contributing to crowdfunding campaigns with seamless blockchain interactions.'
    ],
    link: 'https://github.com/RahulNegi7',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&auto=format&fit=crop&q=80',
    tags: ['Next.js', 'React', 'TypeScript', 'Node.js', 'Clarity', 'Stacks Blockchain', 'Web3']
  }
];

const Projects = () => {
  return (
    <section id="projects" className="section section-dark">
      <div className="container">
        <div className="projects-heading">
          <div data-aos="fade-up">
            <p className="eyebrow">Selected work / 04</p>
            <h2 className="section-title">Projects with<br /><em>purpose.</em></h2>
          </div>
          <a 
            href="https://github.com/RahulNegi7" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="projects-github-link"
          >
            <Github size={18} style={{ marginRight: '8px' }} />
            Visit My GitHub
          </a>
        </div>

        <div className="projects-list">
          {projects.map((project, index) => (
            <div key={index} data-aos="fade-up" className="project-card">
              {/* Left Column: Image with Visit Website / GitHub link right below it */}
              <div className="project-media-col">
                <div className="project-image-box">
                  <img src={project.image} alt={project.title} className="project-img" />
                </div>
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="project-link-btn"
                >
                  <span>View Project</span>
                  <ExternalLink size={16} />
                </a>
              </div>

              {/* Right Column: Written details from resume */}
              <div className="project-content-col">
                <div className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                  <span className="project-period">{project.period}</span>
                </div>
                
                <ul className="project-bullets">
                  {project.bullets.map((bullet, bIndex) => (
                    <li key={bIndex} className="project-bullet">{bullet}</li>
                  ))}
                </ul>

                <div className="project-tags">
                  {project.tags.map((tag, tIndex) => (
                    <span key={tIndex} className="project-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
