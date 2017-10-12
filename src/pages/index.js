import React from "react";
import Link from "gatsby-link";

import Hero from "../components/Hero";

const IssueItem = props => (
  <Link className="link dim blue fw5" to={props.path}>
    <li className="black-60 pt4 pb4 bt b--black-20 f5">
      <span className="link dim blue fw5">Issue {props.number}</span>
      <span className="fr fw4 black-50">{props.date}</span>
    </li>
  </Link>
);

const IssueList = () => (
  <main className="bg-white mt5 mb5">
    <div className="w-50-l w-70-m w-90 center">
      <h2 className="black f3 pb4">Issues</h2>
      <ol className="list">
        <li className="black-50 pt4 pb4 bt b--black-20 f5">
          Issue 06 – coming soon
        </li>
        <IssueItem number="05" path="/issue/05" date="11 October '17" />
        <IssueItem number="04" path="/issue/04" date="5 October '17" />
        <IssueItem number="03" path="/issue/03" date="26 September '17" />
        <IssueItem number="02" path="/issue/02" date="19 September '17" />
        <IssueItem number="01" path="/issue/01" date="12 September '17" />
      </ol>
    </div>
  </main>
);

const IndexPage = () => (
  <div>
    <Hero message="A curated selection of links covering all things design systems, styleguides, pattern libraries and front-end architecture. Get the latest on how others are building, scaling and preventing entropy in their systems delivered to your inbox." />
    <IssueList />
  </div>
);

export default IndexPage;
