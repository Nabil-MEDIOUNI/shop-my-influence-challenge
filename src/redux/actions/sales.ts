import { Dispatch } from 'react';

import { FAIL_SALES, GET_SALES, LOAD_SALES } from '../constants/sales';

import sales from '../../data/sales.json';
import { SaleType } from '../../interfaces';

interface SaleLoadType {
  type: typeof LOAD_SALES;
}

interface SaleErrorType {
  type: typeof FAIL_SALES;
  payload: string;
}

interface GetSaleType {
  type: typeof GET_SALES;
  payload: SaleType[];
}

export type SaleDispatchTypes = SaleLoadType | SaleErrorType | GetSaleType;

export const getSales = () => (dispatch: Dispatch<SaleDispatchTypes>) => {
  dispatch({ type: LOAD_SALES });
  try {
    dispatch({ type: GET_SALES, payload: sales });
  } catch (error: any) {
    dispatch({ type: FAIL_SALES, payload: 'Error Occured!' });
  }
};
