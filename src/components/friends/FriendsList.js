import PropTypes from 'prop-types';
import st from './Friend.module.css';

function FriendsList({ children }) {
  return <ul className={st.friendList}>{children}</ul>;
}

FriendsList.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FriendsList;
