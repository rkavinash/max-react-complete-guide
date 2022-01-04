import React from 'react';
import './expense-date.css';

function ExpenseDate(props) {
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const expenseDate = props.date.getDate();
    const expenseMonth = props.date.getMonth() + 1;
    const expenseYear = props.date.getFullYear();
    const expenseDay = weekday[props.date.getDay()];

    return (<div>
        <div>{expenseDate}</div><div>{expenseMonth}</div><div>{expenseYear}</div>
        <div>{expenseDay}</div>
        </div>
        );
}

export default ExpenseDate;