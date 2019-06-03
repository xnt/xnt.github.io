import React, { memo } from 'react';
import UnsplashCredit from './UnsplashCredit';

export default memo(function Footer() {
  return (
    <div>
      <sub>&copy; {1900 + new Date().getYear()} Vicente Plata</sub>
      <UnsplashCredit />
    </div>
  )
});
