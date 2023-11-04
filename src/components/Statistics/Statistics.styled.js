import styled from 'styled-components';

export const DataBlock = styled.li`
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 50px;
  width: 50px;
  padding: 8px;
  border: 1px solid black;
  text-align: center;
  background-color: ${() => getRandomHexColor()};
`;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

export const Datalist = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  flex-direction: row;
`;

export const Title = styled.h2`
  display: flex;
  justify-content: center;
`;
