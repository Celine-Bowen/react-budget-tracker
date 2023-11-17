import React, { useState, useEffect } from 'react';
import './App.css';
import TransactionForm from './components/TransactionForm';
import TransactionList from './components/TransactionList';
import { addTransaction, deleteTransaction } from './constants/constant';

const App = () => {
  // State to manage transactions, balance, and whether the initial data has been loaded
  const [transactions, setTransactions] = useState([]);
  const [balance, setBalance] = useState(0);
  const [initialDataLoaded, setInitialDataLoaded] = useState(false);

  // useEffect to load transactions and balance from local storage on component mount
  useEffect(() => {
    // Retrieve transactions and balance from local storage or use empty arrays and 0 if not present
    const storedTransactions = JSON.parse(localStorage.getItem('transactions')) || [];
    const storedBalance = parseFloat(localStorage.getItem('balance')) || 0;

    // Set the state with the retrieved data
    setTransactions(storedTransactions);
    setBalance(storedBalance);

    // Set the flag to indicate that the initial data has been loaded
    setInitialDataLoaded(true);
  }, []);

  // useEffect to update local storage whenever transactions or balance change
  useEffect(() => {
    // Check if the initial data has been loaded before updating local storage
    if (initialDataLoaded) {
      localStorage.setItem('transactions', JSON.stringify(transactions));
      localStorage.setItem('balance', balance.toString());
    }
  }, [transactions, balance, initialDataLoaded]);

  return (
    <div className='app'>
      <h1>Budget Tracker App</h1>

      {/* TransactionForm component for adding new transactions */}
      <TransactionForm
        onAddTransaction={(newTransaction) => addTransaction(newTransaction, transactions, setTransactions, balance, setBalance)}
      />

      <div className="transaction-list">
        {/* Conditionally render TransactionList if the initial data has been loaded */}
        {initialDataLoaded && (
          <TransactionList
            transactions={transactions}
            onDeleteTransaction={(id) => deleteTransaction(id, transactions, setTransactions, balance, setBalance)}
          />
        )}
      </div>

      {/* Display the current balance */}
      <div>
        <h2>Balance: {balance}</h2>
      </div>
    </div>
  );
};

export default App;
