import { combineReducers } from 'redux';

import insightsReducer from './insights';
import userReducer from './user';

const rootReducer = combineReducers({ insightsReducer, userReducer });

export default rootReducer;
