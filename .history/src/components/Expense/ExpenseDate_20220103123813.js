import React from 'react';
import '../Expense/expense-date.css';

function ExpenseDate(props) {
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const expenseDate = props.date.toLocaleString('en-US', { day: '2-digit' });
    const expenseMonth = props.date.toLocaleString('en-US', { month: 'long' });
    const expenseYear = props.date.toLocaleString('en-US', { year: 'numeric' });
    const expenseDay = weekday[props.date.toLocaleString('en-US', { day: 'long' })];

    return (<div className='expense-date'>
        <div className='expense-date__date'>{expenseDate}</div><div className='expense-date__month'>{expenseMonth}</div><div className='expense-date__year'>{expenseYear}</div>
        <div className='expense-date__day'>{expenseDay}</div>
        </div>
        );
}

export default ExpenseDate;