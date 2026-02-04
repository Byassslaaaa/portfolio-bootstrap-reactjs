import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa';
import { SITE_INFO, SOCIAL_LINKS } from '../constants';

const Footer = () => {
  const socialLinks = [
    { icon: <FaGithub />, url: SOCIAL_LINKS.github },
    { icon: <FaLinkedin />, url: SOCIAL_LINKS.linkedin },
    { icon: <FaInstagram />, url: SOCIAL_LINKS.instagram },
    { icon: <FaTwitter />, url: SOCIAL_LINKS.twitter }
  ];

  return (
    <footer className="footer-section">
      <div className="footer-content">
        <h3 className="footer-brand">Irsyad.dev</h3>
        <p className="footer-text">
          {SITE_INFO.description}
        </p>
        <div className="footer-social">
          {socialLinks.map((social, index) => (
            <a key={index} href={social.url} target="_blank" rel="noopener noreferrer">
              {social.icon}
            </a>
          ))}
        </div>
        <p className="footer-copyright">
          © {new Date().getFullYear()} {SITE_INFO.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
