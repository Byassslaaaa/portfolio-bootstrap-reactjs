import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import HeroSection from '../sections/HeroSection';
import StatsSection from '../sections/StatsSection';
import SkillsSection from '../sections/SkillsSection';
import ToolsSection from '../sections/ToolsSection';
import ProjectsSection from '../sections/ProjectsSection';
import WhyHireMeSection from '../sections/WhyHireMeSection';
import EducationSection from '../sections/EducationSection';
import CertificationsSection from '../sections/CertificationsSection';
import ContactSection from '../sections/ContactSection';

const HomePage = () => {
  return (
    <div className="App">
      <Navigation />
      <HeroSection />
      <SkillsSection />
      <StatsSection />
      <ProjectsSection />
      <WhyHireMeSection />
      <ToolsSection />
      <EducationSection />
      <CertificationsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default HomePage;
