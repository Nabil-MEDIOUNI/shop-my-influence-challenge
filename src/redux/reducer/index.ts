import { combineReducers } from 'redux';

import insightsReducer from './insights';
import userReducer from './user';
import salesReducer from './sales';

const rootReducer = combineReducers({
  insightsReducer,
  userReducer,
  salesReducer,
});

export default rootReducer;
