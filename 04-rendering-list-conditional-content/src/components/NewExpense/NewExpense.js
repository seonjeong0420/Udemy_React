import React, { useState } from 'react'
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

function NewExpense(props) {
  const [isNewExpense, setIsNewExpense] = useState(false);

  const newExpenseHandler = () => {
    setIsNewExpense(true);
  }
  const cancelExpenseHandler = () => {
    setIsNewExpense(false);
  }

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    }
    props.onAddExpenseData(expenseData);
  }

  return (
    <div className="new-expense">
      {isNewExpense ? (
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={cancelExpenseHandler} />
      ) : (
        <button onClick={newExpenseHandler}>Add New Expense</button>
      )}
    </div>
  )
}

export default NewExpense;