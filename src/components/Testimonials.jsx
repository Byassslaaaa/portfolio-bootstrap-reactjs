import { useState, useEffect } from "react";
import { Container, Card, Row, Col, Button, Form, Modal } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Testimonials.css";

function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState({ name: "", message: "", rating: 0, imgUrl: "" });
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    // Fetch testimonials from localStorage or an API (placeholder implementation)
    const savedTestimonials = JSON.parse(localStorage.getItem("testimonials")) || [];
    setTestimonials(savedTestimonials);
  }, []);

  useEffect(() => {
    // Save testimonials to localStorage whenever they change
    localStorage.setItem("testimonials", JSON.stringify(testimonials));
  }, [testimonials]);

  const handleSave = () => {
    if (!currentTestimonial.name || !currentTestimonial.message || currentTestimonial.rating === 0) {
      alert("Please fill in all fields and provide a rating.");
      return;
    }

    let updatedTestimonials;
    if (editIndex !== null) {
      // Update existing testimonial
      updatedTestimonials = testimonials.map((testimonial, index) => (index === editIndex ? currentTestimonial : testimonial));
    } else {
      // Add new testimonial
      updatedTestimonials = [...testimonials, currentTestimonial];
    }
    setTestimonials(updatedTestimonials);
    setShowModal(false);
    setCurrentTestimonial({ name: "", message: "", rating: 0, imgUrl: "" });
    setEditIndex(null);
  };

  const handleDelete = (index) => {
    const updatedTestimonials = testimonials.filter((_, i) => i !== index);
    setTestimonials(updatedTestimonials);
  };

  const handleEdit = (index) => {
    setCurrentTestimonial(testimonials[index]);
    setEditIndex(index);
    setShowModal(true);
  };

  const handleRating = (rating) => {
    setCurrentTestimonial({ ...currentTestimonial, rating });
  };

  return (
    <Container fluid className="testimonials-container">
      <h2 className="text-center mb-4" style={{ color: "white" }}>
        Testimonials
      </h2>
      <div className="d-flex justify-content-center mb-4">
        <Button variant="outline-light" onClick={() => setShowModal(true)}>
          Add Testimonial
        </Button>
      </div>
      <Row className="testimonials-scroll justify-content-center">
        {testimonials.map((testimonial, index) => (
          <Col key={index} xs={12} sm={6} md={4} className="mb-4 d-flex justify-content-center">
            <Card className="testimonial-card text-center">
              <div className="profile-img-container">
                <img src={testimonial.imgUrl || "https://via.placeholder.com/100"} alt={testimonial.name} className="profile-img" />
              </div>
              <Card.Body>
                <Card.Title style={{ color: "white", marginTop: "10px" }}>{testimonial.name}</Card.Title>
                <div className="testimonial-rating">
                  {[...Array(5)].map((_, idx) => (
                    <FaStar key={idx} style={{ color: idx < testimonial.rating ? "#FFD700" : "#ccc" }} />
                  ))}
                </div>
                <Card.Text style={{ color: "#b0b0b0", marginTop: "15px" }}>{testimonial.message}</Card.Text>
                <Button variant="outline-light" size="sm" className="me-2 mt-3" onClick={() => handleEdit(index)}>
                  Edit
                </Button>
                <Button variant="outline-danger" size="sm" className="mt-3" onClick={() => handleDelete(index)}>
                  Delete
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Add/Edit Testimonial Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton style={{ backgroundColor: "#1e1e2f", color: "#ffffff" }}>
          <Modal.Title>{editIndex !== null ? "Edit Testimonial" : "Add Testimonial"}</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: "#1e1e2f", color: "#f2f3f4" }}>
          <Form>
            <Form.Group controlId="testimonialName" className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                value={currentTestimonial.name}
                onChange={(e) => setCurrentTestimonial({ ...currentTestimonial, name: e.target.value })}
                placeholder="Enter your name"
                style={{ backgroundColor: "#1a1a2e", color: "#ffffff", borderColor: "#262637" }}
              />
            </Form.Group>
            <Form.Group controlId="testimonialMessage" className="mb-3">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={currentTestimonial.message}
                onChange={(e) => setCurrentTestimonial({ ...currentTestimonial, message: e.target.value })}
                placeholder="Enter your message"
                style={{ backgroundColor: "#1a1a2e", color: "#ffffff", borderColor: "#262637" }}
              />
            </Form.Group>
            <Form.Group controlId="testimonialRating" className="mb-3">
              <Form.Label>Rating</Form.Label>
              <div className="testimonial-rating">
                {[...Array(5)].map((_, idx) => (
                  <FaStar key={idx} style={{ color: idx < currentTestimonial.rating ? "#FFD700" : "#555", cursor: "pointer" }} onClick={() => handleRating(idx + 1)} />
                ))}
              </div>
            </Form.Group>
            <Form.Group controlId="testimonialImageUrl" className="mb-3">
              <Form.Label>Image URL</Form.Label>
              <Form.Control
                type="text"
                value={currentTestimonial.imgUrl}
                onChange={(e) => setCurrentTestimonial({ ...currentTestimonial, imgUrl: e.target.value })}
                placeholder="Enter image URL"
                style={{ backgroundColor: "#1a1a2e", color: "#ffffff", borderColor: "#262637" }}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer style={{ backgroundColor: "#1e1e2f" }}>
          <Button variant="outline-light" onClick={handleSave}>
            Save
          </Button>
          <Button variant="outline-danger" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default Testimonials;
