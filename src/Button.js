import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Button = memo(function Button(props) {
  return (
    <span style={{padding: '5px'}}>
      <a href={props.link} rel="noopener noreferrer" target='_blank' className="linkButton">
        {props.icon && (
          <FontAwesomeIcon icon={['fab', props.icon]} color="white" style={{marginRight: '5px'}} />
        )}{props.label}
      </a>
    </span>
  )
})

Button.propTypes = {
  icon: PropTypes.string,
  label: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
}

Button.displayName = 'Button';

export default Button;
