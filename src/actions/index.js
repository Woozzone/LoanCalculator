import * as types from '../constants/ActionTypes';

export const updateLoanTerm = term => ({
  type: types.UPDATE_LOAN_TERM,
  term
});

export const updateLoanAmount = amount => ({
  type: types.UPDATE_LOAN_AMOUNT,
  amount
});

export const updateLoanRate = rate => ({
  type: types.UPDATE_LOAN_RATE,
  rate
});

const calculateResult = sourceData => {
  const { loanAmount, loanTerm, loanRate } = sourceData;
  const i = loanRate / 1200;
  const n = loanTerm * 12;
  const k = (i * (1 + i) ** n) / ((1 + i) ** n - 1);

  const paymentPerMonth = parseFloat((loanAmount * k).toFixed(2));
  const paymentTotal = parseFloat((paymentPerMonth * loanTerm * 12).toFixed(2));
  const paymentInterest = parseFloat((paymentTotal - loanAmount).toFixed(2));

  return {
    type: types.CALCULATE_RESULT,
    result: {
      paymentPerMonth,
      paymentTotal,
      paymentInterest
    }
  };
};

export const updateResult = () => {
  return (dispatch, getState) => {
    const sourceData = getState().loanForm.sourceData;
    dispatch(calculateResult(sourceData));
  };
};

export const showResult = () => ({
  type: types.SHOW_RESULT,
  hasResult: true
});

export const hideResult = () => ({
  type: types.HIDE_RESULT,
  hasResult: false
});

export const resetResult = () => ({
  type: types.RESET_RESULT
});

export const resetSource = () => ({
  type: types.RESET_SOURCE
})
