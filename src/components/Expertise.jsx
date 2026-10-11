import React, { useEffect, useRef } from 'react';
import { Braces, Eye, Layers3, Server } from 'lucide-react';

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
    const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const resize = () => {
      const bounds = canvas.getBoundingClientRect();
      width = bounds.width;
      height = bounds.height;
      canvas.width = Math.round(width * pixelRatio);
      canvas.height = Math.round(height * pixelRatio);
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    };

    const branch = (x, y, length, angle, spread, depth) => {
      if (length < 4 || depth > 10) return;
      const endX = x + Math.sin(angle) * length;
      const endY = y - Math.cos(angle) * length;
      context.lineWidth = Math.max(0.65, depth * 0.19);
      context.beginPath();
      context.moveTo(x, y);
      context.lineTo(endX, endY);
      context.stroke();
      branch(endX, endY, length * 0.68, angle - spread, spread, depth + 1);
      branch(endX, endY, length * 0.68, angle + spread, spread, depth + 1);
    };

    const draw = () => {
      context.clearRect(0, 0, width, height);
      context.strokeStyle = 'rgba(35, 36, 31, 0.72)';
      context.lineCap = 'round';
      const sway = reduceMotion ? 0 : Math.sin(time) * 0.13;
      const spread = 0.43 + (window.scrollY / Math.max(document.documentElement.scrollHeight - window.innerHeight, 1)) * 0.15;
      const trunkLength = Math.min(height * 0.38, 122);
      const rootX = width * 0.53;
      const rootY = height - 12;
      context.lineWidth = 2;
      context.beginPath();
      context.moveTo(rootX, rootY);
      context.lineTo(rootX, rootY - trunkLength);
      context.stroke();
      branch(rootX, rootY - trunkLength, trunkLength * 0.78, sway, spread, 1);
      if (!reduceMotion) {
        time += 0.012;
        frameId = window.requestAnimationFrame(draw);
      }
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
  { number: '01', title: 'Frontend craft', text: 'Building responsive interfaces with care for the details, from layout and motion to the final interaction.', icon: <Layers3 /> },
  { number: '02', title: 'Full stack thinking', text: 'Connecting clean user experiences to reliable APIs, data models, and the systems behind them.', icon: <Braces /> },
  { number: '03', title: 'Computer vision', text: 'Exploring real time interaction through gaze tracking, facial landmarks, and accessible input.', icon: <Eye /> },
  { number: '04', title: 'Tools & systems', text: 'Working across Java, React, Python, databases, and the practical tooling that brings products to life.', icon: <Server /> },
];

const Expertise = () => (
  <section id="expertise" className="section expertise-section">
    <div className="container">
      <div className="section-heading"><p className="eyebrow">What I work on / 02</p><h2 className="section-title">Curiosity, made<br /><em>practical.</em></h2><div className="expertise-heading-side"><p className="section-intro">I like turning interesting problems into clear, useful experiences.</p><div className="expertise-art"><FractalTree /><span>GROWTH THROUGH<br />EXPERIMENTATION</span></div></div></div>
      <div className="expertise-grid">{items.map((item) => <article className="expertise-card" key={item.number}><div className="expertise-card-top"><span>{item.number}</span>{item.icon}</div><h3>{item.title}</h3><p>{item.text}</p></article>)}</div>
    </div>
  </section>
);

export default Expertise;
