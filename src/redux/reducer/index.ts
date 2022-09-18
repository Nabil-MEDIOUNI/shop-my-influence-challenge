import { combineReducers } from 'redux';

import userReducer from './user';
import performanceReducer from './performance';
import insightsReducer from './insights';
import salesReducer from './sales';

const rootReducer = combineReducers({
  userReducer,
  performanceReducer,
  insightsReducer,
  salesReducer,
});

export default rootReducer;
