import styled from 'styled-components';

export const TopbarContainer = styled.div`
  width: 100%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4px 0;
  @media (max-width: 920px) {
  }
`;

export const Username = styled.p`
  margin: 0;
  font-size: 14px;
  font-weight: 600;
  color: #032958;
  @media (max-width: 920px) {
  }
`;

export const ProfileLink = styled.p`
  margin: 0;
  padding-top: 4px;
  font-size: 12px;
  font-weight: 400;
  color: #032958;
  cursor: pointer;
  text-align: end;
  @media (max-width: 920px) {
  }
`;

export const ProfileImage = styled.img`
  border-radius: 50%;
  width: 45px;
  margin: 0 8px;
  @media (max-width: 920px) {
  }
`;

export const SummaryContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 24px;
  @media (max-width: 920px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const SummaryTitle = styled.p`
  margin: 0;
  font-size: 18px;
  color: #032958;
  @media (max-width: 920px) {
    margin-bottom: 16px;
    font-size: 16px;
  }
`;

export const PeriodButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 460px) {
    flex-direction: column;
    width: 100%;
  }
`;

export const CustomizePeriodButton = styled.button`
  background: none;
  outline: none;
  border: 1px solid #ff5f5f;
  color: #ff5f5f;
  padding: 10px 12px;
  cursor: pointer;
  border-radius: 8px;
  @media (max-width: 460px) {
    width: 100%;
  }
`;

export const SelectPeriodButton = styled.button`
  background: none;
  outline: none;
  border: none;
  background-color: #ff5f5f;
  color: white;
  padding: 10px 12px;
  cursor: pointer;
  border-radius: 8px;
  margin-left: 10px;
  @media (max-width: 460px) {
    width: 100%;
    margin-left: 0;
    margin-top: 8px;
  }
`;

export const AllPeriodButton = styled.button`
  background: none;
  outline: none;
  border: 1px solid #ff5f5f;
  color: #ff5f5f;
  cursor: pointer;
  border-radius: 8px;
  padding: 10px 16px;
  display: flex;
  align-items: center;
  margin-left: 24px;
  @media (max-width: 460px) {
    width: 100%;
    margin-left: 0;
    margin-top: 8px;
  }
`;

export const CalendarImage = styled.img`
  width: 14px;
  @media (max-width: 920px) {
  }
`;

export const AllPeriodTypography = styled.p`
  margin: 0;
  margin-left: 8px;
  @media (max-width: 920px) {
  }
`;

export const OpenSideBarLogo = styled.img<{ showSidebar: boolean }>`
  cursor: pointer;
  opacity: ${(props) => (props.showSidebar ? '0' : '1')};
  @media (max-width: 920px) {
  }
`;
