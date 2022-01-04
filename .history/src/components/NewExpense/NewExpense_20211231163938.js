import React from 'react';
import NewExpenseForm from './NewExpenseForm';
import './newExpense.css';

function NewExpense() {
    const enteredExpenseHandler = (expense) => {
        console.log('expense passed from form = ', expense)
    }

    return (
        <div className='new-expense'>
            <NewExpenseForm onExpenseEntered={enteredExpenseHandler}/>
        </div>
    );
}

export default NewExpense;