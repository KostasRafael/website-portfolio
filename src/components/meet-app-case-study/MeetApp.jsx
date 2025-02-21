import { Container } from "react-bootstrap";
import "./MeetApp.css";
import "bootstrap/dist/css/bootstrap.min.css";
import meetImage from "../../../public/assets/images/meet.png";
import awsImage from "../../../public/assets/images/aws.png";
import googleOauthImage from "../../../public/assets/images/google-oauth.png";
import pieChartImage from "../../../public/assets/images/pie-chart.png";
import scatterChartImage from "../../../public/assets/images/scatter-chart.png";
import eventsNumberImage from "../../../public/assets/images/events-number.png";
import oauthImage from "../../../public/assets/images/oauth.png";
import calendarImage from "../../../public/assets/images/calendar-api.jpg";
import errorMessage from "../../../public/assets/images/error.png";

export default function MeetApp() {
  return (
    <Container>
      <div style={{ marginTop: "2rem" }}>
        <h1 style={{ fontSize: "8rem", textAlign: "center" }}>Case Study</h1>
        <h1 style={{ fontSize: "8rem", textAlign: "center" }}>Meet App</h1>
      </div>

      <div id="overview" style={{ marginTop: "8rem" }}>
        <h1 class="heading">Overview</h1>
        <p style={{ marginTop: "2rem" }}>
          An events app that users can use to browse a list of upcoming events,
          and displays a list of these events, as well and a pie chart alongside
          a scatterchart displaying the number and the type of events
        </p>
      </div>

      <div id="objective" style={{ marginTop: "4rem" }}>
        <h1 className="heading">Objective</h1>
        <p style={{ marginTop: "2rem" }}>
          The goal was to develop an application that seamlessly fetches events
          from the Google Calendar API and presents them in an intuitive user
          interface. Additionally, visual elements such as pie charts and
          scatter plots were implemented to effectively represent the types and
          number of events.
        </p>
      </div>

      <div id="challenge" style={{ marginTop: "4rem" }}>
        <h1 className="heading">Challenge</h1>
        <p style={{ marginTop: "2rem" }}>
          I needed a reliable data source for my API—a database that could
          provide events for rendering in my React application. Additionally, I
          had to design an intuitive way to visually represent the fetched
          events, including their count and categories, ensuring a clear and
          user-friendly experience.
        </p>
      </div>

      <div id="solution" style={{ marginTop: "4rem" }}>
        <h1 className="heading">Solution</h1>
        <div
          id="database"
          style={{ display: "flex", gap: "1rem", marginTop: "2rem" }}
        >
          <p>
            I retrieved data from the Google Calendar API, which acted as my
            database in that sense.
          </p>
          <img
            src={calendarImage}
            alt="calendar image"
            style={{ width: "40rem" }}
          />
        </div>

        <div
          id="error"
          style={{ marginTop: "4rem", display: "flex", gap: "1rem" }}
        >
          <p>
            Accessing the Google calendar API was not simple because it is a
            protected API. This means that it can only be accessed by
            authenticated apps. If not authenticated, you would get this error:
          </p>
          <img
            src={errorMessage}
            alt="error message"
            style={{ width: "40rem" }}
          />
        </div>

        <div style={{ marginTop: "4rem" }}>
          <p>
            To retrieve data from the Google Calendar API, my React app required
            authorization via an authorization token. The app needed a mechanism
            to obtain and manage this token to authenticate requests and
            securely access the API.
          </p>

          <p>
            The app utilized Google's authorization server to authenticate
            users, verifying their identity, and authorize access to calendar
            events within the React app.
          </p>
          <div style={{ display: "flex", gap: "1rem" }}>
            <p>
              Upon logging in with their Google account and granting
              permissions, the app received an authorization token. This token
              allowed the app to securely access protected resources, such as
              calendar events, on behalf of the user.
            </p>
            <img src={oauthImage} alt="oauth image" />
          </div>
        </div>

        <div style={{ marginTop: "4rem" }}>
          <p>
            To access the Google Calendar API, I needed a valid OAuth2 token.
            This required a mechanism to obtain and manage the token
            efficiently. Implementing and maintaining a dedicated server solely
            for token retrieval was unnecessary and impractical. Instead, a
            serverless function was used to handle the authorization flow.
          </p>
          <div style={{ display: "flex", gap: "1rem" }}>
            <p>
              The logic for obtaining the access token from the authorization
              server was implemented within a serverless function, ensuring
              scalability and efficiency. AWS Lambda was used to deploy this
              function, which was written in Node.js with Express.js, enabling
              secure and reliable token retrieval.
            </p>
            <img src={awsImage} alt="aws image" style={{ width: "40rem" }} />
          </div>
        </div>

        <div style={{ marginTop: "4rem" }}>
          <p>For the charts I used a library named Recharts.</p>
          <p>
            Recharts is a React-based charting library that allowed me to create
            customizable, responsive, and data-driven charts. It provided me
            with a simple API with prebuilt components of PieChart, and
            ScatterChart, making it easy to integrate visualizations into my
            React application.
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              marginTop: "2rem",
            }}
          >
            <img
              style={{ width: "40rem" }}
              src={pieChartImage}
              alt="pie chart"
            />
            <img
              style={{ width: "40rem" }}
              src={scatterChartImage}
              alt="scatter chart"
            />
          </div>
        </div>
      </div>
      <div style={{ marginTop: "4rem" }}>
        <h1 className="heading">Retrospective</h1>
        <p style={{ marginTop: "2rem" }}>
          I enjoyed connecting to an external API, and retrieve data that I did
          not create
        </p>
        <p>
          I enjoyed Implementing the pie chart and the scatter chart, and seeing
          how they adjust to visually represent the current data at their
          current state{" "}
        </p>
        <p>
          {" "}
          struggled to understand the authorization process for the Google
          Calendar API, but I found it fascinating overall
        </p>
        <p>
          I am very happy and proud to have created an application that connects
          to an external API, fetches data, and then displays those data using
          lists and visual representations such as pie charts and scatter charts
        </p>
      </div>
    </Container>
  );
}
