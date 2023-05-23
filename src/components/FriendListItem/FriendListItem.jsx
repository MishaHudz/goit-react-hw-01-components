import PropTypes from 'prop-types';
import { Status, Name } from './FriendListItem.styles';

export function FriendListItem({ avatar, name, isOnline }) {
  return (
    <>
      <Status isOnline={isOnline}></Status>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <Name>{name}</Name>
    </>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
