import { List } from './FriendList.styled';
import { FriendListItem } from './FriendListItem/FriendListItem';

export const FriendList = ({ friends }) => {
  return (
    <List>
      {friends.map(friend => {
        return (
          <FriendListItem
            key={friend.id}
            activity={friend.isOnline}
            avatar={friend.avatar}
            name={friend.name}
          />
        );
      })}
    </List>
  );
};
