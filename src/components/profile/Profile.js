import PropTypes from 'prop-types';
import st from './Profile.module.css';

function Profile({ name, tag, location, avatar, stats }) {
  return (
    <div className={st.container}>
      <div className={st.profile}>
        <div className={st.description}>
          <img src={avatar} alt={name} className={st.avatar} />
          <p className={st.name}>{name}</p>
          <p className={st.tag}>@{tag}</p>
          <p className={st.location}>{location}</p>
        </div>

        <ul className={st.stats}>
          <li className={st.popular}>
            <span className={st.label}>Followers </span>
            <span className={st.quantity}>{stats.followers}</span>
          </li>
          <li className={st.popular}>
            <span className={st.label}>Views </span>
            <span className={st.quantity}>{stats.views}</span>
          </li>
          <li className={st.popular}>
            <span className={st.label}>Likes </span>
            <span className={st.quantity}>{stats.likes}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number).isRequired,
};

export default Profile;
