import React from "react";
import ClimbingDown from "../images/climbing-portrait2.jpg";
import ClimbingUp from "../images/climbing-portrait.jpg";
import CenturyTower from "../images/Century.jpeg";
import Albert from "../images/Albert.jpeg";

import HomeItem from "./HomeItem";

function Home() {
  return (
    <div>
      <br />
      <div className="ui raised very padded text container segment">
        <h3>
          <strong>Welcome to my online portfolio!</strong>
        </h3>
        <p>
          This website is built using React with Typescript, and leverages
          Semantic UI's open-source design framework. This is the home page,
          where you'll find an overview of the site.
        </p>
        <p>
          The source code for this website can be found on my{" "}
          <a href="https://github.com/ckozlin" target="_blank" rel="noreferrer">
            GitHub page
          </a>
          .{" "}
        </p>
        <p>
          I hope you like the website! Feel free to contact me (see footer
          below) with any questions or suggestions.
        </p>
        <ImageRails />
      </div>
      <div className="ui raised very padded text container segment">
        <h3 className="ui header">Website Overview</h3>
        <div className="ui divided items">
          <HomeItem
            header="Experience"
            color="purple"
            blurb="In this section, I will talk about my work experience. I have learned a lot from my projects and internships, and am proud of how much I have grown as an engineer these past few years."
            link="experience"
          />
          <HomeItem
            header="Projects"
            color="purple"
            blurb="What is a portfolio for if I don't get to talk endlessly about my favorite projects? 
            In this section, I will show off some of the coolest things I have worked on in my young career. 
            This is my favorite section, so I hope you like it too!"
            link="projects"
          />
          <HomeItem
            header="About Me"
            color="purple"
            blurb="This section of the website is, as you may have inferred, solely
                about me. In the form of an FAQ, I'll discuss my hobbies and passions, as well as my
                goals. Click the button to learn more!"
            link="about"
          />
          <HomeItem
            header="LinkedIn"
            color="purple"
            blurb={
              <>
                <p>See my latest LinkedIn post below!</p>
                <iframe
                  src="https://www.linkedin.com/embed/feed/update/urn:li:share:6925473966568480768"
                  height="346"
                  width="504"
                  frameBorder="0"
                  allowFullScreen={true}
                  title="My most recent LinkedIn post"
                ></iframe>
              </>
            }
            link="https://www.linkedin.com/in/ckozlin"
            external
          />
        </div>
      </div>
    </div>
  );
}

/** Returns left and right rails containing two images each */
function ImageRails() {
  return (
    <>
      <div className="ui left rail">
        <div className="ui image medium floated">
          <img src={ClimbingUp} alt="Me climbing up Royal Gorge in Colorado" />
        </div>
        <div className="ui image medium floated">
          <img
            src={CenturyTower}
            alt="Century tower, a landmark of UF campus, framed by a gap between buildings"
          />
        </div>
      </div>
      <div className="ui right rail">
        <div className="ui image medium floated">
          <img
            src={ClimbingDown}
            alt="Me climbing down Royal Gorge in Colorado"
          />
        </div>
        <div className="ui image medium floated">
          <img
            src={Albert}
            alt="A selfie of me and school mascot Albert the Gator"
          />
        </div>
      </div>
    </>
  );
}

export default Home;
