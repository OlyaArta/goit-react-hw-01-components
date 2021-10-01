import PropTypes, { bool } from 'prop-types';
import st from './Friend.module.css';

function FriendListItem({ avatar, name, isOnline }) {
  return (
    <li className={st.item}>
      <span className={isOnline ? st.online : st.offline}></span>
      <img className={st.avatar} src={avatar} alt={name} width="48" />
      <p className={st.name}>{name}</p>
    </li>
  );
}
FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: bool.isRequired,
};

export default FriendListItem;
