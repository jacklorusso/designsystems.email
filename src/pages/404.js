import React from "react";
import Link from "gatsby-link";

import SVGs from "../components/SVGs";

const NotFoundPage = () => (
  <section className="bg-black hero">
    <div className="bg-black pt5-ns pt4 pb6 w-50-l w-70-m w-90 center">
      {/* <SVGs /> */}
      <h1 className="pt2 f1 fw5 white">404</h1>
      <p className="white-80 measure f4 fw3 lh-copy">
        Well, sh*t. Looks like this page doesn't exist. Sorry about that!
      </p>
      <Link to="/">
        <button className="sign-up-button bg-blue white w4-ns w-100 hover-bg-dark-blue br2 mt4">
          Home
        </button>
      </Link>
    </div>
  </section>
);

export default NotFoundPage;
