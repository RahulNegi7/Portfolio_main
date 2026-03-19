import React, { useEffect, useRef } from 'react';
import { ArrowRight, ArrowDown } from 'lucide-react';

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
        // Start closed at 15 deg, spread all the way to 110 deg
        const baseAngle = 15 + (scrollFactor * 95);
        // Add a tiny bit of "breathing" animation on top
        a = baseAngle + Math.sin(t) * 10;
      } else {
        // Desktop: Large autonomous sine wave spreading
        a = 90 + Math.sin(t) * 35;
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

const Hero = () => {
  return (
    <section id="home" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', backgroundColor: '#000', position: 'relative', overflow: 'hidden' }} data-aos="fade-up">
      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <div className="hero-grid-layout">
          
          <div className="hero-text animate-fade-in">
            <h1 className="hero-title">
              Design Great <br/> Digital Products
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
