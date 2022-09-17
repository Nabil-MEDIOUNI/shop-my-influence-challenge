import styled from 'styled-components';

export const SideBarContainer = styled.div<{ show: boolean }>`
  width: 100px;
  height: 100%;
  background-color: white;
  position: fixed;
  left: ${(props) => (props.show ? 0 : '-50%')};
  transition: 1s ease-in-out;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 0px 10px #d8d8d8;
  @media (max-width: 920px) {
    display: none;
  }
`;

export const SideBarSingleItem = styled.div<{ active: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 50px;
  background-color: ${(props) => (props.active ? '#032958' : 'white')};
  box-shadow: ${(props) => (props.active ? '0px 0px 10px #d8d8d8' : 'none')};
  transition: 0.2s ease-in-out;
  border-radius: 4px;
  margin-bottom: 8px;
  cursor: pointer;
  @media (max-width: 920px) {
  }
`;

export const SideBarLogo = styled.img`
  margin-top: 24px;
  cursor: pointer;
  @media (max-width: 920px) {
  }
`;

export const SideBarIcon = styled.img<{ active: boolean; img: string }>`
  filter: ${(props) =>
    !props.active && props.img === 'home.png'
      ? 'brightness(0.5)'
      : 'brightness(1.5)'};
  @media (max-width: 920px) {
  }
`;
