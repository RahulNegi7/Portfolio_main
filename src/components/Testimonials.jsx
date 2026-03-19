import React from 'react';

const testimonials = [
  {
    name: 'Dianne Russell',
    company: 'Starbucks',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.',
    avatar: 'https://i.pravatar.cc/150?img=5',
    rating: 5
  },
  {
    name: 'Kristin Watson',
    company: 'Louis Vuitton',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.',
    avatar: 'https://i.pravatar.cc/150?img=9',
    rating: 5
  },
  {
    name: 'Kathryn Murphy',
    company: 'McDonald\'s',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.',
    avatar: 'https://i.pravatar.cc/150?img=1',
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="section section-dark">
      <div className="container">
        <p style={{ fontWeight: '600', marginBottom: '0.5rem' }}>Clients Feedback</p>
        <h2 className="section-title" style={{ marginBottom: '3rem' }}>Customer testimonials</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {testimonials.map((testimonial, index) => (
            <div key={index} style={{ 
              background: 'var(--bg-darker)', 
              padding: '2.5rem 2rem', 
              borderRadius: '10px',
              border: '1px solid rgba(255,255,255,0.05)'
            }}>
              <div style={{ display: 'flex', gap: '0.2rem', marginBottom: '1.5rem', color: '#00B67A' }}>
                {/* 5 Stars using SVG */}
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                  </svg>
                ))}
              </div>
              <p style={{ fontSize: '1.1rem', marginBottom: '2rem', color: 'rgba(255,255,255,0.8)' }}>
                "{testimonial.text}"
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <img src={testimonial.avatar} alt={testimonial.name} style={{ width: '60px', height: '60px', borderRadius: '50%', objectFit: 'cover' }} />
                <div>
                  <h4 style={{ margin: 0, fontSize: '1.1rem' }}>{testimonial.name}</h4>
                  <p style={{ margin: 0, fontSize: '0.9rem', color: 'rgba(255,255,255,0.6)' }}>{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
