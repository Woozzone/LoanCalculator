import React from 'react';
import styled from 'styled-components';

// Components
import Input from '../components/Input';
import Button from '../components/Button';
import Table from '../components/Table';
import Form from '../components/Form';


const Reset = styled(Button)`
  margin-top: 30px;
`

class LoanForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hasResult: false,
      results: {
        amortized: {
          paymentPerMonth: 0,
          paymentTotal: 0,
          paymentInterest: 0
        }
      },
      sourceData: {
        loanAmount: 0,
        loanTerm: 0,
        interestRate: 0
      }
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.setSourceData = this.setSourceData.bind(this);
    this.calculateAmortized = this.calculateAmortized.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    
    this.setState((state) => {
      return this.calculateAmortized(state);
    })
  }

  handleReset() {
    this.setState({
      results: {},
      hasResult: false
    })
  }

  setSourceData(e) {
    const target = e.target;

    this.setState((state) => ({
      sourceData: {
        ...state.sourceData,
        [target.name]: parseInt(target.value, 10)
      }
    }))
  }

  calculateAmortized(state) {
    const { loanAmount, loanTerm, interestRate } = state.sourceData;
    const i = interestRate / 1200;
    const n = loanTerm * 12;
    const k = (i * (1 + i)**n) / ((1 + i)**n - 1);

    const paymentPerMonth = parseFloat((loanAmount * k).toFixed(2));
    const paymentTotal = parseFloat((paymentPerMonth * loanTerm * 12).toFixed(2));
    const paymentInterest = parseFloat((paymentTotal - loanAmount).toFixed(2));

    return {
      hasResult: true,
      results: {
        amortized: {
          paymentPerMonth,
          paymentTotal,
          paymentInterest
        }
      }
    }
  }

  render() {
    if (this.state.hasResult) {
      return (
        <>
          <Table>
              <tr>
                <td>Payment per Month</td>
                <td>{this.state.results.amortized.paymentPerMonth} BYN</td>
              </tr>
              <tr>
                <td>Total Payment</td>
                <td>{this.state.results.amortized.paymentTotal} BYN</td>
              </tr>
              <tr>
                <td>Total Interest</td>
                <td>{this.state.results.amortized.paymentInterest} BYN</td>
              </tr>
          </Table>
          <Reset type="text" onClick={this.handleReset}>Reset</Reset>
        </>
      )
    }

    return (
      <Form onSubmit={this.handleSubmit}>
        <Input label='Loan Amount, BYN' name='loanAmount' onChange={this.setSourceData} />
        <Input label='Loan Term, Years' name='loanTerm' onChange={this.setSourceData} />
        <Input label='Interest Rate, %' name='interestRate' onChange={this.setSourceData} />
      </Form>
    )
  }
}

export default LoanForm;