import React, { memo } from 'react';

const Welcome = memo(function Welcome(props) {
  return (
    <div>
      <h2>Welcome</h2>
      <p>Thank you for stopping by.</p>
      <p>I'm rebuilding my website because of reasons. This might take a while. Until then, check out:</p>
    </div>
  )
});


export default Welcome;
