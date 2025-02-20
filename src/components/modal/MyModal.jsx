import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function MyModal({ project }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Vie Details
      </Button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>{project.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            src={project.image}
            alt="project image"
            style={{ maxWidth: "20rem" }}
          />
          <p>{project.modaldescription}</p>
          <h4>Features</h4>
          <ul>
            {project.modalfeatures.map((feature, featureIndex) => (
              <li key={featureIndex}>{feature}</li>
            ))}
          </ul>
          <h4>Technologies</h4>
          <ul>
            {project.modaltechnologies.map((technology, technologyIndex) => (
              <li key={technologyIndex}>{technology}</li>
            ))}
          </ul>
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            class="btn btn-info"
          >
            Live Demo
          </a>{" "}
          |{" "}
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            class="btn btn-info"
          >
            GitHub
          </a>{" "}
          |{" "}
          <a
            href={project.casestudy}
            target="_blank"
            rel="noopener noreferrer"
            class="btn btn-info"
          >
            Case Study
          </a>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default MyModal;
