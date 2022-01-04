import React from 'react';
import Card from '../UI/Card';
import '../Expense/expense-item.css'
import ExpenseDate from '../Expense/ExpenseDate';

function ExpenseItem(props) {

    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date}></ExpenseDate>
            <div key={props.key} className='expense-item__description'>
                <h2>{props.title}</h2>
                <div className='expense-item__price'>{props.amt}</div>
            </div>
        </Card>
    );
}

export default ExpenseItem;