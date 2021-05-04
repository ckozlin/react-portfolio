import React from "react";

function Footer() {
  return (
    <div className="ui raised text container">
      <br />
      <div className="ui compact segment">
        <a
          href="https://twitter.com/CameronKozlin"
          target="_blank"
          rel="noreferrer"
        >
          <button className="ui twitter button">
            <i className="twitter icon"></i>Twitter
          </button>
        </a>
        <a
          href="https://www.linkedin.com/in/ckozlin/"
          target="_blank"
          rel="noreferrer"
        >
          <button className="ui linkedin button">
            <i className="linkedin icon"></i>LinkedIn
          </button>
        </a>
        <a href="https://github.com/ckozlin" target="_blank" rel="noreferrer">
          <button className="ui black button">
            <i className="github icon"></i>GitHub
          </button>
        </a>
        <a href="mailto:ckozlin@ufl.edu?subject=Portfolio Follow-up!">
          <button className="ui basic blue button">ckozlin@ufl.edu</button>
        </a>
      </div>
      <br />
    </div>
  );
}

export default Footer;
