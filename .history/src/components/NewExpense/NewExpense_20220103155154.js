import React from 'react';
import NewExpenseForm from './NewExpenseForm';
import './newExpense.css';

function NewExpense(props) {
    const enteredExpenseHandler = (expense) => {
        const expenseData = {...expense, id: Math.random().toString()};
        props.onNewExpenseAdd(expenseData);
    }

    return (
        <div className='new-expense'>
            <NewExpenseForm onExpenseEntered={enteredExpenseHandler}/>
        </div>
    );
}

export default NewExpense;