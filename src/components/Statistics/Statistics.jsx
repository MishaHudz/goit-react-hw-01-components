import PropTypes from 'prop-types';
import { getRandomHexColor } from 'Helpers/randomColorGenerator';
import { StatisticsElem } from 'components/StatisticsElem/StatisticsElem';
import {
  Item,
  ItemList,
  StatisticSection,
  StatisticTitel,
} from './Statistics.style';
export function Statistics({ stats, title }) {
  return (
    <StatisticSection>
      {title && <StatisticTitel>{title}</StatisticTitel>}
      <ItemList>
        {' '}
        {stats.map(statisticElem => (
          <Item
            style={{ backgroundColor: `${getRandomHexColor()}` }}
            key={statisticElem.id}
          >
            {' '}
            <StatisticsElem
              percentage={statisticElem.percentage}
              label={statisticElem.label}
            />
          </Item>
        ))}
      </ItemList>
    </StatisticSection>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.object),
};
