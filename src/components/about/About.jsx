import "./About.css";
import React from "react";
import profileImage from "../../../public/assets/images/profile.jpg";
import coldImage from "../../../public/assets/images/cold.jpg";

export default function AboutMe() {
  return (
    <section id="about" style={{ padding: "20px" }}>
      <h1 style={{ backgroundColor: "lightgray" }}>About Me</h1>
      <div class="content">
        <img
          src={profileImage}
          alt=""
          style={{ width: "10rem", objectFit: "contain", borderRadius: "15%" }}
        />
        <p>
          Since the very beginning of my adulthood, and up to this very present
          day, I have made sure to always express my curiosity and love of
          interacting with people. <br />
          <br />
          For about ten years I worked in the tourist industry as a hotelier in
          Greece. I was working seasonally, only in the summer when Greece is
          packed with visitors. My winters were free, and I used this freedom in
          doing one of the most amazing things one can do, LEARNING. The perfect
          balance, half year being busy in the hecting environment of the
          tourist industry, surrounded by all kinds of people, outside in nature
          and all it’s forces, and half year immersing myself into libraries,
          universities and other educational institutions, learning and
          improving myself in every way I could.
        </p>
      </div>
      <div style={{ display: "flex" }}>
        <p>
          I graduated in Philosophy at a top 10 university of the UK, the
          university of Warwick, I perfected my use of the English language, I
          learned music theory and playing the guitar and I traveled many
          different countries and mixed with a great variety of cultures. <br />
          <br />
          About 1 year ego, once again, I decided to embark on a new journey and
          follow my curiosity about computers and the internet. And I absolutely
          loved it from the get go. This led me to completing the CareerFoundry
          course on web-development, where I learned different programming
          languages and tools, and I built and published my first real
          applications. Real applications that people can use to facilitate and
          improve their lives. In this tech world, I once again proved my
          ability to learn fast and my adaptability to new settings and
          challenges. I thrived in using new technologies, and in applying my
          strong sense of logic and problem-solving skills to finding optimal
          solutions to real-life problems. <br /> <br /> This is a short
          synopsis of my journey so far, and the result of this journey is me,
          an extremely resilient person with a solid understanding of myself and
          the world around me. A student of life who will in any circumstance
          figure out a way to keep going and growing. But also, a full stack web
          developer who has found what he loves and is here to stay. I am
          aspiring to find a job in a company comprised of enthusiastic
          individuals, ansd within an environment that encourages me to give it
          all I have.
        </p>
        <img
          src={coldImage}
          alt=""
          style={{
            width: "10rem",
            height: "20rem",
            objectFit: "contain",
            borderRadius: "15%",
          }}
        />
      </div>
      <a
        href="https://drive.google.com/uc?export=download&id=1ig3Qum1zKfXbFoLFHD3oWVXV8Iozpb2S"
        download
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-primary btn-lg"
        style={{ textAlign: "center" }}
      >
        Download Resume
      </a>
    </section>
  );
}
