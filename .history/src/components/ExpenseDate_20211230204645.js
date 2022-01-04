import React from 'react';
import './expense-date.css';

function ExpenseDate(props) {
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const expenseDate = props.date.getDate();
    const expenseMonth = props.date.getMonth() + 1;
    const expenseYear = props.date.getFullYear();
    const expenseDay = weekday[props.date.getDay()];

    return (<div className='expense-date'>
        <div className='expense-date__date'>{expenseDate}</div><div className='expense-date__month'>{expenseMonth}</div><div className='expense-date__year'>{expenseYear}</div>
        <div className='expense-date__day'>{expenseDay}</div>
        </div>
        );
}

export default ExpenseDate;