import React from 'react';
import { ArrowRight, Moon } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="navbar" style={{ height: '100px', padding: '0 0 0 0' }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', minHeight: '100px', padding: '0 2.5rem' }}>
        <a href="#home" className="nav-logo" style={{ color: 'var(--text-light)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Moon size={26} color="#fff" strokeWidth={2.5} />
          <span style={{ fontSize: '1.25rem', fontWeight: '700', letterSpacing: '-0.5px' }}>rahul</span>
        </a>
        
        <ul className="nav-links" style={{ display: 'flex', gap: '3.5rem', listStyle: 'none', margin: 0, padding: 0, 
            fontSize: '0.70rem', fontWeight: '800', letterSpacing: '1px', textTransform: 'uppercase' }}>
          <li><a href="#about" style={{ color: 'var(--text-light)' }}>About</a></li>
          <li><a href="#expertise" style={{ color: 'var(--text-light)' }}>Portfolio</a></li>
          <li><a href="#testimonials" style={{ color: 'var(--text-light)' }}>Testimonials</a></li>
        </ul>
        
        <a href="#contact" className="btn-pill">
          CONTACT ME <ArrowRight size={14} style={{ marginLeft: '6px' }} />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
