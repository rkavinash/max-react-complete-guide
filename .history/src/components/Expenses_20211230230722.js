import React from 'react';
import ExpenseItem from './ExpenseItem';

function Expenses(props) {
    return (
        <div>
            <ExpenseItem title={props.expenseSet[0].title} amt={props.expenseSet[0].amount} date={props.expenseSet[0].date}> </ExpenseItem>
            <ExpenseItem title={props.expenseSet[1].title} amt={props.expenseSet[1].amount} date={props.expenseSet[1].date}> </ExpenseItem>
            <ExpenseItem title={props.expenseSet[2].title} amt={props.expenseSet[2].amount} date={props.expenseSet[2].date}> </ExpenseItem>
            <ExpenseItem title={props.expenseSet[3].title} amt={props.expenseSet[3].amount} date={props.expenseSet[3].date}> </ExpenseItem>
        </div>
    );

}

export default Expenses;