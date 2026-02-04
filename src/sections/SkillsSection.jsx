import React from 'react';
import { Container } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaCode, FaServer, FaPaintBrush } from 'react-icons/fa';

const SkillsSection = () => {
  const services = [
    {
      icon: <FaCode />,
      title: 'Frontend Development',
      description: 'Building responsive and interactive user interfaces using React, JavaScript, and modern CSS frameworks with focus on performance and user experience.'
    },
    {
      icon: <FaServer />,
      title: 'Backend Development',
      description: 'Developing robust server-side applications with Laravel, Node.js, implementing RESTful APIs and secure database management.'
    },
    {
      icon: <FaPaintBrush />,
      title: 'UI/UX Design',
      description: 'Creating intuitive and engaging user interfaces with modern design principles using Figma, ensuring optimal user experience across all devices.'
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <Container>
        <div className="section-title">
          <h2>What I Do Best</h2>
          <p className="section-subtitle">Full Stack Development & UI/UX Design Services</p>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="service-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default SkillsSection;
