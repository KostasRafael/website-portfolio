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
        border: "0.2rem solid red",

        backgroundColor: "darkblue",
      }}
    >
      <Container
        fluid
        id="nav-nav-links-container"
        style={{ border: "0.2rem solid green" }}
      >
        <Nav className="me-auto">
          <Nav.Link href="/" className="logo">
            Rafael Techie Co.
          </Nav.Link>
        </Nav>
        <div style={{ display: "flex" }}>
          <div>
            <h6>Crete Greece</h6>
            <h6>rafael.techie@gmail.com</h6>
          </div>
          <a href="#">
            <img
              src={linkedinImage}
              alt="linkedin image"
              style={{ width: "2rem", borderRadius: "15%" }}
            />
          </a>
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
