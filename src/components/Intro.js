import React from "react";

const Intro = props => {
  return (
    <div className="pb4 bb b--black-20 f4 lh-copy measure">
      <p>{props.children}</p>
    </div>
  );
};

export default Intro;
