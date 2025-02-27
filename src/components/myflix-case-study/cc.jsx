import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Card } from "react-bootstrap";
import fetchMoviesImage from "../../../public/assets/images/fetch-movies-endpoint.png";
import reduxStoreImage from "../../../public/assets/images/redux-store.png";
import loginEndpoint from "../../../public/assets/images/login-endpoint.png";
import signupEndpoint from "../../../public/assets/images/signup-endpoint.png";
import deleteMovieEndpoint from "../../../public/assets/images/delete-movie-endpoint.png";
import deleteUsereEndpoint from "../../../public/assets/images/delete-user-endpoint.png";
import updateUserEndpoint from "../../../public/assets/images/update-user-endpoint.png";
import favoriteMoviesEndpoint from "../../../public/assets/images/favorite-movies-endpoint.png";
import connectionDiagram from "../../../public/assets/images/connection-diagram.png";
import signupImg from "../../../public/assets/images/signup.png";
import loginImg from "../../../public/assets/images/login.png";
import listImg from "../../../public/assets/images/list.png";
import heartedMovie from "../../../public/assets/images/hearted-movie.png";
import favoriteMovies from "../../../public/assets/images/favorite-movies.png";
import removeFavorite from "../../../public/assets/images/remove-favorite.png";
import updateUser from "../../../public/assets/images/update-user.png";
import deleteUser from "../../../public/assets/images/delete-user.png";

export default function MyflixCaseStudy() {
  return (
    <Container>
      <div style={{ marginTop: "2rem" }}>
        <h1 style={{ fontSize: "8rem", textAlign: "center" }}>Case Study</h1>
        <h1 style={{ fontSize: "8rem", textAlign: "center" }}>myFlix </h1>
      </div>
      <section style={{ marginTop: "4rem" }}>
        <h1 style={{ textAlign: "center", backgroundColor: "lightyellow" }}>
          Overview
        </h1>
        <p>
          The user interface of a movies app that users can use to browse a list
          of movies, and details of these movies, such as title, genre, director
          and image. The UI must be build with React.js alongside Redux.
        </p>
      </section>
      <section style={{ marginTop: "4rem" }}>
        <h1 style={{ textAlign: "center", backgroundColor: "lightyellow" }}>
          Objective
        </h1>
        <p>
          Develop and deploy a React.js based user interface that integrates
          with the movies_api, enabling retrieval of movie and user details and
          supporting basic CRUD operations on these resources on a database.
        </p>
      </section>
      <section style={{ marginTop: "4rem" }}>
        <h1 style={{ textAlign: "center", backgroundColor: "lightyellow" }}>
          Challenge
        </h1>
        <p>
          I needed to figure out how to integrate the React UI with the
          movies_api, in order to ultimately perform CRUD operations on the
          resources on MongoDB. Additionally, I had to ensure that the UI
          displays any data fetched in an intuitive way, such that users can
          easily interact with them.
        </p>
        <img src={connectionDiagram} alt="" />
      </section>
      <section style={{ marginTop: "4rem" }}>
        <h1 style={{ textAlign: "center", backgroundColor: "lightyellow" }}>
          Solution
        </h1>
        <p>
          The user interface will be rendered dynamically, based on the state of
          movies and the user logged in.
        </p>
        <p>
          Information about the state of movies and the user is stored in a
          MongoDB database, and CRUD operations can be performed to it through
          the endpoints exposed by the movie_api
        </p>
        <p>
          This means that my application will need to send http requests to the
          movie_api in order to retrieve these data and perform other http
          actions on them.
        </p>
        <p>
          This is achieved by looking into the movie_api documentation and
          identifying the url endpoints that will perform each action.
        </p>
        <p>
          Bellow, there are cards presenting the endpoints and the action they
          perform. The javascript fetch() method is used to send the request to
          each endpoint.
        </p>
      </section>
      <div
        className="endpoints"
        style={{
          display: "flex",
          gap: "1rem",
          flexWrap: "wrap",
          marginTop: "4rem",
        }}
      >
        <Card style={{ flexBasis: "25rem" }}>
          <Card.Body>
            <h6>User signup</h6>
            <img src={signupEndpoint} alt="" style={{ maxWidth: "100%" }} />
          </Card.Body>
        </Card>
        <Card style={{ flexBasis: "25rem" }}>
          <Card.Body>
            <h6>User login</h6>
            <img src={loginEndpoint} alt="" style={{ maxWidth: "100%" }} />
          </Card.Body>
        </Card>
        <Card style={{ flexBasis: "25rem" }}>
          <Card.Body>
            <h6>Fetch all the movies</h6>
            <img src={fetchMoviesImage} alt="" style={{ maxWidth: "100%" }} />
          </Card.Body>
        </Card>
        <Card style={{ flexBasis: "25rem" }}>
          <Card.Body>
            <h6>Add movie to the user's list of favorite movies</h6>
            <img
              src={favoriteMoviesEndpoint}
              alt=""
              style={{ maxWidth: "100%" }}
            />
          </Card.Body>
        </Card>
        <Card style={{ flexBasis: "25rem" }}>
          <Card.Body>
            <h6>Remove movie from the user's list of favorite movies</h6>
            <img
              src={deleteMovieEndpoint}
              alt=""
              style={{ maxWidth: "100%" }}
            />
          </Card.Body>
        </Card>
        <Card style={{ flexBasis: "25rem" }}>
          <Card.Body>
            <h6>Update the user's information</h6>
            <img src={updateUserEndpoint} alt="" style={{ maxWidth: "100%" }} />
          </Card.Body>
        </Card>
        <Card style={{ flexBasis: "25rem" }}>
          <Card.Body>
            <h6>Delete user account</h6>
            <img
              src={deleteUsereEndpoint}
              alt=""
              style={{ maxWidth: "100%" }}
            />
          </Card.Body>
        </Card>
      </div>

      <div class="features" style={{ marginTop: "4rem" }}>
        <h1>Features</h1>
        <p>
          Using the endpoints shown above, the application has the following
          features:
        </p>
        <div id="action-cards-container" className="container-fluid">
          <div className="row">
            {/* Sign up */}
            <div
              className="action-card-col col-6 col-md-4"
              style={{ marginBottom: "1rem" }}
            >
              <div className="card h-100">
                <div
                  className="card-body"
                  style={{ backgroundColor: "lightslategray" }}
                >
                  <h4>Sign up</h4>
                  <p>User can create an account</p>
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
                <div
                  className="card-body"
                  style={{ backgroundColor: "lightslategray" }}
                >
                  <h4>Log in</h4>
                  <p>User can login to their account</p>
                  <img
                    src={loginImg}
                    alt="Log in"
                    style={{ maxWidth: "100%" }}
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
                <div
                  className="card-body"
                  style={{ backgroundColor: "lightslategray" }}
                >
                  <h4>Stream movies</h4>
                  <p>User can see a list of movies.</p>
                  <img
                    src={listImg}
                    alt="Stream movies"
                    style={{ maxWidth: "100%" }}
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
                <div
                  className="card-body"
                  style={{ backgroundColor: "lightslategray" }}
                >
                  <h4>Add to favorites</h4>
                  <p>
                    User can heart movies and add them to their list of
                    favorites.
                  </p>
                  <img
                    src={heartedMovie}
                    alt="Add to favorites"
                    style={{ maxWidth: "100%" }}
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
                <div
                  className="card-body"
                  style={{ backgroundColor: "lightslategray" }}
                >
                  <h4>Browse favorites</h4>
                  <p>User can see a list of their hearted movies</p>
                  <img
                    src={favoriteMovies}
                    alt="Browse favorites"
                    style={{ maxWidth: "100%" }}
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
                <div
                  className="card-body"
                  style={{ backgroundColor: "lightslategray" }}
                >
                  <h4>Delete favorites</h4>
                  <p>
                    User can remove a movie from their list of favorites, i.e.,
                    once they have watched it a few times.
                  </p>
                  <img
                    src={removeFavorite}
                    alt="Delete favorites"
                    style={{ maxWidth: "100%" }}
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
                <div
                  className="card-body"
                  style={{ backgroundColor: "lightslategray" }}
                >
                  <h4>Update user info</h4>
                  <p>User can update their profile information.</p>
                  <img
                    src={updateUser}
                    alt="Update user info"
                    style={{ maxWidth: "100%" }}
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
                <div
                  className="card-body"
                  style={{ backgroundColor: "lightslategray" }}
                >
                  <h4>Delete user</h4>
                  <p>User can delete their account.</p>
                  <img
                    src={deleteUser}
                    alt="Delete user"
                    style={{ maxWidth: "100%" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="deployment" style={{ marginTop: "4rem" }}>
        <h1 style={{ textAlign: "center", backgroundColor: "lightyellow" }}>
          Deployment
        </h1>
        <p>
          myFlix app was deplyed on Netlify. I connected Netlify to the
          project's repository on Github, and configured it so that when any
          change is detected in the repo, Netlify redeploys the app in accord
          with the latest state of the repository.
        </p>
      </div>

      <div className="retrospect" style={{ marginTop: "4rem" }}>
        <h1 style={{ textAlign: "center", backgroundColor: "lightyellow" }}>
          Retrospective
        </h1>
        <h4>
          <span style={{ color: "red" }}>I enjoyed</span> figuring out how to
          connect the myFlix UI with the movie_api. I was fascinated to see how
          how http requests are send to an api, and in turn, how the api reacts
          in response to those requests.
        </h4>
        <h4>
          <span style={{ color: "red" }}>I struggled</span> with debugging
          because I had to deal with both the RESTful API and the user
          interface. At one point, the UI displayed incorrect data, which could
          have stemmed from either the API response or how React handled it. I
          feared spending ages searching both. Fortunately, Postman helped by
          allowing me to send HTTP requests and isolate the API for testing.
          This revealed that the issue was API-related, enabling me to fix it
          without unnecessary front-end debugging.
        </h4>
        <h4>
          <span style={{ color: "red" }}>My future plan</span> is to connect my
          application to the IMDB API and pull movies from it, allowing my
          application to access a larger selection of movies.
        </h4>
        <h4>
          <span style={{ color: "red" }}>Overall,</span> I really enjoyed
          building this user interface with react. I’m super happy and proud to
          have created managed to create an app that renders dynamically,
          depending on the state of some data in a database!
        </h4>
      </div>
    </Container>
  );
}
