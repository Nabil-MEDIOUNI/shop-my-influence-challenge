import { useState } from 'react';

import {
  SideBarContainer,
  SideBarItems,
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

  const handleSidebar = (state: boolean) => {
    setShowSidebar(state);
  };

  return (
    <>
      <SideBarContainer showSidebar={showSidebar}>
        <SideBarLogo
          src="/static/images/logo-smi-insights.png"
          onClick={() => handleSidebar(false)}
        />
        <SideBarItems>
          {ALL_SIDEBAR_ICONS.map((image) => (
            <SideBarSingleItem
              key={image}
              onClick={() => setActiveIcon(image)}
              active={activeIcon === image}
            >
              <SideBarIcon
                src={`/static/images/slide-menu-icons/${image}`}
                active={activeIcon === image}
                image={image}
              />
            </SideBarSingleItem>
          ))}
        </SideBarItems>
      </SideBarContainer>
      <OpenSideBarLogo
        src="/static/images/logo-smi-insights.png"
        onClick={() => handleSidebar(true)}
      />
    </>
  );
}

export default SideBar;
