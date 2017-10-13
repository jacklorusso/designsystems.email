import React from "react";
import Link from "gatsby-link";
import Helmet from "react-helmet";

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
      <Title>Issue 02</Title>
      <Intro>
        This week we learn from the best, fight for the value of front-end
        mastery, catch up on designing for iOS 11, and take a look at the latest
        design tool on the block.
      </Intro>
      <Item
        headline="Design Systems Features, Step-by-Step [Article]"
        href="https://medium.com/eightshapes-llc/system-features-step-by-step-e69c90982630"
      >
        <p>
          Nathan Curtis takes us through the Eightshapes workflow for building
          new design systems features:{" "}
          <span className="fw6">
            Discover > Design > Build > Doc > Publish.
          </span>
        </p>
      </Item>
      <Item
        headline="Intercom’s Emmet Connolly on design systems [Podcast]"
        href="https://blog.intercom.com/emmet-connolly-design-systems/"
      >
        <p>
          Emmet Connolly, Director of Product Design at Intercom, shares his
          thoughts on how to keep your product consistent and your teams
          cohesive while still shipping quality. Inside Intercom’s editorial
          team have done you a solid by highlighting the key takeaways at the
          top of the post, but it’s a great listen if you’ve got the time.
        </p>
      </Item>
      <Item
        headline="Full-Stack Developers [Article]"
        href="http://bradfrost.com/blog/post/full-stack-developers/"
      >
        <p>
          Brad Frost discusses the role of the frontend designer — someone who
          owns UI code and straddles the line between design and development.
        </p>
        <Quote>
          In my experience, “full-stack developers” always translates to
          “programmers who can do frontend code because they have to and it’s
          ‘easy’.” It’s never the other way around.
        </Quote>
        <p>
          Fighting for the value of mastery over HTML and CSS has been somewhat
          of a theme recently, with Mandy Michael’s{" "}
          <A href="https://medium.com/@mandy.michael/is-there-any-value-in-people-who-cannot-write-javascript-d0a66b16de06">
            Medium article
          </A>{" "}
          and{" "}
          <A href="https://twitter.com/chriseppstein/status/908332267394580481">
            this tweet
          </A>{" "}
          from Chris Eppstein blowing up this week. Brad Frost’s article comes
          at the topic from a different angle, but it’s all part of the story of
          front-end architecture struggling for recognition.
        </p>
      </Item>
      <Item
        headline="iOS 11 Human Interface Guidelines [Link]"
        href="https://developer.apple.com/ios/human-interface-guidelines/overview/themes/"
      >
        <p>
          If you’ve been on the internet at all in the past week, you’ve
          probably seen or at least heard about the iPhone X. Whether you’re an
          iPhone person or not, it’s probably worthwhile for anyone working on a
          product that targets mobile to have a read through the updated Human
          Interface Guidelines — or at least this opportunistic{" "}
          <A href="https://blog.prototypr.io/designing-for-the-iphone-x-4239d5ac736c">
            summary article
          </A>{" "}
          on Medium.
        </p>
        <p>
          Spoiler alert: Apple wants you to embrace “the notch”, not hide it.
          These snippets from{" "}
          <A href="https://css-tricks.com/the-notch-and-css/">CSS Tricks</A> may
          also be of use to you.
        </p>
      </Item>
      <Item
        headline="Compositor Lab Beta [Tool]"
        href="https://developer.apple.com/ios/human-interface-guidelines/overview/themes/"
      >
        <p>
          <Link to="/issue/01" className="link dim blue fw5">
            Issue 01
          </Link>{" "}
          of this newsletter featured Colm Tuite’s critique of the current state
          of design tooling, which finished with a preview of the next
          generation of tools. Compositor is one of the more exciting projects
          in this space, and this week the Lab beta was released.
        </p>
        <p>
          For now, Lab is a bare bones, no-nonsense tool for building systems of
          components using shared values from a theme. If you’re used to
          authoring components in code using your favourite flavour of CSS-in-JS
          with{" "}
          <A href="https://github.com/jxnblk/styled-system">
            styled-system
          </A>{" "}
          (or your own theme variables) and a{" "}
          <A href="https://github.com/react-theming/react-theme-provider">
            ThemeProvider
          </A>{" "}
          wrapper, Lab is unlikely to change your life… But if you have no idea
          what that last sentence means, using Lab’s GUI might just solve some
          problems for you.{" "}
        </p>
        <p>
          You can export modular code that can be dropped straight into your
          projects with minimal fuss - a step up from the usual output of design
          tools, which is a bitmap image.
        </p>
      </Item>
      <Outro />
    </div>
  </main>
);

const Issue02 = () => (
  <div>
    <Helmet title="Issue 02 | Design Systems Weekly" />
    <Nav />
    <IssueContent />
  </div>
);

export default Issue02;
