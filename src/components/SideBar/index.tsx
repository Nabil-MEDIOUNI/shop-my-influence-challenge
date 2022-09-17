import { useState } from 'react';

import { Box } from '@material-ui/core';

import {
  SideBarContainer,
  SideBarSingleItem,
  SideBarLogo,
  SideBarIcon,
  OpenSideBarLogo,
} from './styles';

function SideBar() {
  const ALL_SIDEBAR_ICONS = [
    'home.png',
    'calendar.png',
    'card.png',
    'phone.png',
    'map.png',
    'gift.png',
    'database.png',
    'people.png',
    'archive.png',
  ];

  const [showSidebar, setShowSidebar] = useState(true);
  const [activeIcon, setActiveIcon] = useState('home.png');

  return (
    <>
      <SideBarContainer show={showSidebar}>
        <SideBarLogo
          src="/static/images/logo-smi-insights.png"
          onClick={() => setShowSidebar(false)}
        />
        <Box mt={6}>
          {ALL_SIDEBAR_ICONS.map((img) => (
            <SideBarSingleItem
              key={img}
              onClick={() => setActiveIcon(img)}
              active={activeIcon === img}
            >
              <SideBarIcon
                src={`/static/images/slide-menu-icons/${img}`}
                active={activeIcon === img}
                img={img}
              />
            </SideBarSingleItem>
          ))}
        </Box>
      </SideBarContainer>
      <OpenSideBarLogo
        src="/static/images/logo-smi-insights.png"
        onClick={() => setShowSidebar(true)}
      />
    </>
  );
}

export default SideBar;
