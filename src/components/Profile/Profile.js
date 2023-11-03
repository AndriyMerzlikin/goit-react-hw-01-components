import {
  Avatar,
  Label,
  List,
  ListItem,
  ProfileCard,
  Quantity,
} from './Profile.styled.js';

export const Profile = ({
  userData: { avatar, username, tag, location, stats },
}) => {
  return (
    <ProfileCard>
      <div>
        <Avatar src={avatar} alt={username} />
        <p>{username}</p>
        <p>@{tag}</p>
        <p>{location}</p>
      </div>

      <List>
        <ListItem>
          <Label>Followers</Label>
          <Quantity>{stats.followers}</Quantity>
        </ListItem>
        <ListItem>
          <Label>Views</Label>
          <Quantity>{stats.views}</Quantity>
        </ListItem>
        <ListItem>
          <Label>Likes</Label>
          <Quantity>{stats.likes}</Quantity>
        </ListItem>
      </List>
    </ProfileCard>
  );
};
