import styled from 'styled-components';

export const StatisticSection = styled.section`
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f8f8f8;
  margin-bottom: 20px;

  overflow: hidden;
  &:last-child {
    margin-bottom: 0px;
  }
`;

export const StatisticTitel = styled.h2`
  padding: 40px;
`;

export const Item = styled.li`
  width: 100px;
  display: flex;

  flex-direction: column;
  align-items: center;
  row-gap: 10px;
  padding: 10px;
  text-shadow: 2px 2px 2px #f8f8f8, 0 0 1em white, 0 0 0.2em white;
`;

export const ItemList = styled.ul`
  width: 400px;
  display: flex;
  align-items: center;
`;
