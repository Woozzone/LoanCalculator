import React from 'react';
import styled from 'styled-components';

const StyledLabel = styled.label`
  display: block;
  font-weight: bold;
  color: ${ (props) => props.theme.color.text };
`

const Label = ( {children, htmlFor} ) => (
  <StyledLabel htmlFor={htmlFor}>
    {children}
  </StyledLabel>
)

export default Label;