import React, { useState } from 'react';
import './newExpenseForm.css';

const NewExpenseForm = () => {

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmt, setEnteredAmt] = useState('');

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    }

    const amtChangeHandler = (event) => {
        setEnteredAmt(event.target.value);
    }

    return (
        <form>
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
                    <input type='date'/>
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    );
}

export default NewExpenseForm;