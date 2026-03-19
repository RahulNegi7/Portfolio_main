import React, { useState, useEffect } from 'react';
import { Menu, X, User, Wrench, Folder, MessageSquare, FileText } from 'lucide-react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = ['home', 'about', 'expertise', 'projects', 'testimonials', 'contact'];
      const scrollPosition = window.scrollY + 150; // offset
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about', id: 'about', icon: <User size={18} /> },
    { name: 'Skills', href: '#expertise', id: 'expertise', icon: <Wrench size={18} /> },
    { name: 'Projects', href: '#projects', id: 'projects', icon: <Folder size={18} /> },
    { name: 'Testimonials', href: '#testimonials', id: 'testimonials', icon: <MessageSquare size={18} /> },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <a href="#home" className="nav-logo">
          <div className="banter-loader flex-shrink-0">
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
          <span>rahul</span>
        </a>
        
        <div className="nav-actions">
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
          
          <label className="hamburger mobile-menu-btn" aria-label="Toggle menu">
            <input 
              type="checkbox" 
              checked={isMobileMenuOpen}
              onChange={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
            <svg viewBox="0 0 32 32">
              <path className="line line-top-bottom" d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"></path>
              <path className="line" d="M7 16 27 16"></path>
            </svg>
          </label>
        </div>
      </div>

      {/* Full Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="mobile-menu">
          <div className="mobile-nav-links">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href} 
                className={activeSection === link.id ? 'active' : ''}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.icon}
                {link.name}
              </a>
            ))}
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" onClick={() => setIsMobileMenuOpen(false)}>
              <FileText size={18} />
              Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
