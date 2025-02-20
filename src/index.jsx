import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import NavigationBar from "./components/navigation-bar/NavigationBar";
import MyFlixCaseStudy from "./components/myflix-case-study/MyFlixCaseStudy";
import MeetApp from "./components/meet-app-case-study/MeetApp";
import "./index.css";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";

const MyPortfolio = () => {
  return (
    <Router>
      <NavigationBar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/case-study" element={<MyFlixCaseStudy />} />
          <Route path="/case-studies/meet-app" element={<MeetApp />} />
        </Routes>
      </div>
    </Router>
  );
};

const container = document.querySelector("#root");
const root = createRoot(container);
root.render(<MyPortfolio />);
