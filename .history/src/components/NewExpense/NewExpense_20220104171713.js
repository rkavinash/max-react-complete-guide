import React from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';


const NewExpense = (props) => {
  let addnewExpense = false;

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
  };
  
  const addBtnClicked = () => {
    addnewExpense = !addnewExpense;
  }

  const addNewExpenseBtn = <button onClick={addBtnClicked}>Add New Expense</button>;
  return (
    <div className='new-expense'>
      {addNewExpenseBtn}
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
