import "./Home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import About from "../about/About";
import Skills from "../skills/Skills";
import Projects from "../projects/Projects";
import Contact from "../contact/Contact";
import profileImage from "../../../public/assets/images/linkedin.jpg";

export default function Home() {
  return (
    <div>
      <section id="home">
        <Container id="home-container">
          <h1>Hi and Welcome to my portfolio!</h1>
          <div
            style={{ display: "flex", gap: "1rem", justifyContent: "center" }}
          >
            <img src={profileImage} alt="" />
            <p>
              My name is Konstantinos Rafael Manousoudakis (good luck
              pronouncing it!) <br /> <br /> I am a full-stack web developer
              with a backround in the hotel and restaurant industry. <br />{" "}
              <br /> My main area of expertise is in Javascript and the MERN
              stack, but I am also comfortable working with Angular and AWS
              cloud computing. <br />
              <br />I hold a bachelor's degree in Philosoph which has enhanced
              my ability to think outside the box and see solutions when they
              are least aparent. <br />
              <br />I am curious, resilient, very adapltable and I love working
              within a team of people towards an end goal. <br />
              <br />
              Admittedly, when working, I can be really intense and focused, but
              sometimes I can also be really fun.
            </p>
          </div>
        </Container>
      </section>

      <section id="about">
        <About />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}
