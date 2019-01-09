import React from 'react';
import styled from 'styled-components';
import Label from './Label';


const StyledInput = styled.input`
  box-sizing: border-box;
  border-radius: 5px;
  border: 1px solid ${ (props) => props.theme.color.text };
  padding: 0.5rem 1rem;
  margin: 0.25rem 0 1rem;
  width: 100%;
  font-weight: bold;
  color: ${ (props) => props.theme.color.heading };

  &:focus {
    outline: none;
    border-color: ${ (props) => props.theme.color.primary }
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`

const Input = ( {label, onChange, value, name} ) => (
  <>
    <Label htmlFor={name}>{label}</Label>
    <StyledInput type="number" onChange={onChange} value={value} name={name} id={name} />
  </>
)

export default Input;