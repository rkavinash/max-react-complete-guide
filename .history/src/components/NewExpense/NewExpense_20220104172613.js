import React, { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';


const NewExpense = (props) => {
  const [addnewExpenseFlag, setAddnewExpenseFlag] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
  };

  const toggleButtonState = () => {
    setAddnewExpenseFlag((prevState) => !prevState);
  }

  const addNewExpenseBtn = <button onClick={toggleButtonState}>Add New Expense</button>;
  return (
    <div className='new-expense'>
      {addnewExpenseFlag ? <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancelClicked={toggleButtonState}/> : addNewExpenseBtn}
    </div>
  );
};

export default NewExpense;
