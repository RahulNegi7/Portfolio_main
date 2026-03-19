import React from 'react';

const About = () => {
  return (
    <section id="about" className="section section-dark">
      <div className="container">
        <div className="about-grid">
          
          <div className="about-image-wrapper">
            <div style={{ 
              position: 'absolute', 
              width: '85%', 
              height: '80%', 
              bottom: '10%', 
              left: '5%',
              background: 'var(--accent-purple)', 
              borderRadius: '20px',
              zIndex: 0
            }}></div>
            <img 
               src="https://via.placeholder.com/400x500/1C1E53/FFFFFF?text=Profile+Image" 
               alt="About Me" 
               style={{ 
                 position: 'relative', 
                 zIndex: 1, 
                 width: '80%', 
                 height: '90%', 
                 objectFit: 'cover',
                 borderRadius: '20px',
                 boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
               }} 
            />
          </div>

          <div>
            <p style={{ fontWeight: '600', marginBottom: '0.5rem' }}>About</p>
            <h2 className="section-title" style={{ marginBottom: '1.5rem' }} data-aos="fade-up">About Me</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', marginBottom: '1.5rem' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce varius faucibus massa sollicitudin amet augue. Nibh metus a semper purus mauris duis. Lorem eu neque, tristique quis duis. Nibh scelerisque ac adipiscing velit non nulla in amet pellentesque. 
            </p>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', marginBottom: '2.5rem' }}>
              Sit turpis pretium eget maecenas. Vestibulum dolor mattis consectetur eget commodo vitae. Amet pellentesque sit pulvinar lorem mi a, euismod risus r.
            </p>
            <a href="#projects" className="btn-grad">View Portfolio</a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
