import { Dispatch } from 'react';

import {
  FAIL_PERFORMANCE,
  GET_PERFORMANCE,
  LOAD_PERFORMANCE,
} from '../constants/performance';

import performance from '../../data/performance.json';

import { PerformanceType } from '../../interfaces';

interface PerformanceLoadType {
  type: typeof LOAD_PERFORMANCE;
}

interface PerformanceErrorType {
  type: typeof FAIL_PERFORMANCE;
  payload: string;
}

interface GetPerformanceType {
  type: typeof GET_PERFORMANCE;
  payload: PerformanceType[];
}

export type PerformanceDispatchTypes =
  | PerformanceLoadType
  | PerformanceErrorType
  | GetPerformanceType;

export const getPerformances =
  () => (dispatch: Dispatch<PerformanceDispatchTypes>) => {
    dispatch({ type: LOAD_PERFORMANCE });
    try {
      dispatch({ type: GET_PERFORMANCE, payload: performance });
    } catch (error: any) {
      dispatch({ type: FAIL_PERFORMANCE, payload: 'Error Occured!' });
    }
  };
