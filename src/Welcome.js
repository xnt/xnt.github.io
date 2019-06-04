import React, { memo } from 'react';

// TODO transform into a component itself
const emoji = (label, emoji) => {
  return(
    <span role="img" aria-label={`${label} emoji`}>{emoji}</span>
  );
}

const Welcome = memo(function Welcome(props) {
  return (
    <div>
      <h2>Welcome</h2>
      <p>Thank you for stopping by {emoji("hi", "👋")}.</p>
      <h3>About Me {emoji("Mexican and Canadian flags", "🇲🇽🇨🇦")}</h3>
      <p>
        My name is <b>Vicente Plata</b>. I'm a Software Engineer {emoji("technologist", "👨‍💻")} with an 
        emphasis in leadership-oriented tasks and roles.
      </p>
      <h3>Day to day</h3>
      <p>
        On a day-to-day 9-to-5 basis, I work as a Senior Engineering Lead 
        at <a href="https://forhims.com" rel="noopener noreferrer" target="_blank">hims
        </a> and <a href="https://forhers.com" rel="noopener noreferrer" target="_blank">hers</a>. 
        My team primarily takes care of the UI in the {emoji("doctor", "👩‍⚕️")} EMR/Doctor experience that our physicians use 
        to validate, assess and (if appropriate) dispatch your prescriptions. Check us out!
      </p>
      <h3>Skills</h3>
      <p>
        I'm not that much of a fan of technology lists/bullets. I'd rather talk about soft
        skills and general areas of expertise (security, automation, accessibility, best practices). 
        But if you really want to know, check my GitHub or LinkedIn profiles. TLDR: Java, 
        C#, PowerShell, Ruby/Rails, JavaScript (React).
      </p>
      <h3>About this website</h3>
      <p>
        I'm rebuilding my website because of reasons. This might take a while. Until
        then, check out:
      </p>
    </div>
  )
});

Welcome.displayName = 'Welcome';

export default Welcome;
