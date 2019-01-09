import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  background: #ffffff;
  border-radius: 3px;
  width: 30%;
  margin: 0 auto;
  padding: 60px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
  border-top: 3px solid ${ (props) => props.theme.color.primary };
`

const Title = styled.h2`
  font-size: ${ (props) => props.theme.fontSize.heading };
  color: ${ (props) => props.theme.color.black };
  margin: 0 0 30px;
`

const Card = ( {children, title} ) => {
  title = title ? <Title>{title}</Title> : null;

  return (
    <Wrapper>
      {title}
      {children}
    </Wrapper>
  )
}

export default Card;