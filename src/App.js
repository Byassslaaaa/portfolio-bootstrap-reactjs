import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Navbar, Container, Nav, Row, Col, Button, Form, Card } from "react-bootstrap";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { FaJsSquare, FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaFigma, FaBootstrap, FaGraduationCap, FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import { SiAdobephotoshop } from "react-icons/si";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-vertical-timeline-component/style.min.css";
import Testimonials from "./components/Testimonials";
import "./App.css";

function App() {
  const skillsRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      skillsRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
      }
    );
  }, []);

  const skills = [
    { name: "JavaScript", icon: <FaJsSquare /> },
    { name: "React", icon: <FaReact /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "HTML", icon: <FaHtml5 /> },
    { name: "CSS", icon: <FaCss3Alt /> },
    { name: "Bootstrap", icon: <FaBootstrap /> },
    { name: "Figma", icon: <FaFigma /> },
    { name: "Photoshop", icon: <SiAdobephotoshop /> },
  ];
  const projects = [
    {
      title: "DecisionHub",
      date: "Jan 2024 - Dec 2023",
      description: 'A Rule Builder application "Decision Hub" that empowers Business Analysts to create, save, and manage rules.',
      technologies: ["React JS", "PostgresSQL", "Node JS", "Express JS", "Redux", "React Flow"],
      image: "/Project1.png",
    },
    {
      title: "Trackify",
      date: "Jun 2023 - Jul 2023",
      description: "Trackify is a web application designed to streamline task management and enhance productivity.",
      technologies: ["Docker", "AWS", "DuckDNS", "Eslint", "Husky", "CI/CD", "React JS", "MongoDB", "Express JS", "Redux"],
      image: "/Project2.png",
    },
    {
      title: "Podstream",
      date: "Apr 2023 - May 2023",
      description: "Developed a full-stack web application that allows users to search for, play, and pause their favorite podcasts.",
      technologies: ["React JS", "MongoDB", "Node JS", "Express JS", "Redux"],
      image: "/Project3.png",
    },
  ];

  return (
    <div>
      {/* Navbar */}
      <Navbar expand="lg" className="navbar-custom fixed-top">
        <Container>
          <Navbar.Brand href="#">
            <img src="/logo.png" alt="Logo" style={{ height: "50px" }} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#skills">Skills</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
              <Nav.Link href="#education">Education</Nav.Link>
              <Nav.Link href="#contact">Contact Me</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* About Section */}
      <div className="about-section" id="about">
        <Container>
          <Row className="align-items-center justify-content-center">
            <Col md={6} className="text-center text-md-start d-flex justify-content-center order-md-">
              <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
                <img src="/HeroImage.jpg" alt="Profile" className="profile-pic" />
              </motion.div>
            </Col>
            <Col md={6} className="text-center text-md-start d-flex justify-content-center align-items-center order-md-1">
              <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }}>
                <h1>
                  Hi, I am <br /> <span>Irsyad Winarko</span>
                </h1>
                <h2>
                  <span>I am a</span> <span style={{ color: "#a855f7" }}>Front End Developer</span>
                </h2>
                <p>I am an Information Technology student at Aisiyah University Yogyakarta, a front-end specialist who paints the digital world with HTML, styles it with CSS, and plays magic with JavaScript.</p>
                <Button className="about-button" href="/CV_Irsyad.pdf" download>
                  Download CV
                </Button>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Skills Section */}
      <Container fluid id="skills" className="skills-container">
        <h2 className="text-center mb-4" style={{ marginBottom: "30px" }}>
          My Skills
        </h2>
        <div className="skills-scroll">
          {skills.map((skill, index) => (
            <motion.div key={index} ref={(el) => (skillsRef.current[index] = el)} className="text-center skill-item" whileHover={{ scale: 1.2, rotate: 5 }} transition={{ type: "spring", stiffness: 300 }}>
              <div className="skill-icon">{skill.icon}</div>
              <h5 className="skill-name">{skill.name}</h5>
            </motion.div>
          ))}
        </div>
      </Container>

      {/* Projects Section */}
      <Container fluid id="projects" className="projects-container">
        <h2 className="text-center" style={{ marginBottom: "30px" }}>
          Projects
        </h2>
        <p className="text-center">I have worked on a wide range of projects. From web apps to android apps. Here are some of my projects.</p>
        <Row className="justify-content-center">
          {projects.map((project, index) => (
            <Col key={index} xs={12} sm={10} md={6} lg={4} className="mb-4 d-flex align-items-stretch">
              <Card className="project-card">
                <Card.Img variant="top" src={project.image} alt={project.title} />
                <Card.Body className="d-flex flex-column">
                  <Card.Title style={{ color: "white" }}>{project.title}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted" style={{ color: "white" }}>
                    {project.date}
                  </Card.Subtitle>
                  <Card.Text style={{ color: "white" }}>{project.description}</Card.Text>
                  <div className="mt-3">
                    {project.technologies.map((tech, idx) => (
                      <Button key={idx} variant="outline-secondary" size="sm" className="me-1 mb-1">
                        {tech}
                      </Button>
                    ))}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Education Section */}
      <div id="education" className="education-section">
        <h2 className="text-center" style={{ marginBottom: "30px" }}>
          Education
        </h2>
        <VerticalTimeline>
          <VerticalTimelineElement
            contentStyle={{ background: "#1e1e2f", color: "#ffffff", borderRadius: "8px" }}
            contentArrowStyle={{ borderRight: "7px solid  #1e1e2f" }}
            date="June 2019 - May 2022"
            iconStyle={{ background: "#a855f7", color: "#ffffff" }}
            icon={<FaGraduationCap />}
          >
            <h3 style={{ color: "#a855f7" }}>High School Science Major</h3>
            <h4 style={{ color: "#f2f3f4" }}>Kertek State Senior High School 1</h4>
            <p>Focused on Science and Mathematics, Member of the Robotics Club.</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            contentStyle={{ background: "#1e1e2f", color: "#ffffff", borderRadius: "8px" }}
            contentArrowStyle={{ borderRight: "7px solid  #1e1e2f" }}
            date="June 2016 - May 2019"
            iconStyle={{ background: "#a855f7", color: "#ffffff" }}
            icon={<FaGraduationCap />}
          >
            <h3 style={{ color: "#a855f7" }}>Junior High School</h3>
            <h4 style={{ color: "#f2f3f4" }}>State Junior High School 2 Selomerto</h4>
            <p>one of the subjects in Information and Communication Technology</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>

      {/* Testimonials Section */}
      <div style={{ marginTop: "50px" }}>
        {" "}
        {/* Added margin-top for spacing */}
        <Testimonials />
      </div>

      {/* Contact Section */}
      <Container fluid id="contact" className="contact-container">
        <h2 className="text-center mb-4" style={{ marginBottom: "30px" }}>
          Contact Me
        </h2>
        <p className="text-center">Feel free to get in touch with me. I love to discuss potential opportunities, collaborations, or just have a friendly chat.</p>
        <Row className="justify-content-center">
          <Col md={8} lg={6}>
            <Form>
              <Form.Group controlId="formName" className="mb-4">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" />
              </Form.Group>
              <Form.Group controlId="formEmail" className="mb-4">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" />
              </Form.Group>
              <Form.Group controlId="formMessage" className="mb-4">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={5} placeholder="Enter your message" />
              </Form.Group>
              <div className="text-center">
                <Button type="submit" className="btn-submit">
                  Send Message
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>

      {/* Footer Section */}
      <footer className="py-4">
        <Container>
          <Row className="text-center">
            <Col>
              <img src="/logo.png" alt="Logo" style={{ height: "50px" }} />
              <Nav className="justify-content-center mb-3">
                <Nav.Item>
                  <Nav.Link href="#about">About</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="#skills">Skills</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="#projects">Projects</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="#education">Education</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="#contact">Contact Me</Nav.Link>
                </Nav.Item>
              </Nav>
              <div className="mb-3">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="me-3">
                  <FaFacebook />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="me-3">
                  <FaTwitter />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="me-3">
                  <FaLinkedin />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <FaInstagram />
                </a>
              </div>
              <p>&copy; 2024 Irsyad Winarko. All rights reserved.</p>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
}

export default App;
