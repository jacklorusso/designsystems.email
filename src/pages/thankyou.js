import React from "react";
import Link from "gatsby-link";

import SVGs from "../components/SVGs";

const ThankYou = () => (
  <section className="bg-black hero">
    <div className="bg-black pt6 pb6 w-50-l w-70-m w-90 center">
      <SVGs />
      <h1 className="pt2 f2 fw5 white">Thank you</h1>
      <p className="white-80 measure f4 fw3 lh-copy">
        I hope you enjoy the emails. Let me know on{" "}
        <a
          className="link white fw4"
          href="https://twitter.com/lol_russo"
          target="_blank"
        >
          Twitter
        </a>{" "}
        if you've got feedback, suggestions for content, or just to say hi.
      </p>
      <Link to="/">
        <button className="sign-up-button bg-blue white w4-ns w-100 hover-bg-dark-blue br2 mt3">
          Home
        </button>
      </Link>
    </div>
  </section>
);

export default ThankYou;
