import styled from 'styled-components';

export const PageContainer = styled.div`
  position: absolute;
  top: 25px;
  left: 120px;
  width: calc(98% - 120px);
  @media (max-width: 920px) {
    top: 120px;
    width: 85%;
    left: 50%;
    transform: translate(-50%, 0);
  }
`;
