// import types
const {
  GET_PERFORMANCE,
  LOAD_PERFORMANCE,
  FAIL_PERFORMANCE,
} = require('../constants/performance');

// initialstate
const initialState = {
  data: [],
  loading: false,
  error: '',
};

const performanceReducer = (state = initialState, { type, payload }: any) => {
  switch (type) {
    case LOAD_PERFORMANCE:
      return { ...state, loading: true };
    case GET_PERFORMANCE:
      return { ...state, data: payload, loading: false };
    case FAIL_PERFORMANCE:
      return { ...state, error: payload };
    default:
      return state;
  }
};

export default performanceReducer;
