import React from 'react';
import { ArrowRight } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="navbar" style={{ height: '100px', padding: '0 0 0 0' }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', minHeight: '100px', padding: '0 2.5rem' }}>
        <a href="#home" className="nav-logo" style={{ color: 'var(--text-light)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '4px' }}>
          <div className="banter-loader">
            <div className="banter-loader__box"></div>
            <div className="banter-loader__box"></div>
            <div className="banter-loader__box"></div>
            <div className="banter-loader__box"></div>
            <div className="banter-loader__box"></div>
            <div className="banter-loader__box"></div>
            <div className="banter-loader__box"></div>
            <div className="banter-loader__box"></div>
            <div className="banter-loader__box"></div>
          </div>
          <span style={{ fontSize: '1.25rem', fontWeight: '700', letterSpacing: '-0.5px' }}>rahul</span>
        </a>
        
        <ul className="nav-links" style={{ display: 'flex', gap: '3.5rem', listStyle: 'none', margin: 0, padding: 0, 
            fontSize: '0.70rem', fontWeight: '800', letterSpacing: '1px', textTransform: 'uppercase' }}>
          <li><a href="#about" style={{ color: 'var(--text-light)' }}>About</a></li>
          <li><a href="#expertise" style={{ color: 'var(--text-light)' }}>Portfolio</a></li>
          <li><a href="#testimonials" style={{ color: 'var(--text-light)' }}>Testimonials</a></li>
        </ul>
        
        <a href="#contact" className="btn-magic-wrap">
          <span className="btn-magic-glow"></span>
          <span className="btn-magic-content">
            <div className="btn-magic-inner">
              <span className="btn-magic-text">Contact me</span>
              <svg className="btn-magic-icon" data-slot="icon" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path clipRule="evenodd" d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z" fillRule="evenodd" />
              </svg>
            </div>
          </span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
