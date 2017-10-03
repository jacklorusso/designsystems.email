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
      <Title>Issue 03</Title>
      <Intro>
        This week we focus on accessibility, suss out what's new with Material,
        and take a look at 'Nachos', the fresh out of the oven design system
        from Trello.
      </Intro>
      <Item
        headline="Salesforce Lightning – Accessibility Patterns [Link]"
        href="https://www.lightningdesignsystem.com/accessibility/patterns/overview/"
      >
        <p>
          On top of documenting their own components, Salesforce has begun to
          document the underlying accessibility patterns that they're built
          from. This includes the required markup and behaviour for each
          pattern, working examples of the patterns for reference when
          implementing Lightning components, and references to where the
          patterns are used in the design system.
        </p>
        <p>
          Only 5 out of the 18 patterns have documentation so far, but it's
          worth checking out how one of the most mature design systems
          approaches accessibility.
        </p>
      </Item>
      <Item
        headline="Writing CSS with Accessibility in Mind [Article]"
        href="https://medium.com/@matuzo/writing-css-with-accessibility-in-mind-8514a0007939"
      >
        <p>
          Coming in at 22 mins, this is a long read if you attack it all in one
          go, but it's a great collection of tips and patterns that will be
          valuable for anyone looking to up their understanding of web
          accessibility.
        </p>
        <p>
          It's actually the third in a series of articles, with the author also
          penning useful pieces on writing
          <A href="https://medium.com/alistapart/writing-html-with-accessibility-in-mind-a62026493412">
            HTML
          </A>
          and
          <A href="https://medium.com/@matuzo/writing-javascript-with-accessibility-in-mind-a1f6a5f467b9">
            JavaScript
          </A>
          with accessibility in mind.
        </p>
      </Item>
      <Item
        headline="What's New in Material Design [Link]"
        href="https://material.io/guidelines/material-design/whats-new.html#"
      >
        <p>
          The first major update to Material Design since April brings in
          patterns for offline states, which will likely be interesting to
          anyone working on progressive web apps. There are also some less
          exciting changes made for Android Oreo.
        </p>
      </Item>
      <Item
        headline="Nachos – Trello's Design System [Link]"
        href="https://design.trello.com/"
      >
        <p>
          Trello have always led with their
          <A href="https://design.trello.com/principles"> principles</A> in
          their product design, and they have evidently done the same with their
          design system – Nachos embodies their fun voice and tone from the
          get-go. I think they even managed to sneak in a cheeky stab at Asana's
          trademark unicorn animation into their{" "}
          <A href="https://design.trello.com/style/motions">
            motion guidelines
          </A>...
        </p>
        <Quote>
          As funny as it might seem to animate Taco the dog flying across the
          screen every time a user drags a card (don’t worry, no one is
          recommending we do this), it doesn’t improve the user experience.
        </Quote>
        <p>
          It's interesting that they chose to use images of their components in
          their documentation rather than the components themselves, which has
          become quite standard. Maybe it's a cultural thing; Trello is owned by
          Atlassian, which keeps their own{" "}
          <A href="https://atlassian.design/guidelines/product/overview">
            Product guidelines
          </A>{" "}
          (documented with screenshots) seperate from
          <A href="https://atlaskit.atlassian.com/"> AtlasKit</A>, their living
          UI component library.
        </p>
      </Item>
      <Item
        headline="Design Systems – Alla Kholmatova [Book]"
        href="https://www.smashingmagazine.com/design-systems-book/"
      >
        <p>
          Alla Kholmatova, previously a lead designer at FutureLearn, shares the
          key qualities of effective, enduring design systems. It’s based on
          Alla’s experiences, case-studies from Airbnb, Atlassian, Eurostar,
          TED, and Sipgate, plus 18 months of research and interviews — all
          attempting to figure out what works and what doesn’t work in real-life
          products.
        </p>
        <p>
          This book has been available as a pre-order eBook from Smashing
          Magazine for a while, but the hardcover will start shipping any day
          now. I highly recommend it. In fact, I think{" "}
          <strong>Part 1: Foundations</strong>
          is worth your money – and that's before you even get to{" "}
          <strong>Part 2: Process</strong>.
        </p>
      </Item>
      <h3 className="black f4 pb5 pt5">
        That's all for this week. Thanks for reading!
      </h3>
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
