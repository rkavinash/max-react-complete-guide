import React from 'react';
import './expense-item.css'

function ExpenseItem(props) {
    return (
        <div className='expense-item'>
            <div>{props.date1}</div>
            
        </div>
    );
}

export default ExpenseItem;