import React from 'react';
import styled from 'styled-components';
import Button from './Button';

const Submit = styled(Button)`
  margin-top: 15px;
`

const Form = ( props ) => (
  <form {...props}>
    {props.children}
    <Submit type='submit'>Calculate</Submit>
  </form>
)

export default Form;