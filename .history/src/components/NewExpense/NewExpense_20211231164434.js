import React from 'react';
import NewExpenseForm from './NewExpenseForm';
import './newExpense.css';

function NewExpense(props) {
    const enteredExpenseHandler = (expense) => {
        console.log('expense passed from form = ', expense);
        const expenseData = {...expense, id: Math.random().toString()};
        console.log('expenseData id added passed from form = ', expenseData);
        props.onNewExpenseAdd(expenseData);
    }

    return (
        <div className='new-expense'>
            <NewExpenseForm onExpenseEntered={enteredExpenseHandler}/>
        </div>
    );
}

export default NewExpense;