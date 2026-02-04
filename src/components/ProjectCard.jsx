import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      className="project-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link to={`/project/${project.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
        {project.image && (
          <img src={project.image} alt={project.title} className="project-image" />
        )}
        <div className="project-content">
          <h3 className="project-title">{project.title}</h3>
          <p className="project-description">{project.description}</p>
          <div className="project-tags">
            {project.technologies.slice(0, 3).map((tech, idx) => (
              <span key={idx} className="project-tag">
                {tech}
              </span>
            ))}
          </div>
          <span className="project-link">
            View Details <FaArrowRight />
          </span>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProjectCard;
