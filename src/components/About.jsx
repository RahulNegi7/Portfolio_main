import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const About = () => (
  <section id="about" className="section about-section">
    <div className="container about-layout">
      <div className="about-image-wrapper"><div className="about-photo"><img src="/rahul_profile.jpeg" alt="Rahul Negi" /></div><span className="photo-caption">A little focus goes a long way.</span></div>
      <div className="about-copy"><p className="eyebrow">A little about me / 03</p><h2 className="section-title">I’m interested in<br /><em>how things work.</em></h2><p>I’m a Computer Science and Engineering student who enjoys making useful ideas real. My work moves between frontend experiences, backend systems, and experiments with computer vision.</p><p>I learn best by building. Each project is a chance to ask better questions, get the details right, and make something that feels good to use.</p><a href="#projects" className="text-link">A few things I’ve made <ArrowUpRight size={17} /></a></div>
    </div>
  </section>
);

export default About;
