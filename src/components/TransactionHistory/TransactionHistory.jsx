import PropTypes from 'prop-types';
import { TransactionHistoryRow } from 'components/TransactionHistoryRow/TransactionHistoryRow';
import {
  Table,
  TableHead,
  TableBodyRow,
  TableHeadWindow,
} from './TransactionHistory.style';

export function TransactionHistory({ transactions }) {
  return (
    <Table>
      <TableHead>
        <tr>
          <TableHeadWindow>Type</TableHeadWindow>
          <TableHeadWindow>Amount</TableHeadWindow>
          <TableHeadWindow>Currency</TableHeadWindow>
        </tr>
      </TableHead>

      <tbody>
        {transactions.map(({ id, type, amount, currency }) => {
          return (
            <TableBodyRow key={id}>
              <TransactionHistoryRow
                type={type}
                amount={amount}
                currency={currency}
              />
            </TableBodyRow>
          );
        })}
      </tbody>
    </Table>
  );
}

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};
