import React from 'react'
import Link from 'gatsby-link'

import Hero from '../../components/Hero'

const IssueContent = () => (
  <main className="bg-white mt5 mb6">
    <div className="w-50-l w-70-m w-90 center">
      <Link to="/" className="link dim blue fw5">
        ← Back
      </Link>

      <h2 className="black f3 pt4 pb4">Issue 01</h2>
      <div className="pb4 bb b--black-20 f5 lh-copy">
        <p>You're reading the very first issue of Design Systems Weekly 🎉</p>
        <p>
          I’ll be keeping an ear to the ground on what is happening in the
          colliding worlds of design systems, styleguides and front-end
          architecture and sharing a few links per week that I believe are worth
          your time. The surface area of these topics blurs the lines between
          design and engineering, and the content of this newsletter will
          reflect this.
        </p>
        <p>Without further ado:</p>
      </div>
      <div className="pb5 pt5 bb b--black-20 f5 lh-copy">
        <h3 className="black f4 ma0">
          Integrating Animation into a Design System [Article]
        </h3>
        <p>
          Motion is often introduced to a project in an ad hoc fashion. This
          article provides a solid foundation for the process of transitioning
          your menagerie of animations into a cohesive system. It’s packed with
          practical tips and examples from some of the most robust design
          systems in the wild.
        </p>
        <a
          href="https://alistapart.com/article/integrating-animation-into-a-design-system"
          className="link dim blue fw5"
        >
          via A List Apart
        </a>
      </div>
      <div className="pb5 pt5 bb b--black-20 f5 lh-copy">
        <h3 className="black f4 ma0">
          Introducing Design Systems Into Chaos [Talk]
        </h3>
        <p>
          Diana Mounter leads GitHub’s design systems team, who are responsible
          for building and maintaining the Primer CSS framework. She gives a
          detailed and insightful run-down of how GitHub began introducing some
          order back into their system after accumulating almost 10 years of
          diverging styles and approaches.
        </p>
        <p>
          One of the key takeaways from her experience is that it’s never too
          early to get started on this process — I’m sure many designers and
          engineers working on less mature products will have gleamed some
          encouragement from this.
        </p>
        <a
          href="https://www.rethinkhq.com/videos/introducing-design-systems-into-chaos-diana-mounter-github"
          className="link dim blue fw5"
        >
          via RETHINK
        </a>
      </div>
      <div className="pb5 pt5 bb b--black-20 f5 lh-copy">
        <h3 className="black f4 ma0">
          Thinking in Symbols for Universal Design [Talk]
        </h3>
        <p>
          Ben Wilkinson is Design Systems Lead at Airbnb. In this talk he takes
          us through the approach taken by Airbnb’s Design Language System
          (DLS); a flat component structure where each component is specific and
          named accordingly. The worked examples are especially valuable to
          those working with React or other component-based frameworks.
        </p>
        <blockquote className="pl3 mt4 mb4 i bl bw2 b--black-20">
          Our components are the vocabulary of our design system.
        </blockquote>
        <a
          href="https://www.rethinkhq.com/videos/thinking-in-symbols-for-universal-design-benjamin-wilkins-aribnb"
          className="link dim blue fw5"
        >
          via RETHINK
        </a>
      </div>
      <div className="pb5 pt5 bb b--black-20 f5 lh-copy">
        <h3 className="black f4 ma0">
          Building a Design System for HealthCare.gov [Article]
        </h3>
        <p>
          Focusing on the technical side of the{' '}
          <a
            href="https://blog.navapbc.com/healthcare-gov-design-system-fc27964a14c9"
            className="link dim blue fw5"
          >
            HealthCare.gov design system
          </a>{' '}
          project, this piece takes a look at the decisions made regarding
          architecture, documentation, developer workflow, audits, and
          distribution.
        </p>
        <a
          href="https://blog.navapbc.com/building-a-design-system-for-healthcare-gov-20dc1a833ab3"
          className="link dim blue fw5"
        >
          via Nava PBC
        </a>
      </div>
      <div className="pb5 pt5 bb b--black-20 f5 lh-copy">
        <h3 className="black f4 ma0">
          Design Tools are Running Out of Track [Article]
        </h3>
        <p>
          Colm Tuite dissects a number of problems with the current state of
          mainstream design tooling - primarily, the fact that our tools export
          to images, instead of resembling the fluid and interactive context of
          our products. Jon Gold’s piece{' '}
          <a
            href="http://jon.gold/2017/08/dragging-rectangles/"
            className="link dim blue fw5"
          >
            Dragging Rectangles
          </a>{' '}
          is another great read on the topic.
        </p>
        <p>
          What’s really exciting is the next generation of tooling focused on
          solving this fundamental problem — the most interesting projects in
          this space are teased at the end of the piece.
        </p>
        <a
          href="https://medium.freecodecamp.org/design-tools-are-running-out-of-track-94f21b6ae939"
          className="link dim blue fw5"
        >
          via freeCodeCamp
        </a>
      </div>
      <div className="pb5 pt5 bb b--black-20 f5 lh-copy">
        <h3 className="black f4 ma0">
          Writing Scalable React Apps with the Component Folder Pattern
          [Tutorial]
        </h3>
        <p>
          Breaking down complex pieces of a UI into bite sized and logical units
          of work is always a challenge. The component folder pattern is a handy
          approach to have up your sleeve to help organise your directory
          structure and make your components easier to understand and maintain.
        </p>
        <a
          href="https://medium.com/styled-components/component-folder-pattern-ee42df37ec68"
          className="link dim blue fw5"
        >
          via styled-components
        </a>
      </div>
      <h3 className="black f4 pb5 pt5">
        That's all for this week. Thanks for reading!
      </h3>
    </div>
  </main>
)

const IndexPage = () => (
  <div>
    <Hero />
    <IssueContent />
  </div>
)

export default IndexPage
