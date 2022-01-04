import React from 'react';
import './expense-item.css'

function ExpenseItem(props) {
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const expenseDate = props.date.getDate();
    const expenseDay = weekday[props.date.getDay()];

    return (
        <div className='expense-item'>
            <div>{expenseDate}</div><div>{expenseDay}</div>
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <div className='expense-item__price'>{props.amt}</div>
            </div>
        </div>
    );
}

export default ExpenseItem;