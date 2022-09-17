import { combineReducers } from 'redux';

import insightsReducer from './insights';

const rootReducer = combineReducers({ insightsReducer });

export default rootReducer;
