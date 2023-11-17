// Function to add a new transaction
export const addTransaction = (newTransaction, transactions, setTransactions, balance, setBalance) => {
  // Generate a unique ID for the new transaction
  newTransaction.id = Date.now().toString();

  // Update transactions state by adding the new transaction
  setTransactions([...transactions, newTransaction]);

  // Update the balance based on the new transaction
  updateBalance(newTransaction, balance, setBalance);
};

// Function to delete a transaction by ID
export const deleteTransaction = (id, transactions, setTransactions, balance, setBalance) => {
  // Find the index of the transaction to be deleted
  const transactionIndex = transactions.findIndex((transaction) => transaction.id === id);

  // Check if the transaction with the given ID was found
  if (transactionIndex !== -1) {
    // Get the deleted transaction
    const deletedTransaction = transactions[transactionIndex];

    // Update transactions state by excluding the deleted transaction
    const updatedTransactions = [
      ...transactions.slice(0, transactionIndex),
      ...transactions.slice(transactionIndex + 1),
    ];
    setTransactions(updatedTransactions);

    // Update the balance by subtracting the amount of the deleted transaction
    updateBalance(deletedTransaction, balance, setBalance, true);
  }
};

// Function to update the balance based on a transaction
export const updateBalance = (transaction, balance, setBalance, isDelete = false) => {
  // Determine the amount of the transaction based on its type (income or expense)
  const transactionAmount = transaction.type === 'income' ? transaction.amount : -transaction.amount;

  // Calculate the new balance based on whether it's a deletion or addition
  const newBalance = isDelete ? balance - transactionAmount : balance + transactionAmount;

  // Update the balance state
  setBalance(newBalance);
};
