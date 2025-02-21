import "./SingleProjectCard.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Button, Card } from "react-bootstrap";
import { useState } from "react";
import MyModal from "../modal/MyModal";

export default function SingleProjectCard({ project }) {
  const [activeView, setActiveView] = useState(0); // Track active view

  return (
    <Card className="project-card" style={{ marginBottom: "1rem" }}>
      <Card.Body className=" project-card-body">
        {/* Project Title (Always on top) */}
        <h2>{project.title}</h2>

        {/* **Dynamically Render Content Based on Active View** */}

        <Card.Img
          id="project-image"
          variant="top"
          src={project.image}
          alt={project.title}
          style={{ maxWidth: "100%" }}
        />

        {/* Demo & GitHub Links */}
        <Card.Text className="card-text">
          <MyModal project={project} /> |{" "}
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
        </Card.Text>
      </Card.Body>

      {/* Circle Buttons for Switching Views */}
    </Card>
  );
}
