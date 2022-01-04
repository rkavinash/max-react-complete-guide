import React from 'react';
import Card from '../UI/Card';
import ExpenseItem from '../Expense/ExpenseItem';
import '../Expense/expenses.css';
import ExpenseFilter from './ExpenseFilter';

function Expenses(props) {
    return (
        <Card className='expenses'>
            <ExpenseFilter/>
            <ExpenseItem title={props.expenseSet[0].title} amt={props.expenseSet[0].amount} date={props.expenseSet[0].date}> </ExpenseItem>
            <ExpenseItem title={props.expenseSet[1].title} amt={props.expenseSet[1].amount} date={props.expenseSet[1].date}> </ExpenseItem>
            <ExpenseItem title={props.expenseSet[2].title} amt={props.expenseSet[2].amount} date={props.expenseSet[2].date}> </ExpenseItem>
            <ExpenseItem title={props.expenseSet[3].title} amt={props.expenseSet[3].amount} date={props.expenseSet[3].date}> </ExpenseItem>
        </Card>
    );

}

export default Expenses;