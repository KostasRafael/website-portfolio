import "./Contact.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { Card, Form, Button, Alert, Container } from "react-bootstrap";
import SocialLinks from "../social-links/SocialLinks";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccessMessage("Thank you! Your message has been sent.");
    setTimeout(() => setSuccessMessage(""), 3000); // Hide message after 3 seconds
    setFormData({ name: "", email: "", message: "" }); // Reset form
  };

  return (
    <Container className="justify-content-center mt-5">
      <Card
        style={{
          width: "100%",
          padding: "20px",
          boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
        }}
      >
        <Card.Body>
          <Card.Title className="text-center">Contact Me</Card.Title>

          {successMessage && <Alert variant="success">{successMessage}</Alert>}

          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message"
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100">
              Send Message
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <SocialLinks />
    </Container>
  );
}
