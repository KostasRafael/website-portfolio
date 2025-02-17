import "./ProjectCard.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Container, Button, Card } from "react-bootstrap";
import { projects } from "../../../projects"; // [ myFlix, movieApi, meetApp, myFlixAngular ]
import SingleProjectCard from "../single-project-card/SingleProjectCard";

export default function ProjectCard() {
  console.log("Projects Array:", projects);

  return (
    <Container fluid id="all-projects-container">
      {projects.map((project, projectIndex) => (
        <SingleProjectCard key={projectIndex} project={project} />
      ))}
    </Container>
  );
}
