import React from 'react';
import './expense-item.css'

function ExpenseItem(props) {
    return (
        <div className='expense-item'>
            <div>{props.date1.toString()}</div>
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <div className='expense-item__price'>{props.amt}</div>
            </div>
        </div>
    );
}

export default ExpenseItem;