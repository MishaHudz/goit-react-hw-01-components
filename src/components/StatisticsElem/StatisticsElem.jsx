import PropTypes from 'prop-types';
export function StatisticsElem({ label, percentage }) {
  return (
    <>
      <span className="label">{label}</span>
      <span className="percentage"> {percentage}%</span>
    </>
  );
}

StatisticsElem.propTypes = {
  label: PropTypes.string,
  percentage: PropTypes.number,
};
