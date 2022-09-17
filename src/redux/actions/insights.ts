import { Dispatch } from 'react';

import {
  FAIL_INSIGHTS,
  GET_INSIGHTS,
  LOAD_INSIGHTS,
} from '../constants/insights';

import insights from '../../data/insights.json';
import { InsightType } from '../../interfaces';

interface InsightLoadType {
  type: typeof LOAD_INSIGHTS;
}

interface InsightErrorType {
  type: typeof FAIL_INSIGHTS;
  payload: string;
}

interface GetInsightType {
  type: typeof GET_INSIGHTS;
  payload: InsightType[];
}

export type InsightDispatchTypes =
  | InsightLoadType
  | InsightErrorType
  | GetInsightType;

export const getInsights = () => (dispatch: Dispatch<InsightDispatchTypes>) => {
  dispatch({ type: LOAD_INSIGHTS });
  try {
    dispatch({ type: GET_INSIGHTS, payload: insights });
  } catch (error: any) {
    dispatch({ type: FAIL_INSIGHTS, payload: 'Error Occured!' });
  }
};
