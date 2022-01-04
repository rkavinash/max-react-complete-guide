import React from 'react';
import './newExpenseForm.css';

const NewExpenseForm = () => {

    const titleChangeHandler = (event) {
        console.log('title entereed', event.target.value);
    }

    return (
        <form>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' onChange={titleChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number'/>
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