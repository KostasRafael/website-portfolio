import "./WebsitePortfolio.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavigationBar from "../navigation-bar/NavigationBar";
import MainSection from "../main-section/MainSection";
import MainBody from "../main-body/MainBody";
import { Container } from "react-bootstrap";

export default function WebsitePortfolio() {
  return (
    <Container fluid style={{ border: "0.2rem solid red" }}>
      <MainSection />
      <MainBody />
    </Container>
  );
}
