import React, { useEffect, useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';

const FractalTree = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d');
    if (!canvas || !context) return undefined;

    let frameId;
    let width = 0;
    let height = 0;
    let time = 0;

    const resize = () => {
      width = canvas.parentElement.clientWidth;
      height = canvas.parentElement.clientHeight;
      canvas.width = width;
      canvas.height = height;
    };

    const drawBranch = (length, angle) => {
      length *= 0.66;
      if (length > 2) {
        context.save();
        context.rotate(angle);
        context.beginPath();
        context.moveTo(0, 0);
        context.lineTo(0, -length);
        context.stroke();
        context.translate(0, -length);
        drawBranch(length, angle);
        context.restore();

        context.save();
        context.rotate(-angle);
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
      let angleDegrees;
      if (window.innerWidth <= 900) {
        const scrollFactor = Math.min(window.scrollY / 600, 1);
        angleDegrees = 45 + scrollFactor * 10 + Math.sin(time) * 35;
      } else {
        angleDegrees = 55 + Math.sin(time) * 35;
      }
      const angle = angleDegrees * Math.PI / 180;
      time += 0.005;
      context.strokeStyle = '#282823';
      context.lineWidth = 1.5;
      context.lineCap = 'round';
      context.save();
      context.translate(width / 2, height - 12);
      const trunkLength = Math.min(150, height / 3.1);
      context.beginPath();
      context.moveTo(0, 0);
      context.lineTo(0, -trunkLength);
      context.stroke();
      context.translate(0, -trunkLength);
      drawBranch(trunkLength, angle);
      context.restore();
      frameId = window.requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener('resize', resize);
    return () => {
      window.removeEventListener('resize', resize);
      window.cancelAnimationFrame(frameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="expertise-tree-canvas" aria-label="Animated fractal tree illustration" role="img" />;
};

const items = [
  { title: 'Frontend craft', text: 'Building responsive interfaces with care for the details, from layout and motion to the final interaction.' },
  { title: 'Full stack thinking', text: 'Connecting clean user experiences to reliable APIs, data models, and the systems behind them.' },
  { title: 'Computer vision', text: 'Exploring real time interaction through gaze tracking, facial landmarks, and accessible input.' },
  { title: 'Tools & systems', text: 'Working across Java, React, Python, databases, and the practical tooling that brings products to life.' },
];

const Expertise = () => {
  return (
  <section id="expertise" className="section expertise-section">
      <div className="container">
      <div className="section-heading"><p className="eyebrow">What I work on</p><h2 className="section-title">Curiosity, made<br /><em>practical.</em></h2><div className="expertise-heading-side"><div className="expertise-art"><FractalTree /></div><div className="expertise-caption"><p>I like turning interesting problems into clear, useful experiences.</p><span>Animated fractal tree illustration</span></div></div></div>
      <div className="expertise-grid">{items.map((item, index) => <article className="expertise-card" key={item.title} style={{ '--reveal-delay': `${index * 110}ms` }}><div className="expertise-card-top"><span className="expertise-card-rule" /></div><h3>{item.title}</h3><p>{item.text}</p><ArrowUpRight className="expertise-card-arrow" aria-hidden="true" /></article>)}</div>
    </div>
  </section>
  );
};

export default Expertise;
