import { StatisticsElem } from 'components/StatisticsElem/StatisticsElem';
import PropTypes from 'prop-types';

export function Statistics({ stats, title }) {
  return (
    <section className="statistics">
      {title && <h2 className="title">{title}</h2>}
      <ul className="stat-list">
        {stats.map(statisticElem => (
          <li className="item" key={statisticElem.id}>
            <StatisticsElem
              percentage={statisticElem.percentage}
              label={statisticElem.label}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.object),
};
