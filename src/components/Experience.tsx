import React from "react";

function Experience() {
  return (
    <div>
      <br />
      <div className="ui raised very padded text container segment">
        <h2 className="ui header">
          <i className="amazon icon"></i> Amazon Web Services
        </h2>
        <h4 className="ui header">Software Development Engineer I</h4>
        <p>
          <strong>July 2023 - Present</strong>
        </p>
        <ul>
          {createListItem(
            "Reduced client data fetching times by up to 75% on critical pages by migrating to a new GraphQL server backed by a Redis cache."
          )}
          {createListItem(
            "Created scalable, high-frequency telemetry views with React and TypeScript, displaying thousands of data points worldwide."
          )}
        </ul>
        <h4 className="ui header">
          Software Development Engineer Intern (Summer 2021, Summer 2022)
        </h4>
        <p>
          <strong>2022</strong>
        </p>
        <ul>
          {createListItem(
            "Engineered a full stack redesign of a high traffic page, reducing server costs and latency while improving test coverage and scalability."
          )}
          {createListItem(
            "Devised and implemented the team's first ever dynamic data decoding mechanism, removing need for manual maintenance of data expectations."
          )}
          {createListItem(
            "Headed the project's entire software development cycle from start-up specifications to rollout of final product."
          )}
        </ul>
        <p>
          <strong>2021</strong>
        </p>
        <ul>
          {createListItem(
            "Streamlined a complex backend data manipulation task through creation of a frontend interface and several new APIs."
          )}
          {createListItem(
            "Designed and assembled a serverless Native AWS stack for project."
          )}
          {createListItem("Earned and accepted a return internship.")}
        </ul>
      </div>
      <div className="ui raised very padded text container segment">
        <h2 className="ui header">
          Embodied Learning and Experience (ELX) Lab
        </h2>
        <h4 className="ui header">Lab Volunteer</h4>
        <ul>
          <p>
            <li>
              Authored abstract and trend explanations for an{" "}
              <a href="https://ieeexplore.ieee.org/abstract/document/9090481">
                IEEE published paper.
              </a>{" "}
            </li>
          </p>
          {createListItem(
            "Consulted with participants and guiding them through research trials."
          )}
          {createListItem("Extracted trends from collected data.")}
        </ul>
      </div>
      <div className="ui raised very padded text container segment">
        <h2 className="ui header">Mathnasium</h2>
        <h4 className="ui header">Math Tutor</h4>
        <ul>
          {createListItem(
            "Utilized various strategies to encourage student engagement in mathematics"
          )}
          {createListItem(
            "Tutored multiple students at a time, responsible for their progress and understanding"
          )}
        </ul>
      </div>
    </div>
  );
}

function createListItem(text: string) {
  return (
    <p>
      <li>{text}</li>
    </p>
  );
}

export default Experience;
