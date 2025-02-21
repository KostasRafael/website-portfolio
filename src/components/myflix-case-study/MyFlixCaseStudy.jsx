import React, { useEffect } from "react";
import "./MyFlixCaseStudy.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";

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
  return (
    <Container>
      {/* Case Study Section */}
      <section id="case-study-container">
        <div id="case-study">
          <h1 style={{ backgroundColor: "lightcoral" }}>Case Study</h1>
          <h1>My full stack project</h1>
          <h1 className="project-name">myFlix</h1>
        </div>
        <div className="images-border-container"></div>
      </section>

      {/* Overview Section */}
      <section id="overview" style={{ marginTop: "4rem" }}>
        <h1 style={{ backgroundColor: "lightcoral" }}>Overview</h1>
        <div className="overview-content">
          <p className="paragraph" style={{ marginTop: "2rem" }}>
            This is a full-stack web application encompassing both the front-end
            and back-end. The back-end is built using Node.js, leveraging an API
            that interacts with a MongoDB database to handle data storage and
            retrieval. The front-end is developed using React.js, enabling
            dynamic and responsive user interfaces. The API serves as the
            communication layer, facilitating seamless data exchange between the
            database and the client applications through structured HTTP
            requests.
          </p>
          <img src={frontBack} alt="" />
        </div>
        <img className="diagram" src={diagram} alt="" />
      </section>

      {/* Objective Section */}
      <section id="objective" style={{ marginTop: "4rem" }}>
        <h1 style={{ backgroundColor: "lightcoral" }}>The objective</h1>
        <p className="paragraph" style={{ marginTop: "2rem" }}>
          To have a fully functional user interface that displays a list of
          movies. The user will be able to create an account, login, add movies
          to their list of favourite movies, update their profile information,
          and delete their account.
        </p>
      </section>

      {/* Challenge Section */}
      <section id="challenge" style={{ marginTop: "4rem" }}>
        <h1 style={{ backgroundColor: "lightcoral" }}>The challenge</h1>
        <p className="paragraph" style={{ marginTop: "2rem" }}>
          To build all parts required for a fully functional application.
          Namely, the back-end infrastructure that ensures data flow, and the
          front-end infrastructure that ensures data consumption and usage
          through a seamless user interface.
        </p>
      </section>

      <section id="solution" style={{ marginTop: "4rem" }}>
        <h1 style={{ backgroundColor: "lightcoral" }}>The Solution</h1>

        {/* Server Side Section */}
        <div id="server-side" style={{ marginTop: "4rem" }}>
          <h1>Server Side</h1>

          {/* Movie API Section */}
          <div id="movie-api">
            <p className="paragraph" style={{ marginTop: "2rem" }}>
              The RESTful API was built with Node.js in combination with the
              following technologies:
            </p>
            <div id="tech-images">
              <ul>
                <li>Express.js</li>
                <li>Passport</li>
                <li>JWT</li>
                <li>OAuth2</li>
                <li>CORS</li>
                <li>Body-Parser</li>
              </ul>
              <img className="code-image" src={endpoints} alt="API Endpoints" />
            </div>
          </div>

          {/* Database Section */}
          <div id="database" style={{ marginTop: "4rem" }}>
            <p className="paragraph">
              The database was built with non-relational database techniques
              using MongoDB and storing data in object-like structures. The data
              stored in MongoDB includes movie data and user data.
            </p>
            <div className="database-images">
              <img src={movieObject} alt="Movie Object" />
              <img src={userObject} alt="User Object" />
            </div>
          </div>

          {/* Client Side Section */}
          <div id="client-side" style={{ marginTop: "4rem" }}>
            <h1>Client Side</h1>
            <p className="paragraph" style={{ marginTop: "2rem" }}>
              The user interface was built using React alongside:
            </p>
            <div className="react-images">
              <ul>
                <li>React Redux</li>
                <li>React-Bootstrap</li>
                <li>Parcel</li>
                <li>Browser-Router</li>
              </ul>
              <img
                className="components-img"
                src={componentsImg}
                alt="React Components"
              />
            </div>
            <p className="paragraph" style={{ marginTop: "2rem" }}>
              Using these technologies, I created different React components and
              then rendered those components via props. Additionally, I managed
              the application's state with Redux in a central store.
            </p>
          </div>
        </div>
      </section>

      <div id="project-overview" className="container-fluid">
        <h1 style={{ backgroundColor: "lightcoral" }}>Features:</h1>

        <div id="action-cards-container" className="container-fluid">
          <div className="row">
            {/* Sign up */}
            <div
              className="action-card-col col-6 col-md-4"
              style={{ marginBottom: "1rem" }}
            >
              <div className="card h-100">
                <div className="card-body">
                  <h4>Sign up</h4>
                  <p>User can create their personal account</p>
                  <img
                    src={signupImg}
                    alt="Sign up"
                    style={{ maxWidth: "100%", maxHeight: "100%" }}
                  />
                </div>
              </div>
            </div>

            {/* Log in */}
            <div
              className="action-card-col col-6 col-md-4"
              style={{ marginBottom: "1rem" }}
            >
              <div className="card h-100">
                <div className="card-body">
                  <h4>Log in</h4>
                  <p>User can login to their personal account</p>
                  <img
                    src={loginImg}
                    alt="Log in"
                    style={{ maxWidth: "100%", maxHeight: "100%" }}
                  />
                </div>
              </div>
            </div>

            {/* Stream movies */}
            <div
              className="action-card-col col-6 col-md-4"
              style={{ marginBottom: "1rem" }}
            >
              <div className="card h-100">
                <div className="card-body">
                  <h4>Stream movies</h4>
                  <p>User can see a list of movies.</p>
                  <img
                    src={listImg}
                    alt="Stream movies"
                    style={{ maxWidth: "100%", maxHeight: "100%" }}
                  />
                </div>
              </div>
            </div>

            {/* Add to favorites */}
            <div
              className="action-card-col col-6 col-md-4"
              style={{ marginBottom: "1rem" }}
            >
              <div className="card h-100">
                <div className="card-body">
                  <h4>Add to favorites</h4>
                  <p>
                    User can heart movies and add them to their list of
                    favorites.
                  </p>
                  <img
                    src={heartedMovie}
                    alt="Add to favorites"
                    style={{ maxWidth: "100%", maxHeight: "100%" }}
                  />
                </div>
              </div>
            </div>

            {/* Browse favorites */}
            <div
              className="action-card-col col-6 col-md-4"
              style={{ marginBottom: "1rem" }}
            >
              <div className="card h-100">
                <div className="card-body">
                  <h4>Browse favorites</h4>
                  <p>User can see a list of their hearted movies</p>
                  <img
                    src={favoriteMovies}
                    alt="Browse favorites"
                    style={{ maxWidth: "100%", maxHeight: "100%" }}
                  />
                </div>
              </div>
            </div>

            {/* Delete favorites */}
            <div
              className="action-card-col col-6 col-md-4"
              style={{ marginBottom: "1rem" }}
            >
              <div className="card h-100">
                <div className="card-body">
                  <h4>Delete favorites</h4>
                  <p>
                    User can remove a movie from their list of favorites, i.e.,
                    once they have watched it a few times.
                  </p>
                  <img
                    src={removeFavorite}
                    alt="Delete favorites"
                    style={{ maxWidth: "100%", maxHeight: "100%" }}
                  />
                </div>
              </div>
            </div>

            {/* Update user info */}
            <div
              className="action-card-col col-6 col-md-4"
              style={{ marginBottom: "1rem" }}
            >
              <div className="card h-100">
                <div className="card-body">
                  <h4>Update user info</h4>
                  <p>User can update their profile information.</p>
                  <img
                    src={updateUser}
                    alt="Update user info"
                    style={{ maxWidth: "100%", maxHeight: "100%" }}
                  />
                </div>
              </div>
            </div>

            {/* Delete user */}
            <div
              className="action-card-col col-6 col-md-4"
              style={{ marginBottom: "1rem" }}
            >
              <div className="card h-100">
                <div className="card-body">
                  <h4>Delete user</h4>
                  <p>User can permanently delete their account.</p>
                  <img
                    src={deleteUser}
                    alt="Delete user"
                    style={{ maxWidth: "100%", maxHeight: "100%" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="retrospective">
        <h1 style={{ backgroundColor: "lightcoral" }}>Retrospective</h1>

        <div className="text-section">
          <h4>
            <span>I enjoyed</span> building everything from scratch—the
            database, the RESTful API, and the user interface—and connecting all
            these together. It was fascinating to see the basic components of an
            application and how they interact with each other.
          </h4>
        </div>

        <div className="text-section">
          <h4>
            <span>I struggled</span> with debugging because I had to deal with
            both the RESTful API and the user interface. At one point, the UI
            displayed incorrect data, which could have stemmed from either the
            API response or how React handled it. I feared spending ages
            searching both. Fortunately, Postman helped by allowing me to send
            HTTP requests and isolate the API for testing. This revealed that
            the issue was API-related, enabling me to fix it without unnecessary
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
    </Container>
  );
}
