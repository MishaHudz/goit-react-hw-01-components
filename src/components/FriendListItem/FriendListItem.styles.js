import styled from 'styled-components';

export const Status = styled.span`
  display: inline-block;
  width: 20px;
  height: 20px;
  border-radius: 50%;

  ${({ isOnline }) =>
    isOnline ? `background-color: green;` : 'background-color: red;'}
`;

export const Name = styled.p`
  display: inline-block;
  font-weight: 700;
  margin: 0;
`;
