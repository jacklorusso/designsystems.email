import React from "react";
import Link from "gatsby-link";

import Hero from "../components/Hero";

const Issues = () => (
  <main className="bg-white mt5 mb5">
    <div className="w-50-l w-70-m w-90 center">
      <h2 className="black f3 pb4">Issues</h2>
      <ol className="list">
        <li className="black-60 pt4 pb4 bt b--black-20 f5">
          Issue 04 – coming soon
        </li>
        {/* <li className="black-60 pt4 pb4 bt b--black-20 f5">
          <Link to="/issue/04" className="link dim blue fw5">
            Issue 04
          </Link>
          <span className="fr">3 October '17</span>
        </li> */}
        <li className="black-60 pt4 pb4 bt b--black-20 f5">
          <Link to="/issue/03" className="link dim blue fw5">
            Issue 03
          </Link>
          <span className="fr">26 September '17</span>
        </li>
        <li className="black-60 pt4 pb4 bt b--black-20 f5">
          <Link to="/issue/02" className="link dim blue fw5">
            Issue 02
          </Link>
          <span className="fr">19 September '17</span>
        </li>
        <li className="black-60 pt4 pb4 bt b--black-20 f5">
          <Link to="/issue/01" className="link dim blue fw5">
            Issue 01
          </Link>
          <span className="fr">12 September '17</span>
        </li>
      </ol>
    </div>
  </main>
);

const IndexPage = () => (
  <div>
    <Hero message="A curated selection of links covering all things design systems, styleguides and front-end architecture. Get the latest on how others are building, scaling and preventing entropy in their systems delivered to your inbox." />
    <Issues />
  </div>
);

export default IndexPage;
