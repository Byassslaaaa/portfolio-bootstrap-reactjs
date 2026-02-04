import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { SITE_INFO } from '../constants';

const ContactSection = () => {
  const contactInfo = [
    {
      icon: <FaPhone />,
      title: 'Phone',
      value: SITE_INFO.phone,
      link: `tel:${SITE_INFO.phone}`,
    },
    {
      icon: <FaEnvelope />,
      title: 'Email',
      value: SITE_INFO.email,
      link: `mailto:${SITE_INFO.email}`,
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Address',
      value: SITE_INFO.address,
      link: null,
    },
  ];

  return (
    <section id="contact" className="contact-section">
      <Container>
        <div className="section-title">
          <h2>Get in Touch</h2>
          <p className="section-subtitle">For business and partnership inquiry please contact me below!</p>
        </div>

        <Row className="g-4 justify-content-center mt-4">
          {contactInfo.map((item, index) => (
            <Col key={index} md={4}>
              <motion.div className="contact-info-card" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }}>
                <div className="contact-info-icon">{item.icon}</div>
                <h4 className="contact-info-title">{item.title}</h4>
                {item.link ? (
                  <a href={item.link} className="contact-info-value">
                    {item.value}
                  </a>
                ) : (
                  <p className="contact-info-value">{item.value}</p>
                )}
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default ContactSection;
