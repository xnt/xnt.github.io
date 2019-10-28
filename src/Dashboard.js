import React, { memo } from 'react';
import Time from './Time';

const createTimeObject = (label, timezone) => {
  return {
    label: label,
    timezone: timezone
  };
}

const times = [
  createTimeObject("Toronto/KW/Montreal", "America/Toronto"),
  createTimeObject("San Francisco", "America/Los_Angeles"),
  createTimeObject("Vienna", "Europe/Vienna"),
  createTimeObject("Hermosillo", "America/Hermosillo"),
  createTimeObject("Corrientes", "America/Argentina/Buenos_Aires")
];

export default memo(function Dashboard() {
  return (
    <div style={{ display: "inline", float: "left" }}>
      <h1>Dashboard</h1>
      <h2>Times</h2>
      <div style={{display: "flex", flexFlow: "row wrap", justifyContent: "space-around"}}>
        {
          times.map((time) => {
            return <Time key={time.label} label={time.label} timezone={time.timezone} />
          })
        }
      </div>
    </div>
  )
});
