import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Button = memo(function Button(props) {
  return (
    <div>
      <a href={props.link} rel="noopener noreferrer" target='_blank'>
        {props.icon && (
          <FontAwesomeIcon icon={['fab', props.icon]} />
        )}
        {props.label}
      </a>
    </div>
  )
})

Button.propTypes = {
  icon: PropTypes.string,
  label: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
}

export default Button
