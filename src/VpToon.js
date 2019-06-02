import React, { memo } from 'react';
import vpToon  from './img/vpToon.png';

const VpToon = memo(function VpToon(props) {
  return (
    <img alt='portrait' src={vpToon} />
  );
})

VpToon.propTypes = {

}

export default VpToon
