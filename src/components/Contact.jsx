import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="section section-dark">
      <div className="container" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
        <p style={{ fontWeight: '600', marginBottom: '0.5rem' }}>Get In Touch</p>
        <h2 className="section-title" style={{ marginBottom: '1rem' }}>Contact me</h2>
        <p style={{ color: 'var(--text-muted)', marginBottom: '3rem' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        
        <form style={{ display: 'grid', gap: '1.5rem', textAlign: 'left' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label htmlFor="firstName" style={{ fontWeight: '500' }}>First name</label>
              <input type="text" id="firstName" name="firstName" style={{ padding: '0.8rem 1rem', borderRadius: '5px', border: '1px solid rgba(255,255,255,0.2)', background: 'transparent', color: 'var(--text-light)', fontSize: '1rem' }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label htmlFor="lastName" style={{ fontWeight: '500' }}>Last name</label>
              <input type="text" id="lastName" name="lastName" style={{ padding: '0.8rem 1rem', borderRadius: '5px', border: '1px solid rgba(255,255,255,0.2)', background: 'transparent', color: 'var(--text-light)', fontSize: '1rem' }} />
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label htmlFor="email" style={{ fontWeight: '500' }}>Email</label>
              <input type="email" id="email" name="email" style={{ padding: '0.8rem 1rem', borderRadius: '5px', border: '1px solid rgba(255,255,255,0.2)', background: 'transparent', color: 'var(--text-light)', fontSize: '1rem' }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label htmlFor="phone" style={{ fontWeight: '500' }}>Phone number</label>
              <input type="tel" id="phone" name="phone" style={{ padding: '0.8rem 1rem', borderRadius: '5px', border: '1px solid rgba(255,255,255,0.2)', background: 'transparent', color: 'var(--text-light)', fontSize: '1rem' }} />
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <label htmlFor="topic" style={{ fontWeight: '500' }}>Choose a topic</label>
            <select id="topic" name="topic" style={{ padding: '0.8rem 1rem', borderRadius: '5px', border: '1px solid rgba(255,255,255,0.2)', background: 'var(--bg-dark)', color: 'var(--text-light)', fontSize: '1rem' }}>
              <option value="">Select one...</option>
              <option value="project">Project Proposal</option>
              <option value="freelance">Freelance Work</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <label htmlFor="message" style={{ fontWeight: '500' }}>Message</label>
            <textarea id="message" name="message" rows="5" placeholder="Type your message..." style={{ padding: '0.8rem 1rem', borderRadius: '5px', border: '1px solid rgba(255,255,255,0.2)', background: 'transparent', color: 'var(--text-light)', fontSize: '1rem', resize: 'vertical' }}></textarea>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
            <input type="checkbox" id="terms" name="terms" style={{ width: '18px', height: '18px', accentColor: 'var(--accent-purple)' }} />
            <label htmlFor="terms" style={{ color: 'var(--text-muted)' }}>I accept the terms</label>
          </div>

          <button type="button" className="btn-primary" style={{ width: '100%', padding: '1rem', fontSize: '1.1rem' }}>Submit</button>
        </form>

      </div>
    </section>
  );
};

export default Contact;
