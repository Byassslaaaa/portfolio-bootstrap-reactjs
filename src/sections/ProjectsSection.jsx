import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from '../components/ProjectCard';
import projects from '../data/projects';

const ProjectsSection = () => {
  return (
    <section id="projects" style={{ padding: '100px 0', background: 'var(--bg-primary)' }}>
      <Container>
        <div className="section-title">
          <h2>MY PROJECT</h2>
          <p className="section-subtitle">Latest Project</p>
        </div>
        <Row className="g-4">
          {projects.map((project, index) => (
            <Col key={project.id} md={6} lg={4}>
              <ProjectCard project={project} index={index} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default ProjectsSection;
