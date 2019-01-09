import React from 'react';
import styled from 'styled-components';

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;

  td {
    font-weight: bold;
    color: ${(props) => props.theme.color.text};
    padding: 15px 0 10px;
    border-bottom: 1px solid ${(props) => props.theme.color.primary};

    &:last-child {
      text-align: right;
      color: ${(props) => props.theme.color.black};
    }
  }

  tr:first-child td {
    padding-top: 0;
  }
`

const Table = ( {children} ) => (
  <StyledTable>
    <tbody>
      {children}
    </tbody>
  </StyledTable>
)

export default Table;