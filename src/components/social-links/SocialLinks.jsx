import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faAt } from "@fortawesome/free-solid-svg-icons";
import {
  faTelegram,
  faWhatsapp,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import "./SocialLinks.css"; // Custom styling

export default function SocialLinks() {
  return (
    <Container className="social-container text-center">
      <h3>Let's connect!</h3>
      <Row className="justify-content-center">
        <Col xs={2} sm={1} className="icon-wrapper">
          <a href="mailto:youremail@example.com">
            <FontAwesomeIcon icon={faAt} className="social-icon" />
          </a>
        </Col>

        <Col xs={2} sm={1} className="icon-wrapper">
          <a
            href="https://github.com/KostasRafael"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} className="social-icon" />
          </a>
        </Col>
        <Col xs={2} sm={1} className="icon-wrapper">
          <a
            href="www.linkedin.com/in/konstantinos-rafael-manousoudakis-aa823734a"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} className="social-icon" />
          </a>
        </Col>
      </Row>
    </Container>
  );
}
