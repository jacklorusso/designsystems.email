import React from 'react';

import A from './A';

function Item(props) {
  return (
    <div className="pb5 pt5 bb b--black-20 f5 lh-copy">
      <h3 className="black f4 ma0">{props.headline}</h3>
      {props.children}
      <A href={props.href}>{props.linkText}</A>
    </div>
  );
}

export default Item;
