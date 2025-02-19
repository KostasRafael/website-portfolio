import React, { useEffect } from "react";
import "./MyFlixCaseStudy.css";
import "bootstrap/dist/css/bootstrap.min.css";

// Import images based on your Parcel folder structure
import myflix1 from "../../../public/assets/images/myflix-1.png";
import myflix2 from "../../../public/assets/images/myflix-2.png";
import careerFoundry from "../../../public/assets/images/career-foundry.png";
import frontBack from "../../../public/assets/images/front-back.png";
import diagram from "../../../public/assets/images/diagram.png";
import endpoints from "../../../public/assets/images/endpoints.png";
import movieObject from "../../../public/assets/images/movie-object.png";
import userObject from "../../../public/assets/images/user-object.png";
import componentsImg from "../../../public/assets/images/components.jpg";
import signupImg from "../../../public/assets/images/signup.png";
import loginImg from "../../../public/assets/images/login.png";
import listImg from "../../../public/assets/images/list.png";
import heartedMovie from "../../../public/assets/images/hearted-movie.png";
import favoriteMovies from "../../../public/assets/images/favorite-movies.png";
import removeFavorite from "../../../public/assets/images/remove-favorite.png";
import updateUser from "../../../public/assets/images/update-user.png";
import deleteUser from "../../../public/assets/images/delete-user.png";

export default function CaseStudy() {
  useEffect(() => {
    const imagePaths = [myflix1, myflix2];

    const containers = document.querySelectorAll(".images-border-container");
    containers.forEach((container) => {
      for (let i = 0; i < 7; i++) {
        const img = document.createElement("img");
        img.classList.add("border-images");
        img.src = imagePaths[i % 2];
        img.alt = `Image ${i + 1}`;
        container.appendChild(img);
      }
    });
  }, []);

  return (
    <div>
      <section id="case-study-container">
        <div className="images-border-container"></div>
        <div id="case-study">
          <h1>Case Study</h1>
          <h1>My full stack project</h1>
          <h1 className="project-name">myFlix</h1>
        </div>
        <div className="images-border-container"></div>
      </section>

      <section id="slogan">
        <img src={myflix1} alt="myFlix image" />
        <div className="slogan-div">
          <h1>
            I <span>flix</span>
          </h1>
          <h1>
            You <span>flix,</span>
          </h1>
          <h1>
            We all <span>flix!</span>
          </h1>
          <h1>
            Let's do so informatively using <span>myFlix</span>!!!
          </h1>
        </div>
      </section>

      <div id="purpose-objective">
        <div id="purpose-div">
          <h1>Purpose</h1>
          <img
            className="career-foundry-img"
            src={careerFoundry}
            alt="Career Foundry logo"
          />
          <p>
            I built this project as an exercise for my CareerFoundry course...
          </p>
        </div>

        <div id="objective-div">
          <h1>Objective</h1>
          <img src={frontBack} alt="Full-stack development" />
          <p>To build an application completely from scratch...</p>
        </div>
      </div>

      <div id="server-side">
        <h1>Server side</h1>
        <div className="paragraph-diagram">
          <p>
            The back-end consists of a RESTful API built with Node.js and
            MongoDB...
          </p>
          <img className="diagram" src={diagram} alt="System Diagram" />
        </div>
        <div className="back-end-images-div">
          <img className="code-image" src={endpoints} alt="API Endpoints" />
          <div className="right-images-div">
            <img src={movieObject} alt="Movie Object" />
            <img src={userObject} alt="User Object" />
          </div>
        </div>
      </div>

      <div id="client-side">
        <h1>Client-side</h1>
        <p>The UI was built using React and Redux.</p>
        <div className="images-lists">
          <div className="component-integration">
            <h4>Component Integration</h4>
            <img
              className="components-img"
              src={componentsImg}
              alt="Component Structure"
            />
          </div>
        </div>
      </div>

      <div id="project-overview">
        <h1>Features of myFlix application:</h1>
        <div className="container-fluid">
          <div className="row">
            {[
              signupImg,
              loginImg,
              listImg,
              heartedMovie,
              favoriteMovies,
              removeFavorite,
              updateUser,
              deleteUser,
            ].map((imgSrc, index) => (
              <div key={index} className="col-6 col-md-4">
                <div className="card-case-study h-100">
                  <div className="card-body">
                    <h4>
                      {
                        [
                          "Sign up",
                          "Log in",
                          "Stream movies",
                          "Add to favorites",
                          "Browse favorites",
                          "Delete favorites",
                          "Update user info",
                          "Delete user",
                        ][index]
                      }
                    </h4>
                    <img src={imgSrc} alt="" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div id="retrospective">
        <h1>Retrospective</h1>

        <div className="text-section">
          <h4>
            <span>I enjoyed</span> building everything from scratch—the
            database, the RESTful API, and the user interface— and connecting
            all these together. It was fascinating to see the basic components
            of an application and how they interact.
          </h4>
        </div>

        <div className="text-section">
          <h4>
            <span>I struggled</span> with debugging because I had to deal with
            both the RESTful API and the user interface. At one point, the UI
            displayed incorrect data, which could have stemmed from either the
            API response or how React handled it. I feared spending ages
            searching both. Fortunately, Postman helped by allowing me to send
            HTTP requests and isolate the API for testing. This revealed the
            issue was API-related, enabling me to fix it without unnecessary
            front-end debugging.
          </h4>
        </div>

        <div className="text-section">
          <h4>
            <span>My future plan</span> is to connect my application to the IMDB
            API and pull movies from it, allowing my application to access a
            larger selection of movies.
          </h4>
        </div>

        <div className="text-section">
          <h4>
            <span>Overall,</span> I really enjoyed building this application.
            I’m super happy and proud to have created my own application
            entirely from scratch!
          </h4>
        </div>
      </div>
    </div>
  );
}
