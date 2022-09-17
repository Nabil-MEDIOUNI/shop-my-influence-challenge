import { Dispatch } from 'react';

import { FAIL_USER, GET_USER, LOAD_USER } from '../constants/user';

import user from '../../data/user.json';

type UserType = {
  first_name: string;
  last_name: string;
  picture: string;
};

interface UserLoadType {
  type: typeof LOAD_USER;
}

interface UserErrorType {
  type: typeof FAIL_USER;
  payload: string;
}

interface GetUserType {
  type: typeof GET_USER;
  payload: UserType;
}

export type UserDispatchTypes = UserLoadType | UserErrorType | GetUserType;

export const getUser = () => (dispatch: Dispatch<UserDispatchTypes>) => {
  dispatch({ type: LOAD_USER });
  try {
    dispatch({ type: GET_USER, payload: user });
  } catch (error: any) {
    dispatch({ type: FAIL_USER, payload: 'Error Occured!' });
  }
};
