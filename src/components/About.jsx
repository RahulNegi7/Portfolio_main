import React from 'react';

const About = () => {
  return (
    <section id="about" className="section section-dark">
      <div className="container">
        <div className="about-grid">
          
          <div className="about-image-wrapper">
            <div style={{ 
              position: 'relative', 
              width: '80%', 
              height: '85%', 
              background: 'var(--accent-purple)', 
              borderRadius: '20px',
              zIndex: 0,
              overflow: 'hidden',
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'center',
              boxShadow: '0 10px 30px rgba(67, 206, 162, 0.15)'
            }}>
              <img 
                 src="/rahul_profile.jpeg" 
                 alt="Rahul Negi" 
                 style={{ 
                   width: '100%', 
                   height: '100%', 
                   objectFit: 'cover'
                 }} 
              />
            </div>
          </div>

          <div>
            <p style={{ fontWeight: '600', marginBottom: '0.5rem' }}>About</p>
            <h2 className="section-title" style={{ marginBottom: '1.5rem' }} data-aos="fade-up">About Me</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', marginBottom: '1.5rem' }}>
              I am a Computer Science and Engineering student with a strong academic background and a passion for building impactful technology solutions. With hands-on experience in web development and problem-solving, I continuously work on improving my skills and exploring new tools and frameworks. 
            </p>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', marginBottom: '2.5rem' }}>
              I enjoy developing responsive applications and contributing to real-world projects, from user interfaces to full-stack systems. I am a collaborative, quick learner who is always eager to innovate and grow through practical experience and meaningful challenges.
            </p>
            <a href="#projects" className="btn-grad">View Portfolio</a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
