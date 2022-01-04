import React from 'react';
import '../Expense/expense-date.css';

function ExpenseDate(props) {
    console.log('props.fdate ====>', props.date.toLocaleString('en-US', {day: '2-digit'}));
    const expenseDate = props.date.toLocaleString('en-US', { day: '2-digit' });
    const expenseMonth = props.date.toLocaleString('en-US', { month: 'long' });
    // const expenseYear = props.date.getFullYear();
    const expenseYear = '2022';
    // const expenseDay = props.date.toLocaleString('en-US', { weekday: 'long' });

    return (<div className='expense-date'>
        <div className='expense-date__date'>{expenseDate}</div><div className='expense-date__month'>{expenseMonth}</div><div className='expense-date__year'>{expenseYear}</div>
        {/* <div className='expense-date__day'>{expenseDay}</div> */}
        </div>
        );
}

export default ExpenseDate;