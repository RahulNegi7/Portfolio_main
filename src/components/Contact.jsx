import React from 'react';
import { User, Mail, Phone, MessageSquare, List } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section section-dark" data-aos="fade-up">
      <div className="container" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
        <p style={{ fontWeight: '600', marginBottom: '0.5rem' }}>Get In Touch</p>
        <h2 className="section-title" style={{ marginBottom: '1rem' }}>Contact me</h2>
        <p style={{ color: 'var(--text-muted)', marginBottom: '3rem' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        
        <form style={{ display: 'grid', gap: '1.5rem', textAlign: 'left' }}>
          <div className="contact-grid">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label htmlFor="firstName" style={{ fontWeight: '500' }}>First name</label>
              <div className="input-group">
                <input type="text" id="firstName" name="firstName" className="custom-input" placeholder="Rahul" />
                <User className="input-icon" />
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label htmlFor="lastName" style={{ fontWeight: '500' }}>Last name</label>
              <div className="input-group">
                <input type="text" id="lastName" name="lastName" className="custom-input" placeholder="Negi" />
                <User className="input-icon" />
              </div>
            </div>
          </div>

          <div className="contact-grid">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label htmlFor="email" style={{ fontWeight: '500' }}>Email</label>
              <div className="input-group">
                <input type="email" id="email" name="email" className="custom-input" placeholder="rahul@example.com" />
                <Mail className="input-icon" />
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label htmlFor="phone" style={{ fontWeight: '500' }}>Phone number</label>
              <div className="input-group">
                <input type="tel" id="phone" name="phone" className="custom-input" placeholder="+1 (555) 000-0000" />
                <Phone className="input-icon" />
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <label htmlFor="topic" style={{ fontWeight: '500' }}>Choose a topic</label>
            <div className="input-group">
              <select id="topic" name="topic" className="custom-input" style={{ appearance: 'none' }}>
                <option value="">Select one...</option>
                <option value="project">Project Proposal</option>
                <option value="freelance">Freelance Work</option>
                <option value="other">Other</option>
              </select>
              <List className="input-icon" />
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <label htmlFor="message" style={{ fontWeight: '500' }}>Message</label>
            <div className="input-group" style={{ alignItems: 'flex-start' }}>
              <textarea id="message" name="message" className="custom-input custom-textarea" placeholder="Type your message..."></textarea>
              <MessageSquare className="input-icon" style={{ top: '1rem' }} />
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1.2rem', marginTop: '0.5rem' }}>
            <input type="checkbox" id="terms" name="terms" className="hidden-checkbox" />
            <label htmlFor="terms" className="check">
              <svg width="20px" height="20px" viewBox="0 0 18 18">
                <path d="M1,9 L1,3.5 C1,2 2,1 3.5,1 L14.5,1 C16,1 17,2 17,3.5 L17,14.5 C17,16 16,17 14.5,17 L3.5,17 C2,17 1,16 1,14.5 L1,9 Z" />
                <polyline points="1 9 7 14 15 4" />
              </svg>
            </label>
            <label htmlFor="terms" style={{ color: 'var(--text-muted)', cursor: 'pointer', userSelect: 'none' }}>I accept the terms</label>
          </div>

          <button type="button" className="btn-grad" style={{ width: '100%', fontSize: '1.1rem' }}>Submit</button>
        </form>

      </div>
    </section>
  );
};

export default Contact;
