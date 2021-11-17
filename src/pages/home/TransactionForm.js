import { useState } from 'react';

function TransactionForm() {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleAmount = (e) => {
    setAmount(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({ name, amount });
  };

  return (
    <>
      <h3>Add a Transaction</h3>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Transaction name:</span>
          <input type="text" required onChange={handleName} value={name} />
        </label>
        <label>
          <span>Amount (€):</span>
          <input type="text" required onChange={handleAmount} value={amount} />
        </label>
        <button>Add Transaction</button>
      </form>
    </>
  );
}

export default TransactionForm;
