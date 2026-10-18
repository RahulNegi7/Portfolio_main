import React from 'react';
import { ArrowUp } from 'lucide-react';

const Footer = () => <footer className="site-footer"><div className="container footer-inner"><span>© {new Date().getFullYear()} Rahul Negi</span><span>Designed with curiosity. Built with care.</span><a href="#home">Back to top <ArrowUp size={14} /></a></div></footer>;

export default Footer;
