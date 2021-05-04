import React from "react";
import "../styles/Header.scss";

function Header() {
  return (
    // <div classNameName="ui four column stackable grid container">
    //   <Button text="Home" />
    //   <Button text="About Me" />
    //   <Button text="Experience" />
    //   <Button text="Projects" />
    // </div>

    <div className="ui attached stackable menu">
      <div className="ui container">
        <div className="item">
          <h4 className="ui header">Cameron Kozlin</h4>
        </div>
        <a href="/" className="item">
          <i className="home icon"></i> Home
        </a>
        <a href="/about" className="item">
          <i className="address card outline icon"></i> About Me
        </a>
        <a href="/experience" className="item">
          <i className="chart line icon"></i> Experience
        </a>
        <a href="/projects" className="item">
          <i className="code branch icon"></i> Projects
        </a>
        {/* <div className="ui simple dropdown item">
          More
          <i className="dropdown icon"></i>
          <div className="menu">
            <a href="https://github.com/ckozlin" className="item">
              <i className="github icon"></i> GitHub
            </a>
            <a href="https://www.linkedin.com/in/ckozlin/" className="item">
              <i className="linkedin icon"></i> LinkedIn
            </a>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Header;
