import React, { memo } from 'react';

export default memo(function Footer() {
  return (
    <div style={{margin: '25px'}}>
      <sub>&copy; {1900 + new Date().getYear()} Vicente Plata</sub>
    </div>
  )
});
