import React from 'react';
import styled from 'styled-components';
import Button from './Button';

const Submit = styled(Button)`
  margin-top: 15px;
`

const Form = ( { onSubmit, children, isShown, isDisabled } ) => isShown && (
  <form onSubmit={onSubmit}>
    {children}
    <Submit type='submit' disabled={isDisabled}>Calculate</Submit>
  </form>
)

export default Form;