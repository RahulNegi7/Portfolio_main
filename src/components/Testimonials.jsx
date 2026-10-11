import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const words = ['React', 'Java', 'Spring Boot', 'Python', 'OpenCV', 'Next.js', 'MySQL', 'Docker'];

const Testimonials = () => (
  <section id="approach" className="toolkit-section">
    <div className="container toolkit-inner"><div><p className="eyebrow">A growing toolkit</p><h2>Always learning.<br /><em>Always building.</em></h2></div><a href="https://github.com/RahulNegi7" target="_blank" rel="noopener noreferrer" className="text-link">More on GitHub <ArrowUpRight size={17} /></a></div>
    <div className="toolkit-marquee" aria-label={`Technologies: ${words.join(', ')}`}><div className="toolkit-track">{[...words, ...words].map((word, index) => <span key={`${word}-${index}`}>{word}<i>✳</i></span>)}</div></div>
  </section>
);

export default Testimonials;
