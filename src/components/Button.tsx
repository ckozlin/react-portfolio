import React from "react";

interface Props {
  text: string;
  color: string;
  link: string;
  external?: boolean;
}

function Button(props: Props): JSX.Element {
  return (
    <div className="column">
      <a
        href={props.link}
        target={props.external ? "_blank" : ""}
        rel="noreferrer"
      >
        <div className={`ui animated ${props.color} basic button`}>
          <div className="visible content">{props.text}</div>
          <div className="hidden content">
            <i className="right arrow icon"></i>
          </div>
        </div>
      </a>
    </div>
  );
}

export default Button;
