import styled from 'styled-components';

export const Table = styled.table`
  width: 500px;
  border: 1px solid black;
  border-radius: 20px;
  box-shadow: 10px 8px 5px #dcdcdc;
  overflow: hidden;
  background-color: lightblue;
  border-collapse: collapse;
`;

export const TableHead = styled.thead``;

export const TableBodyRow = styled.tr`
  background-color: white;

  &:nth-child(2n) {
    background-color: #f8f8f8;
  }
`;

export const TableHeadWindow = styled.th`
  padding: 10px;

  &:nth-child(2n) {
    background-color: #d6eaf2;
  }
`;

// export const TableBodyWindow = styled.th`
//   padding: 10px;

//   &:nth-child(2n) {
//     background-color: #d6eaf2;
//   }
// `;
