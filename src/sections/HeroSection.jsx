import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa';
import { SOCIAL_LINKS } from '../constants';

const HeroSection = () => {
  return (
    <div className="hero-section">
      <Container>
        <Row className="align-items-center min-vh-100">
          <Col md={6} className="order-2 order-md-1">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="hero-content">
              <p className="hero-greeting">Hello there!</p>
              <h1 className="hero-title">
                I am <span className="highlight-name">Irsyad Winarko</span>
              </h1>
              <p className="hero-role">Full Stack Developer & UI/UX Enthusiast</p>
              <p className="hero-description">
                I'm a passionate developer who loves creating beautiful and functional web applications. With expertise in React, Laravel, and modern UI/UX design principles, I build solutions that combine robust functionality with
                exceptional user experiences. Currently pursuing my degree in Information Technology while actively contributing to various web development projects.
              </p>
              <div className="hero-buttons">
                <Button className="btn-download me-3" href="/CV_Irsyad.pdf" download="CV_Irsyad_Winarko.pdf" as="a">
                  Download CV
                </Button>
                <Button className="btn-more" onClick={() => window.scrollTo({ top: document.getElementById('skills')?.offsetTop - 80, behavior: 'smooth' })}>
                  More
                </Button>
              </div>
              <div className="hero-social">
                <p className="social-label">Find Me On:</p>
                <div className="social-icons">
                  <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                  </a>
                  <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer">
                    <FaInstagram />
                  </a>
                  <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                  </a>
                  <a href={SOCIAL_LINKS.twitter} target="_blank" rel="noopener noreferrer">
                    <FaTwitter />
                  </a>
                </div>
              </div>
            </motion.div>
          </Col>
          <Col md={6} className="order-1 order-md-2">
            <motion.div className="hero-image-container" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }}>
              <div className="hero-image-wrapper">
                <div className="hero-glow"></div>
                <img
                  src="/HeroImage.jpg"
                  alt="Irsyad Winarko - Full Stack Developer"
                  className="hero-profile-img"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/450/7c3aed/ffffff?text=Profile';
                  }}
                />
              </div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeroSection;
