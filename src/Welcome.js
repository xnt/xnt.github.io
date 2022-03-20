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
        My name is <b>Vicente Plata</b>. I'm strongly convinced of the overall positive impact of
        technology <Emoji label="technologist" emoji="👨‍💻" /> , and try to apply it in areas like:
      </p>
      <ul>
        <li>Software development</li>
        <li>Leadership-oriented tasks and roles</li>
        <li>
          Advisory roles regarding remote software engineering, distributed workforce, and community
          building
        </li>
        <li>D2C, CPG</li>
        <li>Telemed/Telehealth and travel</li>
        <li>Mentoring latin american engineers with professional development topics</li>
      </ul>
      <h3>Day to day</h3>
      <p className="pb-2">
        My "main gig" is as a VP of Engineering at{" "}
        <a href="https://runwayhealth.com" target="_blank" rel="noopener noreferrer">
          Runway Health
        </a>
        , redefining the intersection between travel, health and technology.
      </p>
      <p>I also mentor and provide advice to several organizations and startups.</p>
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
      </ul>
      <p className="pb-2">If you insist, though, check my GitHub or LinkedIn profiles. TLDR:</p>
      <ul>
        <li>JavaScript + TypeScript (React, React Native)</li>
        <li>Java (but I don't like it anymore)</li>
        <li>C#</li>
        <li>PowerShell</li>
        <li>Ruby/Rails</li>
      </ul>
      <h3>Guest Appearances</h3>
      <p classname="pb-2">
        Some folks have been kind enough to invite me to their Lives, Podcasts and similar events.
        Most of them in Spanish. FYI:
      </p>
      <ul>
        {APPEARANCES.map((appearance, index) => (
          <GuestAppearance
            key={`appearance-${index}`}
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
