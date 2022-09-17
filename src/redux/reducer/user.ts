// import types
const { GET_USER, LOAD_USER, FAIL_USER } = require('../constants/user');

// initialstate
const initialState = {
  data: {},
  loading: false,
  error: '',
};

const userReducer = (state = initialState, { type, payload }: any) => {
  switch (type) {
    case LOAD_USER:
      return { ...state, loading: true };
    case GET_USER:
      return { ...state, data: payload, loading: false };
    case FAIL_USER:
      return { ...state, error: payload };
    default:
      return state;
  }
};

export default userReducer;
