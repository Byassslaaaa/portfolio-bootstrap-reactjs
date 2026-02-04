import React from 'react';
import { Container } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Project Team Member',
      role: 'University Colleague',
      avatar: 'https://i.pravatar.cc/150?img=1',
      text: 'Irsyad is a dedicated developer with strong technical skills in both frontend and backend development. His ability to quickly learn new technologies and deliver quality work makes him a valuable team member.',
      rating: 5,
    },
    {
      name: 'Course Instructor',
      role: 'IT Department',
      avatar: 'https://i.pravatar.cc/150?img=5',
      text: 'One of the most passionate students I have taught. Irsyad consistently demonstrates excellent problem-solving skills and a genuine interest in modern web development technologies.',
      rating: 5,
    },
    {
      name: 'Hackathon Partner',
      role: 'Development Team',
      avatar: 'https://i.pravatar.cc/150?img=3',
      text: 'Working with Irsyad on our university projects has been great. He brings both technical expertise and creative UI/UX design thinking to every project we collaborate on.',
      rating: 5,
    },
  ];

  return (
    <section className="testimonials-section">
      <Container>
        <div className="section-title">
          <h2>What Do They Say About Me</h2>
          <p className="section-subtitle">Client testimonials and feedback</p>
        </div>
        <div className="row g-4">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="col-md-6 col-lg-4">
              <motion.div className="testimonial-card" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }}>
                <div className="testimonial-header">
                  <img src={testimonial.avatar} alt={testimonial.name} className="testimonial-avatar" />
                  <div className="testimonial-info">
                    <h5>{testimonial.name}</h5>
                    <p className="testimonial-role">{testimonial.role}</p>
                  </div>
                </div>
                <p className="testimonial-text">"{testimonial.text}"</p>
                <div className="testimonial-rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default TestimonialsSection;
