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
  views: ["view1", "view2", "view3", "view4"],
};

export const movieApi = {
  title: "movie_api",
  image: movieApiImage,
  description:
    "movie_api is the backend of a movie web app, providing users with movie, director, and genre details. Users can sign up, update their info, and manage a list of favorite movies..",
  demo: "https://murmuring-ridge-94608-7a62e12e52db.herokuapp.com",
  github: "https://github.com/KostasRafael/movie_api.git",
  casestudy: "https://rafaeltechie.netlify.app/case-study",
  views: ["view1", "view2", "view3", "view4"],
};

export const meetApp = {
  title: "meet app",
  image: meetAppImage,
  description:
    "Meet App is a React-based event browsing app. Users can explore events by city, set event limits, and access details. It works offline with cached data, supports installation on local devices, and includes visual charts for event insights.",
  demo: "https://kostasrafael.github.io/meet/",
  github: "https://github.com/KostasRafael/meet.git",
  casestudy: "https://rafaeltechie.netlify.app/case-study",
  views: ["view1", "view2", "view3", "view4"],
};

export const myFlixAngular = {
  title: "myFlix Angular",
  image: myFlixAngularImage,
  description:
    "myFlix-client is an Angular app where users can sign up, log in, and browse movies. They can add favorites and manage their profile, including updating their username, email, password, and favorite list.",
  demo: "https://kostasrafael.github.io/myFlix-Angular-client/welcome",
  github: "https://github.com/KostasRafael/myFlix-Angular-client.git",
  casestudy: "https://rafaeltechie.netlify.app/case-study",
  views: ["view1", "view2", "view3", "view4"],
};

export const projects = [myFlix, movieApi, meetApp, myFlixAngular];
