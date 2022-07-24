import React from "react";
import ButtonList from "./ButtonList";
import Albert from "../images/Albert.jpeg";
import Rusty from "../images/Rusty.jpeg";

function About() {
  return (
    <div>
      <br />
      <div className="ui raised very padded text container segment">
        <img
          alt="Albert the Gator and I"
          src={Albert}
          className="ui small right floated rounded image"
        />
        <h3 className="ui header">What am I currently up to?</h3>
        <p>
          I'm so glad you asked. I am currently a rising junior studying
          Computer Science at the University of Florida. I have a 3.95 GPA
          overall, and a 3.97 in major-specific courses.
        </p>
        <p>
          The past two summers (2021 & 2022), I interned with Amazon Web
          Services in Denver as a Software Development Engineer.
        </p>
      </div>
      <div className="ui raised very padded text container segment">
        <h3 className="ui header">Why Software Engineering?</h3>
        <p>
          For me, there is something special about creating software from
          scratch. I have always loved technology, and as a consumer I love
          intuitive interfaces and heavily customizable software.
        </p>
        <p>
          This is what led me to pursue a career in Software Engineering. My
          goal is to make software that has a positive impact on customers,
          adding convenience to their lives.
        </p>
        <p>
          I also love problem solving— and there is plenty of that to be done in
          this field!
        </p>
      </div>
      <div className="ui raised very padded text container segment">
        <img
          alt="My dog Rusty!"
          src={Rusty}
          className="ui small right floated rounded image"
        />
        <h3 className="ui header">Personal Life</h3>
        <p>
          While my spare time does involve a lot of coding (i.e. this website),
          there's more to the story.
        </p>
        <p>
          While I could talk forever about Lego sets, I'll instead just provide
          a brief overview of my hobbies.
        </p>
        <p>Here are some of my favorite things!</p> <br />
        <div className="ui four column doubling stackable grid container">
          <div className="item">
            <div className="ui vertical buttons">
              <ButtonList label="Football" type="inverted blue" />
              <ButtonList label="Lego" type="inverted blue" />
              <ButtonList label="Star Wars" type="inverted blue" />
            </div>
          </div>
          <div className="item">
            <div className="ui vertical buttons">
              <ButtonList label="Marvel" type="inverted red" />
              <ButtonList label="Tennis" type="inverted red" />
              <ButtonList label="Baseball" type="inverted red" />
            </div>
          </div>
          <div className="item">
            <div className="ui vertical buttons">
              <ButtonList label="Spikeball" type="inverted violet" />
              <ButtonList label="Rocket League" type="inverted violet" />
              <ButtonList label="Podcasts" type="inverted violet" />
            </div>
          </div>
          <div className="item">
            <div className="ui vertical buttons">
              <ButtonList label="Dogs" type="inverted orange" />
              <ButtonList label="Disc Golf" type="inverted orange" />
              <ButtonList label="Music" type="inverted orange" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
