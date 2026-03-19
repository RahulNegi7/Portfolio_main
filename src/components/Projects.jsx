import React from 'react';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Ahuse',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.',
    link: '#',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=600&h=400&fit=crop'
  },
  {
    title: 'App Dashboard',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.',
    link: '#',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop'
  },
  {
    title: 'Easy Rent',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.',
    link: '#',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="section section-dark">
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem' }}>
          <div>
            <p style={{ fontWeight: '600', marginBottom: '0.5rem' }}>Recent Projects</p>
            <h2 className="section-title" style={{ margin: 0 }}>My Portfolio</h2>
          </div>
          <button className="button-62">
            {/* The figma UI has a Dribbble button in pink color. Using Dribbble pink color here */}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style={{ marginRight: '8px' }}>
              <path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm8.66-15.06c-1.428-2.67-3.69-4.81-6.19-5.96-.28 1.09-1.09 3.01-1.77 4.67 3.32 1.02 5.95 2.5 7.96 1.29zm-13.6 7.42c1.77-.38 4.31-.69 7.02-.69 1.54 0 3.02.16 4.38.45-1.14 3.73-2.92 6.54-3.15 6.89C10.74 22.42 7.04 20.3 5.06 16.36zm-2.02-3.8c0 1.95.53 3.78 1.45 5.35 1.57-2.73 4.2-4.57 6.9-5.33-1.07-2.61-2.31-5.18-2.58-5.74-3.15 1.25-5.33 4.09-5.77 5.72zm11.23 2.15c-1.35-.29-2.8-.45-4.33-.45-2.54 0-4.9.29-6.52.64v.53c0 .26.02.5.03.75 3.12-.13 6.42-.56 8.92-2.12-.1-.58-.58-1.57-1.1-2.45-3.32-1.2-6.27-2.84-8.08-4.26-.06.27-.12.55-.17.84.28.53 1.55 3 2.62 5.56-2.51.78-4.94 2.53-6.4 5.06C3.99 18.23 6.9 20.9 9.85 21l.15-4.5h-.02zm1.68-7.85c.67-1.63 1.46-3.5 1.72-4.57C14.07 1 11.27 1.83 9.4 3.49c.28.59 1.54 3.2 2.65 5.86 1.86-1.5 5.06-3.23 8.64-4.52z"/>
            </svg>
            Visit My Dribbble
          </button>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {projects.map((project, index) => (
            <div key={index} style={{ 
              background: 'var(--bg-dark)', 
              borderRadius: '10px', 
              overflow: 'hidden',
              border: '1px solid rgba(255,255,255,0.05)',
              boxShadow: '0 4px 20px rgba(0,0,0,0.5)',
              display: 'flex',
              flexDirection: 'column'
            }}>
              <div style={{ backgroundImage: `url(${project.image})`, height: '250px', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
              <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.8rem' }}>{project.title}</h3>
                <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', flex: 1 }}>{project.desc}</p>
                <a href={project.link} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: '600', color: 'var(--text-dark)', borderBottom: '1px solid var(--accent-purple)', paddingBottom: '0.2rem', width: 'fit-content' }}>
                  View Website <ExternalLink size={18} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
