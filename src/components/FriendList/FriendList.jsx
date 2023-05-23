import PropTypes from 'prop-types';
import { FriendListItem } from 'components/FriendListItem/FriendListItem';
import { Item, List } from './FriendList.styles';

export function FriendList({ friends }) {
  return (
    <List>
      {' '}
      {friends.map(friend => {
        return (
          <Item key={friend.id}>
            <FriendListItem
              avatar={friend.avatar}
              name={friend.name}
              isOnline={friend.isOnline}
            />{' '}
          </Item>
        );
      })}
    </List>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object).isRequired,
};
