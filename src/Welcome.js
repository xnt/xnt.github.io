import React, { memo } from "react";
import Emoji from "./Emoji";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Welcome = memo(function Welcome(props) {
  return (
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
          <li>Advisory roles regarding remote software engineering, distributed workforce, and community building</li>
          <li>Mentoring latin american engineers with professional development topics 
            (<a href="https://calendly.com/vplata/mentorship"><Emoji label="Calendar" emoji="📅" /> Agenda una mentor&iacute;a</a>)</li>
        </ul>
        <h3>Day to day</h3>
        <p className="pb-2">
          On a day-to-day 9-to-5 basis, I work as a Senior Engineering Lead at{" "}
          <a
            href="https://forhims.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            hims
          </a>{" "}
          and{" "}
          <a
            href="https://forhers.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            hers
          </a>
          . My team primarily takes care of the UI in the
          <Emoji label="doctor" emoji="👩‍⚕️" /> EMR/Doctor experience that our
          physicians use to validate, assess and (if appropriate) dispatch your
          prescriptions. Check us out!
        </p>
        <h3>Skills</h3>
        <p>
          I'm not that much of a fan of technology lists. Languages and
          technologies are basically tools to get things done. I'd rather talk
          about soft skills and general areas of expertise:
        </p>
        <ul>
          <li>Remote Engineering Management and Leadership</li>
          <li>Security</li>
          <li>Automation</li>
          <li>Accessibility</li>
          <li>Best Practices</li>
        </ul>
        <p className="pb-2">
          If you insist, though, check my GitHub or LinkedIn profiles. TLDR:
        </p>
        <ul>
          <li>Java</li>
          <li>C#</li>
          <li>PowerShell</li>
          <li>Ruby/Rails</li>
          <li>JavaScript + TypeScript (React, React Native)</li>
        </ul>
        <h3>About this website</h3>
        <p className="pb-2">
          I'm rebuilding my website because of reasons. This might take a while.
          Until then, check out the buttons at the top{" "}
          <Emoji label="pointing up" emoji="☝️" />.
        </p>
      </Col>
    </Row>
  );
});

Welcome.displayName = "Welcome";

export default Welcome;
