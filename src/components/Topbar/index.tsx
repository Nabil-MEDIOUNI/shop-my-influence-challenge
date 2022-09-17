import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Box } from '@material-ui/core';

import { getUser } from '../../redux/actions/user';

import {
  ProfileImage,
  TopbarContainer,
  Username,
  ProfileLink,
  SummaryContainer,
  SummaryTitle,
  PeriodButtonsContainer,
  CustomizePeriodButton,
  SelectPeriodButton,
  AllPeriodButton,
  CalendarImage,
  AllPeriodTypography,
} from './styles';

function Topbar() {
  const dispatch: any = useDispatch();

  const { data } = useSelector((state: any) => state.userReducer);

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  return (
    <>
      <TopbarContainer>
        <Box>
          <Username>{`${data.first_name} ${data.last_name}`}</Username>
          <ProfileLink>Profile</ProfileLink>
        </Box>
        <ProfileImage src={data.picture} alt={data.first_name} />
      </TopbarContainer>
      <SummaryContainer>
        <SummaryTitle>Summary dashboard: Drope facts</SummaryTitle>
        <PeriodButtonsContainer>
          <CustomizePeriodButton type="button">
            Customize a period
          </CustomizePeriodButton>
          <SelectPeriodButton type="button">Select a period</SelectPeriodButton>
          <AllPeriodButton>
            <CalendarImage
              src="/static/images/cards-icons/calendar.png"
              alt=""
            />
            <AllPeriodTypography>Tout</AllPeriodTypography>
          </AllPeriodButton>
        </PeriodButtonsContainer>
      </SummaryContainer>
    </>
  );
}

export default Topbar;
