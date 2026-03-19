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
            <div key={index} className="testim-card" data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="testim-card-name">Client Review</div>
              <div className="testim-body-text">"{testimonial.text}"</div>
              
              <div className="testim-author-container">
                <img src={testimonial.avatar} alt={testimonial.name} className="testim-pic" />
                <div className="testim-author-wrap">
                  <div className="testim-author-name">{testimonial.name}</div>
                  <div className="testim-author-company">
                    {testimonial.company}
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </div>
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
