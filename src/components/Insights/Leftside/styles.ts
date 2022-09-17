import styled from 'styled-components';

export const LeftsideContainer = styled.div`
  background-color: white;
  border-radius: 4px;
  box-shadow: 0px 0px 10px #d8d8d8;
  display: flex;
  align-items: center;
  padding: 24px;
  width: fit-content;
  @media (max-width: 1080px) {
    width: 94%;
  }
  @media (max-width: 920px) {
    flex-direction: column;
    padding: 24px 0;
    width: 100%;
  }
  @media (max-width: 640px) {
  }
`;

export const InsightImageContainer = styled.div<{ background: string }>`
  background-color: ${(props) => props.background};
  padding: 24px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 24px;
  width: 40px;
  height: 40px;
  @media (max-width: 920px) {
  }
  @media (max-width: 640px) {
  }
`;

export const InsightImage = styled.img`
  @media (max-width: 920px) {
  }
  @media (max-width: 640px) {
  }
`;

export const InsightTitle = styled.p`
  font-size: 14px;
  color: #032958;
  @media (max-width: 920px) {
  }
  @media (max-width: 640px) {
  }
`;

export const InsightDescription = styled.p`
  font-size: 12px;
  color: #032958;
  @media (max-width: 920px) {
  }
  @media (max-width: 640px) {
  }
`;
