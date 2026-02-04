import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import { FaArrowLeft, FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import projects from "../data/projects";
import "./ProjectDetail.css";

function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="project-detail-page">
        <Container className="text-center" style={{ paddingTop: "200px" }}>
          <h2 style={{ color: "var(--text-primary)" }}>Project not found</h2>
          <p style={{ color: "var(--text-muted)" }}>The project you're looking for doesn't exist.</p>
          <Button onClick={() => navigate("/")} className="btn-back mt-3">
            <FaArrowLeft className="me-2" /> Back to Portfolio
          </Button>
        </Container>
      </div>
    );
  }

  return (
    <div className="project-detail-page">
      {/* Top Navigation */}
      <div className="project-detail-nav">
        <Container>
          <div className="d-flex justify-content-between align-items-center">
            <Button onClick={() => navigate("/")} className="btn-back" title="Back to Portfolio">
              <FaArrowLeft />
            </Button>
            <h3 style={{ margin: 0, fontSize: '1.3rem', fontWeight: '700', color: 'var(--purple-primary)' }}>
              Irsyad.dev
            </h3>
          </div>
        </Container>
      </div>

      {/* Hero Image */}
      <motion.div
        className="project-detail-hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <img src={project.image} alt={project.title} />
        <div className="project-detail-hero-overlay" />
      </motion.div>

      {/* Project Content */}
      <Container>
        <motion.div
          className="project-detail-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h1 className="project-detail-title">{project.title}</h1>
          <span className="project-detail-date">{project.date}</span>

          <div className="project-detail-techs">
            {project.technologies.map((tech, idx) => (
              <span key={idx} className="project-tech-badge">
                {tech}
              </span>
            ))}
          </div>

          <p className="project-detail-description">
            {project.detailedDescription || project.description}
          </p>

          <div className="project-detail-actions">
            {project.previewUrl && (
              <a href={project.previewUrl} target="_blank" rel="noopener noreferrer">
                <Button className="btn-preview">
                  <FaExternalLinkAlt className="me-2" /> Live Preview
                </Button>
              </a>
            )}
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Button className="btn-github">
                  <FaGithub className="me-2" /> View Code
                </Button>
              </a>
            )}
          </div>
        </motion.div>
      </Container>
    </div>
  );
}

export default ProjectDetail;
