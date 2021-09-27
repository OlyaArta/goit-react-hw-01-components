import st from './Friend.module.css';
import PropTypes, { bool } from 'prop-types';

function FriendsList({ friends }) {
  return (
    <ul className={st.friendList}>
      {friends.map(({ id, avatar, name, isOnline }) => {
        return (
          <li className={st.item} key={id}>
            <span className={st.status} disabled={isOnline}></span>
            <img className={st.avatar} src={avatar} alt={name} width="48" />
            <p>{name}</p>
          </li>
        );
      })}
    </ul>
  );
}

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: bool.isRequired,
    }),
  ),
};

export default FriendsList;
