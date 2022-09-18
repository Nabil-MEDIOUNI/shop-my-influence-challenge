import styled from 'styled-components';

export const PageContainer = styled.div<{ showSidebar: boolean }>`
  position: ${(props) => (props.showSidebar ? 'absolute' : 'relative')};
  top: 25px;
  left: ${(props) => (props.showSidebar ? '120px' : '0')};
  width: ${(props) => (props.showSidebar ? 'calc(98% - 120px)' : '98%')};
  margin: ${(props) => (props.showSidebar ? '0' : '0 auto')};
  @media (max-width: 920px) {
    top: 120px;
    width: 95%;
    left: 50%;
    transform: translate(-50%, 0);
  }
  @media (max-width: 640px) {
    top: 24px;
  }
`;
