import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";

import "./index.css";

const Footer = () => (
  <div className="h3 w-50-l w-70-m w-90 center flex content-center items-center">
    <div className="black-50 fl w-50 lh-copy">
      <p>
        Curated by<br />
        <a
          className="link dim blue fw5"
          href="https://twitter.com/lol_russo"
          target="_blank"
        >
          {" "}
          Jack Lo Russo
        </a>
      </p>
    </div>
    <div className="black-50 fl w-50 tr lh-copy">
      <p>
        Runs on<br />
        <a
          className="link dim blue fw5"
          href="https://buttondown.email"
          target="_blank"
        >
          Buttondown
        </a>
      </p>
    </div>
  </div>
);

const TemplateWrapper = ({ children }) => (
  <div className="bg-white ">
    <Helmet
      title="Design Systems Weekly"
      meta={[
        {
          name: "description",
          content:
            "A curated selection of links covering all things design systems, styleguides, pattern libraries and front-end architecture. Get the latest on how others are building, scaling and preventing entropy in their systems delivered to your inbox."
        },
        {
          name: "keywords",
          content:
            "design systems, styleguides, product design, CSS framework, design system guide"
        }
      ]}
    />
    {children()}
    <Footer />
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
