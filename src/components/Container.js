import React from 'react';
import styled from 'styled-components';

const ContainerWrapper = styled.div`
  max-width: 1140px;
  width: 100%;
  margin: 0 auto;
`

const Container = ( { children } ) => (
  <ContainerWrapper>
    {children}
  </ContainerWrapper>
)

export default Container;