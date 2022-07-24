import React from "react";
import Button from "./Button";

interface Props {
  header: string;
  color: string;
  blurb: string | JSX.Element;
  link: string;
  external?: boolean;
}

function HomeItem(props: Props): JSX.Element {
  return (
    <div className="item">
      <div className="content">
        <a href={`{props.link}`}>
          <Button
            text={props.header}
            color={props.color}
            link={props.link}
            external={props.external}
          />
        </a>

        <br />
        <p>{props.blurb}</p>
      </div>
    </div>
  );
}

export default HomeItem;
