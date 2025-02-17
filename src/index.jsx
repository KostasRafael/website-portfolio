import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import WebsitePortfolio from "./components/website-portfolio/WebsitePortfolio";
import AboutMe from "./components/about-me/AboutMe";
import NavigationBar from "./components/navigation-bar/NavigationBar";
import MyFlixCaseStudy from "./components/myflix-case-study/MyFlixCaseStudy";
import "./index.css";

const MyPortfolio = () => {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<WebsitePortfolio />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/case-study" element={<MyFlixCaseStudy />} />
      </Routes>
    </Router>
  );
};

const container = document.querySelector("#root");
const root = createRoot(container);
root.render(<MyPortfolio />);
