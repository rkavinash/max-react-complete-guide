import React, { useState } from 'react';
import './newExpenseForm.css';

const NewExpenseForm = () => {

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmt, setEnteredAmt] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    const [userInput, setUserInput] = useState({
        enteredTitle: '',
        enteredAmt: '',
        enteredDate: ''
    });

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);

        setUserInput({...userInput, enteredTitle:event.target.value});
    }

    const amtChangeHandler = (event) => {
        setEnteredAmt(event.target.value);

        setUserInput({...userInput, enteredAmt:event.target.value});
    }

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);

        setUserInput({...userInput, enteredDate:event.target.value});
    }

    const submitHandler = (event) => {
        event.preventDefault();
        const enteredExpense = {
            title: enteredTitle,
            amount: enteredAmt,
            date: enteredDate
        };

        setEnteredTitle('');
        setEnteredDate('');
        setEnteredAmt('');
        console.log('entered expense = ', enteredExpense);
    }

    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' onChange={titleChangeHandler} value={enteredTitle}/>
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' onChange={amtChangeHandler} value={enteredAmt}/>
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' onChange={dateChangeHandler} value={enteredDate}/>
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    );
}

export default NewExpenseForm;