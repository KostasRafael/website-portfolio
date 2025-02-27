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
import MovieApiCaseStudy from "./components/movie-api-case-study/MovieApiCaseStudy";
import MyflixCaseStudy from "./components/myflix-case-study/MyflixCaseStudy";

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
          <Route
            path="/case-studies/movie-api"
            element={<MovieApiCaseStudy />}
          />
          <Route path="/case-studies/meet-app" element={<MeetApp />} />
          <Route
            path="/case-studies/myflix-app"
            element={<MyflixCaseStudy />}
          />
          <Route
            path="/case-studies/movie-api"
            element={<MovieApiCaseStudy />}
          />
        </Routes>
      </div>
    </Router>
  );
};

const container = document.querySelector("#root");
const root = createRoot(container);
root.render(<MyPortfolio />);
