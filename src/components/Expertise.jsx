import React from 'react';
import { Smartphone, Layout, Database, Server } from 'lucide-react';

const expertiseItems = [
  { title: 'Responsive Design', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.', icon: <Smartphone size={40} color="var(--accent-purple)" /> },
  { title: 'Front-End Frameworks', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.', icon: <Layout size={40} color="var(--accent-purple)" /> },
  { title: 'Backend Development', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.', icon: <Server size={40} color="var(--accent-purple)" /> },
  { title: 'Database Optimization', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.', icon: <Database size={40} color="var(--accent-purple)" /> }
];

const Expertise = () => {
  return (
    <section id="expertise" className="section section-white">
      <div className="container">
        <h2 className="section-title">My Expertise</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
          {expertiseItems.map((item, index) => (
            <div key={index} style={{ 
              background: 'var(--bg-dark)', 
              padding: '2.5rem 2rem', 
              borderRadius: '10px', 
              transition: 'all 0.3s ease',
              border: '1px solid rgba(255,255,255,0.05)',
              borderBottom: '4px solid transparent'
            }}
            onMouseEnter={(e) => { e.currentTarget.style.borderBottom = '4px solid var(--accent-purple)'; e.currentTarget.style.transform = 'translateY(-5px)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderBottom = '4px solid transparent'; e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              <div style={{ background: 'var(--bg-light)', border: '1px solid rgba(255,255,255,0.1)', width: '70px', height: '70px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', boxShadow: '0 4px 10px rgba(0,0,0,0.5)' }}>
                {item.icon}
              </div>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>{item.title}</h3>
              <p style={{ color: 'var(--text-muted)' }}>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
