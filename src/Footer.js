import React, { memo } from 'react';

export default memo(function Footer() {
  return (
    <>
    <div>
      <a class="twitter-timeline" data-lang="en" data-theme="dark" href="https://twitter.com/xnt?ref_src=twsrc%5Etfw">Tweets by xnt</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
    </div>
    <div>
      <sub>&copy; {1900 + new Date().getYear()} Vicente Plata</sub>
    </div>
    </>
  )
});
