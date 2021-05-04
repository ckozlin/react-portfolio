import React from "react";

interface Props {
  label: string;
  type: string;
}

function ButtonList(props: Props): JSX.Element {
  return (
    <div>
      <div className="content">
        <button className={`ui ${props.type} button`}>{props.label}</button>
      </div>
    </div>
  );
}

export default ButtonList;
