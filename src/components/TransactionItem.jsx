import React from 'react';
import './TransactionItem.css';


// TransactionItem component for displaying an individual transaction
const TransactionItem = ({ transaction, onDeleteTransaction }) => {
  return (
    <div className="transaction-item">
      {/* Display the name of the transaction */}
      <span>{transaction.name}</span>

      {/* Display the amount of the transaction */}
      <span>{transaction.amount}</span>

      {/* Display the type of the transaction (income or expense) */}
      <span>{transaction.type}</span>

      {/* Button to trigger the onDeleteTransaction function with the transaction's ID */}
      <button onClick={() => onDeleteTransaction(transaction.id)}>Delete</button>
    </div>
  );
};

export default TransactionItem;
