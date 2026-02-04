import React from 'react';
import { Container } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaBriefcase } from 'react-icons/fa';

const EducationSection = () => {
  const timeline = [
    {
      year: '2020 - 2024',
      title: "Bachelor's Degree in Computer Science",
      subtitle: 'University Name',
      description: 'Focused on software engineering, web development, and database management systems.',
      icon: <FaGraduationCap />,
    },
    {
      year: '2023 - Present',
      title: 'Full Stack Developer',
      subtitle: 'Freelance',
      description: 'Building modern web applications using React, Node.js, Laravel, and various other technologies.',
      icon: <FaBriefcase />,
    },
  ];

  return (
    <section id="education" className="education-section">
      <Container>
        <div className="section-title">
          <h2>Education & Experience</h2>
          <p className="section-subtitle">My academic background and professional journey</p>
        </div>
        <div className="timeline">
          {timeline.map((item, index) => (
            <motion.div key={index} className="timeline-item" initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.2 }}>
              <div className="timeline-content">
                <p className="timeline-year">{item.year}</p>
                <h3 className="timeline-title">{item.title}</h3>
                <p className="timeline-subtitle">{item.subtitle}</p>
                <p className="timeline-description">{item.description}</p>
              </div>
              <div className="timeline-dot"></div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default EducationSection;
