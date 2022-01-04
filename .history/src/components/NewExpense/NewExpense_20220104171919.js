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
    console.log('add new btn clicked!!!');
    addnewExpenseFlag = !addnewExpenseFlag;
  }

  const addNewExpenseBtn = <button onClick={addNewBtnClicked}>Add New Expense</button>;
  return (
    <div className='new-expense'>
      {addnewExpenseFlag ? <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} /> : addNewExpenseBtn}
    </div>
  );
};

export default NewExpense;
