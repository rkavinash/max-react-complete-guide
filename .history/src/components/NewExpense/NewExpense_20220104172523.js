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

  const addNewBtnClicked = () => {
    setAddnewExpenseFlag((prevState) => !prevState);
  }

  const addNewExpenseBtn = <button onClick={addNewBtnClicked}>Add New Expense</button>;
  return (
    <div className='new-expense'>
      {addnewExpenseFlag ? <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancelClicked={addNewBtnClicked}/> : addNewExpenseBtn}
    </div>
  );
};

export default NewExpense;
