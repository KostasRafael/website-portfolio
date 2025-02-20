import "bootstrap/dist/css/bootstrap.min.css";
import "./Projects.css";
import { Container } from "react-bootstrap";
import { projects } from "../../../projects";
import SingleProjectCard from "../single-project-card/SingleProjectCard";

export default function Projects() {
  return (
    <section id="projects">
      <Container id="main-container">
        <h1 style={{ backgroundColor: "lightgray" }}>Projects</h1>
        <div id="all-projects-div" style={{ marginTop: "4rem" }}>
          {projects.map((project, projectIndex) => (
            <SingleProjectCard key={projectIndex} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
}
