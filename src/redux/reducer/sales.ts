// import types
const { GET_SALES, LOAD_SALES, FAIL_SALES } = require('../constants/sales');

// initialstate
const initialState = {
  data: [],
  loading: false,
  error: '',
};

const salesReducer = (state = initialState, { type, payload }: any) => {
  switch (type) {
    case LOAD_SALES:
      return { ...state, loading: true };
    case GET_SALES:
      return { ...state, data: payload, loading: false };
    case FAIL_SALES:
      return { ...state, error: payload };
    default:
      return state;
  }
};

export default salesReducer;
