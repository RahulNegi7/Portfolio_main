import React from 'react';
import { ArrowDown, ArrowUpRight } from 'lucide-react';

const Hero = () => (
  <section id="home" className="hero-section">
    <div className="hero-grain" aria-hidden="true" />
    <div className="container hero-layout">
      <div className="hero-copy">
        <p className="eyebrow"><span className="status-dot" /> Computer science &amp; engineering</p>
        <h1 className="hero-title">I build<br /><span>things that</span><br /><em>move us.</em></h1>
        <div className="hero-bottomline">
          <p className="hero-subtitle">Hey, I’m Rahul — a developer exploring the space between thoughtful design and useful technology.</p>
          <a className="circle-link" href="#projects" aria-label="Explore selected work"><ArrowDown size={20} /></a>
        </div>
        <a className="text-link hero-work-link" href="#projects">Explore selected work <ArrowUpRight size={16} /></a>
      </div>
      <div className="hero-art" aria-label="Portrait of Rahul Negi">
        <div className="hero-orbit orbit-one" /><div className="hero-orbit orbit-two" />
        <div className="hero-photo-frame"><img src="/rahul_profile.jpeg" alt="Rahul Negi" /></div>
        <span className="hero-index">RN / 2026</span>
        <span className="hero-side-note">CURIOUS BY DEFAULT · BUILDING WITH INTENT</span>
      </div>
    </div>
    <div className="hero-footer"><span>SCROLL TO EXPLORE</span><span>01 — 06</span></div>
  </section>
);

export default Hero;
