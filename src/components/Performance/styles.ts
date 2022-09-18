import styled from 'styled-components';

export const PerformanceContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  @media (max-width: 1080px) {
    flex-direction: column;
  }
`;

export const PerformanceCards = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  @media (max-width: 920px) {
    flex-direction: column;
  }
`;

export const SingleSection = styled.div`
  display: flex;
  @media (max-width: 920px) {
    flex-direction: column;
  }
`;

export const SingleCard = styled.div`
  width: 100%;
  background-color: white;
  box-shadow: 0px 0px 10px #d8d8d8;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 24px 0;
  margin-right: 12px;
  margin-bottom: 12px;
  @media (max-width: 920px) {
    margin: 0px;
    margin-bottom: 8px;
  }
`;

export const ConversionRateCard = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
  box-shadow: 0px 0px 10px #d8d8d8;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 24px 0;
  margin-bottom: 8px;
  @media (max-width: 920px) {
  }
`;

export const CardImageContainer = styled.div<{ background: string }>`
  border-radius: 50%;
  width: 55px;
  height: 55px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.background};
  margin-bottom: 24px;
  @media (max-width: 920px) {
  }
`;

export const CardPrice = styled.p`
  margin: 0;
  font-size: 18px;
  font-weight: 600;
  color: #032958;
  margin-bottom: 8px;
  @media (max-width: 920px) {
  }
`;

export const CardTitle = styled.p`
  margin: 0;
  font-size: 14px;
  font-weight: 300;
  color: #032958;
  @media (max-width: 920px) {
  }
`;

export const CoversionRateImage = styled.img`
  @media (max-width: 920px) {
    width: 120px;
  }
`;
