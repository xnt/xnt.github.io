import React, { memo } from 'react';
import Button from './Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

const createButton = (label, link, icon=null) => {
  return {'label': label, 'link': link, 'icon': icon};
};

const BUTTONS = [
  createButton('Resume', 'https://xnt.github.io/cv'),
  createButton('Twitter', 'http://twitter.com/xnt', 'twitter'),
  createButton('Facebook', 'http://fb.me/vplata', 'facebook'),
  createButton('LinkedIn', 'https://www.linkedin.com/in/vrplata', 'linkedin'),
  createButton('GitHub', 'https://www.github.com/xnt', 'github'),
  createButton('Instagram', 'https://www.instagram.com/xnt87', 'instagram'),
  createButton('Keybase', 'https://keybase.io/vplata', 'keybase')
];

export default memo(function Buttons() {

  return (
    <ButtonGroup className="flex-wrap my-1">
      {
        BUTTONS.map((button) => {
             return <Button 
              icon={button.icon} 
              key={button.label} 
              label={button.label} 
              link={button.link} />;
          }
        )
      }
    </ButtonGroup>
  )
});
