import styled from 'styled-components';

export const ProfileCard = styled.div`
  padding: 8px;
  margin-top: 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 200px;
  height: min-content;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  margin: 10px;
  text-align: center;
`;

export const Avatar = styled.img`
  width: 50px;
  height: 50px;
`;

export const List = styled.ul`
  padding-left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
`;

export const Label = styled.span`
  font-size: small;
`;
export const Quantity = styled.span`
  font-weight: bold;
`;

export const ListItem = styled.li`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  width: 60px;
  height: 40px;
`;
