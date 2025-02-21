import myFlixImage from "./public/assets/images/list.png";
import movieApiImage from "./public/assets/images/movie-api.png";
import meetAppImage from "./public/assets/images/meet.png";
import myFlixAngularImage from "./public/assets/images/myflix-angular.png";

export const myFlix = {
  title: "myFlix",
  image: myFlixImage,
  description:
    "myFlix-client is a React and Redux-based app where users can sign up, log in, and browse movies. They can add favorites and manage their profile, including updating their username, email, password, and favorite list.",
  demo: "https://myflixmoviescollection.netlify.app",
  github: "https://github.com/KostasRafael/myFlix-client.git",
  casestudy: "https://rafaeltechie.netlify.app/case-study",
  modaltitle: "MyFlix React Client",
  modaldescription:
    "myFlix is a library of movies with information about movies. Users can view information such as description, genre and director. Additionally, users can create an account and ad movies to their list of favorite movies",
  modalfeatures: [
    "View list of movies",
    "See details for each movie",
    "User registration and login",
    "Update Profile (username, password, email, birthday)",
    "Users can add to or remove a movie to/from their list of favorites",
    "Users can delete their account",
  ],
  modaltechnologies: ["JSX", "html", "css", "React", "Redux"],
};

export const movieApi = {
  title: "movie_api",
  image: movieApiImage,
  description:
    "movie_api is the backend of a movie web app, providing users with movie, director, and genre details. Users can sign up, update their info, and manage a list of favorite movies..",
  demo: "https://murmuring-ridge-94608-7a62e12e52db.herokuapp.com",
  github: "https://github.com/KostasRafael/movie_api.git",
  casestudy: "https://rafaeltechie.netlify.app/case-study",
  modaltittle: "MyFlix RESTful API",
  modaldescription:
    "movie_api is the API that I created to pass data to both UIs, the myFlix Ract client and the myFlix Angular client. The goal of this project was to learn and practice working with Node.js, as well is to have an API that will be integrated with a MongoDB database, and will feed data the 2 UIs.",
  modalfeatures: ["Connected to MongoDB", "deployed on heroku"],
  modaltechnologies: [
    "Javascript",
    "Node.js (Express, Morgan, bodyParser, mongoose, CORS, Passport, bcrypt)",
    "Non-relational DB on MongoDB Atlas",
    "Postman (API endpoint testing)",
    "JSDoc for documentation",
    "App hosted on Heroku",
  ],
};

export const meetApp = {
  title: "meet app",
  image: meetAppImage,
  description:
    "Meet App is a React-based event browsing app. Users can explore events by city, set event limits, and access details. It works offline with cached data, supports installation on local devices, and includes visual charts for event insights.",
  demo: "https://kostasrafael.github.io/meet/",
  github: "https://github.com/KostasRafael/meet.git",
  casestudy: "https://rafaeltechie.netlify.app/case-studies/meet-app",
  modaldescription:
    "This app displays data fetched from the Google calendar API. I built this app to learn and practice Progressive Web Applications (PWA), test-driven-development(TDD), serverless functions (FaaS), and OAuth.",
  modalfeatures: [
    "Show a list of events",
    "Show/hide event details",
    "Filter by city name",
    "Choose number of events to display",
    "Chart 1: Number of upcoming events per city",
    "Chart 2: Popularity of topics",
  ],
  modaltechnologies: [
    "React",
    "CRA (CreateReactApp)",
    "CSS",
    "serverless",
    "AWS lambda",
    "OAuth (Google Cloud Console)",
    "Gppgle API",
    "Recharts",
    "Jest (Cucumber, Puppeteer)",
    "Atatus (performance monitoring)",
    "GitHub-pages hosting",
  ],
};

export const myFlixAngular = {
  title: "myFlix Angular",
  image: myFlixAngularImage,
  description:
    "myFlix-client is an Angular app where users can sign up, log in, and browse movies. They can add favorites and manage their profile, including updating their username, email, password, and favorite list.",
  demo: "https://kostasrafael.github.io/myFlix-Angular-client/welcome",
  github: "https://github.com/KostasRafael/myFlix-Angular-client.git",
  casestudy: "https://rafaeltechie.netlify.app/case-study",
  modaldescription:
    "This is the the Angular UI for myFlix app. It is integrated with the move_api RESTful API for it's data.",
  modalfeatures: [
    "View a list of movies",
    "See details for each movie",
    "User registration and login",
    "Update profile (username, password, email, birthday)",
    "Users can add to add remove a move to/from their list of favorites",
    "Users can delete their account",
  ],
  modaltechnologies: [
    "TypeScript",
    "Angular",
    "Angular-material",
    "CSS",
    "TypeDoc for documentatio",
    "Github-pages hosting",
  ],
};

export const projects = [myFlix, movieApi, meetApp, myFlixAngular];
