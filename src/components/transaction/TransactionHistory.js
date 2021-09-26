import PropTypes from 'prop-types';
import st from './TransactionHistory.module.css';

function TransactionHistory({ items }) {
  return (
    <table className={st.transactionHistory}>
      <thead>
        <tr>
          <th className={st.title}>Type</th>
          <th className={st.title}>Amount</th>
          <th className={st.title}>Currency</th>
        </tr>
      </thead>

      <tbody className={st.box}>
        {items.map(item => (
          <tr key={item.id}>
            <td className={st.item}>{item.type}</td>
            <td className={st.item}>{item.amount}</td>
            <td className={st.item}>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  }),
};

export default TransactionHistory;
