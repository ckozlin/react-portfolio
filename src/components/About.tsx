import React from "react";
import SoftwareImage from "../images/Software_Engineering.jpg";
import ButtonList from "./ButtonList";
import Albert from "../images/Albert.jpeg";
import Rusty from "../images/Rusty.jpeg";

function About() {
  return (
    <div>
      <br />
      <div className="ui raised very padded text container segment">
        <h3 className="ui header">What am I currently up to?</h3>
        <img
          alt="Albert the Gator and I"
          src={Albert}
          className="ui small right floated rounded image"
        />
        <p>
          I'm so glad you asked. I am currently a rising junior (Class of '23)
          studying Computer Science at the University of Florida. As of Spring
          '21, my GPA is 3.96.
        </p>
        <p>
          In addition to a Bachelor's in CS, I am also pursuing a Minor in
          Spanish and a Certificate in AI Fundamentals and Applications.
        </p>
        <p>
          Also, I am very excited to say that I will be interning at Amazon this
          summer!
        </p>
        <p>
          I will be working in Denver as a Software Development Engineer (SDE)
          and I cannot wait! In fact, part of the reason for building this
          website is to prepare for the internship.
        </p>
      </div>
      <div className="ui raised very padded text container segment">
        <h3 className="ui header">Why Software Engineering?</h3>
        <img
          className="ui medium right floated rounded image"
          alt="computer screen with code on it"
          src={SoftwareImage}
        />
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
        <h3 className="ui header">Personal Life</h3>
        <img
          alt="My dog Rusty!"
          src={Rusty}
          className="ui small right floated rounded image"
        />
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
              <ButtonList label="Dogs ^" type="inverted orange" />
              <ButtonList label="Television" type="inverted orange" />
              <ButtonList label="Music" type="inverted orange" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
