import React, { memo } from 'react';
import vpToon  from './img/vpToon.png';

const VpToon = memo(function VpToon(props) {
  return (
    <img alt='portrait' src={vpToon} style={{marginTop: '15px', width: '200px'}} />
  );
});

VpToon.displayName = 'VpToon';

export default VpToon;
