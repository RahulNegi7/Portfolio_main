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
      const dpr = window.devicePixelRatio || 1;
      width = canvas.parentElement.clientWidth;
      height = canvas.parentElement.clientHeight;
      
      // Fix for High-DPI / Retina mobile screens causing blur
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      
      // Scale canvas internal context back down to CSS dimensions
      ctx.scale(dpr, dpr);
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    let animationFrame;
    let t = 0;

    const drawBranch = (h, theta, currentLineWidth) => {
      h *= 0.66; // Branch length reduction factor
      
      if (h > 2.5) { // Base stop 
        // Thinner branches the further out we go
        const newWidth = currentLineWidth * 0.75;
        ctx.lineWidth = Math.max(0.5, newWidth);
        
        ctx.save();
        ctx.rotate(theta);
        
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(0, -h);
        ctx.stroke();
        
        ctx.translate(0, -h);
        drawBranch(h, theta, newWidth);
        ctx.restore();
        
        ctx.save();
        ctx.rotate(-theta);
        
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(0, -h);
        ctx.stroke();
        
        ctx.translate(0, -h);
        drawBranch(h, theta, newWidth);
        ctx.restore();
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      
      // Animate angle automatically based on sine wave as requested
      // Map sin(t) from [-1, 1] to [20, 90] degrees (Center=55, Amp=35)
      let a = 55 + Math.sin(t) * 35;  
      let theta = (a * Math.PI) / 180;
      
      t += 0.005; // Increase time for medium speed
      
      ctx.strokeStyle = '#ffffff'; 
      ctx.lineWidth = 2.5; // Thicker trunk
      ctx.shadowColor = 'rgba(67, 206, 162, 0.4)'; // Ocean Green glowing effect
      ctx.shadowBlur = 10;
      
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
      drawBranch(initialBranchLength, theta, 2.5); // Pass the heavy start width into the recursion
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
