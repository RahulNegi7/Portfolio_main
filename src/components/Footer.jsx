import React from 'react';
import { Github, Linkedin, Twitter, Dribbble } from 'lucide-react';

const Footer = () => {
  return (
    <footer style={{ background: 'var(--bg-light)', padding: '1rem 0', color: 'var(--text-light)' }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '2rem', minHeight: '40px' }}>
          <a href="https://www.instagram.com/_rahul__.negi/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-light)' }}><InstagramIcon /></a>
          <a href="https://x.com/RahulNe8" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-light)' }}><XIcon /></a>
          <a href="https://www.linkedin.com/in/rahul-negi-961b88275/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-light)' }}><Linkedin size={24} /></a>
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

// Simple X icon placeholder
const XIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.53 2H21L13.47 10.19L22 22H15.5L10.5 15.5L5.5 22H2L9.89 13.31L2 2H8.5L13.06 7.94L17.53 2ZM16.13 20H17.56L11.5 12.62L5.44 20H6.87L11.5 14.38L16.13 20ZM4.41 4L11.5 12.62L18.59 4H17.16L11.5 10.62L5.84 4H4.41Z" />
  </svg>
);

export default Footer;
