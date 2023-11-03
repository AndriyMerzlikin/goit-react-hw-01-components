import styled from 'styled-components';

export const CircleStatus = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${props => (props.isonline === true ? 'green' : 'red')};
  display: inline-block;
  margin-right: 10px;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
`;

export const ListItem = styled.li`
  display: flex;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  align-items: center;
  margin-right: 20px;
`;
