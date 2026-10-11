import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const Hero = () => (
  <section id="home" className="hero-section">
    <div className="hero-grain" aria-hidden="true" />
    <div className="container hero-layout">
      <div className="hero-copy">
        <p className="eyebrow">Computer science &amp; engineering</p>
        <h1 className="hero-title">I build<br /><span>things that</span><br /><em>move us.</em></h1>
        <div className="hero-bottomline">
          <p className="hero-subtitle">Hey, I’m Rahul — a developer exploring the space between thoughtful design and useful technology.</p>
        </div>
        <a className="text-link hero-work-link" href="#projects">Explore selected work <ArrowUpRight size={16} /></a>
      </div>
      <div className="hero-art" aria-label="Portrait of Rahul Negi">
        <div className="hero-orbit orbit-one" /><div className="hero-orbit orbit-two" />
        <div className="hero-photo-frame"><img src="/rahul_profile.jpeg" alt="Rahul Negi" draggable="false" /></div>
        <span className="hero-side-note">CURIOUS BY DEFAULT · BUILDING WITH INTENT</span>
      </div>
    </div>
    <div className="hero-footer"><span>SCROLL TO EXPLORE</span></div>
  </section>
);

export default Hero;
