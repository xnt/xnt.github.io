import React, { memo } from 'react'
import PropTypes from 'prop-types'

const Emoji = memo(function Emoji(props) {
  return (
    <span 
      aria-label={`${props.label} emoji`} 
      role="img">
        {props.emoji}
    </span>
  );
});

Emoji.propTypes = {
  emoji: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
};

export default Emoji;
