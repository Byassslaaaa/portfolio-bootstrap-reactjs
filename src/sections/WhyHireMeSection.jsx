import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaBriefcase, FaComments, FaUsers, FaStar } from 'react-icons/fa';

const WhyHireMeSection = () => {
  const traits = [
    {
      icon: <FaBriefcase />,
      title: 'Workaholic',
      description: "I'm a kind of person who can't just stand around and doing nothing. I have a tendency to do something productive."
    },
    {
      icon: <FaComments />,
      title: 'Communicative',
      description: 'I have a broad understanding of verbal vocabulary. Therefore, I can convey a message well to the receiver.'
    },
    {
      icon: <FaUsers />,
      title: 'Cooperative',
      description: "Behind the successful project, there's a great team. I can build a good cooperation and remain consistent with the goal."
    },
    {
      icon: <FaStar />,
      title: 'Perfectionist',
      description: 'I have a strong intuition. I have remained consistent with high quality standards to present a most worthy result.'
    }
  ];

  return (
    <section className="why-hire-me-section">
      <Container>
        <div className="section-title">
          <h2>Why Hire Me</h2>
          <p className="section-subtitle">Key traits that define my work ethic</p>
        </div>
        <Row className="g-4">
          {traits.map((trait, index) => (
            <Col key={index} md={6} lg={3}>
              <motion.div
                className="trait-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="trait-icon">{trait.icon}</div>
                <h4 className="trait-title">{trait.title}</h4>
                <p className="trait-description">{trait.description}</p>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default WhyHireMeSection;
