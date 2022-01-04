import React from 'react';
import NewExpenseForm from './NewExpenseForm';
import './newExpense.css';

function NewExpense() {
    const enteredExpenseHandler = (expense) => {
        console.log('expense passed = ', expense)
    }

    return (
        <div className='new-expense'>
            <NewExpenseForm onExpenseEntered={enteredExpenseHandler}/>
        </div>
    );
}

export default NewExpense;