import "./SingleProjectCard.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Button, Card } from "react-bootstrap";
import { useState } from "react";

export default function SingleProjectCard({ project }) {
  const [activeView, setActiveView] = useState(0); // Track active view

  return (
    <Card className="project-card">
      <Card.Body className="m-0 p-0 project-card-body">
        {/* Project Title (Always on top) */}
        <h2>{project.title}</h2>

        {/* **Dynamically Render Content Based on Active View** */}
        {activeView === 0 && (
          <Card.Img
            id="project-image"
            variant="top"
            src={project.image}
            alt={project.title}
          />
        )}

        {activeView === 1 && (
          <Card.Text className="m-0 p-0 project-description">
            {project.description}
          </Card.Text>
        )}

        {activeView === 2 && (
          <div id="views-container">
            {project.views.map((img, index) => (
              <img
                id="vies-images"
                key={index}
                src={img}
                alt={`View ${index + 1}`}
              />
            ))}
          </div>
        )}

        {/* Demo & GitHub Links */}
        <Card.Text className="m-0 p-0 card-text">
          <a href={project.demo} target="_blank" rel="noopener noreferrer">
            Live Demo
          </a>{" "}
          |{" "}
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>{" "}
          |{" "}
          <a href={project.casestudy} target="_blank" rel="noopener noreferrer">
            Case Study
          </a>
        </Card.Text>
      </Card.Body>

      {/* Circle Buttons for Switching Views */}
      <div id="buttons-div">
        {[0, 1, 2].map((viewIndex) => (
          <Button
            id="card-buttons"
            key={viewIndex}
            onClick={() => setActiveView(viewIndex)}
            style={{
              backgroundColor: activeView === viewIndex ? "#007bff" : "#ccc",
            }}
          ></Button>
        ))}
      </div>
    </Card>
  );
}
