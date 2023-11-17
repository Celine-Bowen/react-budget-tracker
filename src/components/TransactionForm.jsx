import React, { useState } from 'react';
import './TransactionForm.css';

// TransactionForm component for adding new transactions
const TransactionForm = ({ onAddTransaction }) => {
  // State variables for form inputs
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [type, setType] = useState('income');
  const [amountError, setAmountError] = useState('');

  // Function to handle adding a new transaction
  const handleAddTransaction = () => {
    // Validate inputs: Check if name, amount, and amount as a number
    if (name && amount && !isNaN(amount)) {
      // Call the onAddTransaction function passed as a prop with the new transaction object
      onAddTransaction({ name, amount: parseFloat(amount), type });

      // Reset form inputs after successfully adding a transaction
      setName('');
      setAmount('');
      setAmountError(''); 

    } else {
      setAmountError('Please enter a valid number for the amount');
    }
  };

  // JSX for the TransactionForm component
  return (
    <div className="transaction-form">
      {/* Input field for transaction name */}
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>

      {/* Input field for transaction amount */}
      <label className="input-container">
        Amount:
        <input type="text" value={amount} onChange={(e) => setAmount(e.target.value)} />
         {/* Display the amount error message if there is one */}
        {amountError && <p className="error">{amountError}</p>}
      </label>

      {/* Dropdown for transaction type (income or expense) */}
      <label>
        Type:
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
      </label>

      {/* Button to trigger the handleAddTransaction function */}
      <button onClick={handleAddTransaction}>Add Transaction</button>
    </div>
  );
};

export default TransactionForm;
