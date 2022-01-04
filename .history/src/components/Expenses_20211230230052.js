import React from 'react';
import ExpenseItem from './ExpenseItem';

function Expenses(props) {
    return (
        <ExpenseItem title={expenses[0].title} amt={expenses[0].amount} date={expenses[0].date}> </ExpenseItem>
    );
    
}