import { connect } from 'react-redux';
import React from 'react';

// Components
import Form from '../components/Form';
import Input from '../components/Input';

// Actions
import {
  updateResult,
  showResult,
  updateLoanAmount,
  updateLoanTerm,
  updateLoanRate
} from '../actions';

const LoanForm = ({
  onSubmit,
  updateAmount,
  updateTerm,
  updateRate,
  isShown,
  amount,
  term,
  rate
}) => (
  <Form
    onSubmit={onSubmit}
    isShown={isShown}
    isDisabled={!(amount && term && rate)}
  >
    <Input label="Loan Amount, $" name="loanAmount" onChange={updateAmount} />
    <Input label="Loan Term, Years" name="loanTerm" onChange={updateTerm} />
    <Input label="Interest Rate, %" name="loanRate" onChange={updateRate} />
  </Form>
);

const mapStateToProps = state => ({
  isShown: !state.loanForm.hasResult,
  amount: state.loanForm.sourceData.loanAmount,
  term: state.loanForm.sourceData.loanTerm,
  rate: state.loanForm.sourceData.loanRate
});

const mapDispatchToProps = dispatch => ({
  onSubmit: e => {
    e.preventDefault();

    dispatch(updateResult());
    dispatch(showResult());
  },

  updateAmount: e => {
    dispatch(updateLoanAmount(parseInt(e.target.value, 10)));
  },

  updateTerm: e => {
    dispatch(updateLoanTerm(parseInt(e.target.value, 10)));
  },

  updateRate: e => {
    dispatch(updateLoanRate(parseInt(e.target.value, 10)));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoanForm);
