import styled from 'styled-components';

export const LeftSideContainer = styled.div`
  display: flex;
  background-color: white;
  box-shadow: 0px 0px 10px #d8d8d8;
  border-radius: 4px;
  padding: 24px;
  width: 100%;
  @media (max-width: 1080px) {
    flex-direction: column;
    width: auto;
  }
`;

export const RightSideContainer = styled.div`
  background-color: white;
  box-shadow: 0px 0px 10px #d8d8d8;
  border-radius: 4px;
  padding: 24px;
  width: 60%;
  margin-left: 34px;
  @media (max-width: 1080px) {
    margin-left: 0;
    margin-top: 24px;
    width: auto;
  }
`;

export const SecondSection = styled.div`
  width: 100%;
  margin-left: 32px;
  @media (max-width: 1080px) {
    margin-left: 0;
  }
`;

export const SalesContainer = styled.div`
  display: flex;
  @media (max-width: 1080px) {
    flex-direction: column;
  }
`;

export const SalesByContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 36px;
  @media (max-width: 1080px) {
  }
`;

export const SalesByTitle = styled.p`
  font-size: 16px;
  color: #032958;
  margin: 0;
  @media (max-width: 1080px) {
  }
`;

export const SalesByButton = styled.button`
  font-size: 14px;
  color: #032958;
  background: none;
  border: 0;
  outline: none;
  border-bottom: 1px solid #032958;
  padding: 0;
  cursor: pointer;
  @media (max-width: 1080px) {
  }
`;

export const UserContainer = styled.div<{ color: string }>`
  position: relative;
  height: 50px;
  width: 70px;
  background-color: ${(props) => props.color};
  border-radius: 4px;
  @media (max-width: 1080px) {
  }
`;

export const UserImage = styled.img`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 0);
  width: 50px;
  @media (max-width: 1080px) {
  }
`;

export const ProgressContainer = styled.div`
  margin-left: 16px;
  background-color: rgb(240 240 240);
  width: 100%;
  border-radius: 15px;
  @media (max-width: 1080px) {
  }
`;

export const InnerProgressContainer = styled.div`
  background-color: #ff5f5f;
  color: white;
  padding: 1%;
  text-align: right;
  font-size: 20px;
  border-radius: 15px;
  width: 80%;
  @media (max-width: 1080px) {
  }
`;

export const SalesTitle = styled.p`
  font-size: 16px;
  color: #032958;
  margin: 0;
  margin-top: 8px;
  white-space: nowrap;
  @media (max-width: 1080px) {
  }
`;
