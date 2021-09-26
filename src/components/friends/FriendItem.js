import PropTypes from 'prop-types';
import st from './Friend.module.css';

function FriendItem({ avatar, name, isOnline }) {
  return (
    <li className={st.item}>
      <span
        style={{ backgroundColor: isOnline ? 'green' : 'red' }}
        className={st.status}
      ></span>
      <img className={st.avatar} src={avatar} alt={name} width="48" />
      <p className={st.name}>{name}</p>
    </li>
  );
}

FriendItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool,
};

export default FriendItem;
