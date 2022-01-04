import React from 'react';

function ExpenseItem() {
    return (
        <div className='expense-item'>
            <div>March 28th, 2021</div>
            <div className='expense-item__description'>
                <h2>Car Insurance</h2>
                <div className='expense_item__price'>124.5</div>
            </div>
        </div>
    );
}

export default ExpenseItem;