import React from 'react';
import { ArrowUpRight, Github, Instagram, Linkedin } from 'lucide-react';

const Contact = () => (
  <section id="contact" className="contact-section">
    <div className="container contact-inner"><p className="eyebrow">Have something in mind?</p><h2>Let’s make<br /><em>it matter.</em></h2><div className="contact-bottom"><p>I’m open to opportunities, collaborations, and thoughtful conversations about technology.</p><div className="contact-links"><a href="https://www.linkedin.com/in/rahul-negi-961b88275/" target="_blank" rel="noopener noreferrer"><Linkedin size={18} /> LinkedIn <ArrowUpRight size={16} /></a><a href="https://github.com/RahulNegi7" target="_blank" rel="noopener noreferrer"><Github size={18} /> GitHub <ArrowUpRight size={16} /></a><a href="https://www.instagram.com/rahul_negi077/" target="_blank" rel="noopener noreferrer"><Instagram size={18} /> Instagram <ArrowUpRight size={16} /></a></div></div></div>
  </section>
);

export default Contact;
