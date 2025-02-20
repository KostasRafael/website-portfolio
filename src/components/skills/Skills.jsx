import "bootstrap/dist/css/bootstrap.min.css";
import "./Skills.css";
import { Container } from "react-bootstrap";

export default function Skills() {
  return (
    <section id="skills">
      <Container>
        <h1
          style={{
            textAlign: "center",
            marginBottom: "4rem",
            backgroundColor: "lightgray",
          }}
        >
          Skills
        </h1>
        <div id="html-css-div">
          <ul id="left-side">
            <h5>html</h5>
            <li>Mastery of Semantic HTML</li>
            <li>Proficiency in HTML5 APIs</li>
            <li>Deep Understanding of Forms & Validations</li>
            <li>Performance Optimization Techniques</li>
          </ul>
          <ul id="right-side">
            <h5>Advanced css</h5>
            <li> Deep Understanding of CSS Fundamentals</li>
            <li>Responsive & Adaptive Design</li>
            <li>Advanced Animations & Transitions</li>
            <li>CSS Preprocessors & Architecture</li>
          </ul>
        </div>
        <div id="javascript-react-div">
          <ul id="left-ul">
            <h5>Advanced Javascript</h5>
            <li>Asynchronus programming</li>
            <li>ES6+ features</li>
            <li>Execution context + even loop</li>
            <li>Performance optimozations, debouncing and lazy loading</li>
          </ul>
          <ul id="right-ul">
            <h5>React.js + redux</h5>
            <li>Modular component structure</li>
            <li>Seamless state and data management</li>
            <li>React bootstrap, Flexbox and grid</li>
            <li>Unit and integration testing</li>
          </ul>
        </div>
        {/* left-list-div end  */}
        {/* right-list-div start  */}
        <div id="node-mongo-div">
          <ul id="left-list">
            <h5>Node.js and Express</h5>
            <li>Clear, consistent, and logical URL endpoints</li>
            <li>Query optimization, pagination, filtering, sorting</li>
            <li>JWT, OAuth 2.0 and CORS </li>
            <li>Asynchronous processing and caching</li>
          </ul>
          <ul id="right-list">
            <h5>MongoDB</h5>
            <li>Clean schema design and efficient queries</li>
            <li>Optimized indexes and query performance</li>
            <li>Ensures backups, ACID transactions and high availability</li>
            <li>Implements RBAC, encryption and injection protection</li>
          </ul>
        </div>
      </Container>
    </section>
  );
}
