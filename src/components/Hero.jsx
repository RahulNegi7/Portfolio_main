import React, { useEffect, useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';

const HeroFractalTrees = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d');
    if (!canvas || !context) return undefined;

    let width = 0;
    let height = 0;
    let time = 0;
    let frameId;
    let visible = true;
    const trees = [
      { x: .08, scale: .5, ground: .88 },
      { x: .32, scale: .34, ground: .94 },
      { x: .57, scale: .42, ground: .9 },
      { x: .81, scale: .56, ground: .92 },
      { x: .96, scale: .32, ground: .86 },
    ];

    const resize = () => {
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = width;
      canvas.height = height;
    };

    const drawBranch = (length, angle) => {
      length *= .66;
      if (length <= 4) return;
      for (const direction of [1, -1]) {
        context.save();
        context.rotate(angle * direction);
        context.beginPath();
        context.moveTo(0, 0);
        context.lineTo(0, -length);
        context.stroke();
        context.translate(0, -length);
        drawBranch(length, angle);
        context.restore();
      }
    };

    const draw = () => {
      context.clearRect(0, 0, width, height);
      const angle = (55 + Math.sin(time) * 35) * Math.PI / 180;
      trees.forEach(({ x, scale, ground }) => {
        const trunkLength = Math.min(height * .24, 155) * scale;
        context.save();
        context.globalAlpha = .25 + scale * .2;
        context.strokeStyle = '#a9ca72';
        context.lineWidth = Math.max(.7, scale * 2);
        context.lineCap = 'round';
        context.translate(width * x, height * ground);
        context.beginPath();
        context.moveTo(0, 0);
        context.lineTo(0, -trunkLength);
        context.stroke();
        context.translate(0, -trunkLength);
        drawBranch(trunkLength, angle);
        context.restore();
      });
      time += .005;
      frameId = window.requestAnimationFrame(draw);
    };

    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible && !frameId) draw();
      if (!visible && frameId) {
        window.cancelAnimationFrame(frameId);
        frameId = undefined;
      }
    });
    resize();
    observer.observe(canvas);
    draw();
    window.addEventListener('resize', resize);
    return () => {
      observer.disconnect();
      window.removeEventListener('resize', resize);
      if (frameId) window.cancelAnimationFrame(frameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="hero-fractal-trees" aria-hidden="true" />;
};

const Hero = () => (
  <section id="home" className="hero-section">
    <div className="hero-grain" aria-hidden="true" />
    <HeroFractalTrees />
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
  </section>
);

export default Hero;
