import styled from 'styled-components';

export const MainTable = styled.table`
  width: min-content;
  th,
  td {
    padding: 8px;
    text-align: left;
  }
  th {
    background-color: orange;
  }
  tr:nth-child(even) {
    background-color: lightgrey;
  }
  tr:hover {
    background-color: black;
    color: white;
  }
`;
