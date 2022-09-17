// import types
const {
  GET_INSIGHTS,
  LOAD_INSIGHTS,
  FAIL_INSIGHTS,
} = require('../constants/insights');

// initialstate
const initialState = {
  data: [],
  loading: false,
  error: '',
};

const insightsReducer = (state = initialState, { type, payload }: any) => {
  switch (type) {
    case LOAD_INSIGHTS:
      return { ...state, loading: true };
    case GET_INSIGHTS:
      return { ...state, data: payload, loading: false };
    case FAIL_INSIGHTS:
      return { ...state, error: payload };
    default:
      return state;
  }
};

export default insightsReducer;
