import React, { useEffect, useState } from 'react';
import { ArrowUpRight, X } from 'lucide-react';

const links = [
  ['01', 'About', '#about'], ['02', 'Expertise', '#expertise'],
  ['03', 'Selected work', '#projects'], ['04', 'Contact', '#contact'],
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    const onKeyDown = (event) => event.key === 'Escape' && setOpen(false);
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('keydown', onKeyDown);
    document.body.classList.toggle('menu-open', open);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('keydown', onKeyDown);
      document.body.classList.remove('menu-open');
    };
  }, [open]);

  return (
    <>
      <header className={`navbar ${scrolled ? 'scrolled' : ''} ${open ? 'menu-is-open' : ''}`}>
        <div className="nav-container">
          <a href="#home" className="nav-logo" onClick={() => setOpen(false)}><span className="logo-mark">R</span><span>Rahul Negi</span></a>
          <a href="#contact" className="nav-availability"><span className="status-dot" /> Available for opportunities</a>
          <button className={`menu-toggle ${open ? 'is-open' : ''}`} type="button" aria-label={open ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={open} onClick={() => setOpen(!open)}>
            {open ? <X size={21} /> : <span className="menu-lines"><i /><i /></span>}
            <span>{open ? 'Close' : 'Menu'}</span>
          </button>
        </div>
      </header>
      <div className={`menu-overlay ${open ? 'is-visible' : ''}`} aria-hidden={!open}>
        <div className="menu-overlay-inner">
          <p className="eyebrow">Navigation / 2026</p>
          <nav aria-label="Main navigation">
            {links.map(([number, label, href]) => <a key={number} href={href} tabIndex={open ? 0 : -1} onClick={() => setOpen(false)}><span>{number}</span>{label}<ArrowUpRight className="menu-arrow" /></a>)}
          </nav>
          <p className="menu-note">A developer driven by curiosity<br />and a love for good details.</p>
        </div>
      </div>
    </>
  );
};

export default Navbar;
