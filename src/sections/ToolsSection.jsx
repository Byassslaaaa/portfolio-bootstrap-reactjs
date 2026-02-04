import React from 'react';
import { Container } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { 
  SiAdobephotoshop, 
  SiFigma, 
  SiHtml5, 
  SiCss3, 
  SiJavascript, 
  SiReact,
  SiNodedotjs,
  SiLaravel 
} from 'react-icons/si';

const ToolsSection = () => {
  const tools = [
    { name: 'Photoshop', icon: <SiAdobephotoshop /> },
    { name: 'Figma', icon: <SiFigma /> },
    { name: 'HTML', icon: <SiHtml5 /> },
    { name: 'CSS', icon: <SiCss3 /> },
    { name: 'JavaScript', icon: <SiJavascript /> },
    { name: 'React', icon: <SiReact /> },
    { name: 'Node.js', icon: <SiNodedotjs /> },
    { name: 'Laravel', icon: <SiLaravel /> }
  ];

  return (
    <section className="tools-section">
      <Container>
        <div className="section-title">
          <h2>Tools and Skills</h2>
          <p className="section-subtitle">Technologies and tools I use daily</p>
        </div>
        <div className="tools-grid">
          {tools.map((tool, index) => (
            <motion.div
              key={index}
              className="tool-item"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <div className="tool-icon">{tool.icon}</div>
              <p className="tool-name">{tool.name}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ToolsSection;
