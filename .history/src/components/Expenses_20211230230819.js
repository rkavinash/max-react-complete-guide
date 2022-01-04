import React from 'react';
import ExpenseItem from './ExpenseItem';

function Expenses(props) {
    return (
        <div>
            <ExpenseItem title={props.expenseSet[0].title} amt={props.expenseSet[0].amount} date={props.expenseSet[0].date}> </ExpenseItem>
        </div>
    );

}

export default Expenses;