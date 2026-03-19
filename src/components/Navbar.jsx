import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
        <a href="#home" className="nav-logo" style={{ color: 'var(--text-light)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{ width: '40px', height: '40px', background: 'var(--accent-purple)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>R</div>
          <span style={{ fontSize: '1.2rem', fontWeight: '700' }}>Rahul Negi</span>
        </a>
        
        <ul className="nav-links" style={{ display: 'flex', gap: '2rem', listStyle: 'none', margin: 0, padding: 0 }}>
          <li><a href="#home" style={{ color: 'var(--text-light)' }}>Home</a></li>
          <li><a href="#expertise" style={{ color: 'var(--text-light)' }}>Portfolio</a></li>
          <li><a href="#about" style={{ color: 'var(--text-light)' }}>About me</a></li>
          <li><a href="#testimonials" style={{ color: 'var(--text-light)' }}>Testimonials</a></li>
        </ul>

        <a href="#contact" className="btn-outline" style={{ color: 'var(--text-light)', borderColor: 'var(--text-light)' }}>Contact Me</a>
      </div>
    </nav>
  );
};

export default Navbar;
