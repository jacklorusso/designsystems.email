import React from 'react';

function A(props) {
  return (
    <a href={props.href} className="link dim blue fw5">
      {props.children}
    </a>
  );
}

export default A;
