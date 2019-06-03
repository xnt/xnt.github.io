import React, { memo } from 'react'

const UnsplashCredit = memo(function UnsplashCredit(props) {
  return (
    <div>
      Photo by: &nbsp;
      <a style={{backgroundColor: 'black', color: 'white', textDecoration: 'none', padding: '4px 6px', fontFamily: '-apple-system, BlinkMacSystemFont, "San Francisco", "Helvetica Neue", Helvetica, Ubuntu, Roboto, Noto, "Segoe UI", Arial, sans-serif', fontSize: '12px', fontWeight: 'bold', lineHeight: '1.2', display: 'inline-block', borderRadius: '3px'}} href="https://unsplash.com/@pixelatelier?utm_medium=referral&utm_campaign=photographer-credit&utm_content=creditBadge" target="_blank" rel="noopener noreferrer" title="Download free do whatever you want high-resolution photos from Christian Holzinger"><span style={{display: 'inline-block', padding: '2px 3px'}}><svg xmlns="http://www.w3.org/2000/svg" style={{height: '12px', width: 'auto', position: 'relative', verticalAlign: 'middle', top: '-2px', fill: 'white'}} viewBox="0 0 32 32"><title>unsplash-logo</title><path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z" /></svg></span><span style={{display: 'inline-block', padding: '2px 3px'}}>Christian Holzinger</span></a>
    </div>
  )
})

UnsplashCredit.displayName = 'UnsplashCredit';

export default UnsplashCredit;
