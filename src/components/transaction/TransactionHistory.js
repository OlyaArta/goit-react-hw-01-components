import PropTypes from 'prop-types';
import st from './TransactionHistory.module.css';

function TransactionHistory({ items }) {
  return (
    <table className={st.transaction}>
      <thead>
        <tr>
          <th className={st.title}>Type</th>
          <th className={st.title}>Amount</th>
          <th className={st.title}>Currency</th>
        </tr>
      </thead>

      <tbody className={st.box}>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <tr key={id}>
              <td className={st.item}>{type}</td>
              <td className={st.item}>{amount}</td>
              <td className={st.item}>{currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  ),
};

export default TransactionHistory;
