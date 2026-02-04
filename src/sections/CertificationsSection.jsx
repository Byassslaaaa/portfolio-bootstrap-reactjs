import React, { useState } from 'react';
import { Container, Modal, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaTrophy, FaCertificate, FaTimes } from 'react-icons/fa';
import certifications, { awards } from '../data/certifications';

const CertificationsSection = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedCert, setSelectedCert] = useState(null);

  const handleViewCertificate = (cert) => {
    setSelectedCert(cert);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedCert(null);
  };

  const renderCard = (item, index) => (
    <motion.div key={item.id} className="cert-card-horizontal" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }}>
      <div className="cert-body">
        <h3 className="cert-title">{item.title}</h3>
        <p className="cert-issuer">{item.issuer}</p>
        <p className="cert-date">{item.date}</p>
        <p className="cert-description">{item.description}</p>
        {item.credentialUrl && (
          <button onClick={() => handleViewCertificate(item)} className="cert-link cert-button">
            <FaExternalLinkAlt /> View Certificate
          </button>
        )}
      </div>
    </motion.div>
  );

  return (
    <>
      <section id="certifications" className="certifications-section">
        <Container>
          <div className="section-title">
            <h2>Certifications & Awards</h2>
            <p className="section-subtitle">Professional certifications and recognitions</p>
          </div>

          {/* Awards Section */}
          <div className="cert-category">
            <div className="category-header">
              <FaTrophy className="category-icon" />
              <h3>Awards & Achievements</h3>
            </div>
            <div className="cert-scroll-container">
              <div className="cert-scroll-content">{awards.map((award, index) => renderCard(award, index))}</div>
            </div>
          </div>

          {/* Certifications Section */}
          <div className="cert-category">
            <div className="category-header">
              <FaCertificate className="category-icon" />
              <h3>Certifications & Training</h3>
            </div>
            <div className="cert-scroll-container">
              <div className="cert-scroll-content">{certifications.map((cert, index) => renderCard(cert, index))}</div>
            </div>
          </div>
        </Container>
      </section>

      {/* Certificate Preview Modal */}
      <Modal show={showModal} onHide={handleCloseModal} size="xl" centered className="certificate-modal">
        <Modal.Header closeButton className="border-0">
          <Modal.Title>{selectedCert?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="p-0">
          {selectedCert && (
            <div className="certificate-preview-container">
              <iframe
                src={selectedCert.credentialUrl}
                title={selectedCert.title}
                className="certificate-preview-iframe"
                style={{
                  width: '100%',
                  height: '80vh',
                  border: 'none',
                }}
              />
            </div>
          )}
        </Modal.Body>
        <Modal.Footer className="border-0">
          <Button className="btn-modal-close" onClick={handleCloseModal}>
            <FaTimes /> Close
          </Button>
          <Button className="btn-modal-open" href={selectedCert?.credentialUrl} target="_blank" rel="noopener noreferrer">
            <FaExternalLinkAlt /> Open Certificate
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CertificationsSection;
