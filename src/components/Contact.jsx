import React from 'react';
import { Github, Instagram, Linkedin } from 'lucide-react';

const Contact = () => (
  <section id="contact" className="contact-section">
    <div className="container contact-inner"><p className="eyebrow">Have something in mind?</p><h2>Let’s make<br /><em>it matter.</em></h2><div className="contact-bottom"><p>I’m open to opportunities, collaborations, and thoughtful conversations about technology.</p><div className="contact-links"><a className="social-link social-link--linkedin" href="https://www.linkedin.com/in/rahul-negi-961b88275/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" title="LinkedIn"><Linkedin size={23} aria-hidden="true" /></a><a className="social-link social-link--github" href="https://github.com/RahulNegi7" target="_blank" rel="noopener noreferrer" aria-label="GitHub" title="GitHub"><Github size={23} aria-hidden="true" /></a><a className="social-link social-link--instagram" href="https://www.instagram.com/rahul_negi077/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" title="Instagram"><Instagram size={23} aria-hidden="true" /></a></div></div></div>
  </section>
);

export default Contact;
