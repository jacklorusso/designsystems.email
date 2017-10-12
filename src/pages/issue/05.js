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
      <Title>Issue 05</Title>
      <Intro>
        This week we compare two efforts to define Design Systems, get treated
        to three awesome talks from the NYC Design Systems Coalition meetup,
        deep dive into how 18F created a design system for the U.S Government,
        and more.
      </Intro>
      <Item
        headline="Distilling How We Think About Design Systems [Article]"
        href="https://medium.com/design-systems/distilling-how-we-think-about-design-systems-b26432eefef9"
      >
        <p>
          Sarah Federman, developer and designer working on design systems at
          Adobe, takes on the tendency for people to get hung up on definitions
          of what design systems are.
        </p>
        <Quote>
          Focusing on vocabulary creates tribal knowledge and cognitive debt for
          newcomers.
        </Quote>
        <p>
          She explores the relationship between product and operation in this
          piece, but her focus is on explaining a particular mental model rather
          than putting forward a definition. Importantly, she stresses that{" "}
          <i>whatever works for your team is the right answer</i>. I maxed out
          my Medium claps on this one.
        </p>
      </Item>
      <Item
        headline="Defining Design Systems [Article]"
        href="https://medium.com/eightshapes-llc/defining-design-systems-6dd4b03e0ff6"
      >
        <p>
          Nathan Curtis of Eightshapes also weighed into the ongoing discussion
          around definitions, sharing a few of his own as well as a really
          useful template to help teams understand the composition of their
          design system.
        </p>
      </Item>
      <Item
        headline="How A Design System Was Created For The U.S. Government [Case Study]"
        href="https://www.smashingmagazine.com/2017/10/large-scale-design-system-us-government/"
      >
        <p>
          Currently there are nearly 30,000 U.S. federal websites with almost no
          consistency between them. 18F and the U.S. Digital Services have been
          working on the mammoth task of creating a common design language that
          will enable cohesive and easy-to-use experiences across all government
          systems and services, and have shared some insights into their process
          here.
        </p>
      </Item>
      <Item
        headline="Design Systems are for People [Article]"
        href="https://medium.com/design-systems/design-systems-are-for-people-a484620b6988?source=userActivityShare-1874983674f0-1507582635"
      >
        <p>
          Jina Anne needs no introduction if you're interested in this space.
          She's an amazing community leader, and she used this talk to reinforce
          the importance of focusing on empowering people and growing community.
          I've linked the transcript of her talk on Medium, but it's actually a
          fantastic watch if you've got the time.
        </p>
        <Quote>
          Remember our purpose. We create design systems to grow our products.
          But those products serve people.
        </Quote>
      </Item>
      <Item
        headline="Why Design Systems Fail [Talk]"
        href="https://www.youtube.com/watch?v=ANX_PxqZayU&feature=youtu.be"
      >
        <p>
          Una Kravets, senior UI engineer at Digital Ocean, speaks to those
          situations where multiple design systems may be competing, or a new
          design system rises up through the ashes of previous attempts and
          declares itself to be the new single source of truth. She asks the
          question: if there is a design system already, why aren't people using
          it?
        </p>
      </Item>
      <Item
        headline="Scaling Products with Design Systems [Talk]"
        href="https://www.youtube.com/watch?v=D5JjLcP2Kw0"
      >
        <p>
          Luke Patton from DoSomething.org explains how his team's design system
          enables all team members to make design decisions, which is especially
          important since he's the only product designer on a team with many
          engineers.
        </p>
        <p>
          It's a reminder that design systems don't just benefit large orgs that
          are struggling with design consistency – scaling design is a problem
          for small teams as well.
        </p>
      </Item>
      <Item
        headline="How our new design principles have shaped the way we work at Domain [Article]"
        href="https://medium.com/design-domain/how-our-new-design-principles-have-shaped-the-way-we-work-at-domain-68597b0a697f"
      >
        <p>
          Jon Hollamby, Senior Designer at Australian property app Domain,
          shares how their design team created design principles. If your team
          is in the process of coming up with your own principles, you'll likely
          find some value in having a peek into the workshops they ran in the
          discovery phase, as well as the activities the team used to reinforce
          their principles once they'd decided on them.
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
