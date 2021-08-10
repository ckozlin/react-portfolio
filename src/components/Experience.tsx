import React from "react";

function Experience() {
  return (
    <div>
      <br />
      <div className="ui raised very padded text container segment">
        <h3 className="ui header">Experience</h3>
        <p>
          I am always aiming to gain more experience in this field, through
          school, work, or free time. Here is a list of experiences that I
          believe will help me to thrive in future Software Engineering roles.
        </p>
      </div>
      <div className="ui raised very padded text container segment">
        <h2 className="ui header">
          <i className="amazon icon"></i> Amazon
        </h2>

        <h4 className="ui header">SDE Intern (Summer '21)</h4>

        <ul>
          {CreateListItem(
            "Designed and implemented a project that automates a complex manual task through a frontend UI"
          )}
          <ul>
            <li>
              This project abstracts the process for the user, allowing them to
              make desired backend changes in a more convenient and stable way
            </li>
          </ul>
          <br />
          {CreateListItem(
            "Worked with Typescript, React, GraphQL, Testing Library, Cypress, and AWS technologies including Lambda, AppSync, S3, and Polaris"
          )}
          {CreateListItem(
            "Participated in agile development, working with a team to provide the best software solutions for our customers"
          )}
        </ul>
      </div>
      <div className="ui raised very padded text container segment">
        <h2 className="ui header">
          Embodied Learning and Experience (ELX) Lab
        </h2>
        <h4 className="ui header">Lab Volunteer</h4>
        <ul>
          {CreateListItem(
            "Analyzed data collected from experiments to find trends"
          )}
          {CreateListItem(
            "Assisted in writing and editing research papers to submit for publication"
          )}
          <p>
            <li>
              Co-authored{" "}
              <a href="https://ieeexplore.ieee.org/abstract/document/9090481">
                this
              </a>{" "}
              IEEE published paper
            </li>
          </p>
        </ul>
      </div>
      <div className="ui raised very padded text container segment">
        <h2 className="ui header">Mathnasium</h2>
        <h4 className="ui header">Math Tutor</h4>
        <ul>
          {CreateListItem(
            "Utilized various strategies to encourage student engagement in mathematics"
          )}
          {CreateListItem(
            "Tutored multiple students at a time, responsible for their progress and understanding"
          )}
        </ul>
      </div>
    </div>
  );
}

function CreateListItem(text: string) {
  return (
    <p>
      <li>{text}</li>
    </p>
  );
}

export default Experience;
