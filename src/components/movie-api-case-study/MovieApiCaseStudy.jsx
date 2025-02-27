import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Card } from "react-bootstrap";
import expressEndpointImage from "../../../public/assets/images/express-endpoint.png";
import rawNodeEndpointImage from "../../../public/assets/images/raw-node-endpoint.png";
import moviesCollectionImage from "../../../public/assets/images/movies-collection.png";
import usersCollectionImage from "../../../public/assets/images/users-collection.png";
import movieSchema from "../../../public/assets/images/movie-schema.png";
import userSchema from "../../../public/assets/images/user-schema.png";
import mongooseConnectionImage from "../../../public/assets/images/mongoose-connection.png";
import mongoAtlas from "../../../public/assets/images/mongo-atlas.png";
import modelsImage from "../../../public/assets/images/models.png";

export default function MovieApiCaseStudy() {
  return (
    <Container>
      <div style={{ marginTop: "2rem" }}>
        <h1 style={{ fontSize: "8rem", textAlign: "center" }}>Case Study</h1>
        <h1 style={{ fontSize: "8rem", textAlign: "center" }}>movie_api </h1>
      </div>
      <div style={{ marginTop: "4rem" }}>
        <h1
          style={{
            textAlign: "center",
            backgroundColor: "rosybrown",
          }}
        >
          Overview
        </h1>
        <p style={{ marginTop: "2rem" }}>
          This project is a RESTful API developed using Node.js, designed to
          interact with a MongoDB database. The API provides a set of endpoints
          that enable CRUD (Create, Read, Update, Delete) operations on database
          resources, ensuring efficient and scalable data management.
        </p>
      </div>
      <div style={{ marginTop: "4rem" }}>
        <h1
          style={{
            textAlign: "center",
            backgroundColor: "rosybrown",
          }}
        >
          Objective
        </h1>
        <p style={{ marginTop: "2rem" }}>
          To develop a RESTful API connected to a MongoDB database, enabling
          front-end applications to perform CRUD (Create, Read, Update, Delete)
          operations efficiently.
        </p>
      </div>
      <div style={{ marginTop: "4rem" }}>
        <h1
          style={{
            textAlign: "center",
            backgroundColor: "rosybrown",
          }}
        >
          Challenge
        </h1>
        <p style={{ marginTop: "2rem" }}>
          1. To create a database that will store data about movies and data
          about users
        </p>
        <p>
          2. To build a Restful api that handles http requests and sends status
          responses
        </p>
        <p>
          {" "}
          3. To establish a seamless connection between the API and the MongoDB
          database to enable efficient and reliable CRUD operations on database
          resources.
        </p>
      </div>
      <div style={{ marginTop: "4rem" }}>
        <h1
          style={{
            textAlign: "center",
            backgroundColor: "rosybrown",
          }}
        >
          Solution
        </h1>
        <h2
          style={{
            marginTop: "2rem",
            backgroundColor: "rosybrown",
            textAlign: "center",
          }}
        >
          Database
        </h2>
        <p>
          For the database, I chose to use a non-relational database, namely
          MongoDB.
        </p>
        <p>This is because:</p>
        <ul style={{ fontSize: "2rem" }}>
          <li>
            Dynamic schemas allow storage of different types of data without
            needing a predefined structure
          </li>
          <li>
            Horizontal scaling (sharding) that makes MongoDB highly scalable for
            large-scale applications.
          </li>
          <li>
            Stores data in BSON (Binary JSON) format, making it naturally
            compatible with JavaScript and Node.js
          </li>
          <li>
            Since MongoDB is schema-less, its possible to iterate quickly
            without strict migrations.
          </li>
        </ul>
        <p style={{ marginTop: "4rem" }}>
          The database was created on MongoDB Atlas
        </p>
        <img src={mongoAtlas} alt="" style={{ width: "60rem" }} />
        <p style={{ marginTop: "4rem" }}>
          A database with two collections of data
        </p>
        <div style={{ display: "flex", gap: "1rem" }}>
          <div>
            <p style={{ marginLeft: "4rem" }}>movies collection</p>
            <img src={moviesCollectionImage} alt="" />
          </div>
          <div>
            <p style={{ marginLeft: "4rem" }}>users collection</p>
            <img src={usersCollectionImage} alt="" />
          </div>
        </div>
        <p>
          Like this, I had a non-relational database deployed on MongoDB Atlas
        </p>

        <h2
          style={{
            marginTop: "2rem",
            backgroundColor: "rosybrown",
            textAlign: "center",
          }}
        >
          API
        </h2>
        <p>For the API I used Node.js</p>
        <p>
          I had to create some routing. That is, defined routes/endpoints that
          receive and handle http requests.
        </p>
        <p>
          This process was simplified by the use of Express.js. This is a
          framework that allowed me to easily define routes without manually
          handling URL parsing.
        </p>
        <p>
          Here is the difference in a route written with and without Express.js
        </p>
        <div style={{ display: "flex", gap: "1rem" }}>
          <div>
            <p>Route with Express</p>
            <img src={expressEndpointImage} alt="" />
          </div>
          <div>
            <p>Route without Express</p>
            <img src={rawNodeEndpointImage} alt="" />
          </div>
        </div>
        <p style={{ marginTop: "1rem" }}>
          Comparing the images shows that writting route with te use of Express
          is simpler, as well as more clear maintanable.
        </p>
        <p style={{ marginTop: "2rem" }}>
          Each endpoint in my application was designed to receive an HTTP
          request and then perform a specific CRUD (Create, Read, Update,
          Delete) operation on a MongoDB database.
        </p>
        <p>I created the following endpoints:</p>
        <ul style={{ fontSize: "2rem" }}>
          <li>GET "/" → Fetches a homepage to show on the browser</li>
          <li>GET "/movies" → Fetches all the movies</li>
          <li>GET "/movies/:title" → Fetches movies by title</li>
          <li> GET /movies/genre/:genreName" → Fetches movies by genre</li>
          <li>
            GET "/movies/directors/:directorName" → Fetches movies by director
          </li>
          <li>GET "users" → Fetches all the users</li>
          <li>POST "users" → Posts a new user</li>
          <li>GET "/users/:Username" → Fetches user by username</li>
          <li>PUT "/users/:Username" → Updates user information</li>
          <li>
            {" "}
            POST "/users/:Username/movies/:MovieID" → Posts movie to a user's
            list of favorite movies
          </li>
          <li>
            DELETE "/users/:Username/movies/:MovieID" → Deletes movie from a
            user's list of favorite movies
          </li>
          <li>DELETE "/users/:Username" → Deletes a user's account </li>
        </ul>
        <p>Like this, I created an api that is listening for http requests.</p>

        <h2
          style={{
            marginTop: "2rem",
            backgroundColor: "rosybrown",
            textAlign: "center",
          }}
        >
          Integration
        </h2>
        <p>
          I needed to figure out a way that the server interacts with the
          MongoDB database to create, read, update, or delete data, based on the
          request type.
        </p>
        <p>
          For this, I used Mongoose as an ODM (Object Data Modeling) library to
          connect my API with a MongoDB database efficiently.
        </p>
        <p>
          I installed mongoose, wrote the code required in my server's
          javascript file.
        </p>
        <img src={mongooseConnectionImage} alt="" />

        <p style={{ marginTop: "2rem" }}>
          Then, I defined sturctured schemas for my data.
        </p>
        <div style={{ display: "flex", gap: "5rem" }}>
          <div>
            <p style={{ marginLeft: "4rem" }}>Movie schema</p>
            <img src={movieSchema} alt="" style={{ width: "25rem" }} />
          </div>
          <div>
            <p style={{ marginLeft: "4rem" }}>User Schema</p>
            <img src={userSchema} alt="" style={{ width: "40rem" }} />
          </div>
        </div>
        <p style={{ marginTop: "2rem" }}>I created the models</p>
        <img src={modelsImage} alt="" />
        <p style={{ marginTop: "4rem" }}>
          And I used these models within the request handlers. Now, each
          request's action is performed on the mongoose Model, and in turn, on
          the collections within the MongoDB database.
        </p>
        <p>
          Like this, http requests can be send to the movie_api, and depending
          the type of the request and the endpoint it is send to, the
          corresponding action is performed on the actual MongoDB database.
        </p>
      </div>
      <div style={{ marginTop: "4rem" }}>
        <h1
          style={{
            textAlign: "center",
            backgroundColor: "rosybrown",
          }}
        >
          Retrospective
        </h1>
        <p>
          I enjoyed seeing how the movie_api connects to the MongoDB database,
          and how they can be integrated together.
        </p>
        <p>
          I strugled with understanding schemas and models, and how they are an
          essential part of the integration.
        </p>
        <p>
          Overall, I am suoer proud for having achieved the built and
          integration of both a RESTful api and a MongoDB database.
          Additionally, I am deeply greatful for the opportunity I had to work
          on such a project.
        </p>
      </div>
    </Container>
  );
}
