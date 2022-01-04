import React from 'react';
import ExpenseItem from './ExpenseItem';

function Expenses(props) {
    return (
        <div>
            <ExpenseItem title={props.expenses[0].title} amt={props.expenses[0].amount} date={props.expenses[0].date}> </ExpenseItem>
            <ExpenseItem title={props.expenses[1].title} amt={props.expenses[1].amount} date={props.expenses[1].date}> </ExpenseItem>
            <ExpenseItem title={props.expenses[2].title} amt={props.expenses[2].amount} date={props.expenses[2].date}> </ExpenseItem>
            <ExpenseItem title={props.expenses[3].title} amt={props.expenses[3].amount} date={props.expenses[3].date}> </ExpenseItem>
        </div>
    );

}

export default Expenses;