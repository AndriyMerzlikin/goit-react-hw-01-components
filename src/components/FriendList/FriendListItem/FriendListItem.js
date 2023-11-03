import { CircleStatus, ListItem } from '../FriendList.styled.js';

export const FriendListItem = ({ avatar, name, activity }) => (
  <ListItem>
    <CircleStatus isonline={activity}></CircleStatus>
    <img src={avatar} alt="User avatar" width="48" />
    <p>{name}</p>
  </ListItem>
);
