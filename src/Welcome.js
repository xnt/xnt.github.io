import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Emoji from "./Emoji";
import { GuestAppearance } from "./GuestAppearance";
import { APPEARANCES } from "./guest-appearances";

const Welcome = React.memo(() => (
  <Row>
    <Col>
      <h2>Welcome</h2>
      <p className="pb-2">
        Thank you for stopping by <Emoji label="hi" emoji="👋" />.
      </p>
      <h3>
        About Me <Emoji label="Mexican and Canadian flags" emoji="🇲🇽🇨🇦" />
      </h3>
      <p className="pb-2">
        My name is <b>Vicente Plata</b>. I'm a Software Engineer{" "}
        <Emoji label="technologist" emoji="👨‍💻" /> with an emphasis in:
      </p>
      <ul>
        <li>Leadership-oriented tasks and roles</li>
        <li>
          Advisory roles regarding remote software engineering, distributed workforce, and community
          building
        </li>
        <li>
          Mentoring latin american engineers with professional development topics (
          <a href="https://calendly.com/vplata/mentorship">
            <Emoji label="Calendar" emoji="📅" /> Agenda una mentor&iacute;a
          </a>
          )
        </li>
      </ul>
      <h3>Day to day</h3>
      <p className="pb-2">
        On a day-to-day 9-to-5 basis, I work at{" "}
        <a href="https://shopify.com" target="_blank" rel="noopener noreferrer">
          Shopify
          <Emoji label="Shopping bags" emoji="🛍" />
        </a>
        . I lead the team that handles the intersections of the
        <a href="https://shop.app" target="_blank" rel="noopener noreferrer">
          Shop App <Emoji label="mobile phone" emoji="📱" />
        </a>
        and{" "}
        <a href="https://shop.app/shop-pay" target="_blank" rel="noopener noreferrer">
          Shop Pay <Emoji label="Moneyz" emoji="💳" />
        </a>{" "}
        offerings. For example: checkout in-app, wallets, sustainability and carbon offsets.
      </p>
      <h3>Skills</h3>
      <p>
        I'm not that much of a fan of technology lists. Languages and technologies are basically
        tools to get things done. I'd rather talk about soft skills and general areas of expertise:
      </p>
      <ul>
        <li>Remote Engineering Management and Leadership</li>
        <li>Security</li>
        <li>Automation</li>
        <li>Accessibility</li>
        <li>Best Practices</li>
      </ul>
      <p className="pb-2">If you insist, though, check my GitHub or LinkedIn profiles. TLDR:</p>
      <ul>
        <li>Java</li>
        <li>C#</li>
        <li>PowerShell</li>
        <li>Ruby/Rails</li>
        <li>JavaScript + TypeScript (React, React Native)</li>
      </ul>
      <h3>Guest Appearances</h3>
      <p classname="pb-2">
        Some folks have been kind enough to invite me to their Lives, Podcasts and similar events.
        Most of them in Spanish. FYI:
      </p>
      <ul>
        {APPEARANCES.map((appearance) => (
          <GuestAppearance
            link={appearance.link}
            linkTitle={appearance.linkTitle}
            title={appearance.title}
          />
        ))}
      </ul>
      <h3>About this website</h3>
      <p className="pb-2">
        I'm rebuilding my website because of reasons. This might take a while. Until then, check out
        the buttons at the top <Emoji label="pointing up" emoji="☝️" />.
      </p>
    </Col>
  </Row>
));

Welcome.displayName = "Welcome";

export default Welcome;
