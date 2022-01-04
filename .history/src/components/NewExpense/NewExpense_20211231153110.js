import React from 'react';
import NewExpenseForm from './NewExpenseForm';
import './newExpense.css';

function NewExpense() {
    return (
        <div className='new-expense'>
            <NewExpenseForm/>
        </div>
    );
}

export default NewExpense;