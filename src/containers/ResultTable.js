import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { resetResult, hideResult, resetSource } from '../actions';
import Button from '../components/Button';
import Table from '../components/Table';

const Reset = styled(Button)`
  margin-top: 30px;
`;

const ResultTable = ({
  hasResult,
  paymentPerMonth,
  paymentTotal,
  paymentInterest,
  onReset
}) =>
  hasResult && (
    <>
      <Table>
        <tr>
          <td>Payment per Month</td>
          <td>{paymentPerMonth} $</td>
        </tr>
        <tr>
          <td>Total Payment</td>
          <td>{paymentTotal} $</td>
        </tr>
        <tr>
          <td>Total Interest</td>
          <td>{paymentInterest} $</td>
        </tr>
      </Table>
      <Reset type="text" onClick={onReset}>
        Reset
      </Reset>
    </>
  );

const mapStateToProps = state => ({
  ...state.loanForm.result,
  hasResult: state.loanForm.hasResult
});

const mapDispatchToProps = dispatch => ({
  onReset: () => {
    dispatch(resetResult());
    dispatch(hideResult());
    dispatch(resetSource());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ResultTable);
