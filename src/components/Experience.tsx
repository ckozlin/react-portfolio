import React from "react";

function Experience() {
  return (
    <div>
      <br />
      <div className="ui raised very padded text container segment">
        <h3 className="ui header">Experience</h3>
        <p>
          I have a diverse background in this field, and am always aiming to
          gain more experience. Here is a list of experiences that I believe
          will help me to thrive in future Software Engineering roles.
        </p>
      </div>
      <div className="ui raised very padded text container segment">
        <h2 className="ui header">
          <i className="amazon icon"></i> Amazon
        </h2>

        <h4 className="ui header">SDE Intern (Summer '21)</h4>

        <ul>
          <li>Synopsis of this experience coming soon!</li>
        </ul>
      </div>
      <div className="ui raised very padded text container segment">
        <h2 className="ui header">
          Embodied Learning and Experience (ELX) Lab
        </h2>
        <h4 className="ui header">Lab Volunteer</h4>
        <ul>
          <li>Analyzed data collected from experiments to find trends</li>
          <li>
            Assisted in writing and editing research papers to submit for
            publication
          </li>
          <li>
            Co-authored{" "}
            <a
              href="https://ieeexplore.ieee.org/abstract/document/9090481"
              target="_blank"
              rel="noreferrer"
            >
              this
            </a>{" "}
            IEEE published paper
          </li>
        </ul>
      </div>
      <div className="ui raised very padded text container segment">
        <h2 className="ui header">Mathnasium</h2>
        <h4 className="ui header">Math Tutor</h4>
        <ul>
          <li>
            Utilized various strategies to encourage student engagement in
            mathematics
          </li>
          <li>
            Tutored multiple students at a time, responsible for their progress
            and understanding
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Experience;
