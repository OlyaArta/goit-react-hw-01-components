import PropTypes from 'prop-types';
import st from './Statistics.module.css';
import random from '../helper/randomColor';

function Statistics({ title, stats }) {
  return (
    <section className={st.statistics}>
      {title && <h2 className={st.title}>{title}</h2>}

      <ul className={st.statisticsList}>
        {stats.map(({ id, label, percentage }) => {
          return (
            <li
              key={id}
              className={st.item}
              style={{ backgroundColor: random() }}
            >
              <span className={st.label}>{label}</span>
              <span className={st.percent}>{percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};

export default Statistics;
