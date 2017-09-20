import React from 'react';

function Quote(props) {
  return (
    <blockquote className="pl3 mt4 mb4 i bl bw2 b--black-20">
      {props.children}
    </blockquote>
  );
}

export default Quote;
