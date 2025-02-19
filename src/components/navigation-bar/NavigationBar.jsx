import "./NavigationBar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import linkedinImage from "../../../public/assets/images/linkedin.png";

export default function NavigationBar() {
  return (
    <Navbar
      fixed="top"
      id="navbar"
      style={{
        backgroundColor: "darkblue",
      }}
    >
      <Container fluid id="nav-nav-links-container">
        <Nav className="me-auto">
          <Nav.Link href="/" className="logo">
            Rafael Techie Co.
          </Nav.Link>
        </Nav>
        <div style={{ display: "flex" }}>
          <div style={{ display: "flex" }}>
            <div>
              <h6>Crete Greece</h6>
              <h6>rafael.techie@gmail.com</h6>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <a
                style={{ color: "white" }}
                href="https://drive.google.com/uc?export=download&id=1ig3Qum1zKfXbFoLFHD3oWVXV8Iozpb2S"
                download
              >
                Download Resume
              </a>
              <a
                href="https://www.linkedin.com/in/konstantinos-rafael-manousoudakis/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={linkedinImage}
                  alt="linkedin image"
                  style={{ width: "1.6rem", borderRadius: "15%" }}
                />
              </a>
            </div>
          </div>
        </div>
        <Nav className="ms-auto">
          <Nav.Link href="about" className="about">
            About Me
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
