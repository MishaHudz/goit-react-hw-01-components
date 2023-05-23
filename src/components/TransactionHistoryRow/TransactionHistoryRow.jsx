import PropTypes from 'prop-types';
import { TableBodyWindow } from './TransactionHistoryRow.styles';
export function TransactionHistoryRow({ type, amount, currency }) {
  return (
    <>
      <TableBodyWindow>{type}</TableBodyWindow>
      <TableBodyWindow>{amount}</TableBodyWindow>
      <TableBodyWindow>{currency}</TableBodyWindow>
    </>
  );
}

TransactionHistoryRow.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
