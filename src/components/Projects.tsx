import React from "react";

function Projects() {
  return (
    <div>
      <br />
      <div className="ui raised very padded text container segment">
        <h3 className="ui header">Projects</h3>
        <p>
          I know I am far from the first person to say this, but projects really
          are the best way to learn. I have completed many projects throughout
          college so far, and look forward to taking on a real-world project at
          Amazon over summer.
        </p>
        <p>
          In this section of my site, I will highlight some of my favorite
          projects and discuss the underlying code. If you want to learn more,
          feel free to contact me!
        </p>
      </div>
      <div className="ui raised very padded text container segment">
        <h3 className="ui header">HEAL Central: A MERN stack website</h3>

        <p>
          As a project in my Software Engineering class, my group developed a
          MERN stack website for UF's Health Educated Asian Leadership (HEAL)
          club.
        </p>
        <a href="https://ufheal.herokuapp.com" target="_blank" rel="noreferrer">
          <button className="ui animated inverted green button">
            <div className="visible content">Check it out!</div>
            <div className="hidden content">
              <i className="right arrow icon"></i>
            </div>
          </button>
        </a>
        <p></p>
        <p>
          I learned a ton of programming skills from this project, as well as a
          lot about working with a team of people to develop software. I am
          really proud of our final result, and we plan to stay on as webmasters
          in the future to keep the site up to date for HEAL.
        </p>
      </div>
      <div className="ui raised very padded text container segment">
        <h3 className="ui header">Machine Learning in Julia</h3>
        <p>
          One of my favorite projects is from a Data Science elective I took
          Spring '21. I leveraged ScikitLearn in Julia to implement machine
          learning algorithms that classified datasets into categories.
        </p>
        <p>
          I also utilized additional libraries to clean and encode the large
          datasets from the UCI data repository, which were then used to create
          Naive Bayes Classifiers, Decision Tree Classifiers, Neural Networks,
          and Support Vector Machines.
        </p>
        <p>
          The resulting models were measured for accuracy and modified for
          improvement. In the end, several models were able to categorize test
          data with accuracy above 95%
        </p>
      </div>
      <div className="ui raised very padded text container segment">
        <h3 className="ui header">AVL Tree in C++</h3>
        <p>
          This project helped me learn the ins and outs of balanced binary
          search trees (BSTs). I implemented a self-balancing BST from scratch
          in pure C++. I learned an incredible amount about BSTs, how they work,
          and why they are useful.
        </p>
        <p>
          This project immediately paid dividends by enhancing my understanding
          of data structures and algorithms, which improved my performance in
          job interviews and future programming endeavors.
        </p>
      </div>
    </div>
  );
}

export default Projects;
