import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import BsButton from 'react-bootstrap/Button';


const Button = memo(function Button({ icon, label, link }) {
  const sendToLink = () => {
    window.location.href = link;
  };

  return (
    <BsButton className="mr-1" onClick={sendToLink.bind(this)} variant="secondary">
        {icon && (
          <FontAwesomeIcon icon={['fab', icon]} color="white"/>
        )} {label}
    </BsButton>
  )
})

Button.propTypes = {
  icon: PropTypes.string,
  label: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
}

Button.displayName = 'Button';

export default Button;
