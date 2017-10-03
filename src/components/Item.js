import React from "react";

import A from "./A";

function Item(props) {
  return (
    <div className="pb5 pt5 bb b--black-20 f5 lh-copy">
      <h3 className="black f4 ma0">
        <A href={props.href}>{props.headline}</A>
      </h3>
      {props.children}
    </div>
  );
}

export default Item;
