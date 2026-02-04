import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';
import { scrollToSection } from '../utils/helpers';

const Navigation = () => {
  const { theme, toggleTheme } = useTheme();

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'skills', label: 'About' },
    { id: 'projects', label: 'Project' },
    { id: 'blog', label: 'Blog' },
    { id: 'contact', label: 'Contact Me' },
  ];

  return (
    <Navbar expand="lg" className="navbar-custom">
      <Container>
        <Navbar.Brand href="/" style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--purple-primary)' }}>
          Irsyad.dev
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            {navLinks.map((link) => (
              <Nav.Link key={link.id} onClick={() => scrollToSection(link.id)}>
                {link.label}
              </Nav.Link>
            ))}
            <div onClick={toggleTheme} className="theme-toggle ms-3">
              {theme === 'dark' ? <FaSun /> : <FaMoon />}
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
