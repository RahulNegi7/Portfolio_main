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
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <a href="https://www.instagram.com/_rahul__.negi/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-light)' }}><InstagramIcon /></a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-light)' }}><Twitter size={24} /></a>
            <a href="https://www.linkedin.com/in/rahul-negi-961b88275/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-light)' }}><Linkedin size={24} /></a>
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

// Simple Instagram icon placeholder
const InstagramIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm4.25 3.25a5.25 5.25 0 1 1 0 10.5a5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5a3.75 3.75 0 0 0 0-7.5zm5.25.75a1 1 0 1 1 0 2a1 1 0 0 1 0-2z" />
  </svg>
);

export default Footer;
