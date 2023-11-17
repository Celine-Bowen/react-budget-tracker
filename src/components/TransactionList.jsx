import React from 'react';

// Import the TransactionItem component to render individual transactions
import TransactionItem from './TransactionItem';

// Functional component TransactionList to display a list of transactions
const TransactionList = ({ transactions, onDeleteTransaction }) => {
  return (
    <div>
      {/* Use the map function to iterate over each transaction in the transactions array */}
      {transactions.map((transaction) => (
        // Render the TransactionItem component for each transaction with necessary props 
        <TransactionItem
          key={transaction.id}
          transaction={transaction}
          onDeleteTransaction={onDeleteTransaction}
        />
      ))}
    </div>
  );
};

export default TransactionList;
