import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

const Statistic = ({ title, stats }) => {
  const random256 = () => Math.round(Math.random() * 256);
  return (
    <section className={styles.statistics}>
      {title && <h2 className={styles.title}>{title}</h2>}
      <ul className={styles.statList}>
        {stats.map(({ id, label, percentage }) => {
          return (
            <li
              className={styles.item}
              key={id}
              style={{
                backgroundColor: `rgb(${random256()}, ${random256()}, ${random256()}`,
              }}
            >
              <span className={styles.label}>{label}</span>
              <span className={styles.percentage}>{percentage}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

Statistic.prototype = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
};

export default Statistic;
