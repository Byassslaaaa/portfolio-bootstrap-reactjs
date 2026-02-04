import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';

const StatsSection = () => {
  const stats = [
    { number: '10+', label: 'Projects Completed' },
    { number: '15+', label: 'Certifications' },
    { number: '2+', label: 'Years Experience' },
    { number: '100%', label: 'Satisfaction Rate' },
  ];

  return (
    <section className="stats-section">
      <Container>
        <Row className="g-4">
          {stats.map((stat, index) => (
            <Col key={index} xs={6} md={3}>
              <motion.div className="stat-card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }}>
                <h3 className="stat-number">{stat.number}</h3>
                <p className="stat-label">{stat.label}</p>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default StatsSection;
