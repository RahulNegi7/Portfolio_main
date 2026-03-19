import React from 'react';
import { Github, Linkedin, Twitter, Dribbble } from 'lucide-react';

const Footer = () => {
  return (
    <footer style={{ background: 'var(--bg-light)', padding: '4rem 0 2rem 0', color: 'var(--text-light)' }}>
      <div className="container">
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4rem', flexWrap: 'wrap', gap: '2rem' }}>
          <a href="#home" className="nav-logo" style={{ color: 'var(--text-light)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ width: '40px', height: '40px', background: 'var(--accent-purple)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>R</div>
            <span style={{ fontSize: '1.2rem', fontWeight: '700' }}>Rahul Negi</span>
          </a>

          <ul className="nav-links" style={{ display: 'flex', gap: '2.5rem', listStyle: 'none', margin: 0, padding: 0 }}>
            <li><a href="#home">Home</a></li>
            <li><a href="#expertise">Portfolio</a></li>
            <li><a href="#about">About me</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
          </ul>

          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <a href="#" style={{ color: 'var(--text-light)' }}><FacebookIcon /></a>
            <a href="#" style={{ color: 'var(--text-light)' }}><Twitter size={24} /></a>
            <a href="#" style={{ color: 'var(--text-light)' }}><Linkedin size={24} /></a>
            <a href="#" style={{ color: 'var(--text-light)' }}><Dribbble size={24} /></a>
          </div>
        </div>

        <div style={{ borderTop: '1px solid rgba(0,0,0,0.1)', paddingTop: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.9rem', color: 'var(--text-muted)', flexWrap: 'wrap', gap: '1rem' }}>
          <p>Made with 💖 by Rahul Negi</p>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookies Settings</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

// Simple Facebook icon placeholder
const FacebookIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"/>
  </svg>
);

export default Footer;
