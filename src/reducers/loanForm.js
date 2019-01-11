import * as types from '../constants/ActionTypes';

const initialState = {
  hasResult: false,
  result: {
    paymentPerMonth: 0,
    paymentTotal: 0,
    paymentInterest: 0
  },
  sourceData: {
    loanAmount: 0,
    loanTerm: 0,
    loanRate: 0
  }
};

const sourceData = (state = initialState.sourceData, action) => {
  switch (action.type) {
    case types.UPDATE_LOAN_TERM:
      return {
        ...state,
        loanTerm: action.term
      };
    case types.UPDATE_LOAN_AMOUNT:
      return {
        ...state,
        loanAmount: action.amount
      };
    case types.UPDATE_LOAN_RATE:
      return {
        ...state,
        loanRate: action.rate
      };
    case types.RESET_SOURCE:
      return initialState.sourceData;
    default:
      return state;
  }
};

const result = (state = initialState.result, action) => {
  switch (action.type) {
    case types.CALCULATE_RESULT:
      return action.result;
    case types.RESET_RESULT:
      return initialState.result;
    default:
      return state;
  }
};

const resultVisibility = (state = false, action) => {
  switch (action.type) {
    case types.SHOW_RESULT:
      return true;
    case types.HIDE_RESULT:
      return false;
    default:
      return state;
  }
};

export default (state = {}, action) => ({
  sourceData: sourceData(state.sourceData, action),
  result: result(state.result, action),
  hasResult: resultVisibility(state.hasResult, action)
});
