import React from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';


const NewExpense = (props) => {
  let addnewExpenseFlag = false;

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
  };
  
  const addNewBtnClicked = () => {
    addnewExpenseFlag = !addnewExpenseFlag;
  }

  const addNewExpenseBtn = <button onClick={addNewBtnClicked}>Add New Expense</button>;
  return (
    <div className='new-expense'>
      {addNewExpenseBtn}
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
