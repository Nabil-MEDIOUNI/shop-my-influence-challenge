import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Box } from '@material-ui/core';

import { getUser } from '../../redux/actions/user';

import { ProfileImage, TopbarContainer, Username, ProfileLink } from './styles';

function Topbar() {
  const dispatch: any = useDispatch();

  const { data } = useSelector((state: any) => state.userReducer);

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  return (
    <TopbarContainer>
      <Box>
        <Username>{`${data.first_name} ${data.last_name}`}</Username>
        <ProfileLink>Profile</ProfileLink>
      </Box>
      <ProfileImage src={data.picture} />
    </TopbarContainer>
  );
}

export default Topbar;
