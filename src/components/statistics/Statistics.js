import PropTypes from 'prop-types';
import st from './Statistics.module.css';

function Statistics({ title = 'Upload stats', stats }) {
  return (
    <section className={st.statistics}>
      {title && <h2 className={st.title}>{title}</h2>}

      <ul className={st.statisticsList}>
        {stats.map(stat => (
          <li
            key={stat.id}
            className={st.item}
            style={{ backgroundColor: randomColor() }}
          >
            <span className={st.label}>{stat.label}</span>
            <span className={st.percent}>{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

function randomColor(color) {
  color =
    'rgb(' +
    Math.round(Math.random() * 255) +
    ',' +
    Math.round(Math.random() * 255) +
    ',' +
    Math.round(Math.random() * 255) +
    ')';

  return color;
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
