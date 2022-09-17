import styled from 'styled-components';

export const TopbarContainer = styled.div`
  width: 100%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: end;
  padding: 12px 0;
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
