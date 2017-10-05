import React from "react";
import Link from "gatsby-link";

import Nav from "../../components/Nav";
import Title from "../../components/Title";
import Intro from "../../components/Intro";
import Item from "../../components/Item";
import A from "../../components/A";
import Quote from "../../components/Quote";
import Outro from "../../components/Outro";

const IssueContent = () => (
  <main className="bg-white mt5 mb6">
    <div className="w-50-l w-70-m w-90 center">
      <Link to="/" className="link dim blue fw5">
        ← Home
      </Link>
      <Title>Issue 04</Title>
      <Intro>
        This week we look at the Firefox's Photon Design System, how Dropbox is
        making a play in the design space, an interesting correlation between
        pattern libraries and hiring, writing a CSS-in-JS library from scratch,
        and the future of accessibility for custom elements.
      </Intro>
      <Item
        headline="Just another day – Firefox Photon [Article]"
        href="https://medium.com/firefox-ux/just-another-day-98938eb82d9c"
      >
        <p>
          Emanuela Damiani from the Firefox UX team reflects on the process of
          getting to the Beta release of Firefox Quantum, which realizes all the
          work done on the{" "}
          <A href="http://design.firefox.com/photon/welcome.html">
            Photon Design System
          </A>
          .
        </p>
        <p>
          The Photon documentation currently provide a lot of guidance on
          principles, visuals, motions and copy, but is fairly light on
          components and patterns. This is not accidental – there is a lot to
          learn about how the Firefox team is approaching this holistically:
        </p>
        <Quote>
          We are working on the components and patterns. Day to day, our job
          resembles a detective’s. We follow leads in all the products and
          identify the ones that can bring extra value to the Firefox team.
          Where we see complexity, we act to simplify...<br />
          <br />
          A design system is not built overnight but shaped gradually through
          our daily practices. It evolves every day — or maybe every week — and
          most importantly, it’s never done.
        </Quote>
      </Item>
      <Item
        headline="A Poll About Pattern Libraries and Hiring [Link]"
        href="https://css-tricks.com/poll-pattern-libraries-hiring/"
      >
        <p>Chris Coyier asked the readers of CSS-Tricks:</p>
        <Quote>
          If a company were actively using (or working toward) a pattern library
          for their site(s), you would...
          <br />
          <ul>
            <li>Be more likely to want a job there</li>
            <li>Be less likely to want a job there</li>
            <li>Doesn't matter to me</li>
          </ul>
        </Quote>
        <p>
          The results are in. <strong>61%</strong> said they would be{" "}
          <strong>more likely</strong> to want a job somewhere that were
          actively using (or working toward) a pattern library.{" "}
          <strong>32%</strong> said that it doesn't matter to them, and only{" "}
          <strong>7%</strong> said that they would be less likely to want to
          work there.
        </p>
        <p>
          As Chris explains, that means that <strong>93%</strong> are either
          incentivized to work for you because of a pattern library, or don't
          mind. The take out is that pattern libraries are good not only for
          your codebase and business, but for attracting talent as well.
        </p>
      </Item>
      <Item
        headline="Evolving the Dropbox Brand [Link]"
        href="https://dropbox.design/"
      >
        <p>
          You're not a designer unless you have opinions on the Dropbox rebrand.
          We won't go into that here. In terms of it's impact on the product
          design, so far apart from the new logo and illustration style there
          isn't much from the new brand system that affects the core user
          experience. We'll see if that changes in the coming weeks.
        </p>
        <p>
          A lot of people have pointed out that the new Dropbox seems to be
          making a play for the hearts and minds of creative types. Today, we've
          got some more{" "}
          <A href="https://twitter.com/DanielZarick/status/915592430862372864">
            evidence
          </A>{" "}
          that this is true. Check out this{" "}
          <A href="https://www.dropbox.com/lp/b6/design">landing page</A> for
          some kind of vague design tool that may or may not exist already. It's
          a very interesting move, to say the least.
        </p>
      </Item>
      <Item
        headline="Writing a CSS-in-JS Library From Scratch [Tutorial]"
        href="https://medium.com/@tkh44/writing-a-css-in-js-library-from-scratch-96cd23a017b4"
      >
        <p>
          Kyle Hohenberger, creator of the fantastic CSS-in-JS library{" "}
          <A href="https://github.com/emotion-js/emotion">emotion</A>, explains
          the basic internals of most CSS-in-JS solutions by walking through the
          code. It's a fantastic exercise for anyone who is interested in
          CSS-in-JS as an architecture pattern and wants to learn more.
        </p>
      </Item>
      <Item
        headline="The future of accessibility for custom elements [Article]"
        href="https://medium.com/dev-channel/the-future-of-accessibility-for-custom-elements-291cfb3ffabe"
      >
        <p>
          Using custom elements, the foundation of web components, web
          developers can create new HTML tags, beef-up existing HTML tags, or
          extend the components other developers have authored. The problem is,
          unlike built-in elements, custom elements have no implicit semantics
          or keyboard support.
        </p>
        <Quote>
          When you define a new tag, the browser really has no way of knowing if
          you’re trying to build a button, or a slider, or just a fancy text
          container. Adding these features back in requires a fair bit of work
          on the developer’s part and it can be difficult to reach parity with
          the native equivalents.
        </Quote>
        <p>
          Google Chrome Labs have released{" "}
          <A href="https://github.com/GoogleChromeLabs/howto-components">
            HowTo: Components
          </A>
          {", "}
          a project that aims to build custom element equivalents of the
          built-ins to educate developers, and push standards forward for custom
          elements through example. If you're working with web components and
          care about accessibility, you're going to want to read this article
          and stay across the project.
        </p>
      </Item>
      <Outro />
    </div>
  </main>
);

const Issue02 = () => (
  <div>
    <Nav />
    <IssueContent />
  </div>
);

export default Issue02;
