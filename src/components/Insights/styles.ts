import styled from 'styled-components';

export const InsightsContainer = styled.div`
  display: flex;
  @media (max-width: 1080px) {
    flex-direction: column;
  }
  @media (max-width: 640px) {
  }
`;

export const CardContainer = styled.div`
  background-color: white;
  border-radius: 4px;
  box-shadow: 0px 0px 10px #d8d8d8;
  width: fit-content;
  margin-left: 34px;
  width: 280px;
  @media (max-width: 1080px) {
    margin: 0;
    margin-top: 24px;
    width: 100%;
  }
  @media (max-width: 920px) {
    width: 100%;
  }
  @media (max-width: 640px) {
  }
`;

export const InstagramContainer = styled.div`
  background-color: #f6b4b5;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px;
  height: 40%;
  @media (max-width: 1080px) {
    padding: 20px;
  }
  @media (max-width: 920px) {
  }
  @media (max-width: 640px) {
  }
`;

export const InstagramImageContainer = styled.div`
  background-color: #f8c5c4;
  border-radius: 50%;
  box-shadow: 0px 0px 10px #d8d8d8;
  display: flex;
  align-items: center;
  padding: 12px;
  width: fit-content;
  @media (max-width: 920px) {
  }
  @media (max-width: 640px) {
  }
`;

export const CardContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  margin-top: 24px;
  @media (max-width: 920px) {
  }
  @media (max-width: 640px) {
  }
`;

export const CardTitle = styled.p`
  color: #032958;
  margin: 8px 0;
  @media (max-width: 920px) {
  }
  @media (max-width: 640px) {
  }
`;

export const CardDescription = styled.p`
  color: #c4c4c4;
  margin: 8px 0;
  width: 50%;
  font-weight: 300;
  @media (max-width: 920px) {
  }
  @media (max-width: 640px) {
  }
`;
