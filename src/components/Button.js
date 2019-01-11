import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  font-weight: bold;
  padding: 15px 65px;
  background-color: ${(props) => props.theme.color.primary};
  color: ${(props) => props.theme.color.white};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  letter-spacing: 0.03em;
  transition: background-color 0.2s ease;
  opacity: ${(props) => props.disabled ? 0.5 : 1};
  pointer-events: ${(props) => props.disabled ? 'none' : 'auto'};

  &:hover,
  &:focus {
    background-color: ${(props) => props.theme.color.hoverPrimary};
  }

  &:focus {
    outline: none;
  }
`

const Button = (props) => (
  <StyledButton {...props}>
    {props.children}
  </StyledButton>
)

export default Button;