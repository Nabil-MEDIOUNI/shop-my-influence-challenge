import { useState } from 'react';

import {
  SideBarContainer,
  SideBarItems,
  SideBarSingleItem,
  SideBarLogo,
  SideBarIcon,
} from './styles';

type SideBarPropsType = {
  showSidebar: boolean;
  handleSidebar: (showSidebar: boolean) => void;
};

function SideBar({ showSidebar, handleSidebar }: SideBarPropsType) {
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

  const [activeIcon, setActiveIcon] = useState('home.png');

  return (
    <SideBarContainer showSidebar={showSidebar}>
      <SideBarLogo
        src="/static/images/logo-smi-insights.png"
        onClick={() => handleSidebar(false)}
        alt="logo"
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
              alt="menu"
            />
          </SideBarSingleItem>
        ))}
      </SideBarItems>
    </SideBarContainer>
  );
}

export default SideBar;
