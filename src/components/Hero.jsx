import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, ArrowDown } from 'lucide-react';
import { Cursor } from 'react-simple-typewriter';

const FractalTree = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    
    let width, height;
    
    const resizeCanvas = () => {
      width = canvas.parentElement.clientWidth;
      height = canvas.parentElement.clientHeight;
      canvas.width = width;
      canvas.height = height;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    let animationFrame;
    let t = 0;

    const drawBranch = (h, theta) => {
      h *= 0.66; // Branch length reduction factor
      
      if (h > 2) {
        ctx.save();
        ctx.rotate(theta);
        
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(0, -h);
        ctx.stroke();
        
        ctx.translate(0, -h);
        drawBranch(h, theta);
        ctx.restore();
        
        ctx.save();
        ctx.rotate(-theta);
        
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(0, -h);
        ctx.stroke();
        
        ctx.translate(0, -h);
        drawBranch(h, theta);
        ctx.restore();
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      
      let a;
      if (window.innerWidth <= 900) {
        // Mobile: Spread natively based on user scrolling!
        const scrollFactor = Math.min(window.scrollY / 600, 1);
        // Start "closed" at 55 deg (as requested), spreading up to ~115 deg when scrolled
        const baseAngle = 55 + (scrollFactor * 35);
        // Add a tiny bit of "breathing" animation on top
        a = baseAngle + Math.sin(t) * 35;
      } else {
        // Desktop: Large autonomous sine wave spreading
        a = 55 + Math.sin(t) * 35;
      }
      
      let theta = (a * Math.PI) / 180;
      t += 0.005; // Increase time for medium speed
      
      ctx.strokeStyle = 'rgb(255, 255, 255)'; // White tree lines as per Figma
      ctx.lineWidth = 1.5;
      
      ctx.save();
      // Start tree from bottom center of the canvas component
      ctx.translate(width / 2, height - 20);
      
      const initialBranchLength = Math.min(150, height / 3.5);
      
      // Draw trunk
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(0, -initialBranchLength);
      ctx.stroke();
      
      ctx.translate(0, -initialBranchLength);
      drawBranch(initialBranchLength, theta);
      ctx.restore();
      
      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return <canvas ref={canvasRef} style={{ width: '100%', height: '100%' }} />;
};

const CustomTypewriter = () => {
  const phrases = [
    { prefix: "Hey, I'm ", highlight: "Rahul", suffix: "" },
    { prefix: "A ", highlight: "Computer Science", suffix: " student" },
    { prefix: "Passionate about ", highlight: "building", suffix: " projects" },
    { prefix: "Welcome to my ", highlight: "portfolio", suffix: "!" }
  ];

  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];
    const fullText = currentPhrase.prefix + currentPhrase.highlight + currentPhrase.suffix;

    let timer;
    if (isDeleting) {
      if (charIndex === 0) {
        setIsDeleting(false);
        setPhraseIndex(p => (p + 1) % phrases.length);
      } else {
        timer = setTimeout(() => {
          setCharIndex(c => c - 1);
        }, 60);
      }
    } else {
      if (charIndex === fullText.length) {
        timer = setTimeout(() => setIsDeleting(true), 2000);
      } else {
        timer = setTimeout(() => {
          setCharIndex(c => c + 1);
        }, 120);
      }
    }

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, phraseIndex]);

  const currentPhrase = phrases[phraseIndex];
  
  const pLen = currentPhrase.prefix.length;
  const hLen = currentPhrase.highlight.length;

  const typedPrefix = currentPhrase.prefix.substring(0, charIndex);
  const untypedPrefix = currentPhrase.prefix.substring(charIndex);

  const typedHighlight = currentPhrase.highlight.substring(0, Math.max(0, charIndex - pLen));
  const untypedHighlight = currentPhrase.highlight.substring(Math.max(0, charIndex - pLen));

  const typedSuffix = currentPhrase.suffix.substring(0, Math.max(0, charIndex - pLen - hLen));
  const untypedSuffix = currentPhrase.suffix.substring(Math.max(0, charIndex - pLen - hLen));

  return (
    <>
      <span style={{ display: 'inline' }}>
        <span>{typedPrefix}</span>
        {typedHighlight && <span style={{ color: '#43cea2' }}>{typedHighlight}</span>}
        <span>{typedSuffix}</span>
      </span>
      <Cursor cursorStyle="|" />
      <span style={{ visibility: 'hidden', display: 'inline' }}>
        <span>{untypedPrefix}</span>
        {untypedHighlight && <span style={{ color: '#43cea2' }}>{untypedHighlight}</span>}
        <span>{untypedSuffix}</span>
      </span>
    </>
  );
};

const Hero = () => {
  return (
    <section id="home" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', backgroundColor: '#000', position: 'relative', overflow: 'hidden' }} data-aos="fade-up">
      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <div className="hero-grid-layout">
          
          <div className="hero-text animate-fade-in">
            <h1 className="hero-title" style={{ minHeight: '160px' }}>
              <CustomTypewriter />
            </h1>
            <p className="hero-subtitle">
              I partner with ambitious teams to build digital products that look incredible, solve complex problems, and deliver absolute perfection.
            </p>
            <a href="#about" className="btn-hero-glow">
              <span>GET STARTED <ArrowRight size={16} strokeWidth={2.5} style={{ marginLeft: '8px' }} /></span>
            </a>
          </div>

          <div className="hero-visual">
            <FractalTree />
          </div>

        </div>
      </div>


    </section>
  );
};

export default Hero;
