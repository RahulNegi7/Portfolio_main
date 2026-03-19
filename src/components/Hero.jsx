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
        {/* Responsive styles for mobile */}
        <style>{`
          .hero {
            width: 100%;
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .hero-content {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            width: 100%;
            max-width: 1280px;
            padding: 2rem;
          }
          .hero-text {
            flex: 1;
            min-width: 0;
          }
          .hero-visual {
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .fractal-tree {
            width: 100%;
            max-width: 400px;
            height: 300px;
          }
          @media (max-width: 768px) {
            .hero-content {
              flex-direction: column;
              padding: 1rem;
            }
            .hero-text {
              width: 100%;
              margin-bottom: 2rem;
              text-align: center;
            }
            .hero-visual {
              width: 100%;
              justify-content: center;
            }
            .fractal-tree {
              max-width: 100%;
              height: 200px;
            }
            .hero-title {
              font-size: 2rem;
            }
            .hero-description {
              font-size: 1rem;
            }
            .hero-buttons {
              flex-direction: column;
              gap: 1rem;
            }
          }
        `}</style>
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
      
      // Animate angle automatically based on sine wave as requested
      // Map sin(t) from [-1, 1] to [20, 90] degrees (Center=55, Amp=35)
      let a = 55 + Math.sin(t) * 35;  
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
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '2rem', alignItems: 'center' }}>
          
          <div className="hero-text animate-fade-in" style={{ paddingRight: '1rem', marginTop: '4rem' }}>
            <h1 className="hero-title" style={{ fontSize: 'clamp(4rem, 8vw, 6.5rem)', letterSpacing: '-2.5px', lineHeight: '1.05', marginBottom: '2rem', color: '#FFF', fontWeight: '800' }}>
              Design Great <br/> Digital Products
            </h1>
            <p className="hero-subtitle" style={{ color: '#A0A2B3', fontSize: '1.15rem', marginBottom: '3rem', maxWidth: '480px', fontWeight: '400', lineHeight: '1.6' }}>
              I partner with ambitious teams to build digital products that look incredible, solve complex problems, and deliver absolute perfection.
            </p>
            <a href="#contact" className="btn-pill">
              CONTACT ME <ArrowRight size={16} strokeWidth={2.5} style={{ marginLeft: '8px' }} />
            </a>
          </div>

          <div className="hero-visual" style={{ height: '700px', width: '100%', position: 'relative', marginLeft: '2rem' }}>
            <FractalTree />
          </div>

        </div>
      </div>

      <a href="#about" className="btn-scroll-down">
        <ArrowDown size={20} color="#000" strokeWidth={2.5} />
      </a>
    </section>
  );
};

export default Hero;
