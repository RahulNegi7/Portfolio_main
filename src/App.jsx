import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Expertise from './components/Expertise';
import About from './components/About';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    const revealFromLeft = document.querySelectorAll('.about-copy, .expertise-card:nth-child(odd), .projects-heading > :first-child, .project-card:nth-child(odd), .toolkit-inner > :first-child, .contact-inner > .eyebrow');
    const revealFromRight = document.querySelectorAll('.about-image-wrapper, .expertise-heading-side, .expertise-card:nth-child(even), .projects-heading > :last-child, .project-card:nth-child(even), .toolkit-inner > :last-child, .contact-inner > h2');
    revealFromLeft.forEach((element) => element.classList.add('reveal-from-left'));
    revealFromRight.forEach((element) => element.classList.add('reveal-from-right'));

    const elements = document.querySelectorAll('.section-heading, .expertise-heading-side, .expertise-card, .about-copy, .about-image-wrapper, .projects-heading > *, .project-card, .toolkit-inner > *, .contact-inner > *');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
        } else {
          entry.target.classList.remove('is-revealed');
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="app-container">
      <Navbar />
      <main>
        <Hero />
        <Expertise />
        <About />
        <Projects />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
