import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpenseItem from '../Expense/ExpenseItem';
import '../Expense/expenses.css';
import ExpenseFilter from './ExpenseFilter';

function Expenses(props) {

    const [selectedYear, setSelectedyear] = useState('2022');

    const expenseFilterHandler = (year) => {
        console.log('parent expensefilter = ', year);
        setSelectedyear(year);
    }

    return (
        <Card className='expenses' selYear = {selectedYear}>
            <ExpenseFilter onExpenseFiltered={expenseFilterHandler}/>
        {props.expenseSet.map((e) => {
            return (
                <ExpenseItem id={e.id} title={e.title} amt={e.amount} date={e.date}> </ExpenseItem>
            );
        })}
        </Card>
    );

}

export default Expenses;