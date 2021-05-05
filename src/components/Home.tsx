import React from "react";
import Headshot from "../images/Cameron_Kozlin.jpeg";
import HomeItem from "./HomeItem";

function Home() {
  return (
    <div>
      <br />
      <div className="ui raised very padded text container segment">
        <img
          className="ui small left floated rounded image"
          alt="Me"
          src={Headshot}
        />
        <p>
          <strong>Welcome to my online portfolio!</strong> This website is built
          using React with Typescript, and styled using Semantic UI. Here on the
          home page I will provide an overview of the options provided in the
          header above.
        </p>
        <p>
          I am building this portfolio to practice React concepts and learn how
          Typescript works with React.
        </p>
        <p>
          Also, now that I have discovered
          <a href="https://semantic-ui.com/"> Semantic UI</a> , I really wanted
          to utilize the styling they provide to make something more
          user-friendly and interactive than my former portfolio.
        </p>{" "}
        <p>
          The site will be stored on my GitHub for version control, which will
          help me to hone my understanding of Git. The source code for this
          website can be found on my{" "}
          <a href="https://github.com/ckozlin" target="_blank" rel="noreferrer">
            GitHub page
          </a>
          .{" "}
        </p>
        <p>
          I hope you like the website! Feel free to contact me (see footer
          below) with any questions or suggestions.
        </p>
      </div>
      <div className="ui raised very padded text container segment">
        <h3 className="ui header">Website Overview</h3>
        <div className="ui divided items">
          <HomeItem
            header="About Me"
            color="purple"
            blurb="This section of the website is, as you may have inferred, solely
                about me. In the form of an FAQ, I'll discuss my hobbies and passions, as well as my
                goals. Click the button to learn more!"
            link="about"
          />
          <HomeItem
            header="Experience"
            color="purple"
            blurb="In this section, I will talk about my work experience. I learn
          by doing, so I believe my experiences have helped shape me as a
          Software Engineer as well as prepared me for a variety of
          different situations."
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
        </div>
      </div>
    </div>
  );
}

export default Home;
